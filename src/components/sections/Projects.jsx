import React, { useState } from "react";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Battleship Game",
    stack: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/imrandesk/battleship",
    live: "https://imrandesk.github.io/battleship/",
    description: "Implements basic data structures for the game, using a terminal to display ships and track hits/misses.",
    image: "https://images.unsplash.com/photo-1556438064-2d7646166914?w=400&h=300&fit=crop",
    category: "Game Development"
  },
  {
    title: "Movie Titles API",
    stack: ["React", "API", "JavaScript"],
    github: "https://github.com/imrandesk/movie-api",
    live: "https://imrandesk.github.io/movie-api/",
    description: "Uses a public movie API to build a collection list, allowing sorting and adding user favorites.",
    image: "https://images.unsplash.com/photo-1489599804151-0b0b0b0b0b0b?w=400&h=300&fit=crop",
    category: "Web Application"
  },
  {
    title: "JavaScript Calculator",
    stack: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/imrandesk/calculator",
    live: "https://imrandesk.github.io/calculator/",
    description: "Uses simple algorithm concepts to produce arithmetic results in a terminal.",
    image: "https://images.unsplash.com/photo-1587145820266-a5951ee6f620?w=400&h=300&fit=crop",
    category: "Utility"
  },
  {
    title: "SaaS Landing Page",
    stack: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/imrandesk/saas-landing",
    live: "https://imrandesk.github.io/saas-landing/",
    description: "Uses HTML concepts, grid, and flexbox to create a landing page.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop",
    category: "Landing Page"
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
        style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "2rem" }}
      >
        <h2 className="section-title">Projects</h2>
        <div style={{ width: "4px", height: "40px", background: "#f97316", borderRadius: "2px" }}></div>
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
                  <span key={tech} className="stack-tag">{tech}</span>
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
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M7 17L17 7M17 7H7M17 7V17"/>
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
            padding: "2rem"
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
              overflow: "auto"
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "start", marginBottom: "1rem" }}>
              <h3 style={{ fontSize: "1.5rem", fontWeight: "600", color: "#fff" }}>
                {selectedProject.title}
              </h3>
              <button
                onClick={closeModal}
                style={{
                  background: "none",
                  border: "none",
                  color: "#fff",
                  fontSize: "1.5rem",
                  cursor: "pointer"
                }}
              >
                ×
              </button>
            </div>
            <img 
              src={selectedProject.image} 
              alt={selectedProject.title}
              style={{ width: "100%", height: "200px", objectFit: "cover", borderRadius: "0.5rem", marginBottom: "1rem" }}
            />
            <p style={{ color: "#94a3b8", marginBottom: "1rem" }}>
              {selectedProject.description}
            </p>
            <div style={{ display: "flex", gap: "1rem", marginBottom: "1rem" }}>
              {selectedProject.stack.map((tech) => (
                <span key={tech} className="stack-tag">{tech}</span>
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
