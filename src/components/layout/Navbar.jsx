import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const navItems = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contacts" },
];

export const Navbar = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Update active section based on scroll position
      const sections = navItems.map(item => document.getElementById(item.id)).filter(Boolean);
      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section.offsetTop <= scrollPosition) {
          setActiveSection(section.id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.header 
      className="site-header"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      style={{
        background: isScrolled ? "rgba(15, 20, 25, 0.95)" : "rgba(15, 20, 25, 0.8)"
      }}
    >
      <nav className="navbar">
        <motion.a 
          href="#home" 
          className="nav-brand"
          whileHover={{ scale: 1.05 }}
          onClick={(e) => {
            e.preventDefault();
            scrollToSection('home');
          }}
        >
          Imran
        </motion.a>
        <ul className="nav-links">
          {navItems.map((item) => (
            <li key={item.id}>
              <a 
                href={`#${item.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(item.id);
                }}
                style={{
                  color: activeSection === item.id ? "#f97316" : "inherit"
                }}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <motion.button
          className="button-primary"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => scrollToSection('contact')}
          style={{ fontSize: "0.9rem" }}
        >
          Hire Me
        </motion.button>
      </nav>
    </motion.header>
  );
};
