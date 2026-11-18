"use client";
import React from "react";
import { experienceData } from "@/assets/assets";
import { Section, SectionHeader } from "./ui";

function Experience() {
  return (
    <Section id="experience">
      <SectionHeader id="experience-title" title="Where I've worked." />

      <ol className="trail">
        {experienceData.map((job) => (
          <li key={job.company} className="trail__entry">
            <p className="measured">{job.period}</p>
            <div>
              <h3>{job.role}</h3>
              <p className="trail__company">{job.company}</p>
              <ul className="trail__points">
                {job.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ol>
    </Section>
  );
}

export default Experience;
