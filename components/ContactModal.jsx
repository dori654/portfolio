"use client";
import React, { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import { motion, AnimatePresence } from "framer-motion";

const ContactModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  useEffect(() => {
    emailjs.init("BXAfglqoLN8T8ZIbJ");
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    try {
      await emailjs.send("service_clvu346", "template_kkao8s1", {
        name: formData.name,
        title: formData.email,
        time: new Date().toLocaleString(),
        email: formData.email,
        message: formData.message,
        to_email: "dori.fourer654@gmail.com",
      });

      setStatus("success");
      setFormData({ name: "", email: "", message: "" });
      setTimeout(onClose, 2000);
    } catch (error) {
      console.error("Email error:", error);
      setStatus("error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="dialog">
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
            className="dialog__scrim"
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 8 }}
            transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
            role="dialog"
            aria-modal="true"
            aria-labelledby="contact-title"
            className="dialog__panel"
          >
            {/* Close */}
            <button
              type="button"
              onClick={onClose}
              className="icon-btn dialog__close"
              aria-label="Close modal"
            >
              &times;
            </button>

            <h2 id="contact-title" style={{ fontSize: "var(--text-2xl)" }}>Get In Touch</h2>
            <p style={{ color: "var(--color-muted)", fontSize: "var(--text-sm)", margin: "var(--space-sm) 0 var(--space-lg)" }}>
              Have a question or want to work together? I&rsquo;d love to hear from you.
            </p>

            {/* Status */}
            {status && (
              <div
                role="status"
                className={`status ${status === "success" ? "status--ok" : "status--bad"}`}
                style={{ marginBottom: "var(--space-md)" }}
              >
                {status === "success" ? "Message sent successfully!" : "Failed to send. Please try again."}
              </div>
            )}

            {/* Form */}
            <form onSubmit={handleSubmit} style={{ display: "grid", gap: "var(--space-md)" }}>
              <div className="field">
                <label htmlFor="contact-name">Name</label>
                <input
                  type="text"
                  id="contact-name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  disabled={loading}
                  placeholder="Your Name"
                />
              </div>

              <div className="field">
                <label htmlFor="contact-email">Email</label>
                <input
                  type="email"
                  id="contact-email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  disabled={loading}
                  placeholder="your@email.com"
                />
              </div>

              <div className="field">
                <label htmlFor="contact-message">Message</label>
                <textarea
                  id="contact-message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  disabled={loading}
                  rows="4"
                  placeholder="Your message..."
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="btn btn--primary btn--block"
              >
                {loading ? "Sending..." : "Send Message"}
              </button>
            </form>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default ContactModal;
