import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const skills = [
  { name: "HTML", level: 95 },
  { name: "CSS", level: 90 },
  { name: "JavaScript", level: 85 },
  { name: "React", level: 88 },
  { name: "React Native", level: 80 },
  { name: "Node.js", level: 75 },
  { name: "Git", level: 85 },
  { name: "GitHub", level: 90 },
];

const techSkills = [
  "VS Code",
  "Cursor AI", 
  "Framer Motion",
  "SCSS",
  "Responsive Design",
  "API Integration",
  "Teamwork",
  "Problem-solving",
  "Communication",
  "Adaptability",
];

export const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const skillsSection = document.getElementById('skills');
    if (skillsSection) {
      observer.observe(skillsSection);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" className="section">
      <motion.h2
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="section-title"
      >
        Skills
      </motion.h2>
      
      <div className="grid grid-2" style={{ gap: "3rem", marginTop: "2rem" }}>
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 style={{ marginBottom: "1.5rem", fontSize: "1.2rem", fontWeight: "600" }}>
            Technical Skills
          </h3>
          <div className="skill-progress">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="skill-item"
              >
                <div className="skill-name">
                  <span>{skill.name}</span>
                  <span>{skill.level}%</span>
                </div>
                <div className="skill-bar">
                  <motion.div
                    className="skill-fill"
                    initial={{ width: 0 }}
                    animate={isVisible ? { width: `${skill.level}%` } : { width: 0 }}
                    transition={{ duration: 1, delay: index * 0.1 }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 style={{ marginBottom: "1.5rem", fontSize: "1.2rem", fontWeight: "600" }}>
            Technologies & Tools
          </h3>
          <div className="skills-container">
            {techSkills.map((skill, i) => (
              <motion.div
                key={skill}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                whileHover={{ scale: 1.05 }}
                className="skill"
              >
                {skill}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
