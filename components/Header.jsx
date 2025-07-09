import React from "react";
import Image from "next/image";
import { assets } from "@/assets/assets";

export const Header = () => {
  return (
    <header className="flex h-screen w-11/12 max-w-3xl flex-col items-center justify-center gap-4 px-4 text-center mx-auto">
      {/* תמונת פרופיל */}
      <div>
        <Image
          src={assets.profile_img}
          alt="Profile picture of Dori Fourer"
          className="w-32 rounded-full"
        />
      </div>

      {/* כותרת פתיחה עם אייקון יד */}
      <h3 className="mb-3 flex items-end gap-2 text-xl md:text-2xl font-Ovo">
        Hi! I'm Dori Fourer
        <Image src={assets.hand_icon} alt="Waving hand" className="w-6" />
      </h3>

      {/* כותרת מרכזית */}
      <h1 className="text-3xl sm:text-6xl lg:text-[66px] font-Ovo">
        Software engineer based in Israel
      </h1>

      {/* פסקת תיאור */}
      <p className="mx-auto max-w-2xl font-Ovo">
        I am a software engineer with a passion for creating innovative
        solutions and enhancing user experiences. My expertise lies in
        developing robust applications and collaborating with teams to deliver
        high-quality software products.
      </p>

      {/* כפתורים */}
      <div className="mt-4 flex flex-col items-center gap-4 sm:flex-row">
        <a
          href="#contact"
          className="flex items-center gap-2 rounded-full border border-white bg-black px-10 py-3 text-white"
        >
          Contact Me
          <Image
            src={assets.right_arrow_white}
            alt="Right arrow"
            className="w-4"
          />
        </a>

        <a
          href="/sample_resume.pdf"
          download
          className="flex items-center gap-2 rounded-full border border-gray-500 px-10 py-3"
        >
          My Resume
          <Image
            src={assets.download_icon}
            alt="Download icon"
            className="w-4"
          />
        </a>
      </div>
    </header>
  );
};
export default Header;