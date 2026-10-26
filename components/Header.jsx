"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { assets } from "@/assets/assets";
import { motion } from "framer-motion";
import { GithubIcon, LinkedinIcon, ArrowIcon, DownloadIcon, trackSpotlight } from "./ui";

const roles = [
  "Software Engineer",
  "Full-Stack Developer",
  "DevOps Specialist",
  "Cloud Architect",
];

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};
const item = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export const Header = ({ onContact }) => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState(roles[0]);
  const [isDeleting, setIsDeleting] = useState(true);
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    setReduced(window.matchMedia("(prefers-reduced-motion: reduce)").matches);
  }, []);

  useEffect(() => {
    if (reduced) return;
    const currentRole = roles[roleIndex];
    let timeout;

    if (!isDeleting && displayText === currentRole) {
      timeout = setTimeout(() => setIsDeleting(true), 2200);
    } else if (isDeleting && displayText === "") {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
    } else if (isDeleting) {
      timeout = setTimeout(() => setDisplayText((prev) => prev.slice(0, -1)), 35);
    } else {
      timeout = setTimeout(() => setDisplayText(currentRole.slice(0, displayText.length + 1)), 70);
    }

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, roleIndex, reduced]);

  return (
    <section id="top" className="mx-auto w-full max-w-6xl px-5 pt-28 sm:pt-32">
      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4"
      >
        {/* Intro */}
        <motion.div
          variants={item}
          onMouseMove={trackSpotlight}
          className="bento dots spotlight md:col-span-2 lg:row-span-2 flex flex-col justify-between gap-10 p-6 sm:p-10"
        >
          <div>
            <p className="eyebrow mb-5">Software Engineer · Israel</p>
            <h1 className="f-display text-5xl sm:text-7xl font-bold leading-[1.02]">
              Dori
              <br />
              Fourer<span className="text-[var(--accent)]">.</span>
            </h1>
            <p className="f-mono mt-6 min-h-8 text-base sm:text-lg text-[var(--accent-2)]" aria-live="off">
              <span aria-hidden="true">&gt; </span>
              {displayText}
              <span className="typing-cursor" aria-hidden="true">_</span>
            </p>
            <p className="mt-6 max-w-lg text-[var(--muted)] leading-relaxed">
              Software Engineer with a B.Sc. in Computer Science and Google Cloud PCA
              certification. I design and build full-stack applications, cloud-native
              infrastructure, and automated CI/CD pipelines — delivering reliable,
              scalable systems from code to production.
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row">
            <button onClick={onContact} className="btn btn-primary">
              Get in touch
              <ArrowIcon />
            </button>
            <a href="/Dori_Fourer.pdf" download className="btn btn-ghost">
              Download resume
              <DownloadIcon />
            </a>
          </div>
        </motion.div>

        {/* Photo */}
        <motion.div
          variants={item}
          className="bento relative min-h-[320px] md:row-span-2 lg:col-span-1"
        >
          <Image
            src={assets.MyPic}
            alt="Portrait of Dori Fourer"
            fill
            priority
            sizes="(min-width: 1024px) 25vw, (min-width: 768px) 50vw, 100vw"
            className="object-cover"
          />
        </motion.div>

        {/* Certification */}
        <motion.div variants={item} className="bento bento-accent flex flex-col justify-between gap-6 p-6">
          <p className="eyebrow">Certified</p>
          <div>
            <p className="f-display text-xl font-semibold leading-snug">
              Google Cloud Professional Cloud Architect
            </p>
            <p className="mt-2 text-sm text-[var(--muted)]">Multi-cloud · AWS &amp; GCP</p>
          </div>
        </motion.div>

        {/* Socials */}
        <motion.div variants={item} className="bento flex flex-col justify-between gap-6 p-6">
          <p className="eyebrow">Find me</p>
          <div className="flex gap-3">
            <a
              href="https://github.com/dori654"
              target="_blank"
              rel="noopener noreferrer"
              className="icon-btn"
              aria-label="GitHub"
            >
              <GithubIcon />
            </a>
            <a
              href="https://linkedin.com/in/dori-fourer"
              target="_blank"
              rel="noopener noreferrer"
              className="icon-btn"
              aria-label="LinkedIn"
            >
              <LinkedinIcon />
            </a>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Header;
