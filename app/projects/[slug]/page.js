"use client";

import { useParams } from "next/navigation";
import { projectDetails } from "@/assets/assets";
import { MotionConfig } from "framer-motion";
import Link from "next/link";
import ThemeToggle from "@/components/ThemeToggle";

export default function ProjectPage() {
  const { slug } = useParams();
  const project = projectDetails[slug];

  if (!project) {
    return (
      <div className="container" style={{ minHeight: "100vh", display: "grid", placeContent: "center", justifyItems: "start", gap: "var(--space-md)" }}>
        <h1>Project not found</h1>
        <Link href="/" className="btn">
          Back to Home
        </Link>
      </div>
    );
  }

  return (
    <MotionConfig reducedMotion="user">
      <header className="nav">
        <div className="container">
          <nav aria-label="Project" className="nav__bar">
            <Link href="/#work" className="nav__mark" style={{ fontSize: "var(--text-md)" }}>
              Back to Projects
            </Link>
            <div className="nav__actions">
              <ThemeToggle />
            </div>
          </nav>
        </div>
      </header>

      <main>
        <section className="container detail__hero" aria-labelledby="project-title">
          <h1 id="project-title" style={{ fontSize: "var(--text-display-s)" }}>{project.title}</h1>
          <p className="lead" style={{ color: "var(--color-ink-2)" }}>{project.subtitle}</p>

          <ul className="detail__tags">
            {project.techTags.map((tag) => (
              <li key={tag}>{tag}</li>
            ))}
          </ul>

          <div className="panel detail__overview">
            <h2 style={{ fontSize: "var(--text-xl)" }}>Overview</h2>
            <p style={{ marginTop: "var(--space-sm)", color: "var(--color-muted)" }}>{project.overview}</p>
          </div>
        </section>

        <section className="container">
          {project.sections.map((section, index) => (
            <ProjectSection key={index} section={section} index={index} />
          ))}
        </section>

        <div className="container" style={{ paddingBlock: "var(--space-2xl) var(--section-gap-s)" }}>
          <Link href="/#work" className="btn">
            Back to All Projects
          </Link>
        </div>
      </main>
    </MotionConfig>
  );
}

function ProjectSection({ section, index }) {
  const isEven = index % 2 === 0;

  return (
    <div className={`detail__section ${isEven ? "" : "detail__section--flip"}`}>
      {/* Image */}
      {section.image && (
        <div className="detail__shot">
          <img src={section.image} alt={section.title ?? ""} />
        </div>
      )}

      {/* Text */}
      {section.title && (
        <div className="detail__text">
          <h2 style={{ fontSize: "var(--text-2xl)" }}>{section.title}</h2>
          <p>{section.description}</p>
        </div>
      )}
    </div>
  );
}
