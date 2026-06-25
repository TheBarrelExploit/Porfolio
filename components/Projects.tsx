"use client";

import { motion } from "framer-motion";
import { IconBrandGithub, IconExternalLink, IconStar } from "@tabler/icons-react";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" as const } },
};

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

interface Stat {
  value: string;
  label: string;
}

interface Project {
  featured?: boolean;
  title: string;
  subtitle: string;
  tags: string[];
  description: string;
  stats?: Stat[];
  techs: string[];
  repo?: string;
  demo?: string;
}

const projects: Project[] = [
  {
    featured: true,
    title: "Chicago Crimes Analytics",
    subtitle: "Pipeline de datos + modelo predictivo de criminalidad a gran escala",
    tags: ["Data", "ML"],
    description:
      "Pipeline ETL completo con Polars sobre 8.5M crímenes históricos de Chicago. Modelo XGBoost con GPU, tracking con MLflow/DagsHub, monitoreo de drift con Evidently y dashboard interactivo en Streamlit Cloud. Data lake en Cloudflare R2 + MotherDuck como data warehouse.",
    stats: [
      { value: "8.5M", label: "registros procesados" },
      { value: "~85%", label: "accuracy" },
      { value: "0.90", label: "ROC-AUC" },
    ],
    techs: ["Polars", "XGBoost GPU", "DuckDB", "MLflow", "Evidently", "Streamlit", "Modal"],
    repo: "https://github.com/TheBarrelExploit/chicago-crimes-analytics",
    demo: "#",
  },
  {
    title: "Call Quality Analyzer",
    subtitle: "Análisis automático de llamadas con IA",
    tags: ["ML", "NLP"],
    description:
      "Transcribe audios de llamadas y las analiza con Gemini 2.5 Flash — detectando tono, cumplimiento de guión, sentimiento y métricas de calidad. Interfaz Streamlit con reporte descargable.",
    techs: ["Whisper", "Gemini 2.5", "Streamlit", "FastAPI"],
    repo: "https://github.com/TheBarrelExploit/call-quality-analyzer",
    demo: "#",
  },
  {
    title: "Tarificador IPDR",
    subtitle: "API de procesamiento de registros — FastAPI",
    tags: ["Backend", "API"],
    description:
      "API REST con FastAPI y MongoDB para procesar y tarifar archivos XML de registros IPDR de telecomunicaciones. Parsing optimizado para gran volumen, lógica de tarificación por clases y exportación de reportes.",
    techs: ["FastAPI", "MongoDB", "Pydantic v2", "xml.etree"],
    repo: "https://github.com/TheBarrelExploit/Transfer-Call-Demo-Backend",
  },
];

const tagColors: Record<string, { bg: string; color: string; border: string }> = {
  Data:     { bg: "rgba(96,165,250,0.12)",  color: "#60a5fa",  border: "rgba(96,165,250,0.25)" },
  ML:       { bg: "rgba(52,211,153,0.12)",  color: "#34d399",  border: "rgba(52,211,153,0.25)" },
  NLP:      { bg: "rgba(251,191,36,0.12)",  color: "#fbbf24",  border: "rgba(251,191,36,0.25)" },
  Backend:  { bg: "rgba(244,114,182,0.12)", color: "#f472b6",  border: "rgba(244,114,182,0.25)" },
  API:      { bg: "rgba(217,119,6,0.1)", color: "#f59e0b",  border: "rgba(217,119,6,0.25)" },
};

function Tag({ label }: { label: string }) {
  const style = tagColors[label] ?? {
    bg: "rgba(255,255,255,0.06)",
    color: "var(--text-secondary)",
    border: "rgba(255,255,255,0.1)",
  };
  return (
    <span
      style={{
        fontFamily: "var(--font-mono)",
        fontSize: "10px",
        padding: "3px 8px",
        background: style.bg,
        border: `0.5px solid ${style.border}`,
        borderRadius: "5px",
        color: style.color,
        letterSpacing: "0.02em",
        whiteSpace: "nowrap" as const,
      }}
    >
      {label}
    </span>
  );
}

