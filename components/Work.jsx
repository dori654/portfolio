"use client";
import { workData } from "@/assets/assets";
import Link from "next/link";
import React from "react";
import { Section, SectionHeader, GithubIcon, ExternalIcon } from "./ui";

export const Work = () => {
  return (
    <Section id="work">
      <SectionHeader
        id="work-title"
        title="Selected work."
        intro="Real-world projects showcasing full-stack development, cloud infrastructure, CI/CD automation, and system monitoring."
      />

      <div className="projects">
        {workData.map((project) =>
          project.placeholder ? (
            <div key={project.title} className="project project--soon projects__soon">
              <div>
                <h3>{project.title}</h3>
                <p className="project__desc" style={{ marginTop: "var(--space-xs)" }}>{project.description}</p>
              </div>
            </div>
          ) : (
            <article key={project.title} className="project">
              <div
                className="project__media"
                style={{ backgroundImage: `url(${project.bgImage})` }}
                role="img"
                aria-label={`${project.title} preview`}
              />

              <div className="project__body">
                <h3 className="project__title">
                  <Link href={project.slug ? `/projects/${project.slug}` : "#"}>
                    {project.title}
                  </Link>
                </h3>
                <p className="project__desc">{project.description}</p>

                {project.techTags?.length > 0 && (
                  <ul className="project__tags">
                    {project.techTags.map((tag) => (
                      <li key={tag}>{tag}</li>
                    ))}
                  </ul>
                )}

                {(project.link || project.github) && (
                  <div className="project__links">
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${project.title} live demo`}
                        className="icon-btn"
                      >
                        <ExternalIcon />
                      </a>
                    )}
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${project.title} GitHub repository`}
                        className="icon-btn"
                      >
                        <GithubIcon />
                      </a>
                    )}
                  </div>
                )}
              </div>
            </article>
          )
        )}
      </div>
    </Section>
  );
};

export default Work;
