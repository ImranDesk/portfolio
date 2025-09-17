import React from "react";
import { motion } from "framer-motion";

export const Home = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="hero">
      <div className="container">
        <div className="hero-content">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="hero-text"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="hero-greeting"
            >
              Hello.
              <div className="hero-dot"></div>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="hero-name"
            >
              I'm Imran
            </motion.h1>
            
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="hero-title"
            >
              Software Developer
            </motion.h2>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="hero-actions"
            >
              <button 
                onClick={() => scrollToSection('projects')}
                className="button-primary"
              >
                Got a project?
              </button>
              <a 
                href="/resume.pdf" 
                target="_blank" 
                rel="noopener noreferrer"
                className="button-ghost"
              >
                My resume
              </a>
            </motion.div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="hero-visual"
          >
            <div className="hero-bg-shapes">
              <div className="hero-circle"></div>
              <div className="hero-chevron"></div>
              <div className="hero-chevron"></div>
            </div>
            <motion.img
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.8, delay: 0.6, type: "spring", stiffness: 100 }}
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face"
              alt="Imran"
              className="hero-image"
            />
          </motion.div>
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="hero-meta"
        >
          <span className="muted">Suri, West Bengal, India · </span>
          <a href="tel:+917470007436">+91 7470007436</a>
          <span className="muted"> · </span>
          <a href="mailto:syed16imran@gmail.com">syed16imran@gmail.com</a>
        </motion.div>
      </div>
    </section>
  );
};
