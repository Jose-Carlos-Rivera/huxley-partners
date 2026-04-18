"use client";

import React, { useEffect, useRef } from "react";
import * as THREE from "three";

interface Office {
  id: string;
  city: string;
  cityEn: string;
  country: string;
  countryEn: string;
  lat: number;
  lng: number;
  hq: boolean;
}

const OFFICES: Office[] = [
  { id: "cdmx",      city: "Ciudad de México", cityEn: "Mexico City", country: "México",    countryEn: "Mexico",    lat: 19.4326,  lng: -99.1332,  hq: true  },
  { id: "monterrey", city: "Monterrey",         cityEn: "Monterrey",  country: "México",    countryEn: "Mexico",    lat: 25.6866,  lng: -100.3161, hq: false },
  { id: "madrid",    city: "Madrid",            cityEn: "Madrid",     country: "España",    countryEn: "Spain",     lat: 40.4168,  lng: -3.7038,   hq: false },
  { id: "praga",     city: "Praga",             cityEn: "Prague",     country: "Chequia",   countryEn: "Czechia",   lat: 50.0755,  lng: 14.4378,   hq: false },
  { id: "melbourne", city: "Melbourne",         cityEn: "Melbourne",  country: "Australia", countryEn: "Australia", lat: -37.8136, lng: 144.9631,  hq: false },
];

interface Props {
  lang?: "es" | "en";
}

