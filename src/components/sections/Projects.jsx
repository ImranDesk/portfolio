import React, { useState } from "react";
import { motion } from "framer-motion";
import futuristic from '../../images/futuristic.png'
import landing from '../../images/landing.png'

const projects = [
  {
    title: "Futuristic Portfolio Website Using React",
    stack: ["React", "framer Motion"],
    github: "https://github.com/ImranDesk/futuristic-portfolio",
    live: "https://futuristic-portfolio-nine.vercel.app",
    description:
      "Created a futuristic portfolio website using React, Framer Motion.",
    image:
      futuristic,
    category: "Game Development",
  },
  {
    title: "Responsive Landing Page",
    stack: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/ImranDesk/landing-page-2",
    live: "https://imrandesk.github.io/landing-page-2/",
    description:
      "Created responsive static website using HTML, CSS, JavaScript.",
    image:
      landing,
    category: "Web Application",
  },
 
];

export const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const openModal = (project) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  return (
    <section id="projects" className="section">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        style={{
          display: "flex",
          alignItems: "center",
          gap: "1rem",
          marginBottom: "2rem",
        }}
      >
        <h2 className="section-title">Projects</h2>
        <div
          style={{
            width: "4px",
            height: "40px",
            background: "#f97316",
            borderRadius: "2px",
          }}
        ></div>
      </motion.div>

      <div className="grid grid-2" style={{ gap: "2rem" }}>
        {projects.map((project, idx) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="project-card card"
            onClick={() => openModal(project)}
          >
            <img
              src={project.image}
              alt={project.title}
              className="project-image"
            />
            <div className="project-content">
              <h3 className="project-title">{project.title}</h3>
              <div className="project-stack">
                {project.stack.map((tech) => (
                  <span key={tech} className="stack-tag">
                    {tech}
                  </span>
                ))}
              </div>
              <p className="project-description">{project.description}</p>
              <div className="project-actions">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link primary"
                  onClick={(e) => e.stopPropagation()}
                >
                  View Github
                </a>
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link secondary"
                  onClick={(e) => e.stopPropagation()}
                >
                  View project
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M7 17L17 7M17 7H7M17 7V17" />
                  </svg>
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Project Modal */}
      {selectedProject && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: "rgba(0, 0, 0, 0.8)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 1000,
            padding: "2rem",
          }}
          onClick={closeModal}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            style={{
              background: "#1e293b",
              borderRadius: "1rem",
              padding: "2rem",
              maxWidth: "600px",
              width: "100%",
              maxHeight: "80vh",
              overflow: "auto",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "start",
                marginBottom: "1rem",
              }}
            >
              <h3
                style={{ fontSize: "1.5rem", fontWeight: "600", color: "#fff" }}
              >
                {selectedProject.title}
              </h3>
              <button
                onClick={closeModal}
                style={{
                  background: "none",
                  border: "none",
                  color: "#fff",
                  fontSize: "1.5rem",
                  cursor: "pointer",
                }}
              >
                ×
              </button>
            </div>
            <img
              src={selectedProject.image}
              alt={selectedProject.title}
              style={{
                width: "100%",
                height: "200px",
                objectFit: "cover",
                borderRadius: "0.5rem",
                marginBottom: "1rem",
              }}
            />
            <p style={{ color: "#94a3b8", marginBottom: "1rem" }}>
              {selectedProject.description}
            </p>
            <div style={{ display: "flex", gap: "1rem", marginBottom: "1rem" }}>
              {selectedProject.stack.map((tech) => (
                <span key={tech} className="stack-tag">
                  {tech}
                </span>
              ))}
            </div>
            <div style={{ display: "flex", gap: "1rem" }}>
              <a
                href={selectedProject.github}
                target="_blank"
                rel="noopener noreferrer"
                className="project-link primary"
              >
                View Github
              </a>
              <a
                href={selectedProject.live}
                target="_blank"
                rel="noopener noreferrer"
                className="project-link secondary"
              >
                View Live Demo
              </a>
            </div>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
};
