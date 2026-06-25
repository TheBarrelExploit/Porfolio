"use client";

import { motion } from "framer-motion";
import {
  IconBrain,
  IconDatabase,
  IconCode,
  IconServer,
  IconChartBar,
} from "@tabler/icons-react";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
};

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const badgeVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.3 } },
};

interface Category {
  icon: React.ReactNode;
  title: string;
  // rgba values stored separately so Framer Motion can animate borderColor correctly
  colorHex: string;
  colorBg: string;   // rgba for icon background
  colorBorder: string; // rgba for icon border
  colorHover: string;  // rgba for card hover border
  techs: string[];
}

const categories: Category[] = [
  {
    icon: <IconBrain size={18} stroke={1.6} />,
    title: "Machine Learning",
    colorHex: "#f59e0b",
    colorBg: "rgba(245,158,11,0.1)",
    colorBorder: "rgba(245,158,11,0.22)",
    colorHover: "rgba(245,158,11,0.3)",
    techs: ["XGBoost", "PyCaret", "MLflow", "Optuna", "Evidently", "scikit-learn"],
  },
  {
    icon: <IconDatabase size={18} stroke={1.6} />,
    title: "Data Engineering",
    colorHex: "#60a5fa",
    colorBg: "rgba(96,165,250,0.1)",
    colorBorder: "rgba(96,165,250,0.22)",
    colorHover: "rgba(96,165,250,0.3)",
    techs: ["PySpark", "DuckDB", "Parquet", "SQL", "MotherDuck", "Cloudflare R2"],
  },
  {
    icon: <IconCode size={18} stroke={1.6} />,
    title: "Backend & APIs",
    colorHex: "#c084fc",
    colorBg: "rgba(192,132,252,0.1)",
    colorBorder: "rgba(192,132,252,0.22)",
    colorHover: "rgba(192,132,252,0.3)",
    techs: ["FastAPI", "Python", "Pydantic v2", "Whisper", "MongoDB", "xml.etree"],
  },
  {
    icon: <IconServer size={18} stroke={1.6} />,
    title: "Infra & MLOps",
    colorHex: "#34d399",
    colorBg: "rgba(52,211,153,0.1)",
    colorBorder: "rgba(52,211,153,0.22)",
    colorHover: "rgba(52,211,153,0.3)",
    techs: ["Docker", "Modal", "Cloudflare R2", "GitHub Actions", "DeepHub", "Lambda"],
  },
  {
    icon: <IconChartBar size={18} stroke={1.6} />,
    title: "Visualización & BI",
    colorHex: "#f472b6",
    colorBg: "rgba(244,114,182,0.1)",
    colorBorder: "rgba(244,114,182,0.22)",
    colorHover: "rgba(244,114,182,0.3)",
    techs: ["Power BI", "Plotly", "Streamlit", "DAX", "Excel", "Matplotlib"],
  },
];

function CategoryCard({ cat }: { cat: Category }) {
  return (
    <motion.div
      variants={fadeUp}
      whileHover={{ y: -3, borderColor: cat.colorHover }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      style={{
        background: "var(--bg-card)",
        // Split border shorthand so Framer Motion can animate borderColor
        borderWidth: "0.5px",
        borderStyle: "solid",
        borderColor: "rgba(255,255,255,0.07)",
        borderRadius: "14px",
        padding: "20px",
        display: "flex",
        flexDirection: "column",
        gap: "14px",
      }}
    >
      <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
        <div
          style={{
            width: "36px",
            height: "36px",
            borderRadius: "9px",
            background: cat.colorBg,
            border: `0.5px solid ${cat.colorBorder}`,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: cat.colorHex,
          }}
        >
          {cat.icon}
        </div>
        <span
          style={{
            fontSize: "13px",
            fontWeight: 600,
            color: "var(--text-primary)",
            letterSpacing: "-0.01em",
          }}
        >
          {cat.title}
        </span>
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}
      >
        {cat.techs.map((tech) => (
          <motion.span
            key={tech}
            variants={badgeVariants}
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "11px",
              padding: "3px 9px",
              background: "rgba(255,255,255,0.04)",
              border: "0.5px solid rgba(255,255,255,0.09)",
              borderRadius: "6px",
              color: "var(--text-secondary)",
              cursor: "default",
            }}
          >
            {tech}
          </motion.span>
        ))}
      </motion.div>
    </motion.div>
  );
}

export default function Stack() {
  return (
    <motion.section
      id="stack"
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
          <span style={{ color: "var(--accent)" }}>02</span>
          <span>—</span>
          <span>TECNOLOGÍAS</span>
        </div>
        <h2
          style={{
            fontFamily: "var(--font-sans)",
            fontSize: "22px",
            fontWeight: 600,
            color: "var(--text-primary)",
            margin: "0 0 32px",
            letterSpacing: "-0.02em",
          }}
        >
          Stack técnico
        </h2>
      </motion.div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
        {categories.map((cat) => (
          <CategoryCard key={cat.title} cat={cat} />
        ))}
      </div>
    </motion.section>
  );
}
