"use client";

import { motion } from "framer-motion";
import { IconBriefcase } from "@tabler/icons-react";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" as const } },
};

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

interface Job {
  role: string;
  company: string;
  period: string;
  description: string;
  color: string;
}

const jobs: Job[] = [
  {
    role: "ML / Computer Vision Engineer",
    company: "HEWTEC",
    period: "2023 – 2024",
    description:
      "Pipelines de reconocimiento facial con YOLOv7 + redes siamesas, estimación de pose en tiempo real e integración con sistemas embebidos.",
    color: "#60a5fa",
  },
  {
    role: "Backend Developer",
    company: "Freelance — Tarificador IPDR",
    period: "2024",
    description:
      "API FastAPI + MongoDB para procesamiento de archivos XML IPDR. Lógica de tarificación por planes y generación de reportes.",
    color: "#f472b6",
  },
  {
    role: "Data & ML Engineer",
    company: "Proyectos de portafolio independientes",
    period: "2024 – presente",
    description:
      "Chicago Crimes Analytics y Call Quality Analyzer. Stack completo de data engineering y MLOps en producción.",
    color: "#34d399",
  },
];

export default function Experience() {
  return (
    <motion.section
      id="experiencia"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={container}
      className="sec"
      style={{
        borderBottom: "0.5px solid rgba(255,255,255,0.06)",
      }}
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
          <span style={{ color: "var(--accent)" }}>04</span>
          <span>—</span>
          <span>TRAYECTORIA</span>
        </div>
        <h2
          style={{
            fontFamily: "var(--font-sans)",
            fontSize: "22px",
            fontWeight: 600,
            color: "var(--text-primary)",
            margin: "0 0 36px",
            letterSpacing: "-0.02em",
          }}
        >
          Experiencia laboral
        </h2>
      </motion.div>

      <div style={{ position: "relative", display: "flex", flexDirection: "column", gap: "0" }}>
        {/* Línea vertical */}
        <div
          style={{
            position: "absolute",
            left: "17px",
            top: "6px",
            bottom: "6px",
            width: "0.5px",
            background: "rgba(255,255,255,0.07)",
          }}
        />

        {jobs.map((job, i) => (
          <motion.div
            key={job.company}
            variants={fadeUp}
            style={{
              display: "flex",
              gap: "24px",
              paddingBottom: i < jobs.length - 1 ? "32px" : "0",
              position: "relative",
            }}
          >
            {/* Dot */}
            <div style={{ flexShrink: 0, position: "relative", zIndex: 1 }}>
              <div
                style={{
                  width: "34px",
                  height: "34px",
                  borderRadius: "50%",
                  background: `${job.color}14`,
                  border: `0.5px solid ${job.color}40`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: job.color,
                }}
              >
                <IconBriefcase size={16} stroke={1.6} />
              </div>
            </div>

            {/* Content */}
            <motion.div
              whileHover={{ borderColor: `${job.color}30` }}
              style={{
                flex: 1,
                background: "var(--bg-card)",
                border: "0.5px solid rgba(255,255,255,0.07)",
                borderRadius: "14px",
                padding: "18px 20px",
                transition: "border-color 0.25s",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  justifyContent: "space-between",
                  gap: "12px",
                  marginBottom: "8px",
                  flexWrap: "wrap",
                }}
              >
                <div>
                  <h3
                    style={{
                      fontSize: "14.5px",
                      fontWeight: 600,
                      color: "var(--text-primary)",
                      margin: "0 0 3px",
                      letterSpacing: "-0.01em",
                    }}
                  >
                    {job.role}
                  </h3>
                  <span style={{ fontSize: "12.5px", color: job.color }}>
                    {job.company}
                  </span>
                </div>
                <span
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "11px",
                    color: "var(--text-muted)",
                    flexShrink: 0,
                  }}
                >
                  {job.period}
                </span>
              </div>
              <p
                style={{
                  fontSize: "13.5px",
                  color: "#8a97aa",
                  lineHeight: 1.7,
                  margin: 0,
                }}
              >
                {job.description}
              </p>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
