"use client";
import React from "react";
import { Reveal, trackSpotlight, GithubIcon, LinkedinIcon, ArrowIcon } from "./ui";

const links = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Stack", href: "#techstack" },
  { label: "Expertise", href: "#services" },
  { label: "Projects", href: "#work" },
];

const Footer = ({ onContact }) => {
  return (
    <footer className="mx-auto w-full max-w-6xl px-5 pt-10 pb-8">
      <Reveal onMouseMove={trackSpotlight} className="bento bento-accent dots spotlight flex flex-col items-start justify-between gap-8 p-8 sm:p-12 md:flex-row md:items-end">
        <div>
          <p className="eyebrow mb-4">Contact</p>
          <h2 className="f-display text-4xl sm:text-6xl font-bold leading-tight">
            Let&apos;s build
            <br />
            something<span className="text-[var(--accent)]">.</span>
          </h2>
        </div>
        <button onClick={onContact} className="btn btn-primary">
          Get in touch
          <ArrowIcon />
        </button>
      </Reveal>

      <div className="mt-6 flex flex-col items-center justify-between gap-4 text-sm text-[var(--muted)] md:flex-row">
        <p>&copy; 2026 Dori Fourer. All rights reserved.</p>
        <ul className="flex flex-wrap justify-center gap-x-5 gap-y-1">
          {links.map((link) => (
            <li key={link.label}>
              <a href={link.href} className="hover:text-[var(--accent)] transition-colors">
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="flex gap-2">
          <a href="https://github.com/dori654" target="_blank" rel="noopener noreferrer" className="icon-btn" aria-label="GitHub">
            <GithubIcon size={18} />
          </a>
          <a href="https://linkedin.com/in/dori-fourer" target="_blank" rel="noopener noreferrer" className="icon-btn" aria-label="LinkedIn">
            <LinkedinIcon size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