export default function GlobeMap({ lang = "es" }: Props) {
  const canvasWrapRef = useRef<HTMLDivElement>(null);
  const officesListRef = useRef<HTMLDivElement>(null);
  const tooltipRef = useRef<HTMLDivElement>(null);
  const tipCityRef = useRef<HTMLDivElement>(null);
  const tipCountryRef = useRef<HTMLDivElement>(null);
  const coordsRef = useRef<HTMLSpanElement>(null);

  const isEn = lang === "en";

  const labels = {
    offices: isEn ? "— Offices" : "— Oficinas",
    network: isEn ? "Our global" : "Nuestra red",
    networkEm: isEn ? "network" : "global",
    locations: isEn ? "05 LOCATIONS" : "05 UBICACIONES",
    live: isEn ? "LIVE" : "EN VIVO",
    hqTag: "HQ",
    cornerTLSub: "Global Offices · MMXXVI",
    cornerBL: isEn ? "5 offices · 4 time zones" : "5 oficinas · 4 zonas horarias",
    cornerBR: isEn ? "Interactive" : "Interactivo",
    cornerBRSub: isEn ? "Drag · Zoom · Click" : "Arrastra · Zoom · Clic",
    legendHQ: isEn ? "HQ" : "Sede",
    legendOffice: isEn ? "Office" : "Oficina",
  };

  useEffect(() => {
    const container = canvasWrapRef.current;
    if (!container) return;

    let animFrameId: number;
    let interactionTimer: ReturnType<typeof setTimeout> | null = null;

    // ==================== SCENE ====================
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(40, 1, 0.1, 1000);
    camera.position.set(0, 0, 3.2);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    const globeGroup = new THREE.Group();
    scene.add(globeGroup);

    const RADIUS = 1;

    // Backdrop sphere
    globeGroup.add(new THREE.Mesh(
      new THREE.SphereGeometry(RADIUS * 0.995, 64, 64),
      new THREE.MeshBasicMaterial({ color: 0xf7f5f0, transparent: true, opacity: 0.92 })
    ));

    // Wireframe lines
    const wireMat = new THREE.LineBasicMaterial({ color: 0x1e3660, transparent: true, opacity: 0.22 });
    const wireMatStrong = new THREE.LineBasicMaterial({ color: 0x0f1e36, transparent: true, opacity: 0.35 });

    for (let i = 0; i < 24; i++) {
      const lng = (i / 24) * 360 - 180;
      const pts: THREE.Vector3[] = [];
      for (let lat = -90; lat <= 90; lat += 3) pts.push(llv(lat, lng, RADIUS));
      globeGroup.add(new THREE.Line(new THREE.BufferGeometry().setFromPoints(pts), i % 6 === 0 ? wireMatStrong : wireMat));
    }
    for (let lat = -75; lat <= 75; lat += 15) {
      const pts: THREE.Vector3[] = [];
      for (let lng = -180; lng <= 180; lng += 3) pts.push(llv(lat, lng, RADIUS));
      globeGroup.add(new THREE.Line(new THREE.BufferGeometry().setFromPoints(pts), lat === 0 ? wireMatStrong : wireMat));
    }

    // Continent dots (async, non-blocking)
    loadWorldMapDots(globeGroup, RADIUS);

    // ==================== MARKERS ====================
    interface MarkerData { office: Office; group: THREE.Group; dot: THREE.Mesh; ring: THREE.Mesh; worldPos: THREE.Vector3; }
    const markers: MarkerData[] = [];

    OFFICES.forEach((o) => {
      const pos = llv(o.lat, o.lng, RADIUS * 1.005);
      const group = new THREE.Group();
      group.position.copy(pos);
      group.lookAt(pos.clone().multiplyScalar(2));

      const color = o.hq ? 0x4a90d9 : 0x1e3660;

      const dot = new THREE.Mesh(
        new THREE.CircleGeometry(o.hq ? 0.028 : 0.018, 24),
        new THREE.MeshBasicMaterial({ color, transparent: true, opacity: 1 })
      );
      dot.position.z = 0.001;
      group.add(dot);

      const ring = new THREE.Mesh(
        new THREE.RingGeometry(o.hq ? 0.035 : 0.024, o.hq ? 0.042 : 0.03, 32),
        new THREE.MeshBasicMaterial({ color, transparent: true, opacity: 0.6, side: THREE.DoubleSide })
      );
      ring.position.z = 0.001;
      group.add(ring);

      if (o.hq) {
        const beam = new THREE.Mesh(
          new THREE.CylinderGeometry(0.003, 0.003, 0.18, 8),
          new THREE.MeshBasicMaterial({ color: 0x4a90d9, transparent: true, opacity: 0.7 })
        );
        beam.rotation.x = Math.PI / 2;
        beam.position.z = 0.09;
        group.add(beam);

        const topDot = new THREE.Mesh(
          new THREE.CircleGeometry(0.012, 16),
          new THREE.MeshBasicMaterial({ color: 0xa8d4ff })
        );
        topDot.position.z = 0.18;
        group.add(topDot);
      }

      globeGroup.add(group);
      markers.push({ office: o, group, dot, ring, worldPos: pos });
    });

    // ==================== ARCS ====================
    interface ArcData { points: THREE.Vector3[]; particle: THREE.Mesh; offset: number; speed: number; }
    const arcs: ArcData[] = [];
    const hqOffice = OFFICES.find((o) => o.hq)!;
    const hqPos = llv(hqOffice.lat, hqOffice.lng, RADIUS);

    OFFICES.filter((o) => !o.hq).forEach((o, i) => {
      const destPos = llv(o.lat, o.lng, RADIUS);
      const pts = buildArc(hqPos, destPos, 80);
      globeGroup.add(new THREE.Line(
        new THREE.BufferGeometry().setFromPoints(pts),
        new THREE.LineBasicMaterial({ color: 0x4a90d9, transparent: true, opacity: 0.35 })
      ));
      const particle = new THREE.Mesh(
        new THREE.SphereGeometry(0.012, 12, 12),
        new THREE.MeshBasicMaterial({ color: 0xa8d4ff, transparent: true, opacity: 1 })
      );
      globeGroup.add(particle);
      arcs.push({ points: pts, particle, offset: i * 0.25, speed: 0.0025 + Math.random() * 0.001 });
    });

    // ==================== INTERACTION STATE ====================
    // Correct formula: rotY = -π/2 - lng·π/180 brings the point to face camera (+z)
    // rotX = lat·π/180 tilts to the correct latitude
    let autoRotate = true;
    let targetRotY = -Math.PI / 2 - hqOffice.lng * Math.PI / 180;
    let targetRotX = hqOffice.lat * Math.PI / 180;
    let rotY = targetRotY;
    let rotX = targetRotX;
    let isDragging = false;
    let lastX = 0, lastY = 0;
    let flyAnim: { start: number; duration: number; sx: number; sy: number; ex: number; ey: number } | null = null;

    const canvas = renderer.domElement;

    function pauseAutoRotate() {
      autoRotate = false;
      if (interactionTimer) clearTimeout(interactionTimer);
      interactionTimer = setTimeout(() => { autoRotate = true; }, 4000);
    }

    function onMouseDown(e: MouseEvent) { isDragging = true; lastX = e.clientX; lastY = e.clientY; pauseAutoRotate(); }
    function onMouseUp() { isDragging = false; }
    function onMouseMove(e: MouseEvent) {
      if (!isDragging) return;
      targetRotY += (e.clientX - lastX) * 0.005;
      targetRotX += (e.clientY - lastY) * 0.005;
      targetRotX = Math.max(-1.2, Math.min(1.2, targetRotX));
      lastX = e.clientX; lastY = e.clientY;
      flyAnim = null;
    }

    canvas.addEventListener("mousedown", onMouseDown);
    window.addEventListener("mouseup", onMouseUp);
    window.addEventListener("mousemove", onMouseMove);

    canvas.addEventListener("touchstart", (e) => {
      if (e.touches.length !== 1) return;
      isDragging = true; lastX = e.touches[0].clientX; lastY = e.touches[0].clientY; pauseAutoRotate();
    }, { passive: true });
    canvas.addEventListener("touchmove", (e) => {
      if (!isDragging || e.touches.length !== 1) return;
      targetRotY += (e.touches[0].clientX - lastX) * 0.005;
      targetRotX += (e.touches[0].clientY - lastY) * 0.005;
      targetRotX = Math.max(-1.2, Math.min(1.2, targetRotX));
      lastX = e.touches[0].clientX; lastY = e.touches[0].clientY;
      flyAnim = null;
    }, { passive: true });
    canvas.addEventListener("touchend", () => { isDragging = false; });

    // Raycaster
    const raycaster = new THREE.Raycaster();
    const mouse = new THREE.Vector2();

    function pickMarker(): MarkerData | null {
      raycaster.setFromCamera(mouse, camera);
      for (const m of markers) {
        const worldP = m.worldPos.clone().applyMatrix4(globeGroup.matrixWorld);
        const dist = raycaster.ray.distanceToPoint(worldP);
        const facing = worldP.clone().sub(camera.position).normalize().dot(worldP.clone().normalize());
        if (dist < 0.06 && facing < -0.1) return m;
      }
      return null;
    }

    function onCanvasMouseMove(e: MouseEvent) {
      const rect = canvas.getBoundingClientRect();
      mouse.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      mouse.y = -((e.clientY - rect.top) / rect.height) * 2 + 1;
      const hit = pickMarker();
      if (hit) {
        canvas.style.cursor = "pointer";
        if (tooltipRef.current) { tooltipRef.current.style.opacity = "1"; tooltipRef.current.style.left = (e.clientX - rect.left) + "px"; tooltipRef.current.style.top = (e.clientY - rect.top) + "px"; }
        if (tipCityRef.current) tipCityRef.current.textContent = isEn ? hit.office.cityEn : hit.office.city;
        if (tipCountryRef.current) tipCountryRef.current.textContent = isEn ? hit.office.countryEn : hit.office.country;
      } else {
        canvas.style.cursor = isDragging ? "grabbing" : "grab";
        if (tooltipRef.current) tooltipRef.current.style.opacity = "0";
      }
    }

    function onCanvasClick(e: MouseEvent) {
      const rect = canvas.getBoundingClientRect();
      mouse.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      mouse.y = -((e.clientY - rect.top) / rect.height) * 2 + 1;
      const hit = pickMarker();
      if (hit) flyTo(hit.office);
    }

    canvas.addEventListener("mousemove", onCanvasMouseMove);
    canvas.addEventListener("click", onCanvasClick);

    function setActiveOffice(id: string) {
      if (!officesListRef.current) return;
      officesListRef.current.querySelectorAll<HTMLButtonElement>("[data-office-id]").forEach((el) => {
        const active = el.dataset.officeId === id;
        el.style.paddingLeft = active ? "10px" : "0";
        el.style.background = active ? "rgba(74,144,217,0.10)" : "transparent";
        const city = el.querySelector<HTMLSpanElement>(".globe-city");
        if (city) city.style.color = active ? "#4a90d9" : "#ffffff";
        const arrow = el.querySelector<HTMLSpanElement>(".globe-arrow");
        if (arrow) arrow.style.color = active ? "#4a90d9" : "#4a6a9e";
      });
    }

    function flyTo(office: Office) {
      setActiveOffice(office.id);
      autoRotate = false;
      if (interactionTimer) clearTimeout(interactionTimer);
      interactionTimer = setTimeout(() => { autoRotate = true; }, 6000);
      const ey = normalizeAngle(-Math.PI / 2 - office.lng * Math.PI / 180, rotY);
      const ex = office.lat * Math.PI / 180;
      targetRotY = ey; targetRotX = ex;
      flyAnim = { start: performance.now(), duration: 1400, sx: rotX, sy: rotY, ex, ey };
    }

    // Wire sidebar buttons
    if (officesListRef.current) {
      officesListRef.current.querySelectorAll<HTMLButtonElement>("[data-office-id]").forEach((btn) => {
        const id = btn.dataset.officeId!;
        const office = OFFICES.find((o) => o.id === id);
        if (!office) return;
        btn.addEventListener("click", () => flyTo(office));
        btn.addEventListener("mouseenter", () => { const m = markers.find(mm => mm.office.id === id); if (m) { (m.ring.material as THREE.MeshBasicMaterial).opacity = 1; m.dot.scale.setScalar(1.4); } });
        btn.addEventListener("mouseleave", () => { const m = markers.find(mm => mm.office.id === id); if (m) { (m.ring.material as THREE.MeshBasicMaterial).opacity = 0.6; m.dot.scale.setScalar(1); } });
      });
    }
    setActiveOffice("cdmx");

    // ==================== RESIZE ====================
    function resize() {
      if (!container) return;
      const w = container.clientWidth, h = container.clientHeight;
      renderer.setSize(w, h, false);
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
    }
    const ro = new ResizeObserver(resize);
    ro.observe(container);
    resize();

    // ==================== LOOP ====================
    let frame = 0;
    function tick() {
      animFrameId = requestAnimationFrame(tick);
      frame++;

      if (flyAnim) {
        const t = Math.min(1, (performance.now() - flyAnim.start) / flyAnim.duration);
        const e = easeInOutCubic(t);
        rotY = flyAnim.sy + (flyAnim.ey - flyAnim.sy) * e;
        rotX = flyAnim.sx + (flyAnim.ex - flyAnim.sx) * e;
        if (t >= 1) flyAnim = null;
      } else {
        if (autoRotate && !isDragging) targetRotY += 0.0015;
        rotY += (targetRotY - rotY) * 0.08;
        rotX += (targetRotX - rotX) * 0.08;
      }

      globeGroup.rotation.y = rotY;
      globeGroup.rotation.x = rotX;

      markers.forEach((m, i) => {
        const pulse = 1 + Math.sin(frame * 0.04 + i) * 0.15;
        m.ring.scale.setScalar(pulse);
        (m.ring.material as THREE.MeshBasicMaterial).opacity = 0.35 + Math.sin(frame * 0.04 + i) * 0.25;
        const worldP = m.worldPos.clone().applyMatrix4(globeGroup.matrixWorld);
        const facing = worldP.clone().sub(camera.position).normalize().dot(worldP.clone().normalize());
        const opacity = facing < 0 ? Math.min(1, -facing * 2) : 0;
        (m.dot.material as THREE.MeshBasicMaterial).opacity = opacity;
        (m.ring.material as THREE.MeshBasicMaterial).opacity *= opacity;
        m.group.visible = opacity > 0.02;
      });

      arcs.forEach((a) => {
        a.offset += a.speed;
        if (a.offset > 1) a.offset -= 1;
        const idx = Math.floor(a.offset * (a.points.length - 1));
        a.particle.position.copy(a.points[idx]);
        const worldP = a.points[idx].clone().applyMatrix4(globeGroup.matrixWorld);
        const facing = worldP.clone().sub(camera.position).normalize().dot(a.points[idx].clone().normalize());
        (a.particle.material as THREE.MeshBasicMaterial).opacity = facing < 0 ? 1 : 0.1;
      });

      if (coordsRef.current) {
        const normLat = rotX * 180 / Math.PI;
        const normLng = (((-rotY * 180 / Math.PI) - 90 + 540) % 360) - 180;
        coordsRef.current.textContent =
          Math.abs(normLat).toFixed(1) + "°" + (normLat >= 0 ? "N" : "S") +
          " · " +
          Math.abs(normLng).toFixed(1) + "°" + (normLng >= 0 ? "E" : "W");
      }

      renderer.render(scene, camera);
    }
    tick();

    return () => {
      cancelAnimationFrame(animFrameId);
      ro.disconnect();
      if (interactionTimer) clearTimeout(interactionTimer);
      canvas.removeEventListener("mousedown", onMouseDown);
      window.removeEventListener("mouseup", onMouseUp);
      window.removeEventListener("mousemove", onMouseMove);
      canvas.removeEventListener("mousemove", onCanvasMouseMove);
      canvas.removeEventListener("click", onCanvasClick);
      renderer.dispose();
      if (container.contains(renderer.domElement)) container.removeChild(renderer.domElement);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        background: "linear-gradient(180deg, #fbfaf6 0%, #f2efe6 100%)",
        border: "1px solid rgba(20,40,69,0.12)",
        borderRadius: "2px",
        overflow: "hidden",
        display: "grid",
        gridTemplateColumns: "1fr 300px",
        minHeight: "480px",
        fontFamily: "Inter, -apple-system, BlinkMacSystemFont, sans-serif",
      }}
      className="hxp-globe-wrap"
    >
      {/* Canvas area */}
      <div
        ref={canvasWrapRef}
        style={{ position: "relative", width: "100%", minHeight: "480px", cursor: "grab", overflow: "hidden" }}
      >
        {/* Corners */}
        <div style={corner("tl")}>— Huxley Partners<span style={cornerEm}>{labels.cornerTLSub}</span></div>
        <div style={corner("tr")}>Lat · Lng<span ref={coordsRef} style={cornerEm}>19.43°N · 99.13°W</span></div>
        <div style={corner("bl")}>{labels.cornerBL}</div>
        <div style={corner("br")}>{labels.cornerBR}<span style={cornerEm}>{labels.cornerBRSub}</span></div>

        {/* Crosshair */}
        <div style={{ position: "absolute", top: "50%", left: "calc(50% - 150px)", width: "40px", height: "40px", transform: "translate(-50%,-50%)", pointerEvents: "none", zIndex: 1, opacity: 0.35 }}>
          <div style={{ position: "absolute", left: "50%", top: 0, width: "1px", height: "100%", background: "#1e3660", transform: "translateX(-50%)" }} />
          <div style={{ position: "absolute", top: "50%", left: 0, height: "1px", width: "100%", background: "#1e3660", transform: "translateY(-50%)" }} />
        </div>

        {/* Legend */}
        <div style={{ position: "absolute", bottom: "24px", left: "50%", transform: "translateX(-50%)", display: "flex", gap: "24px", fontFamily: "monospace", fontSize: "10px", color: "#2d4a7a", letterSpacing: "0.1em", textTransform: "uppercase", zIndex: 2, pointerEvents: "none" }}>
          <span style={{ display: "flex", alignItems: "center", gap: "8px" }}><span style={{ ...dot, background: "#4a90d9", boxShadow: "0 0 8px rgba(201,169,97,0.6)" }} />{labels.legendHQ}</span>
          <span style={{ display: "flex", alignItems: "center", gap: "8px" }}><span style={{ ...dot, background: "#1e3660" }} />{labels.legendOffice}</span>
        </div>

        {/* Tooltip */}
        <div ref={tooltipRef} style={{ position: "absolute", pointerEvents: "none", background: "#0a1628", color: "#fff", padding: "10px 14px", borderRadius: "2px", fontSize: "12px", opacity: 0, transform: "translate(-50%, calc(-100% - 16px))", transition: "opacity 0.15s ease", zIndex: 10, whiteSpace: "nowrap", boxShadow: "0 8px 24px rgba(10,22,40,0.18)" }}>
          <div ref={tipCityRef} style={{ fontFamily: "Cormorant Garamond, Georgia, serif", fontSize: "16px", fontWeight: 500 }}>—</div>
          <div ref={tipCountryRef} style={{ fontFamily: "monospace", fontSize: "9px", letterSpacing: "0.15em", textTransform: "uppercase", color: "#7a93b8", marginTop: "2px" }}>—</div>
        </div>
      </div>

      {/* Sidebar */}
      <aside style={{ background: "#0a1628", color: "#e4eaf3", display: "flex", flexDirection: "column", padding: "32px 28px", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse at top right, rgba(74,144,217,0.08), transparent 50%), radial-gradient(ellipse at bottom left, rgba(74,106,158,0.12), transparent 60%)", pointerEvents: "none" }} />

        <div style={{ position: "relative", zIndex: 1, marginBottom: "28px" }}>
          <div style={{ fontFamily: "monospace", fontSize: "10px", letterSpacing: "0.18em", textTransform: "uppercase", color: "#7a93b8", marginBottom: "8px" }}>{labels.offices}</div>
          <h2 style={{ fontFamily: "Cormorant Garamond, Georgia, serif", fontSize: "26px", fontWeight: 400, lineHeight: 1.1, color: "#fff", letterSpacing: "0.01em", margin: 0 }}>
            {labels.network} <em style={{ fontStyle: "italic", color: "#4a90d9" }}>{labels.networkEm}</em>
          </h2>
          <div style={{ fontFamily: "monospace", fontSize: "10px", color: "#7a93b8", letterSpacing: "0.1em", marginTop: "12px", display: "flex", justifyContent: "space-between" }}>
            <span>{labels.locations}</span>
          </div>
        </div>

        <div ref={officesListRef} style={{ position: "relative", zIndex: 1, flex: 1, display: "flex", flexDirection: "column", gap: "2px", overflowY: "auto" }}>
          {OFFICES.map((o, i) => (
            <button key={o.id} data-office-id={o.id} style={{ background: "transparent", border: "none", color: "#e4eaf3", textAlign: "left", padding: "14px 0", cursor: "pointer", display: "grid", gridTemplateColumns: "28px 1fr auto", alignItems: "center", gap: "12px", borderBottom: "1px solid rgba(255,255,255,0.06)", transition: "all 0.25s ease", fontFamily: "inherit", width: "100%" }}>
              <span style={{ fontFamily: "monospace", fontSize: "10px", color: "#4a6a9e", letterSpacing: "0.1em" }}>{String(i + 1).padStart(2, "0")}</span>
              <span style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
                <span className="globe-city" style={{ fontFamily: "Cormorant Garamond, Georgia, serif", fontSize: "20px", fontWeight: 500, color: "#ffffff", letterSpacing: "0.01em", lineHeight: 1.1, transition: "color 0.2s ease" }}>
                  {isEn ? o.cityEn : o.city}
                </span>
                <span style={{ fontFamily: "monospace", fontSize: "10px", color: "#7a93b8", letterSpacing: "0.12em", textTransform: "uppercase" }}>
                  {isEn ? o.countryEn : o.country}
                </span>
              </span>
              {o.hq
                ? <span style={{ fontFamily: "monospace", fontSize: "9px", letterSpacing: "0.15em", color: "#0a1628", background: "#4a90d9", padding: "3px 6px", borderRadius: "1px", textTransform: "uppercase", fontWeight: 500 }}>HQ</span>
                : <span className="globe-arrow" style={{ color: "#4a6a9e", fontFamily: "monospace", transition: "transform 0.2s ease, color 0.2s ease" }}>→</span>
              }
            </button>
          ))}
        </div>

        <div style={{ position: "relative", zIndex: 1, marginTop: "auto", paddingTop: "20px", borderTop: "1px solid rgba(255,255,255,0.08)", fontFamily: "monospace", fontSize: "10px", color: "#7a93b8", letterSpacing: "0.12em", textTransform: "uppercase", display: "flex", justifyContent: "space-between" }}>
          <span><span style={{ display: "inline-block", width: "6px", height: "6px", borderRadius: "50%", background: "#4a90d9", marginRight: "6px", verticalAlign: "middle", boxShadow: "0 0 8px rgba(74,144,217,0.8)" }} />{labels.live}</span>
          <span>HXP · 2026</span>
        </div>
      </aside>

      <style>{`
        .hxp-globe-wrap { aspect-ratio: 16/10; }
        @media (max-width: 900px) {
          .hxp-globe-wrap { grid-template-columns: 1fr !important; aspect-ratio: auto !important; }
          .hxp-globe-wrap > div:first-child { min-height: 380px !important; }
          .hxp-globe-wrap > aside { max-height: 320px; padding: 20px 24px !important; }
        }
      `}</style>
    </div>
  );
}

// ==================== HELPERS ====================
function llv(lat: number, lng: number, r: number): THREE.Vector3 {
  const phi = (90 - lat) * Math.PI / 180;
  const theta = (lng + 180) * Math.PI / 180;
  return new THREE.Vector3(
    -r * Math.sin(phi) * Math.cos(theta),
     r * Math.cos(phi),
     r * Math.sin(phi) * Math.sin(theta)
  );
}

function buildArc(start: THREE.Vector3, end: THREE.Vector3, segments: number): THREE.Vector3[] {
  const sn = start.clone().normalize(), en = end.clone().normalize();
  const angle = Math.acos(Math.max(-1, Math.min(1, sn.dot(en))));
  const midLift = 1 + Math.min(0.35, angle * 0.22);
  const sinA = Math.sin(angle);
  return Array.from({ length: segments + 1 }, (_, i) => {
    const t = i / segments;
    const a = sinA < 0.0001 ? (1 - t) : Math.sin((1 - t) * angle) / sinA;
    const b = sinA < 0.0001 ? t : Math.sin(t * angle) / sinA;
    return sn.clone().multiplyScalar(a).add(en.clone().multiplyScalar(b))
      .multiplyScalar(1 + (midLift - 1) * Math.sin(t * Math.PI));
  });
}

function normalizeAngle(target: number, current: number): number {
  let t = target;
  while (t - current > Math.PI) t -= Math.PI * 2;
  while (current - t > Math.PI) t += Math.PI * 2;
  return t;
}

function easeInOutCubic(t: number): number {
  return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
}

async function loadWorldMapDots(globeGroup: THREE.Group, RADIUS: number) {
  const urls = [
    "https://cdn.jsdelivr.net/npm/world-atlas@2/land-50m.json",
    "https://unpkg.com/world-atlas@2/land-50m.json",
  ];
  for (const url of urls) {
    try {
      const r = await fetch(url);
      if (!r.ok) continue;
      buildDotsFromTopoJSON(globeGroup, RADIUS, await r.json());
      return;
    } catch { continue; }
  }
  buildFallbackDots(globeGroup, RADIUS);
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function buildDotsFromTopoJSON(globeGroup: THREE.Group, RADIUS: number, topo: any) {
  try {
    const W = 1440, H = 720;
    const c = document.createElement("canvas"); c.width = W; c.height = H;
    const ctx = c.getContext("2d")!;
    ctx.fillStyle = "#000"; ctx.fillRect(0, 0, W, H); ctx.fillStyle = "#fff";

    const { arcs, transform: tr } = topo;
    const [sx, sy] = tr.scale, [tx, ty] = tr.translate;

    const decodeArc = (arcIdx: number): [number, number][] => {
      const rev = arcIdx < 0, idx = rev ? ~arcIdx : arcIdx;
      const arc = arcs[idx]; let x = 0, y = 0;
      const pts: [number, number][] = arc.map(([dx, dy]: [number, number]) => { x += dx; y += dy; return [x * sx + tx, y * sy + ty]; });
      return rev ? pts.reverse() : pts;
    };

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const geom = topo.objects.land.type === "GeometryCollection" ? topo.objects.land.geometries : [topo.objects.land];
    ctx.beginPath();
    for (const g of geom) {
      const polygons = g.type === "MultiPolygon" ? g.arcs : [g.arcs];
      for (const poly of polygons) {
        for (const ring of poly) {
          let first = true;
          for (const ai of ring) {
            for (const [lng, lat] of decodeArc(ai)) {
              const px = (lng + 180) / 360 * W, py = (90 - lat) / 180 * H;
              first ? ctx.moveTo(px, py) : ctx.lineTo(px, py); first = false;
            }
          }
          ctx.closePath();
        }
      }
    }
    ctx.fill("evenodd");
    sampleToDots(globeGroup, RADIUS, ctx, W, H);
  } catch { buildFallbackDots(globeGroup, RADIUS); }
}

function sampleToDots(globeGroup: THREE.Group, RADIUS: number, ctx: CanvasRenderingContext2D, W: number, H: number) {
  let data: Uint8ClampedArray;
  try { data = ctx.getImageData(0, 0, W, H).data; } catch { buildFallbackDots(globeGroup, RADIUS); return; }
  const positions: [number, number][] = [];
  for (let y = 0; y < H; y += 4) {
    for (let x = 0; x < W; x += 4) {
      const i = (y * W + x) * 4;
      if ((data[i] + data[i + 1] + data[i + 2]) / 3 < 30) continue;
      const lat = 90 - (y / H) * 180, lng = (x / W) * 360 - 180;
      if (Math.random() > Math.cos(lat * Math.PI / 180) * 1.1) continue;
      positions.push([lat, lng]);
    }
  }
  if (positions.length < 200) { buildFallbackDots(globeGroup, RADIUS); return; }
  placeDots(globeGroup, RADIUS, positions);
}

function buildFallbackDots(globeGroup: THREE.Group, RADIUS: number) {
  const boxes: [number, number, number, number][] = [
    [50,70,-170,-60],[30,50,-125,-70],[15,30,-110,-85],[8,18,-92,-77],
    [-10,12,-78,-50],[-35,-10,-75,-40],[-55,-35,-72,-58],[36,60,-10,30],
    [55,70,10,40],[15,35,-15,35],[-5,15,-15,45],[-35,-5,10,42],
    [20,45,30,65],[30,55,65,120],[5,30,68,95],[40,70,60,180],
    [-10,25,95,130],[-10,10,110,145],[-40,-12,113,153],[30,45,130,145],
    [50,60,-10,2],[60,83,-55,-15],
  ];
  const positions: [number, number][] = [];
  for (const [la, lb, lo, lp] of boxes)
    for (let lat = la; lat <= lb; lat += 1.5)
      for (let lng = lo; lng <= lp; lng += 1.5)
        if (Math.random() >= 0.1)
          positions.push([lat + (Math.random()-.5)*.8, lng + (Math.random()-.5)*.8]);
  placeDots(globeGroup, RADIUS, positions);
}

function placeDots(globeGroup: THREE.Group, RADIUS: number, positions: [number, number][]) {
  const inst = new THREE.InstancedMesh(
    new THREE.CircleGeometry(0.0055, 6),
    new THREE.MeshBasicMaterial({ color: 0x0f1e36, transparent: true, opacity: 0.85 }),
    positions.length
  );
  const dummy = new THREE.Object3D();
  positions.forEach(([lat, lng], i) => {
    const v = llv(lat, lng, RADIUS * 1.003);
    dummy.position.copy(v); dummy.lookAt(v.clone().multiplyScalar(2)); dummy.updateMatrix();
    inst.setMatrixAt(i, dummy.matrix);
  });
  inst.instanceMatrix.needsUpdate = true;
  inst.renderOrder = 1;
  globeGroup.add(inst);
}

// Style helpers
function corner(pos: "tl"|"tr"|"bl"|"br"): React.CSSProperties {
  return {
    position: "absolute", fontFamily: "monospace", fontSize: "10px",
    letterSpacing: "0.15em", textTransform: "uppercase", color: "#4a6a9e",
    pointerEvents: "none", zIndex: 2,
    ...(pos==="tl"?{top:"20px",left:"24px"}:pos==="tr"?{top:"20px",right:"24px",textAlign:"right"}:pos==="bl"?{bottom:"20px",left:"24px"}:{bottom:"20px",right:"24px",textAlign:"right"}),
  };
}
const cornerEm: React.CSSProperties = { fontStyle: "normal", color: "#142845", display: "block", fontSize: "13px", fontFamily: "Cormorant Garamond, Georgia, serif", letterSpacing: "0.02em", textTransform: "none", marginTop: "4px" };
const dot: React.CSSProperties = { width: "8px", height: "8px", borderRadius: "50%", display: "inline-block" };