function TechBadge({ label }: { label: string }) {
  return (
    <span
      style={{
        fontFamily: "var(--font-mono)",
        fontSize: "11px",
        padding: "3px 9px",
        background: "rgba(255,255,255,0.04)",
        border: "0.5px solid rgba(255,255,255,0.09)",
        borderRadius: "6px",
        color: "var(--text-muted)",
        whiteSpace: "nowrap" as const,
      }}
    >
      {label}
    </span>
  );
}

function LinkButton({
  href,
  icon,
  label,
}: {
  href: string;
  icon: React.ReactNode;
  label: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "5px",
        fontSize: "12px",
        fontWeight: 500,
        padding: "7px 14px",
        background: "rgba(255,255,255,0.04)",
        border: "0.5px solid rgba(255,255,255,0.1)",
        borderRadius: "8px",
        color: "var(--text-secondary)",
        textDecoration: "none",
        transition: "border-color 0.2s, color 0.2s",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = "rgba(217,119,6,0.4)";
        e.currentTarget.style.color = "var(--accent-light)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)";
        e.currentTarget.style.color = "var(--text-secondary)";
      }}
    >
      {icon}
      {label}
    </a>
  );
}

function FeaturedProject({ project }: { project: Project }) {
  return (
    <motion.div
      variants={fadeUp}
      whileHover={{ borderColor: "rgba(217,119,6,0.25)" }}
      className="featured-card"
      style={{
        background: "var(--bg-card)",
        border: "0.5px solid rgba(255,255,255,0.07)",
        borderRadius: "16px",
        marginBottom: "14px",
        transition: "border-color 0.25s",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "flex-start",
          justifyContent: "space-between",
          marginBottom: "16px",
          gap: "12px",
          flexWrap: "wrap",
        }}
      >
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "4px" }}>
            <IconStar size={13} stroke={1.8} style={{ color: "var(--accent)" }} />
            <span
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "9px",
                textTransform: "uppercase",
                letterSpacing: "0.1em",
                color: "var(--accent)",
              }}
            >
              Proyecto destacado
            </span>
          </div>
          <h3
            style={{
              fontSize: "17px",
              fontWeight: 600,
              color: "var(--text-primary)",
              letterSpacing: "-0.01em",
              margin: 0,
            }}
          >
            {project.title}
          </h3>
          <p style={{ fontSize: "12.5px", color: "var(--text-muted)", margin: "3px 0 0" }}>
            {project.subtitle}
          </p>
        </div>
        <div style={{ display: "flex", gap: "6px", flexWrap: "wrap" }}>
          {project.tags.map((t) => (
            <Tag key={t} label={t} />
          ))}
        </div>
      </div>

      {/* Stats */}
      {project.stats && (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: `repeat(${project.stats.length}, 1fr)`,
            padding: "16px 0",
            borderTop: "0.5px solid rgba(255,255,255,0.05)",
            borderBottom: "0.5px solid rgba(255,255,255,0.05)",
            marginBottom: "18px",
          }}
        >
          {project.stats.map((s, i) => (
            <div
              key={s.label}
              style={{
                paddingLeft: i > 0 ? "24px" : "0",
                paddingRight: i < project.stats!.length - 1 ? "24px" : "0",
                borderRight:
                  i < project.stats!.length - 1
                    ? "0.5px solid rgba(255,255,255,0.06)"
                    : "none",
              }}
            >
              <div
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "22px",
                  fontWeight: 600,
                  color: "var(--text-primary)",
                  letterSpacing: "-0.02em",
                }}
              >
                {s.value}
              </div>
              <div style={{ fontSize: "11px", color: "var(--text-muted)", marginTop: "2px" }}>
                {s.label}
              </div>
            </div>
          ))}
        </div>
      )}

      <p
        style={{
          fontSize: "13.5px",
          color: "#8a97aa",
          lineHeight: 1.75,
          marginBottom: "18px",
        }}
      >
        {project.description}
      </p>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: "12px",
        }}
      >
        <div style={{ display: "flex", gap: "6px", flexWrap: "wrap" }}>
          {project.techs.map((t) => (
            <TechBadge key={t} label={t} />
          ))}
        </div>
        <div style={{ display: "flex", gap: "8px" }}>
          {project.repo && (
            <LinkButton
              href={project.repo}
              icon={<IconBrandGithub size={13} stroke={1.8} />}
              label="Repositorio"
            />
          )}
          {project.demo && (
            <LinkButton
              href={project.demo}
              icon={<IconExternalLink size={13} stroke={1.8} />}
              label="Demo Live"
            />
          )}
        </div>
      </div>
    </motion.div>
  );
}

