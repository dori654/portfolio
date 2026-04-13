"use client";

import { useParams } from "next/navigation";
import { projectDetails } from "@/assets/assets";
import { motion } from "framer-motion";
import Link from "next/link";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function ProjectPage() {
  const { slug } = useParams();
  const project = projectDetails[slug];

  if (!project) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-4">
        <h1 className="text-3xl font-bold text-white">Project not found</h1>
        <Link href="/" className="text-[var(--primary)] hover:underline">
          Back to Home
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      {/* Back nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 glass px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between">
        <Link
          href="/#work"
          className="flex items-center gap-2 text-[var(--text-secondary)] hover:text-[var(--primary)] transition-colors"
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="rotate-180">
            <path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          Back to Projects
        </Link>
      </nav>

      {/* Hero */}
      <section className="pt-28 pb-16 px-[5%] sm:px-[12%]">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{ visible: { transition: { staggerChildren: 0.12 } } }}
        >
          <motion.p
            variants={fadeInUp}
            className="mb-3 text-sm font-Outfit text-[var(--primary)] tracking-widest uppercase"
          >
            Project
          </motion.p>
          <motion.h1
            variants={fadeInUp}
            className="text-3xl sm:text-5xl lg:text-6xl font-bold gradient-text mb-4"
          >
            {project.title}
          </motion.h1>
          <motion.p
            variants={fadeInUp}
            className="text-lg text-[var(--text-secondary)] max-w-3xl mb-8"
          >
            {project.subtitle}
          </motion.p>

          {/* Tech tags */}
          <motion.div variants={fadeInUp} className="flex flex-wrap gap-2 mb-12">
            {project.techTags.map((tag) => (
              <span
                key={tag}
                className="px-4 py-1.5 text-sm rounded-full bg-[var(--primary)]/10 text-[var(--primary)] border border-[var(--primary)]/20"
              >
                {tag}
              </span>
            ))}
          </motion.div>

          {/* Overview */}
          <motion.div variants={fadeInUp} className="glass p-6 sm:p-8 max-w-4xl">
            <h2 className="text-xl font-semibold text-white mb-3">Overview</h2>
            <p className="text-[var(--text-secondary)] leading-relaxed">
              {project.overview}
            </p>
          </motion.div>
        </motion.div>
      </section>

      {/* Sections */}
      <section className="px-[5%] sm:px-[12%] pb-20 space-y-20">
        {project.sections.map((section, index) => (
          <ProjectSection key={index} section={section} index={index} />
        ))}
      </section>

      {/* Back to projects */}
      <div className="px-[5%] sm:px-[12%] pb-20 text-center">
        <Link
          href="/#work"
          className="inline-flex items-center gap-2 px-8 py-3 rounded-full border border-white/20 text-[var(--text-secondary)] hover:border-[var(--primary)] hover:text-[var(--primary)] transition-all duration-300"
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="rotate-180">
            <path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          Back to All Projects
        </Link>
      </div>
    </div>
  );
}

function ProjectSection({ section, index }) {
  const isEven = index % 2 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7 }}
      className={`flex flex-col ${isEven ? "lg:flex-row" : "lg:flex-row-reverse"} gap-8 lg:gap-12 items-center`}
    >
      {/* Image */}
      <div className="w-full lg:w-1/2">
        <div className="glass overflow-hidden glow-primary">
          <img
            src={section.image}
            alt={section.title}
            className="w-full h-auto object-cover"
          />
        </div>
      </div>

      {/* Text */}
      <div className="w-full lg:w-1/2">
        <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
          {section.title}
        </h3>
        <p className="text-[var(--text-secondary)] leading-relaxed">
          {section.description}
        </p>
      </div>
    </motion.div>
  );
}
