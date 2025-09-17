import React from "react";
import { motion } from "framer-motion";

const services = [
  {
    icon: "< />",
    title: "Website Development",
    description: "Creating responsive and modern web applications",
  },
  {
    icon: "📱",
    title: "App Development",
    description: "Building mobile applications with React Native",
  },
  {
    icon: "☁️",
    title: "Website Hosting",
    description: "Deploying and maintaining web applications",
  },
];

const stats = [
  { number: "120+", label: "Completed Projects" },
  { number: "95%", label: "Client satisfaction" },
  { number: "3+", label: "Years of experience" },
];

export const About = () => {
  return (
    <section id="about" className="section">
      <div className="grid grid-2" style={{ gap: "4rem", alignItems: "start" }}>
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div style={{ position: "relative" }}>
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "1rem",
                  marginBottom: "2rem",
                  position: "relative",
                }}
              >
                <div
                  style={{
                    width: "60px",
                    height: "60px",
                    border: "2px solid #f97316",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "1.5rem",
                    color: "#f97316",
                    background: "rgba(249, 115, 22, 0.1)",
                  }}
                >
                  {service.icon}
                </div>
                <div>
                  <h3
                    style={{
                      fontSize: "1.1rem",
                      fontWeight: "600",
                      marginBottom: "0.25rem",
                    }}
                  >
                    {service.title}
                  </h3>
                  <p style={{ color: "#94a3b8", fontSize: "0.9rem" }}>
                    {service.description}
                  </p>
                </div>
                {index < services.length - 1 && (
                  <div
                    style={{
                      position: "absolute",
                      left: "29px",
                      top: "60px",
                      width: "2px",
                      height: "2rem",
                      background: "#f97316",
                      opacity: 0.3,
                    }}
                  ></div>
                )}
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
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            style={{
              fontSize: "1.5rem",
              fontWeight: "600",
              marginBottom: "1.5rem",
            }}
          >
            About me
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{
              color: "#94a3b8",
              lineHeight: "1.6",
              marginBottom: "2rem",
              fontSize: "1rem",
            }}
          >
            Passionate and detail-oriented Front-End Developer with hands-on
            experience in developing web and mobile applications using React,
            React Native, and JavaScript. Strong foundation in UI/UX principles,
            teamwork, and problem-solving. I love creating and building
            innovative solutions that make a difference.
          </motion.p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "1.5rem",
            }}
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                style={{ textAlign: "center" }}
              >
                <div
                  style={{
                    fontSize: "2rem",
                    fontWeight: "700",
                    color: "#fff",
                    marginBottom: "0.25rem",
                  }}
                >
                  {stat.number}
                </div>
                <div
                  style={{
                    fontSize: "0.9rem",
                    color: "#94a3b8",
                    fontWeight: "500",
                  }}
                >
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
