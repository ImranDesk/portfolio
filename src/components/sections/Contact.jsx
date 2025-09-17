import React, { useState } from "react";
import { motion } from "framer-motion";

export const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState({ type: "idle", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  
  const onSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    if (!form.name || !form.email || !form.message) {
      setStatus({ type: "error", message: "Please fill all fields" });
      setIsSubmitting(false);
      return;
    }
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(form.email)) {
      setStatus({ type: "error", message: "Enter a valid email" });
      setIsSubmitting(false);
      return;
    }
    
    // Simulate form submission
    setTimeout(() => {
      setStatus({ type: "success", message: "Thanks! I will get back to you soon." });
      setForm({ name: "", email: "", message: "" });
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <section id="contact" className="section">
      <div className="grid grid-2" style={{ gap: "4rem", alignItems: "start" }}>
        <motion.div
          initial={{ opacity: 0, x: -20 }}
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
              marginBottom: "0.5rem",
              position: "relative"
            }}
          >
            Contacts
            <div style={{ 
              width: "60px", 
              height: "3px", 
              background: "#f97316", 
              marginTop: "0.5rem",
              borderRadius: "2px"
            }}></div>
          </motion.h2>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{ marginTop: "2rem" }}
          >
            <h3 style={{ fontSize: "1.2rem", fontWeight: "500", marginBottom: "0.5rem" }}>
              Have a project?
            </h3>
            <h4 style={{ fontSize: "1.8rem", fontWeight: "700", color: "#fff", marginBottom: "2rem" }}>
              Let's talk!
            </h4>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <form onSubmit={onSubmit} className="contact-form">
            <div className="form-group">
              <input
                className="input"
                name="name"
                placeholder="Name"
                value={form.name}
                onChange={onChange}
                required
              />
            </div>
            <div className="form-group">
              <input
                className="input"
                name="email"
                type="email"
                placeholder="Email"
                value={form.email}
                onChange={onChange}
                required
              />
            </div>
            <div className="form-group">
              <textarea
                className="textarea"
                name="message"
                placeholder="Message"
                value={form.message}
                onChange={onChange}
                required
              />
            </div>
            <button 
              className="button-primary" 
              type="submit"
              disabled={isSubmitting}
              style={{ 
                width: "100%", 
                padding: "1rem",
                fontSize: "1rem",
                opacity: isSubmitting ? 0.7 : 1,
                cursor: isSubmitting ? "not-allowed" : "pointer"
              }}
            >
              {isSubmitting ? "Sending..." : "Submit"}
            </button>
            
            {status.type !== "idle" && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className={`form-status ${status.type}`}
              >
                {status.message}
              </motion.div>
            )}
          </form>
        </motion.div>
      </div>
    </section>
  );
};
