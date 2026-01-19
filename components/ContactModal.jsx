import React, { useState, useEffect } from "react";
import Image from "next/image";
import emailjs from "@emailjs/browser";
import { assets } from "@/assets/assets";

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
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    try {
      await emailjs.send(
        "service_clvu346", 
        "template_kkao8s1", 
        {
          name: formData.name,
          title: formData.email,
          time: new Date().toLocaleString(),
          email: formData.email,
          message: formData.message,
          to_email: "dori.fourer654@gmail.com", 
        }
      );
      
      setStatus("✓ Message sent successfully!");
      setFormData({ name: "", email: "", message: "" });
      
      // Close modal after 2 seconds
      setTimeout(onClose, 2000);
    } catch (error) {
      console.error("Email error:", error);
      setStatus("✗ Failed to send. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="relative bg-[var(--devops-darker)] rounded-lg border-2 border-[var(--devops-primary)] p-6 sm:p-8 max-w-md w-full">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute -top-3 -right-3 w-8 h-8 flex items-center justify-center rounded-full bg-[var(--devops-primary)] text-[var(--devops-dark)] hover:bg-opacity-90 transition-all duration-300 font-bold text-lg"
          aria-label="Close modal"
        >
          ✕
        </button>

        {/* Title */}
        <h2 className="text-2xl sm:text-3xl font-Ovo text-[var(--devops-primary)] mb-4">Get In Touch</h2>
        <p className="text-gray-300 text-sm sm:text-base mb-6 font-Ovo">Have a question or want to work together? I'd love to hear from you!</p>

        {/* Status Message */}
        {status && (
          <div className={`mb-4 p-3 rounded-lg text-sm font-Ovo ${
            status.includes("✓") 
              ? "bg-green-900 text-green-200" 
              : "bg-red-900 text-red-200"
          }`}>
            {status}
          </div>
        )}

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Name Input */}
          <div>
            <label className="block text-gray-300 text-sm font-Ovo mb-2">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              disabled={loading}
              className="w-full px-4 py-2 rounded-lg bg-[var(--devops-dark)] border-2 border-[var(--devops-primary)] text-white font-Ovo focus:outline-none focus:shadow-[0_0_15px_rgba(79,209,197,0.5)] transition-shadow disabled:opacity-50"
              placeholder="Your Name"
            />
          </div>

          {/* Email Input */}
          <div>
            <label className="block text-gray-300 text-sm font-Ovo mb-2">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              disabled={loading}
              className="w-full px-4 py-2 rounded-lg bg-[var(--devops-dark)] border-2 border-[var(--devops-primary)] text-white font-Ovo focus:outline-none focus:shadow-[0_0_15px_rgba(79,209,197,0.5)] transition-shadow disabled:opacity-50"
              placeholder="your@email.com"
            />
          </div>

          {/* Message Input */}
          <div>
            <label className="block text-gray-300 text-sm font-Ovo mb-2">Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              disabled={loading}
              rows="4"
              className="w-full px-4 py-2 rounded-lg bg-[var(--devops-dark)] border-2 border-[var(--devops-primary)] text-white font-Ovo focus:outline-none focus:shadow-[0_0_15px_rgba(79,209,197,0.5)] transition-shadow resize-none disabled:opacity-50"
              placeholder="Your message..."
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full px-6 py-3 rounded-full bg-[var(--devops-primary)] text-[var(--devops-dark)] font-semibold hover:bg-opacity-90 transition-all duration-300 mt-6 font-Ovo disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactModal;