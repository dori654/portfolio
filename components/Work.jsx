"use client";
import { workData } from "@/assets/assets";
import Link from "next/link";
import React from "react";
import { Section, SectionHeader, Reveal, GithubIcon, ExternalIcon, ArrowIcon } from "./ui";

const spans = ["lg:col-span-4", "lg:col-span-2", "lg:col-span-2", "lg:col-span-4"];

export const Work = () => {
  return (
    <Section id="work">
      <SectionHeader
        index="05"
        label="Projects"
        title="Selected work."
        intro="Real-world projects showcasing full-stack development, cloud infrastructure, CI/CD automation, and system monitoring."
      />

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-6">
        {workData.map((project, index) =>
          project.placeholder ? (
            <Reveal
              key={project.title}
              className="bento flex min-h-[160px] items-center justify-center border-dashed p-6 text-center md:col-span-2 lg:col-span-6"
            >
              <div>
                <h3 className="f-display text-lg font-semibold text-[var(--muted)]">{project.title}</h3>
                <p className="mt-1 text-sm text-[var(--muted)]">{project.description}</p>
              </div>
            </Reveal>
          ) : (
            <Reveal
              key={project.title}
              delay={(index % 2) * 0.08}
              as="article"
              className={`bento bento-hover group flex flex-col ${spans[index] ?? "lg:col-span-2"}`}
            >
              <div className="h-48 sm:h-56 overflow-hidden border-b border-[var(--border)]">
                <div
                  className="h-full w-full bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                  style={{ backgroundImage: `url(${project.bgImage})` }}
                  role="img"
                  aria-label={`${project.title} preview`}
                />
              </div>

              <div className="flex flex-1 flex-col p-6">
                <div className="flex items-start justify-between gap-3">
                  <h3 className="f-display text-xl font-semibold">
                    <Link
                      href={project.slug ? `/projects/${project.slug}` : "#"}
                      className="after:absolute after:inset-0 after:content-['']"
                    >
                      {project.title}
                    </Link>
                  </h3>
                  <ArrowIcon className="mt-1 shrink-0 text-[var(--muted)] transition-transform group-hover:translate-x-1 group-hover:text-[var(--accent)]" />
                </div>
                <p className="mt-3 text-sm leading-relaxed text-[var(--muted)]">{project.description}</p>

                {project.techTags?.length > 0 && (
                  <ul className="mt-5 flex flex-wrap gap-2">
                    {project.techTags.map((tag) => (
                      <li key={tag} className="chip chip-accent !py-0.5 !text-xs">
                        {tag}
                      </li>
                    ))}
                  </ul>
                )}

                {(project.link || project.github) && (
                  <div className="relative z-10 mt-auto flex items-center gap-2 pt-5">
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
            </Reveal>
          )
        )}
      </div>
    </Section>
  );
};

export default Work;
