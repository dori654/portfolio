import { serviceData, assets } from "@/assets/assets";
import React from "react";
import Image from "next/image";
import "@/app/globals.css";

export const Services = () => {
  return (
    <div id="services" className="scroll-mt-20 w-full px-[12%] py-10">
      <h4 className="mb-2 text-center text-lg font-Ovo text-[var(--devops-primary)]">What I offer</h4>
      <h2 className="text-center text-5xl font-Ovo text-white">My Services</h2>
      <p className="text-center max-w-2xl mx-auto mt-5 mb-10 font-Ovo text-gray-300">
        I build and demonstrate end-to-end DevOps solutions focused on container
        orchestration, cloud infrastructure, and automation. Through hands-on projects,
        I design Kubernetes-based environments, implement CI/CD pipelines, and apply
        modern DevOps practices to improve reliability and deployment workflows.
      </p>

      <div className="grid gridTemplate gap-6 my-10">
        {serviceData.map(({ icon, title, description, link }, index) => (
          <div
            key={index}
            className="border-2 border-[var(--devops-primary)] bg-[var(--devops-darker)] rounded-lg px-8 py-12 cursor-pointer hover:bg-[var(--devops-primary)] hover:bg-opacity-10 hover:-translate-y-1 duration-500 hover:shadow-[0_0_30px_rgba(79,209,197,0.3)]"
          >
            <Image src={icon} alt="" className="w-10 brightness-0 invert" />
            <h3 className="text-lg my-4 text-[var(--devops-primary)] font-semibold">{title}</h3>
            <p className="text-sm text-gray-300 leading-5">{description}</p>
            <a href={link} className="flex items-center gap-2 text-sm mt-5 text-[var(--devops-secondary)] hover:text-[var(--devops-primary)] transition-colors">
              Read more{" "}
              <Image src={assets.right_arrow} alt="" className="w-4 brightness-0 invert" />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Services;
