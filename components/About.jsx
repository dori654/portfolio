import React from "react";
import Image from "next/image";
import { assets, infoList, toolsData } from "@/assets/assets";

function About() {
  return (
    <section id="about" className="scroll-mt-20 w-full px-[12%] py-10">
      {/* כותרות */}
      <h4 className="mb-2 text-center text-lg font-Ovo">Introduction</h4>
      <h2 className="text-center text-5xl font-Ovo">About me</h2>

      {/* תוכן ראשי */}
      <div className="my-20 flex w-full flex-col items-center gap-20 lg:flex-row">
        {/* תמונת משתמש */}
        <div className="w-64 max-w-none rounded-3xl sm:w-80">
          <Image
            src={assets.user_image}
            alt="Portrait of the user"
            className="w-full rounded-3xl"
          />
        </div>

        {/* טקסט תיאור */}
        <div className="flex-1">
          <p className="mb-10 max-w-2xl font-Ovo">
            I'm a software engineer based in Israel, passionate about building
            practical, user-focused solutions. I specialize in full-stack
            development and DevOps, with experience in React, Node.js, Redis,
            and Docker. I love turning ideas into working systems that solve
            real problems.
          </p>

          {/* מידע נוסף */}
          <ul className="grid max-w-2xl grid-cols-1 gap-6 sm:grid-cols-3">
            {infoList.map(({ icon, title, description }, index) => (
              <li
                key={index}
                className="cursor-pointer rounded-xl border border-gray-400 p-6 duration-500 hover:-translate-y-1 hover:bg-lightHover hover:shadow-md"
              >
                <Image src={icon} alt={title} className="mt-3 w-7" />
                <h3 className="my-4 text-gray-700 font-semibold">{title}</h3>
                <p className="text-sm text-gray-600">{description}</p>
              </li>
            ))}
          </ul>

          {/* כלים שאני משתמש */}
          <h4 className="my-6 font-Ovo text-gray-700">Tools I use</h4>
          <ul className="flex items-center gap-3 sm:gap-5">
            {toolsData.map((tool, index) => (
              <li
                key={index}
                className="flex aspect-square w-12 items-center justify-center rounded-lg border border-gray-400 cursor-pointer duration-500 hover:-translate-y-1"
              >
                <Image src={tool} alt="Tool icon" className="w-5 sm:w-7" />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default About;
