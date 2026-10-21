"use client";

import { useParams } from "next/navigation";
import { projectDetails } from "@/assets/assets";
import { motion, MotionConfig } from "framer-motion";
import Link from "next/link";
import ThemeToggle from "@/components/ThemeToggle";
import { ArrowIcon } from "@/components/ui";

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
        <h1 className="f-display text-3xl font-bold">Project not found</h1>
        <Link href="/" className="text-[var(--accent)] hover:underline">
          Back to Home
        </Link>
      </div>
    );
  }

  return (
    <MotionConfig reducedMotion="user">
    <div className="min-h-screen">
      {/* Back nav */}
      <nav className="fixed top-4 inset-x-0 z-50 px-4">
        <div className="mx-auto flex max-w-4xl items-center justify-between rounded-full border border-[var(--border)] bg-[var(--surface)]/85 py-2 pl-5 pr-2 backdrop-blur-xl shadow-[var(--shadow)]">
          <Link
            href="/#work"
            className="flex items-center gap-2 text-sm text-[var(--muted)] hover:text-[var(--accent)] transition-colors"
          >
            <ArrowIcon className="rotate-180" />
            Back to Projects
          </Link>
          <ThemeToggle />
        </div>
      </nav>

      {/* Hero */}
      <section className="mx-auto max-w-6xl pt-32 pb-12 px-5">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{ visible: { transition: { staggerChildren: 0.12 } } }}
        >
          <motion.p
            variants={fadeInUp}
            className="eyebrow mb-3"
          >
            Project
          </motion.p>
          <motion.h1
            variants={fadeInUp}
            className="f-display text-4xl sm:text-6xl font-bold mb-4"
          >
            {project.title}
          </motion.h1>
          <motion.p
            variants={fadeInUp}
            className="text-lg text-[var(--muted)] max-w-3xl mb-8"
          >
            {project.subtitle}
          </motion.p>

          {/* Tech tags */}
          <motion.div variants={fadeInUp} className="flex flex-wrap gap-2 mb-12">
            {project.techTags.map((tag) => (
              <span
                key={tag}
                className="chip chip-accent"
              >
                {tag}
              </span>
            ))}
          </motion.div>

          {/* Overview */}
          <motion.div variants={fadeInUp} className="bento p-6 sm:p-8 max-w-4xl">
            <h2 className="f-display text-xl font-semibold mb-3">Overview</h2>
            <p className="text-[var(--muted)] leading-relaxed">
              {project.overview}
            </p>
          </motion.div>
        </motion.div>
      </section>

      {/* Sections */}
      <section className="mx-auto max-w-6xl px-5 pb-20 space-y-16">
        {project.sections.map((section, index) => (
          <ProjectSection key={index} section={section} index={index} />
        ))}
      </section>

      {/* Back to projects */}
      <div className="px-5 pb-20 text-center">
        <Link
          href="/#work"
          className="btn btn-ghost"
        >
          <ArrowIcon className="rotate-180" />
          Back to All Projects
        </Link>
      </div>
    </div>
    </MotionConfig>
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
      {section.image && (
        <div className="w-full lg:w-1/2">
          <div className="bento">
            <img
              src={section.image}
              alt={section.title ?? ""}
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      )}

      {/* Text */}
      {section.title && (
      <div className="w-full lg:w-1/2">
        <h3 className="f-display text-2xl sm:text-3xl font-bold mb-4">
          {section.title}
        </h3>
        <p className="text-[var(--muted)] leading-relaxed">
          {section.description}
        </p>
      </div>
      )}
    </motion.div>
  );
}
