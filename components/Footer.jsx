import React from "react";
import Image from "next/image";
import { assets } from "@/assets/assets";
import { motion } from "framer-motion";

const Footer = () => {
  const links = [
    { label: "Home", href: "#top" },
    { label: "About", href: "#about" },
    { label: "Tech Stack", href: "#techstack" },
    { label: "Expertise", href: "#services" },
    { label: "Projects", href: "#work" },
  ];

  const socials = [
    { href: "https://github.com/dori654", icon: assets.github_icon, label: "GitHub" },
    { href: "https://linkedin.com/in/dori-fourer", icon: assets.linkedin_icon, label: "LinkedIn" },
  ];

  return (
    <footer className="w-full px-[5%] sm:px-[12%] pt-16 pb-8">
      {/* Gradient line */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-[var(--primary)] to-transparent mb-12 opacity-30" />

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 mb-12">
        {/* Brand */}
        <div>
          <h3 className="text-xl font-bold gradient-text-alt mb-3">Dori Fourer</h3>
          <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
            Software Engineer building scalable systems from frontend to infrastructure.
          </p>
        </div>

        {/* Quick links */}
        <div>
          <h4 className="text-sm font-semibold text-white mb-4 uppercase tracking-wider">Quick Links</h4>
          <ul className="space-y-2">
            {links.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="text-sm text-[var(--text-secondary)] hover:text-[var(--primary)] transition-colors duration-300"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Social */}
        <div>
          <h4 className="text-sm font-semibold text-white mb-4 uppercase tracking-wider">Connect</h4>
          <div className="flex gap-3">
            {socials.map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -3 }}
                className="flex items-center justify-center w-10 h-10 rounded-full border border-white/10 hover:border-[var(--primary)] transition-colors duration-300"
                aria-label={social.label}
              >
                <Image src={social.icon} alt={social.label} className="w-4 brightness-0 invert opacity-60" />
              </motion.a>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="h-px w-full bg-white/5 mb-6" />
      <div className="flex flex-col sm:flex-row justify-between items-center gap-2 text-xs text-[var(--text-secondary)]">
        <p>&copy; 2025 Dori Fourer. All rights reserved.</p>
        <p>Built with Next.js & Tailwind CSS</p>
      </div>
    </footer>
  );
};

export default Footer;
