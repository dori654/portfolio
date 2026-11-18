"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ThemeToggle from "./ThemeToggle";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Stack", href: "#techstack" },
  { label: "Expertise", href: "#services" },
  { label: "Projects", href: "#work" },
];

const Navbar = ({ onContact }) => {
  const [open, setOpen] = useState(false);

  return (
    <header className="nav">
      <div className="container">
        <nav aria-label="Main" className="nav__bar">
          <a href="#top" className="nav__mark" aria-label="Home">
            DF
          </a>

          <ul className="nav__links">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>

          <div className="nav__actions">
            <ThemeToggle />
            <button type="button" onClick={onContact} className="btn nav__contact">
              Contact
            </button>
            <button
              type="button"
              className="icon-btn nav__toggle"
              onClick={() => setOpen((v) => !v)}
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
                {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
              </svg>
            </button>
          </div>
        </nav>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.12 }}
              className="nav__menu"
            >
              {navLinks.map((link) => (
                <a key={link.label} href={link.href} onClick={() => setOpen(false)}>
                  {link.label}
                </a>
              ))}
              <button
                type="button"
                onClick={() => {
                  setOpen(false);
                  onContact();
                }}
                className="btn"
              >
                Contact
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Navbar;
