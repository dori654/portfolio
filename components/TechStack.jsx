"use client";
import React from "react";
import Image from "next/image";
import { techStackData } from "@/assets/assets";
import { Section, SectionHeader } from "./ui";

function TechStack() {
  return (
    <Section id="techstack">
      <SectionHeader id="techstack-title" title="Tools I build with." />

      <div className="panels">
        {techStackData.map((group) => (
          <section key={group.category}>
            <h3>{group.category}</h3>
            <ul className="tools">
              {group.items.map((tool) => (
                <li key={tool.name}>
                  {tool.icon && <Image src={tool.icon} alt="" width={20} height={20} />}
                  {tool.name}
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </Section>
  );
}

export default TechStack;
