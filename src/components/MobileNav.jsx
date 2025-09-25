import React, { useState, useEffect } from "react";
import resumePdf from "../pdf/Untitled Resume.pdf";
import { motion } from "framer-motion";
import { createPortal } from "react-dom";

const navItems = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contacts" },
];

export const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      // Update active section based on scroll position
      const sections = navItems
        .map((item) => document.getElementById(item.id))
        .filter(Boolean);
      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section.offsetTop <= scrollPosition) {
          setActiveSection(section.id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false); // Close mobile menu after clicking
    }
  };

  const toggleMobileNav = () => {
    setIsOpen(!isOpen);
  };

  // Prevent body scroll when mobile nav is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <>
      {/* Hamburger Button */}
      <button
        className={`mobile-nav-toggle ${isOpen ? "active" : ""}`}
        onClick={toggleMobileNav}
        aria-label="Toggle mobile navigation"
      >
        <div className="hamburger-line"></div>
        <div className="hamburger-line"></div>
        <div className="hamburger-line"></div>
      </button>

      {/* Mobile Navigation Overlay */}
      {isOpen &&
        createPortal(
          <motion.div
            className="mobile-nav active"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.2 }}
            role="dialog"
            aria-modal="true"
            onClick={() => setIsOpen(false)}
            onKeyDown={(e) => e.key === "Escape" && setIsOpen(false)}
            tabIndex={-1}
          >
            <div
              className="mobile-nav-inner"
              onClick={(e) => e.stopPropagation()}
            >
              <motion.ul
                className="mobile-nav-links"
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.25, delay: 0.05 }}
              >
                {navItems.map((item, index) => (
                  <motion.li
                    key={item.id}
                    initial={{ y: 10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.2, delay: 0.05 + index * 0.05 }}
                  >
                    <a
                      href={`#${item.id}`}
                      onClick={(e) => {
                        e.preventDefault();
                        scrollToSection(item.id);
                      }}
                      className={activeSection === item.id ? "active" : ""}
                    >
                      {item.label}
                    </a>
                  </motion.li>
                ))}
              </motion.ul>

              <motion.div
                className="mobile-nav-actions"
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.2, delay: 0.3 }}
              >
                <motion.a
                  href={resumePdf}
                  download
                  className="button-ghost"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  style={{ padding: "0.75rem 2rem", fontSize: "1.1rem" }}
                >
                  Resume
                </motion.a>
                <motion.button
                  className="button-primary"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => scrollToSection("contact")}
                  style={{ padding: "0.75rem 2rem", fontSize: "1.1rem" }}
                >
                  Hire Me
                </motion.button>
              </motion.div>
            </div>
          </motion.div>,
          document.body
        )}
    </>
  );
};
