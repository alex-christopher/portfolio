import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "GenAI Engineer | Portfolio",
  description: "Portfolio of a Generative AI Engineer specializing in LLMs, React, Python, and scalable AI solutions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased">
        <div className="fixed inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#1a1a20] via-background to-background opacity-50"></div>
        {children}
      </body>
    </html>
  );
}
