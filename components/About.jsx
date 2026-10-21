"use client";
import React from "react";
import Image from "next/image";
import { infoList } from "@/assets/assets";
import { Section, SectionHeader, Reveal } from "./ui";

function About() {
  return (
    <Section id="about">
      <SectionHeader index="01" label="About" title="Code to production." />

      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        <Reveal className="bento md:col-span-3 p-6 sm:p-10">
          <p className="max-w-3xl text-lg sm:text-xl leading-relaxed">
            Software Engineer based in Israel with a B.Sc. in Computer Science and a Google Cloud
            Professional Cloud Architect (PCA) certification. I combine software development
            expertise with deep DevOps knowledge — from building web applications with modern
            frameworks to designing cloud infrastructure and automated pipelines. Experienced
            with full-stack development, Kubernetes, Docker, CI/CD, and multi-cloud
            environments (AWS, GCP).
          </p>
        </Reveal>

        {infoList.map(({ icon, title, description }, index) => (
          <Reveal key={title} delay={index * 0.08} className="bento bento-hover p-6">
            <Image src={icon} alt="" className="icon-mono w-6" />
            <h3 className="f-display mt-5 mb-2 text-lg font-semibold">{title}</h3>
            <p className="text-sm text-[var(--muted)]">{description}</p>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

export default About;
