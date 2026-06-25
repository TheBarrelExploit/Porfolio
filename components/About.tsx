"use client";

import { motion } from "framer-motion";
import { IconMapPin, IconSchool, IconBrandGithub } from "@tabler/icons-react";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" as const } },
};

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

function SectionLabel({ number, label }: { number: string; label: string }) {
  return (
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
      <span style={{ color: "var(--accent)" }}>{number}</span>
      <span>—</span>
      <span>{label}</span>
    </div>
  );
}

function InfoRow({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
      <span
        style={{
          fontFamily: "var(--font-mono)",
          fontSize: "9px",
          letterSpacing: "0.1em",
          textTransform: "uppercase",
          color: "var(--text-muted)",
        }}
      >
        {label}
      </span>
      <div style={{ display: "flex", alignItems: "center", gap: "6px", color: "var(--text-secondary)", fontSize: "13px" }}>
        <span style={{ color: "var(--accent)", flexShrink: 0 }}>{icon}</span>
        {value}
      </div>
    </div>
  );
}

export default function About() {
  return (
    <motion.section
      id="sobre"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      variants={container}
      className="about-layout sec"
      style={{
        borderBottom: "0.5px solid rgba(255,255,255,0.06)",
      }}
    >
      {/* Columna izquierda */}
      <div style={{ minWidth: 0 }}>
        <motion.div variants={fadeUp}>
          <SectionLabel number="01" label="PERFIL" />
          <h2
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: "22px",
              fontWeight: 600,
              color: "var(--text-primary)",
              margin: "0 0 24px",
              letterSpacing: "-0.02em",
            }}
          >
            Sobre mí
          </h2>
        </motion.div>

        <motion.p
          variants={fadeUp}
          style={{
            fontSize: "14px",
            color: "var(--text-secondary)",
            lineHeight: 1.8,
            marginBottom: "14px",
          }}
        >
          Trabajo en la intersección entre{" "}
          <strong style={{ color: "var(--text-accent)", fontWeight: 500 }}>
            ingeniería de datos
          </strong>{" "}
          y{" "}
          <strong style={{ color: "var(--text-accent)", fontWeight: 500 }}>
            machine learning
          </strong>{" "}
          — desde pipelines ETL de millones de registros hasta modelos predictivos y de NLP.
          Me interesa construir sistemas que funcionen en producción, no sólo en notebooks.
        </motion.p>

        <motion.p
          variants={fadeUp}
          style={{
            fontSize: "14px",
            color: "var(--text-secondary)",
            lineHeight: 1.8,
          }}
        >
          Actualmente curso la{" "}
          <strong style={{ color: "var(--text-accent)", fontWeight: 500 }}>
            Especialización en Análisis de Datos
          </strong>{" "}
          en la Corporación CUN, con proyectos de portafolio desplegados en Streamlit Cloud y Modal.
        </motion.p>
      </div>

      {/* Panel derecho */}
      <motion.div
        variants={fadeUp}
        className="about-sidebar"
        style={{
          background: "var(--bg-card)",
          border: "0.5px solid rgba(255,255,255,0.07)",
          borderRadius: "14px",
          padding: "20px",
          display: "flex",
          flexDirection: "column",
          gap: "18px",
          alignSelf: "stretch",
        }}
      >
        <InfoRow
          icon={<IconMapPin size={14} stroke={1.8} />}
          label="Ubicación"
          value="Bogotá, Colombia"
        />

        <div
          style={{
            height: "0.5px",
            background: "rgba(255,255,255,0.06)",
          }}
        />

        <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
          <span
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "9px",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: "var(--text-muted)",
            }}
          >
            Formación
          </span>
          <div style={{ display: "flex", alignItems: "flex-start", gap: "6px" }}>
            <IconSchool
              size={14}
              stroke={1.8}
              style={{ color: "var(--accent)", marginTop: "2px", flexShrink: 0 }}
            />
            <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
              <span style={{ fontSize: "13px", color: "var(--text-secondary)" }}>
                Esp. Análisis de Datos — CUN
              </span>
              <span style={{ fontSize: "12px", color: "var(--text-muted)" }}>
                Ingeniería Electrónica
              </span>
              <span
                style={{
                  fontSize: "11px",
                  color: "var(--text-muted)",
                  fontFamily: "var(--font-mono)",
                }}
              >
                Herramientas: Power BI · SQL · Excel intermedio
              </span>
            </div>
          </div>
        </div>

        <div
          style={{
            height: "0.5px",
            background: "rgba(255,255,255,0.06)",
          }}
        />

        <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
          <span
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "9px",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: "var(--text-muted)",
            }}
          >
            Despliegues
          </span>
          <div style={{ display: "flex", gap: "6px", flexWrap: "wrap" }}>
          {["Streamlit Cloud", "Modal"].map((tool) => (
            <span
              key={tool}
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "10.5px",
                padding: "4px 9px",
                background: "rgba(217,119,6,0.08)",
                border: "0.5px solid rgba(217,119,6,0.22)",
                borderRadius: "6px",
                color: "var(--accent-light)",
              }}
            >
              {tool}
            </span>
          ))}
          </div>
        </div>

        <div
          style={{
            height: "0.5px",
            background: "rgba(255,255,255,0.06)",
          }}
        />

        <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
          <span
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "9px",
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              color: "var(--text-muted)",
              marginBottom: "4px",
            }}
          >
            GitHub
          </span>
          <a
            href="https://github.com/TheBarrelExploit"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "6px",
              fontSize: "12px",
              color: "var(--accent-light)",
              textDecoration: "none",
              fontFamily: "var(--font-mono)",
              transition: "opacity 0.2s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.75")}
            onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
          >
            <IconBrandGithub size={13} stroke={1.8} />
            github.com/TheBarrelExploit
          </a>
        </div>
      </motion.div>
    </motion.section>
  );
}
