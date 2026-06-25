"use client";

import { motion } from "framer-motion";
import { IconMail, IconBrandGithub, IconBrandLinkedin } from "@tabler/icons-react";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" as const } },
};

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const channels = [
  {
    icon: <IconMail size={20} stroke={1.6} />,
    label: "Email",
    value: "dramos2137@gmail.com",
    href: "mailto:dramos2137@gmail.com",
    color: "#60a5fa",
  },
  {
    icon: <IconBrandGithub size={20} stroke={1.6} />,
    label: "GitHub",
    value: "TheBarrelExploit",
    href: "https://github.com/TheBarrelExploit",
    color: "#34d399",
  },
  {
    icon: <IconBrandLinkedin size={20} stroke={1.6} />,
    label: "LinkedIn",
    value: "Denuar Andrés Ramos L.",
    href: "https://linkedin.com/in/denuar",
    color: "#f59e0b",
  },
];

export default function Contact() {
  return (
    <motion.section
      id="contacto"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      variants={container}
      className="sec"
    >
      <motion.div variants={fadeUp}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
            fontFamily: "var(--font-mono)",
            fontSize: "10px",
            color: "var(--text-muted)",
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            marginBottom: "10px",
          }}
        >
          <span style={{ color: "var(--accent)" }}>05</span>
          <span>—</span>
          <span>HÁBLEMOS</span>
        </div>
        <h2
          style={{
            fontFamily: "var(--font-sans)",
            fontSize: "22px",
            fontWeight: 600,
            color: "var(--text-primary)",
            margin: "0 0 8px",
            letterSpacing: "-0.02em",
          }}
        >
          Contacto
        </h2>
        <p
          style={{
            fontSize: "14px",
            color: "var(--text-muted)",
            margin: "0 0 36px",
            maxWidth: "420px",
            lineHeight: 1.7,
          }}
        >
          ¿Tienes un proyecto de datos o ML? Escríbeme, estoy disponible para
          nuevos roles y colaboraciones.
        </p>
      </motion.div>

      {/* Cards — 3 columnas en desktop, 1 en móvil */}
      <div className="contact-grid">
        {channels.map((ch) => (
          <motion.a
            key={ch.label}
            variants={fadeUp}
            href={ch.href}
            target={ch.href.startsWith("http") ? "_blank" : undefined}
            rel={ch.href.startsWith("http") ? "noopener noreferrer" : undefined}
            whileHover={{ y: -3, borderColor: `${ch.color}40` }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "14px",
              padding: "18px 20px",
              background: "var(--bg-card)",
              border: "0.5px solid rgba(255,255,255,0.07)",
              borderRadius: "14px",
              textDecoration: "none",
              transition: "border-color 0.25s",
            }}
          >
            <div
              style={{
                width: "40px",
                height: "40px",
                borderRadius: "10px",
                background: `${ch.color}14`,
                border: `0.5px solid ${ch.color}30`,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: ch.color,
                flexShrink: 0,
              }}
            >
              {ch.icon}
            </div>
            <div style={{ minWidth: 0 }}>
              <div
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "9px",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: "var(--text-muted)",
                  marginBottom: "3px",
                }}
              >
                {ch.label}
              </div>
              <div
                style={{
                  fontSize: "13px",
                  color: "var(--text-secondary)",
                  fontWeight: 500,
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  whiteSpace: "nowrap",
                }}
              >
                {ch.value}
              </div>
            </div>
          </motion.a>
        ))}
      </div>

      {/* Footer */}
      <motion.div
        variants={fadeUp}
        style={{
          marginTop: "56px",
          paddingTop: "24px",
          borderTop: "0.5px solid rgba(255,255,255,0.05)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <p
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "11px",
            color: "var(--text-muted)",
            letterSpacing: "0.02em",
          }}
        >
          © 2026 Denuar Andrés Ramos Lezama · Bogotá, Colombia
        </p>
      </motion.div>
    </motion.section>
  );
}
