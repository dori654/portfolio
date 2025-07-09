import { workData, assets } from "@/assets/assets";
import Image from "next/image";
import React from "react";

export const Work = () => {
  return (
    <section id="work" className="scroll-mt-20 w-full px-[12%] py-10">
      {/* כותרות */}
      <h4 className="text-center text-lg mb-2 font-Ovo">My portfolio</h4>
      <h2 className="text-center text-5xl font-Ovo">My latest work</h2>
      <p className="mx-auto mt-5 mb-10 max-w-2xl text-center font-Ovo">
        Here are some of my recent projects that showcase my skills in
        full-stack development, DevOps, and cloud solutions. Each project
        reflects my commitment to building practical, user-focused systems that
        solve real problems. Feel free to explore and reach out if you have any
        questions!
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
            className="relative aspect-square rounded-lg bg-cover bg-no-repeat cursor-pointer group"
            style={{ backgroundImage: `url(${project.bgImage})` }}
          >
            {/* תיבת פרטים צפה */}
            <div className="absolute bottom-5 left-1/2 w-10/12 -translate-x-1/2 rounded-md bg-white px-5 py-5 flex items-center justify-between duration-500 group-hover:bottom-7">
              <div>
                <h2 className="font-semibold">{project.title}</h2>
                <p className="text-sm text-gray-700">{project.description}</p>
              </div>
              <div className="flex items-center justify-center w-9 aspect-square rounded-full border border-black shadow-[2px_2px_0px_#000] transition group-hover:bg-lime-300">
                <Image src={assets.send_icon} alt="Send icon" className="w-5" />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* כפתור הצג עוד */}
      <a
        href="#"
        className="mx-auto my-20 flex w-max items-center justify-center gap-2 rounded-full border border-gray-700 px-10 py-3 text-gray-700 hover:bg-lightHover duration-500"
      >
        Show more
        <Image
          src={assets.right_arrow_bold}
          alt="Right arrow"
          className="w-4"
        />
      </a>
    </section>
  );
};

export default Work;
