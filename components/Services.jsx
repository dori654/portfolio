"use client";
import { serviceData } from "@/assets/assets";
import React from "react";
import Image from "next/image";
import { Section, SectionHeader, Reveal } from "./ui";

export const Services = () => {
  return (
    <Section id="services">
      <SectionHeader
        index="04"
        label="Expertise"
        title="What I bring to the table."
        intro="I build end-to-end software solutions — from modern web applications to cloud infrastructure and automated deployment pipelines."
      />

      <div className="grid grid-cols-1 gap-4 md:grid-cols-6">
        {serviceData.map(({ icon, title, description }, index) => (
          <Reveal
            key={title}
            delay={index * 0.06}
            className={`bento bento-hover p-6 sm:p-8 ${
              index === 0 || index === 3 ? "md:col-span-4" : "md:col-span-2"
            } ${index === 0 ? "bento-accent" : ""}`}
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-[var(--border)] bg-[var(--surface-2)]">
              <Image src={icon} alt="" className="h-6 w-6 object-contain" />
            </div>
            <h3 className="f-display mt-6 mb-2 text-xl font-semibold">{title}</h3>
            <p className="text-sm sm:text-base leading-relaxed text-[var(--muted)]">{description}</p>
          </Reveal>
        ))}
      </div>
    </Section>
  );
};

export default Services;
