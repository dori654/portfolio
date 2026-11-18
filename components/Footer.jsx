"use client";
import React from "react";
import { GithubIcon, LinkedinIcon } from "./ui";

const links = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Stack", href: "#techstack" },
  { label: "Expertise", href: "#services" },
  { label: "Projects", href: "#work" },
];

const Footer = ({ onContact }) => {
  return (
    <div className="footer-wrap">
    <footer className="footer">
      <div className="container">
        <div className="footer__mast">
          <h2>Let&rsquo;s build something.</h2>
          <button type="button" onClick={onContact} className="btn">
            Get in touch
          </button>
        </div>

        <div className="footer__bar">
          <p>&copy; 2026 Dori Fourer. All rights reserved.</p>
          <ul className="footer__links">
            {links.map((link) => (
              <li key={link.label}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>
          <div className="footer__social">
            <a href="https://github.com/dori654" target="_blank" rel="noopener noreferrer" className="icon-btn" aria-label="GitHub">
              <GithubIcon size={18} />
            </a>
            <a href="https://linkedin.com/in/dori-fourer" target="_blank" rel="noopener noreferrer" className="icon-btn" aria-label="LinkedIn">
              <LinkedinIcon size={18} />
            </a>
          </div>
        </div>
      </div>
    </footer>
    </div>
  );
};

export default Footer;