function SmallProject({ project }: { project: Project }) {
  return (
    <motion.div
      variants={fadeUp}
      whileHover={{ y: -3, borderColor: "rgba(217,119,6,0.2)" }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      style={{
        background: "var(--bg-card)",
        border: "0.5px solid rgba(255,255,255,0.07)",
        borderRadius: "14px",
        padding: "22px",
        display: "flex",
        flexDirection: "column",
        gap: "12px",
        transition: "border-color 0.25s",
      }}
    >
      <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
        <h3
          style={{
            fontSize: "15px",
            fontWeight: 600,
            color: "var(--text-primary)",
            letterSpacing: "-0.01em",
            margin: 0,
          }}
        >
          {project.title}
        </h3>
        <p style={{ fontSize: "12px", color: "var(--text-muted)", margin: 0 }}>
          {project.subtitle}
        </p>
        <div style={{ display: "flex", gap: "5px" }}>
          {project.tags.map((t) => (
            <Tag key={t} label={t} />
          ))}
        </div>
      </div>

      <p style={{ fontSize: "13px", color: "#8a97aa", lineHeight: 1.7, margin: 0 }}>
        {project.description}
      </p>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: "10px",
        }}
      >
        <div style={{ display: "flex", gap: "5px", flexWrap: "wrap" }}>
          {project.techs.map((t) => (
            <TechBadge key={t} label={t} />
          ))}
        </div>
        <div style={{ display: "flex", gap: "6px" }}>
          {project.repo && (
            <LinkButton
              href={project.repo}
              icon={<IconBrandGithub size={13} stroke={1.8} />}
              label="Repositorio"
            />
          )}
          {project.demo && (
            <LinkButton
              href={project.demo}
              icon={<IconExternalLink size={13} stroke={1.8} />}
              label="Demo"
            />
          )}
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const featured = projects.filter((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);

  return (
    <motion.section
      id="proyectos"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.05 }}
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
          <span style={{ color: "var(--accent)" }}>03</span>
          <span>—</span>
          <span>PORTAFOLIO</span>
        </div>
        <h2
          style={{
            fontFamily: "var(--font-sans)",
            fontSize: "22px",
            fontWeight: 600,
            color: "var(--text-primary)",
            margin: "0 0 6px",
            letterSpacing: "-0.02em",
          }}
        >
          Proyectos destacados
        </h2>
        <p
          style={{
            fontSize: "13px",
            color: "var(--text-muted)",
            margin: "0 0 32px",
            fontFamily: "var(--font-mono)",
          }}
        >
          Datos · Machine Learning · Automatización — desplegados y en producción.
        </p>
      </motion.div>

      {featured.map((p) => (
        <FeaturedProject key={p.title} project={p} />
      ))}

      <div className="projects-small-grid">
        {rest.map((p) => (
          <SmallProject key={p.title} project={p} />
        ))}
      </div>
    </motion.section>
  );
}
