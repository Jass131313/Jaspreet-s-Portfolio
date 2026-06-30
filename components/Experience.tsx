"use client";
import { useEffect, useRef } from "react";

const experience = [
  {
    title: "Full Stack Developer Intern",
    org: "Nugen I.T. Services · Mohali, India",
    date: "2024 — Present",
    points: [
      "Building full-stack applications with Next.js 15, TypeScript, and Tailwind CSS",
      "Architected Redux Toolkit + RTK Query layers for the Training & Placement Portal",
      "Built a Claude-powered AI sales agent integrating Apollo.io, GitHub & HubSpot",
      "Wrote Cypress E2E and Jest unit test suites for quality assurance",
    ],
  },
];

const training = [
  { title: "Data Science Training", org: "Sabudh Foundation, SAS Nagar", date: "Jun – Jul 2024" },
  { title: "Python Programming", org: "Meander Software Pvt. Ltd., SAS Nagar", date: "Jun – Jul 2023" },
  { title: "Cyber Security Training", org: "ICT Academy & Honeywell × Cisco", date: "100 hours" },
];

const education = [
  { title: "B.Tech — Computer Science", org: "Sri Guru Granth Sahib World University", date: "SGPA 8.94 · Completed" },
];

export default function Experience() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("visible")),
      { threshold: 0.1 }
    );
    ref.current?.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="experience" ref={ref} style={{ padding: "100px 24px", background: "var(--bg)" }}>
      <div style={{ maxWidth: 1000, margin: "0 auto" }}>
        <div className="reveal" style={{ textAlign: "center", marginBottom: 64 }}>
          <div className="section-label">Journey</div>
          <h2 style={{ fontSize: "clamp(28px,5vw,42px)", fontWeight: 700, color: "#e2e8f0", letterSpacing: -0.5 }}>
            Experience & Education
          </h2>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48 }}>
          {/* Experience column */}
          <div className="reveal">
            <h3 style={{ fontSize: 13, fontWeight: 600, color: "#0fd9b4", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 24 }}>
              Work Experience
            </h3>
            {experience.map((e) => (
              <div key={e.title} className="timeline-item">
                <div style={{ fontSize: 15, fontWeight: 700, color: "#e2e8f0", marginBottom: 2 }}>{e.title}</div>
                <div style={{ fontSize: 12.5, color: "#0fd9b4", fontWeight: 500, marginBottom: 4 }}>{e.org}</div>
                <div style={{ fontSize: 11.5, color: "#64748b", marginBottom: 10 }}>{e.date}</div>
                <ul style={{ listStyle: "none", padding: 0 }}>
                  {e.points.map((pt) => (
                    <li key={pt} style={{ fontSize: 13, color: "#94a3b8", lineHeight: 1.6, marginBottom: 6, paddingLeft: 14, position: "relative" }}>
                      <span style={{ position: "absolute", left: 0, color: "#0fd9b4" }}>▸</span>
                      {pt}
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            <h3 style={{ fontSize: 13, fontWeight: 600, color: "#0fd9b4", letterSpacing: "0.08em", textTransform: "uppercase", margin: "32px 0 24px" }}>
              Training & Certifications
            </h3>
            {training.map((t) => (
              <div key={t.title} className="timeline-item">
                <div style={{ fontSize: 14, fontWeight: 700, color: "#e2e8f0", marginBottom: 2 }}>{t.title}</div>
                <div style={{ fontSize: 12.5, color: "#0fd9b4", fontWeight: 500, marginBottom: 2 }}>{t.org}</div>
                <div style={{ fontSize: 11.5, color: "#64748b" }}>{t.date}</div>
              </div>
            ))}
          </div>

          {/* Education column */}
          <div className="reveal">
            <h3 style={{ fontSize: 13, fontWeight: 600, color: "#0fd9b4", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 24 }}>
              Education
            </h3>
            {education.map((e) => (
              <div key={e.title} className="timeline-item">
                <div style={{ fontSize: 15, fontWeight: 700, color: "#e2e8f0", marginBottom: 2 }}>{e.title}</div>
                <div style={{ fontSize: 12.5, color: "#0fd9b4", fontWeight: 500, marginBottom: 2 }}>{e.org}</div>
                <div style={{ fontSize: 11.5, color: "#64748b" }}>{e.date}</div>
              </div>
            ))}

            <h3 style={{ fontSize: 13, fontWeight: 600, color: "#0fd9b4", letterSpacing: "0.08em", textTransform: "uppercase", margin: "32px 0 20px" }}>
              Highlights
            </h3>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {[
                'Organized "Responsible and Safe AI" workshop (2023)',
                "Anchored National Technology Day event (2024)",
                "Member — Centre for Scientific Research & Innovation, SGGSWU",
                
              ].map((h) => (
                <div key={h} style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
                  <span style={{ color: "#0fd9b4", fontSize: 13, marginTop: 1 }}>★</span>
                  <span style={{ fontSize: 13, color: "#94a3b8", lineHeight: 1.6 }}>{h}</span>
                </div>
              ))}
            </div>

            <h3 style={{ fontSize: 13, fontWeight: 600, color: "#0fd9b4", letterSpacing: "0.08em", textTransform: "uppercase", margin: "32px 0 16px" }}>
              Languages
            </h3>
            <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
              {["English", "Hindi", "Punjabi"].map((l) => (
                <span key={l} style={{ fontSize: 12, padding: "4px 12px", borderRadius: 99, background: "var(--card)", border: "1px solid var(--border)", color: "#94a3b8" }}>
                  {l}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          #experience > div > div:last-child { grid-template-columns: 1fr !important; gap: 48px !important; }
        }
      `}</style>
    </section>
  );
}
