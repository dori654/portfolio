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
    <header className="fixed top-4 inset-x-0 z-50 px-4">
      <nav
        aria-label="Main"
        className="mx-auto flex max-w-4xl items-center justify-between gap-3 rounded-full border border-[var(--border)] bg-[var(--surface)]/85 py-2 pl-5 pr-2 backdrop-blur-xl shadow-[var(--shadow)]"
      >
        <a href="#top" className="f-display text-lg font-bold" aria-label="Home">
          DF<span className="text-[var(--accent)]">.</span>
        </a>

        <ul className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="rounded-full px-3 py-2 text-sm text-[var(--muted)] transition-colors hover:text-[var(--text)] hover:bg-[var(--surface-2)]"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <button onClick={onContact} className="btn btn-primary hidden sm:inline-flex !min-h-[44px]">
            Contact
          </button>
          <button
            className="icon-btn md:hidden"
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
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="bento mx-auto mt-2 flex max-w-4xl flex-col gap-1 p-3 md:hidden"
          >
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-xl px-4 py-3 text-[var(--text)] hover:bg-[var(--surface-2)]"
              >
                {link.label}
              </a>
            ))}
            <button
              onClick={() => {
                setOpen(false);
                onContact();
              }}
              className="btn btn-primary mt-2"
            >
              Contact
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
