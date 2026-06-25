"use client";

import { useState, useEffect } from "react";

const links = [
  { label: "Sobre mí", href: "#sobre" },
  { label: "Stack", href: "#stack" },
  { label: "Proyectos", href: "#proyectos" },
  { label: "Experiencia", href: "#experiencia" },
  { label: "Contacto", href: "#contacto" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className="nav-pad"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        height: "52px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        borderBottom: scrolled
          ? "0.5px solid var(--border)"
          : "0.5px solid transparent",
        background: scrolled ? "rgba(12,11,9,0.88)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        transition: "all 0.3s ease",
      }}
    >
      <span
        style={{
          fontFamily: "var(--font-sans)",
          fontSize: "14px",
          fontWeight: 600,
          color: "var(--text-primary)",
          letterSpacing: "-0.02em",
        }}
      >
        AR<span style={{ color: "var(--accent)" }}>.</span>
      </span>

      <ul className="nav-links" style={{ gap: "24px", listStyle: "none" }}>
        {links.map((link) => (
          <li key={link.href}>
            <a
              href={link.href}
              style={{
                fontSize: "12.5px",
                color: "var(--text-muted)",
                textDecoration: "none",
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.color = "var(--text-primary)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.color = "var(--text-muted)")
              }
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
