import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Jaspreet Kaur | Full Stack Developer",
  description:
    "Full Stack Developer Intern skilled in Next.js, React, TypeScript, Redux Toolkit, and AI integrations. Based in Mohali, India.",
  keywords: ["Jaspreet Kaur", "Full Stack Developer", "Next.js", "React", "TypeScript", "Portfolio"],
  openGraph: {
    title: "Jaspreet Kaur | Full Stack Developer",
    description: "Full Stack Developer Intern — Next.js, React, TypeScript, AI integrations.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
