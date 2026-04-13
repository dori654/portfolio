import React, { useState, useEffect } from "react";
import Image from "next/image";
import { assets } from "@/assets/assets";
import { motion } from "framer-motion";
import ContactModal from "./ContactModal";

const roles = [
  "Software Engineer",
  "Full-Stack Developer",
  "DevOps Specialist",
  "Cloud Architect",
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export const Header = () => {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    let timeout;

    if (!isDeleting && displayText === currentRole) {
      timeout = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && displayText === "") {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
    } else if (isDeleting) {
      timeout = setTimeout(() => setDisplayText((prev) => prev.slice(0, -1)), 40);
    } else {
      timeout = setTimeout(
        () => setDisplayText(currentRole.slice(0, displayText.length + 1)),
        80
      );
    }

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, roleIndex]);

  return (
    <header className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden px-4 py-12 sm:py-0">
      {/* Animated gradient blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="hero-blob-1 absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full bg-[var(--primary)] opacity-[0.07] blur-[120px]" />
        <div className="hero-blob-2 absolute top-1/3 right-1/4 w-[400px] h-[400px] rounded-full bg-[var(--secondary)] opacity-[0.07] blur-[120px]" />
        <div className="hero-blob-3 absolute bottom-1/4 left-1/3 w-[350px] h-[350px] rounded-full bg-[var(--accent)] opacity-[0.05] blur-[120px]" />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 flex flex-col items-center gap-6"
      >
        {/* Name + role */}
        <motion.p
          variants={itemVariants}
          className="text-[var(--text-secondary)] text-base sm:text-lg tracking-widest uppercase font-Outfit"
        >
          Dori Fourer
        </motion.p>

        {/* Typing role - large hero text */}
        <motion.h1
          variants={itemVariants}
          className="text-5xl sm:text-7xl lg:text-8xl font-bold text-white text-center leading-tight"
        >
          <span className="gradient-text">{displayText}</span>
          <span className="typing-cursor text-[var(--primary)]">|</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          variants={itemVariants}
          className="text-[var(--text-secondary)] text-base sm:text-lg text-center max-w-xl"
        >
          Building scalable systems from frontend to infrastructure
        </motion.p>

        {/* Description */}
        <motion.p
          variants={itemVariants}
          className="mx-auto max-w-2xl text-center text-[var(--text-secondary)] text-sm sm:text-base leading-relaxed"
        >
          Software Engineer with a B.Sc. in Computer Science and Google Cloud PCA
          certification. I design and build full-stack applications, cloud-native
          infrastructure, and automated CI/CD pipelines — delivering reliable,
          scalable systems from code to production.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="mt-4 flex flex-col items-center gap-4 sm:flex-row"
        >
          <button
            onClick={() => setIsContactOpen(true)}
            className="flex items-center gap-2 rounded-full bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] px-8 py-3 text-white font-medium hover:opacity-90 transition-opacity duration-300 cursor-pointer"
          >
            Get in Touch
            <Image src={assets.right_arrow_white} alt="" className="w-4" />
          </button>

          <a
            href="/Dori_Fourer.pdf"
            download
            className="flex items-center gap-2 rounded-full border border-white/20 px-8 py-3 text-[var(--text-secondary)] hover:border-[var(--primary)] hover:text-[var(--primary)] transition-all duration-300"
          >
            Download Resume
            <Image src={assets.download_icon} alt="" className="w-4 opacity-60" />
          </a>
        </motion.div>

        {/* Social links */}
        <motion.div variants={itemVariants} className="flex gap-4 mt-6">
          {[
            { href: "https://github.com/dori654", icon: assets.github_icon, label: "GitHub" },
            { href: "https://linkedin.com/in/dori-fourer", icon: assets.linkedin_icon, label: "LinkedIn" },
          ].map((social) => (
            <motion.a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center justify-center w-12 h-12 rounded-full border border-white/10 hover:border-[var(--primary)] transition-colors duration-300"
              aria-label={social.label}
            >
              <Image src={social.icon} alt={social.label} className="w-5 brightness-0 invert opacity-60" />
            </motion.a>
          ))}
        </motion.div>
      </motion.div>

      <ContactModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
    </header>
  );
};

export default Header;
