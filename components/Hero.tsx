"use client";

import { motion } from "framer-motion";
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconMail,
  IconFileText,
} from "@tabler/icons-react";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" as const } },
};

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
};

// Corner bracket mark — engineering HUD aesthetic
function Bracket({ pos }: { pos: "tl" | "tr" | "bl" | "br" }) {
  const size = 14;
  const offset = -3;
  const w = "1.5px";
  const col = "var(--accent)";
  const styles: React.CSSProperties = {
    position: "absolute",
    width: size,
    height: size,
    ...(pos === "tl" && { top: offset, left: offset, borderTop: `${w} solid ${col}`, borderLeft: `${w} solid ${col}`, borderRadius: "3px 0 0 0" }),
    ...(pos === "tr" && { top: offset, right: offset, borderTop: `${w} solid ${col}`, borderRight: `${w} solid ${col}`, borderRadius: "0 3px 0 0" }),
    ...(pos === "bl" && { bottom: offset, left: offset, borderBottom: `${w} solid ${col}`, borderLeft: `${w} solid ${col}`, borderRadius: "0 0 0 3px" }),
    ...(pos === "br" && { bottom: offset, right: offset, borderBottom: `${w} solid ${col}`, borderRight: `${w} solid ${col}`, borderRadius: "0 0 3px 0" }),
  };
  return <div style={styles} />;
}

export default function Hero() {
  return (
    <motion.section
      initial="hidden"
      animate="visible"
      variants={container}
      className="hero-section sec-hero hero-noise"
      style={{
        position: "relative",
        borderBottom: "0.5px solid rgba(255,255,255,0.06)",
        marginTop: "52px",
        overflow: "hidden",
      }}
    >
      {/* Primary glow — top right */}
      <div
        style={{
          position: "absolute",
          top: "-100px",
          right: "80px",
          width: "480px",
          height: "480px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(217,119,6,0.09) 0%, transparent 65%)",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />
      {/* Secondary glow — bottom left */}
      <div
        style={{
          position: "absolute",
          bottom: "-120px",
          left: "-60px",
          width: "320px",
          height: "320px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(20,184,166,0.05) 0%, transparent 70%)",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />

      {/* Texto izquierda */}
      <div className="hero-text" style={{ position: "relative", zIndex: 1 }}>
        <motion.div
          variants={fadeUp}
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "7px",
            fontFamily: "var(--font-mono)",
            fontSize: "10.5px",
            color: "var(--accent-light)",
            background: "rgba(217,119,6,0.08)",
            border: "0.5px solid rgba(217,119,6,0.25)",
            borderRadius: "20px",
            padding: "5px 11px",
            marginBottom: "20px",
          }}
        >
          <span
            style={{
              width: "6px",
              height: "6px",
              borderRadius: "50%",
              background: "var(--jade)",
              animation: "pfPulse 2s ease-in-out infinite",
              display: "inline-block",
              flexShrink: 0,
            }}
          />
          Disponible para nuevos roles
        </motion.div>

        <motion.h1
          variants={fadeUp}
          style={{
            fontFamily: "var(--font-sans)",
            fontSize: "clamp(28px, 4vw, 40px)",
            fontWeight: 600,
            color: "var(--text-primary)",
            margin: "0 0 10px",
            lineHeight: 1.1,
            letterSpacing: "-0.02em",
          }}
        >
          Denuar Andrés
          <br />
          <span style={{ color: "var(--accent)" }}>Ramos Lezama</span>
        </motion.h1>

        <motion.p
          variants={fadeUp}
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "12.5px",
            color: "var(--text-secondary)",
            margin: "0 0 18px",
            letterSpacing: "-0.01em",
          }}
        >
          Data Engineer · ML Engineer · 4.7110° N, 74.0721° W
        </motion.p>

        <motion.p
          variants={fadeUp}
          style={{
            fontSize: "14px",
            color: "var(--text-secondary)",
            lineHeight: 1.7,
            maxWidth: "440px",
            margin: "0 0 28px",
          }}
        >
          Ingeniero Electrónico que diseña{" "}
          <strong style={{ color: "var(--text-accent)", fontWeight: 500 }}>
            pipelines de datos
          </strong>
          ,{" "}
          <strong style={{ color: "var(--text-accent)", fontWeight: 500 }}>
            modelos de ML
          </strong>{" "}
          y sistemas de{" "}
          <strong style={{ color: "var(--text-accent)", fontWeight: 500 }}>
            automatización
          </strong>{" "}
          que corren en producción. Especialización en Análisis de Datos en CUN.
        </motion.p>

        <motion.div variants={fadeUp} className="hero-buttons">
          <a
            href="https://pub-9883aa6cd5de40848407ddf19a82d12d.r2.dev/cv.pdf"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontSize: "12.5px",
              fontWeight: 500,
              padding: "10px 18px",
              background: "var(--accent)",
              color: "#0c0b09",
              border: "none",
              borderRadius: "9px",
              cursor: "pointer",
              display: "inline-flex",
              alignItems: "center",
              gap: "6px",
              textDecoration: "none",
              transition: "opacity 0.2s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.85")}
            onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
          >
            <IconFileText size={15} stroke={1.8} />
            Ver CV
          </a>
          <a
            href="https://github.com/TheBarrelExploit"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontSize: "12.5px",
              fontWeight: 500,
              padding: "10px 18px",
              background: "rgba(255,255,255,0.04)",
              color: "var(--text-secondary)",
              border: "0.5px solid rgba(255,255,255,0.12)",
              borderRadius: "9px",
              cursor: "pointer",
              display: "inline-flex",
              alignItems: "center",
              gap: "6px",
              textDecoration: "none",
              transition: "border-color 0.2s, color 0.2s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "rgba(217,119,6,0.4)";
              e.currentTarget.style.color = "var(--text-primary)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "rgba(255,255,255,0.12)";
              e.currentTarget.style.color = "var(--text-secondary)";
            }}
          >
            <IconBrandGithub size={15} stroke={1.8} />
            GitHub
          </a>
        </motion.div>
      </div>

      {/* Avatar derecha */}
      <motion.div
        variants={fadeUp}
        style={{
          flexShrink: 0,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "16px",
          position: "relative",
          zIndex: 1,
        }}
      >
        {/* Avatar with corner brackets */}
        <motion.div
          whileHover={{ scale: 1.03 }}
          transition={{ type: "spring", stiffness: 300, damping: 22 }}
          style={{ position: "relative", width: "148px", height: "148px" }}
        >
          <Bracket pos="tl" />
          <Bracket pos="tr" />
          <Bracket pos="bl" />
          <Bracket pos="br" />

          <div
            style={{
              width: "148px",
              height: "148px",
              borderRadius: "16px",
              background:
                "linear-gradient(135deg, rgba(217,119,6,0.18) 0%, rgba(217,119,6,0.04) 100%)",
              borderWidth: "1px",
              borderStyle: "solid",
              borderColor: "rgba(217,119,6,0.42)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontFamily: "var(--font-sans)",
              fontSize: "46px",
              fontWeight: 700,
              color: "var(--accent-light)",
              letterSpacing: "-0.04em",
              boxShadow:
                "0 0 0 1px rgba(217,119,6,0.1), 0 0 28px rgba(217,119,6,0.22), 0 8px 36px rgba(217,119,6,0.1), inset 0 1px 0 rgba(255,255,255,0.05)",
            }}
          >
            AR
          </div>
        </motion.div>

        <div style={{ display: "flex", gap: "9px" }}>
          {[
            { href: "https://github.com/TheBarrelExploit", icon: <IconBrandGithub size={16} stroke={1.6} />, label: "GitHub" },
            { href: "https://linkedin.com/in/denuar-andres-ramos-lezama", icon: <IconBrandLinkedin size={16} stroke={1.6} />, label: "LinkedIn" },
            { href: "mailto:dramos2137@gmail.com", icon: <IconMail size={16} stroke={1.6} />, label: "Email" },
          ].map(({ href, icon, label }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
              title={label}
              style={{
                width: "34px",
                height: "34px",
                borderRadius: "9px",
                background: "rgba(255,255,255,0.03)",
                border: "0.5px solid rgba(255,255,255,0.09)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "var(--text-muted)",
                textDecoration: "none",
                transition: "border-color 0.2s, color 0.2s, background 0.2s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "rgba(217,119,6,0.4)";
                e.currentTarget.style.color = "var(--accent-light)";
                e.currentTarget.style.background = "rgba(217,119,6,0.07)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.09)";
                e.currentTarget.style.color = "var(--text-muted)";
                e.currentTarget.style.background = "rgba(255,255,255,0.03)";
              }}
            >
              {icon}
            </a>
          ))}
        </div>
      </motion.div>
    </motion.section>
  );
}
