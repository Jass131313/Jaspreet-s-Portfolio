"use client";
import { useEffect, useRef } from "react";
import { FaGithub, FaLinkedin, FaPhone } from "react-icons/fa6";

const contacts = [
  { label: "GitHub", value: "Jass131313", href: "https://github.com/Jass131313", icon: <FaGithub /> },
  { label: "Phone", value: "+91 62802-83455", href: "tel:+916280283455", icon: <FaPhone />},
  { label: "LinkedIn", value: "jaspreet-kaur-a37b97228", href: "https://linkedin.com/in/jaspreet-kaur-a37b97228", icon: <FaLinkedin /> },
];

export default function Contact() {
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
    <>
      <section id="contact" ref={ref} className="grid-bg" style={{ padding: "100px 24px", background: "var(--bg2)", position: "relative", overflow: "hidden" }}>
        <div style={{
          position: "absolute", top: "30%", left: "50%", transform: "translateX(-50%)",
          width: 400, height: 400,
          background: "radial-gradient(circle, rgba(15,217,180,0.07) 0%, transparent 70%)",
          borderRadius: "50%", pointerEvents: "none",
        }} />

        <div style={{ maxWidth: 700, margin: "0 auto", textAlign: "center", position: "relative", zIndex: 1 }}>
          <div className="reveal section-label" style={{ justifyContent: "center" }}>Get In Touch</div>
          <h2 className="reveal" style={{ fontSize: "clamp(28px,5vw,42px)", fontWeight: 700, color: "#e2e8f0", letterSpacing: -0.5, marginBottom: 16 }}>
            Let&apos;s build something <span className="gradient-text">together</span>
          </h2>
          <p className="reveal" style={{ fontSize: 15, color: "#64748b", marginBottom: 48, lineHeight: 1.7 }}>
            I&apos;m open to internships, collaborations, and interesting conversations about web development and AI.
          </p>

          <div
            className="reveal"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
              gap: 16,
              marginBottom: 40,
            }}
          >
            {contacts.map((c) => {
              const Wrapper = c.href ? "a" : "div";
              return (
                <Wrapper
                  key={c.label}
                  {...(c.href ? { href: c.href, target: c.href.startsWith("http") ? "_blank" : undefined, rel: "noreferrer" } : {})}
                  style={{
                    display: "flex", flexDirection: "column", alignItems: "center", gap: 8,
                    padding: "24px 16px", borderRadius: 14,
                    background: "var(--card)", border: "1px solid var(--border)",
                    textDecoration: "none", transition: "all 0.3s", cursor: c.href ? "pointer" : "default",
                  }}
                  onMouseEnter={(e: React.MouseEvent<HTMLElement>) => {
                    if (!c.href) return;
                    e.currentTarget.style.borderColor = "rgba(15,217,180,0.4)";
                    e.currentTarget.style.transform = "translateY(-3px)";
                  }}
                  onMouseLeave={(e: React.MouseEvent<HTMLElement>) => {
                    if (!c.href) return;
                    e.currentTarget.style.borderColor = "var(--border)";
                    e.currentTarget.style.transform = "translateY(0)";
                  }}
                >
                  <span style={{ fontSize: 22 }}>{c.icon}</span>
                  <span style={{ fontSize: 11, color: "#64748b", textTransform: "uppercase", letterSpacing: "0.05em" }}>{c.label}</span>
                  <span style={{ fontSize: 13, color: "#e2e8f0", fontWeight: 500, wordBreak: "break-word" }}>{c.value}</span>
                </Wrapper>
              );
            })}
          </div>

          <a href="mailto:jk0006914008@gmail.com" className="reveal btn-primary" style={{ fontSize: 15, padding: "14px 36px" }}>
            Say Hello
            <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" />
            </svg>
          </a>
        </div>
      </section>

      <footer style={{ padding: "32px 24px", background: "var(--bg)", borderTop: "1px solid var(--border)", textAlign: "center" }}>
        <p style={{ fontSize: 13, color: "#475569" }}>
          Designed & built by <span style={{ color: "#0fd9b4", fontWeight: 600 }}>Jaspreet Kaur</span> · {new Date().getFullYear()}
        </p>
      </footer>
    </>
  );
}
