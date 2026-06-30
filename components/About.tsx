"use client";
import { useEffect, useRef } from "react";

const stats = [
  { value: "2+", label: "Projects Shipped" },
  { value: "5+", label: "RTK Query Slices" },
  { value: "3", label: "AI Integrations" },
  { value: "8.94", label: "SGPA" },
];

export default function About() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("visible")),
      { threshold: 0.15 }
    );
    ref.current?.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" ref={ref} style={{ padding: "100px 24px", background: "var(--bg2)" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <div className="reveal" style={{ textAlign: "center", marginBottom: 64 }}>
          <div className="section-label">About Me</div>
          <h2 style={{ fontSize: "clamp(28px,5vw,42px)", fontWeight: 700, color: "#e2e8f0", letterSpacing: -0.5 }}>
            Passionate about building
            <span className="gradient-text"> great things</span>
          </h2>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 60, alignItems: "center" }}>
          {/* Text */}
          <div className="reveal">
            <p style={{ fontSize: 16, color: "#94a3b8", lineHeight: 1.8, marginBottom: 20 }}>
              I&apos;m a <span style={{ color: "#0fd9b4", fontWeight: 600 }}>Full Stack Developer Trainee</span> at{" "}
              <span style={{ color: "#e2e8f0", fontWeight: 600 }}>Nugen I.T. Services, Mohali</span>, working with
              modern web technologies to build real, production-grade products.
            </p>
            <p style={{ fontSize: 16, color: "#94a3b8", lineHeight: 1.8, marginBottom: 20 }}>
              I specialize in <span style={{ color: "#e2e8f0" }}>Next.js, TypeScript, Redux Toolkit, and RTK Query</span> —
              building everything from alumni portals to Claude-powered AI sales agents with real API integrations.
            </p>
            <p
              style={{
                fontSize: 16,
                color: "#94a3b8",
                lineHeight: 1.8,
                marginBottom: 32,
              }}
            >
              Earned a B.Tech in Computer Science from{" "}
              <span style={{ color: "#e2e8f0" }}>
                Sri Guru Granth Sahib World University
              </span>{" "}
              in May 2025. Passionate about building modern web applications and
              continuously expanding my skills through real-world development projects.
            </p>
            <div style={{ display: "flex", gap: 16 }}>
              <a href="#contact" className="btn-primary">Let&apos;s Talk</a>
              <a
                href="/resume.pdf"
                download
                className="btn-outline"
              >
                Download CV
              </a>
            </div>
          </div>

          {/* Stats grid */}
          <div className="reveal" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
            {stats.map((s) => (
              <div
                key={s.label}
                style={{
                  background: "var(--card)",
                  border: "1px solid var(--border)",
                  borderRadius: 16,
                  padding: "28px 24px",
                  textAlign: "center",
                  transition: "all 0.3s",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(15,217,180,0.4)";
                  (e.currentTarget as HTMLDivElement).style.transform = "translateY(-4px)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLDivElement).style.borderColor = "var(--border)";
                  (e.currentTarget as HTMLDivElement).style.transform = "translateY(0)";
                }}
              >
                <div className="gradient-text" style={{ fontSize: 36, fontWeight: 800, marginBottom: 6 }}>
                  {s.value}
                </div>
                <div style={{ fontSize: 13, color: "#64748b", fontWeight: 500 }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          #about > div > div:last-child { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
