import { assets } from "@/assets/assets";
import React from "react";
import Image from "next/image";

export const Header = () => {
  return (
    <div className="w-11/12 max-w-3xl text-center mx-auto h-sreen flex flex-col items-center justify-center gap-4">
      <div>
        <Image src={assets.profile_img} alt="" className="rounded-full w-32" />
      </div>
      <h3 className="flex items-end gap-2 text-xl md:text-2xl mb-3 font-Ovo">
        Hi! I'm Dori Fourer
        <Image src={assets.hand_icon} alt="" className="w-6" />
      </h3>
      <h1 className="text-3xl sm:text-6xl lg:text-[66px] font-Ovo">
        Software engineer based in Israel
      </h1>
      <p className="max-w-2xl mx-auto font-Ovo">
        I am a software engineer with a passion for creating innovative
        solutions and enhancing user experiences. My expertise lies in
        developing robust applications and collaborating with teams to deliver
        high-quality software products.
      </p>

      <div className="flex flex-col sm:flex-row items-center gap-4 mt-4">
        <a
          href="#contact"
          className="px-10 py-3 border border-white rounded-full bg-black text-white flex items-center gap-2"
        >
          contact me
          <Image src={assets.right_arrow_white} alt="" className="w-4" />
        </a>
        <a
          href="/sample_resume.pdf"
          download
          className="px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2"
        >
          my resume
          <Image src={assets.download_icon} alt="" className="w-4" />
        </a>
      </div>
    </div>
  );
};
