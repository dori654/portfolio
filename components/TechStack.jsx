"use client";
import React from "react";
import Image from "next/image";
import { techStackData } from "@/assets/assets";
import { Section, SectionHeader, Reveal } from "./ui";

const spans = ["md:col-span-2", "md:col-span-4", "md:col-span-3", "md:col-span-3"];

function TechStack() {
  return (
    <Section id="techstack">
      <SectionHeader index="03" label="Stack" title="Tools I build with." />

      <div className="grid grid-cols-1 gap-4 md:grid-cols-6">
        {techStackData.map((group, index) => (
          <Reveal
            key={group.category}
            delay={index * 0.06}
            className={`bento p-6 sm:p-8 ${spans[index] ?? "md:col-span-3"} ${group.highlight ? "bento-accent" : ""}`}
          >
            <h3 className="eyebrow mb-5">{group.category}</h3>
            <ul className="flex flex-wrap gap-2">
              {group.items.map((tool) => (
                <li key={tool.name} className="chip">
                  {tool.icon && <Image src={tool.icon} alt="" className="h-5 w-5 object-contain" />}
                  {tool.name}
                </li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

export default TechStack;
