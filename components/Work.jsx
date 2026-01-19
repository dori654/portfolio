import { workData, assets } from "@/assets/assets";
import Image from "next/image";
import React from "react";

export const Work = () => {
  return (
    <section id="work" className="scroll-mt-20 w-full px-[12%] py-10">
      {/* כותרות */}
      <h4 className="text-center text-lg mb-2 font-Ovo text-[var(--devops-primary)]">My portfolio</h4>
      <h2 className="text-center text-5xl font-Ovo text-white">My latest work</h2>
      <p className="mx-auto mt-5 mb-10 max-w-2xl text-center font-Ovo text-gray-300">
        Here are some of my recent DevOps projects showcasing container orchestration,
        cloud infrastructure, and CI/CD automation. Each project demonstrates my ability
        to build scalable, resilient systems using modern DevOps practices and cutting-edge
        technologies like Kubernetes, Terraform, and multi-cloud platforms.
      </p>

      {/* גריד פרויקטים */}
      <div
        className="grid gap-5 my-10"
        style={{
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
        }}
      >
        {workData.map((project, index) => (
          <div
            key={index}
            className="relative aspect-square rounded-lg bg-cover bg-no-repeat cursor-pointer group border-2 border-[var(--devops-primary)] overflow-hidden hover:shadow-[0_0_30px_rgba(79,209,197,0.4)] transition-all duration-500"
            style={{ backgroundImage: `url(${project.bgImage})` }}
          >
            {/* Overlay for better readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-[var(--devops-darker)] via-transparent to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-500"></div>

            {/* תיבת פרטים צפה */}
            <div className="absolute bottom-5 left-1/2 w-10/12 -translate-x-1/2 rounded-md bg-[var(--devops-darker)] border-2 border-[var(--devops-primary)] px-5 py-5 flex items-center justify-between duration-500 group-hover:bottom-7 z-10">
              <div>
                <h2 className="font-semibold text-white">{project.title}</h2>
                <p className="text-sm text-[var(--devops-primary)]">{project.description}</p>
              </div>
              <div className="flex items-center justify-center w-9 aspect-square rounded-full border-2 border-[var(--devops-primary)] transition group-hover:bg-[var(--devops-primary)]">
                <Image src={assets.send_icon} alt="Send icon" className="w-5 brightness-0 invert" />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* כפתור הצג עוד */}
      <a
        href="#"
        className="mx-auto my-20 flex w-max items-center justify-center gap-2 rounded-full border-2 border-[var(--devops-secondary)] px-10 py-3 text-[var(--devops-secondary)] hover:bg-[var(--devops-secondary)] hover:text-white duration-500"
      >
        Show more
        <Image
          src={assets.right_arrow_bold}
          alt="Right arrow"
          className="w-4 brightness-0 invert"
        />
      </a>
    </section>
  );
};

export default Work;
