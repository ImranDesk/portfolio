import React from "react";
import { motion } from "framer-motion";

const jobs = [
  {
    company: "Runway Technologies Pvt Ltd",
    role: "Front-End Developer",
    period: "09/2021 - 03/2022",
    bullets: [
      "Designed and developed the company’s official landing website.",
      "Built a WhatsApp chatbot (with a Python developer).",
      "Maintained front-end systems and ensured cross-browser compatibility.",
      "Supported troubleshooting and optimization.",
    ],
  },
];

export const Experience = () => {
  return (
    <section id="experience" className="section">
      <motion.h2
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="section-title"
      >
        Experience
      </motion.h2>
      <div className="mt-6" style={{ display: "grid", gap: "1rem" }}>
        {jobs.map((job, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.05 }}
            className="card"
          >
            <div className="job-head">
              <div>
                <h3 className="job-company">{job.company}</h3>
                <p className="job-role">{job.role}</p>
              </div>
              <div className="job-period">{job.period}</div>
            </div>
            <ul style={{ marginTop: "0.75rem", paddingLeft: "1.25rem" }}>
              {job.bullets.map((b, i) => (
                <li key={i} style={{ fontSize: "0.95rem" }}>
                  {b}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
