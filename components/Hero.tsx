"use client";
import { useState, useEffect } from "react";

const roles = [
  "Full Stack Developer Intern",
  "Next.js Enthusiast",
  "Redux Toolkit Builder",
  "AI Integration Developer",
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = roles[roleIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting && displayed.length < current.length) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 70);
    } else if (!deleting && displayed.length === current.length) {
      timeout = setTimeout(() => setDeleting(true), 1800);
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 40);
    } else if (deleting && displayed.length === 0) {
      setDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }
    return () => clearTimeout(timeout);
  }, [displayed, deleting, roleIndex]);

  return (
    <section
      id="home"
      className="grid-bg"
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "100px 24px 60px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Glow orbs */}
      <div style={{
        position: "absolute", top: "15%", left: "10%",
        width: 350, height: 350,
        background: "radial-gradient(circle, rgba(15,217,180,0.08) 0%, transparent 70%)",
        borderRadius: "50%", pointerEvents: "none",
      }} />
      <div style={{
        position: "absolute", bottom: "20%", right: "8%",
        width: 280, height: 280,
        background: "radial-gradient(circle, rgba(139,92,246,0.07) 0%, transparent 70%)",
        borderRadius: "50%", pointerEvents: "none",
      }} />

      <div style={{ maxWidth: 900, width: "100%", textAlign: "center", position: "relative", zIndex: 1 }}>
        {/* Badge */}
        <div
          className="animate-fade-up"
          style={{
            display: "inline-flex", alignItems: "center", gap: 8,
            padding: "8px 18px", borderRadius: 99,
            background: "rgba(15,217,180,0.08)",
            border: "1px solid rgba(15,217,180,0.25)",
            fontSize: 13, fontWeight: 500, color: "#0fd9b4",
            marginBottom: 28,
          }}
        >
          <span style={{ width: 7, height: 7, borderRadius: "50%", background: "#0fd9b4", display: "inline-block", animation: "pulse-glow 2s infinite" }} />
          Available for opportunities
        </div>

        {/* Name */}
        <h1
          className="animate-fade-up"
          style={{
            fontSize: "clamp(40px, 8vw, 76px)",
            fontWeight: 800,
            lineHeight: 1.05,
            letterSpacing: -2,
            color: "#e2e8f0",
            marginBottom: 16,
            animationDelay: "0.1s",
          }}
        >
          Hi, I&apos;m{" "}
          <span className="gradient-text">Jaspreet</span>
          <span style={{ display: "block" }}>Kaur</span>
        </h1>

        {/* Typing role */}
        <div
          style={{
            fontSize: "clamp(18px, 3vw, 26px)",
            fontWeight: 500,
            color: "#94a3b8",
            marginBottom: 28,
            minHeight: 36,
          }}
        >
          <span style={{ color: "#0fd9b4" }}>{"< "}</span>
          <span>{displayed}</span>
          <span className="cursor-blink" style={{ color: "#0fd9b4", fontWeight: 300 }}>|</span>
          <span style={{ color: "#0fd9b4" }}>{" />"}</span>
        </div>

        {/* Tagline */}
        <p
          className="animate-fade-up"
          style={{
            fontSize: 16,
            color: "#64748b",
            maxWidth: 540,
            margin: "0 auto 40px",
            lineHeight: 1.7,
            animationDelay: "0.3s",
          }}
        >
          Building production-grade web apps with Next.js & TypeScript.
          Passionate about clean architecture and AI integrations.
        </p>

        {/* CTAs */}
        <div
          className="animate-fade-up"
          style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap", animationDelay: "0.4s" }}
        >
          <a href="#projects" className="btn-primary">
            View Projects
            <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
          <a href="#contact" className="btn-outline">Contact Me</a>
        </div>

        {/* Scroll indicator */}
        <div style={{ marginTop: 80, display: "flex", flexDirection: "column", alignItems: "center", gap: 8 }}>
          <span style={{ fontSize: 12, color: "#475569", letterSpacing: "0.1em", textTransform: "uppercase" }}>Scroll</span>
          <div style={{
            width: 1, height: 48,
            background: "linear-gradient(to bottom, #0fd9b4, transparent)",
            animation: "float 2s ease-in-out infinite",
          }} />
        </div>
      </div>
    </section>
  );
}
