import React from "react";
import Image from "next/image";
import { assets, infoList, toolsData } from "@/assets/assets";

function About() {
  return (
    <section id="about" className="scroll-mt-20 w-full px-[5%] py-6 sm:px-[12%] sm:py-10">
      {/* כותרות */}
      <h4 className="mb-2 text-center text-base sm:text-lg font-Ovo text-[var(--devops-primary)]">Introduction</h4>
      <h2 className="text-center text-3xl sm:text-5xl font-Ovo text-white">About me</h2>

      {/* תוכן ראשי */}
      <div className="my-10 sm:my-20 flex w-full flex-col items-center gap-10 sm:gap-20 lg:flex-row">
        {/* תמונת משתמש */}
        <div className="w-48 sm:w-64 md:w-80 rounded-3xl terminal-glow flex-shrink-0">
          <Image
            src={assets.MyPic}
            alt="Portrait of the user"
            className="w-full rounded-3xl border-2 border-[var(--devops-primary)]"
          />
        </div>

        {/* טקסט תיאור */}
        <div className="flex-1 w-full">
          <p className="mb-8 sm:mb-10 text-sm sm:text-base font-Ovo text-gray-300">
            DevOps Engineer based in Israel with a B.Sc. in Computer Science and a Google Cloud
            Professional Cloud Architect (PCA) certification. Hands-on DevOps experience gained
            through the Develeap DevOps Bootcamp, focusing on real-world infrastructure,
            automation, and cloud-native systems. Experienced with Kubernetes, Docker, CI/CD
            pipelines, and multi-cloud environments (AWS, GCP). Strong ability to design, deploy,
            and operate production-like systems with an emphasis on scalability, reliability,
            and automation.
          </p>

          {/* מידע נוסף */}
          <ul className="grid w-full gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {infoList.map(({ icon, title, description }, index) => (
              <li
                key={index}
                className="cursor-pointer rounded-xl border-2 border-[var(--devops-primary)] bg-[var(--devops-darker)] p-4 sm:p-6 duration-500 hover:-translate-y-1 hover:bg-[var(--devops-primary)] hover:bg-opacity-10 hover:shadow-[0_0_20px_rgba(79,209,197,0.3)]"
              >
                <Image src={icon} alt={title} className="mt-3 w-5 sm:w-7 brightness-0 invert" />
                <h3 className="my-3 sm:my-4 text-sm sm:text-base text-[var(--devops-primary)] font-semibold">{title}</h3>
                <p className="text-xs sm:text-sm text-gray-300">{description}</p>
              </li>
            ))}
          </ul>

          {/* כלים שאני משתמש */}
          <h4 className="my-4 sm:my-6 text-base sm:text-lg font-Ovo text-white">Tools I use</h4>
          <div className="flex flex-col gap-2 sm:gap-3">
            <ul className="flex flex-wrap items-center gap-2 sm:gap-3">
              {toolsData.slice(0, 8).map((tool, index) => (
                <li
                  key={index}
                  className="group relative flex aspect-square w-10 sm:w-12 items-center justify-center rounded-lg border-2 border-[var(--devops-primary)] bg-[var(--devops-darker)] cursor-pointer duration-500 hover:-translate-y-1 hover:shadow-[0_0_15px_rgba(79,209,197,0.5)]"
                >
                  <Image src={tool.icon} alt={tool.name} className="w-4 sm:w-7" />
                  <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap rounded bg-[var(--devops-primary)] px-2 py-1 text-xs text-black opacity-0 transition-opacity group-hover:opacity-100 z-10">
                    {tool.name}
                  </span>
                </li>
              ))}
            </ul>
            <ul className="flex flex-wrap items-center gap-2 sm:gap-3">
              {toolsData.slice(8).map((tool, index) => (
                <li
                  key={index}
                  className="group relative flex aspect-square w-10 sm:w-12 items-center justify-center rounded-lg border-2 border-[var(--devops-primary)] bg-[var(--devops-darker)] cursor-pointer duration-500 hover:-translate-y-1 hover:shadow-[0_0_15px_rgba(79,209,197,0.5)]"
                >
                  <Image src={tool.icon} alt={tool.name} className="w-4 sm:w-7" />
                  <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap rounded bg-[var(--devops-primary)] px-2 py-1 text-xs text-black opacity-0 transition-opacity group-hover:opacity-100 z-10">
                    {tool.name}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;