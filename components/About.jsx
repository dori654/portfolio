"use client";
import React from "react";
import { infoList } from "@/assets/assets";
import { Section, SectionHeader } from "./ui";

function About() {
  return (
    <Section id="about">
      <div className="cols">
        <div className="cols__head">
          <SectionHeader id="about-title" title="Code to production." />
        </div>

        <div className="cols__body">
          <p className="lead">
            Software Engineer based in Israel with a B.Sc. in Computer Science and a Google Cloud
            Professional Cloud Architect (PCA) certification. I combine software development
            expertise with deep DevOps knowledge: from building web applications with modern
            frameworks to designing cloud infrastructure and automated pipelines. Experienced
            with full-stack development, Kubernetes, Docker, CI/CD, and multi-cloud
            environments (AWS, GCP).
          </p>

          <dl className="readings readings--flush" style={{ marginTop: "var(--space-xl)" }}>
            {infoList.map(({ title, description }) => (
              <div key={title}>
                <dt>{title}</dt>
                <dd>{description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </Section>
  );
}

export default About;
