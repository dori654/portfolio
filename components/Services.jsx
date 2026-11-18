"use client";
import { serviceData } from "@/assets/assets";
import React from "react";
import Image from "next/image";
import { Section, SectionHeader } from "./ui";

export const Services = () => {
  return (
    <Section id="services">
      <SectionHeader
        id="services-title"
        title="What I bring to the table."
        intro="I build end-to-end software solutions: from modern web applications to cloud infrastructure and automated deployment pipelines."
      />

      <ul className="rows">
        {serviceData.map(({ icon, title, description }) => (
          <li key={title}>
            <div className="rows__title">
              <Image src={icon} alt="" width={24} height={24} />
              <h3>{title}</h3>
            </div>
            <p className="rows__body">{description}</p>
          </li>
        ))}
      </ul>
    </Section>
  );
};

export default Services;
