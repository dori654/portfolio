"use client";
import React from "react";
import { experienceData } from "@/assets/assets";
import { Section, SectionHeader, Reveal } from "./ui";

function Experience() {
  return (
    <Section id="experience">
      <SectionHeader index="02" label="Experience" title="Where I've worked." />

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {experienceData.map((job, index) => (
          <Reveal
            key={job.company}
            delay={index * 0.08}
            className={`bento p-6 sm:p-8 md:col-span-2 ${index === 0 ? "bento-accent" : ""}`}
          >
            <div className="flex flex-wrap items-start justify-between gap-2">
              <div>
                <h3 className="f-display text-2xl font-semibold">{job.role}</h3>
                <p className="mt-1 text-[var(--accent)]">{job.company}</p>
              </div>
              <span className="chip f-mono">{job.period}</span>
            </div>
            <ul className="mt-6 grid gap-3 text-[var(--muted)] sm:grid-cols-2">
              {job.points.map((point) => (
                <li key={point} className="flex gap-3">
                  <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--accent)]" aria-hidden="true" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

export default Experience;
