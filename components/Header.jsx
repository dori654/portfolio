import React, { useState } from "react";
import Image from "next/image";
import { assets } from "@/assets/assets";
import ContactModal from "./ContactModal";

export const Header = () => {
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <header className="flex h-screen w-11/12 max-w-3xl flex-col items-center justify-center gap-4 px-4 text-center mx-auto">
      {/* תמונת פרופיל */}
      <div className="mb-4">
        <Image
          src={assets.MyPic}
          alt="Profile picture of Dori Fourer"
          className="w-32 rounded-full border-2 border-[var(--devops-primary)]"
        />
      </div>

      {/* כותרת פתיחה עם אייקון יד */}
      <h3 className="mb-3 flex items-end gap-2 text-xl md:text-2xl font-Ovo text-[var(--devops-primary)]">
        Hi! I'm Dori Fourer
        <Image src={assets.hand_icon} alt="Waving hand" className="w-6" />
      </h3>

      {/* כותרת מרכזית */}
      <h1 className="text-3xl sm:text-6xl lg:text-[66px] font-Ovo text-white">
        DevOps Engineer based in Israel
      </h1>

      {/* פסקת תיאור */}
      <p className="mx-auto max-w-2xl font-Ovo text-gray-300">
        DevOps Engineer with hands-on experience in container orchestration, cloud
        infrastructure, and CI/CD automation through real-world projects and DevOps
        bootcamp training. I build and operate scalable, cloud-native systems using
        Kubernetes, Docker, and modern cloud technologies.

      </p>

      

      {/* כפתורים */}
      <div className="mt-4 flex flex-col items-center gap-4 sm:flex-row">
        <button
          onClick={() => setIsContactOpen(true)}
          className="flex items-center gap-2 rounded-full border-2 border-[var(--devops-primary)] bg-[var(--devops-primary)] px-10 py-3 text-[var(--devops-dark)] font-semibold hover:bg-transparent hover:text-[var(--devops-primary)] transition-all duration-300 cursor-pointer"
        >
          Contact Me
          <Image
            src={assets.right_arrow_white}
            alt="Right arrow"
            className="w-4"
          />
        </button>

        <a
          href="/Dori_Fourer.pdf"
          download
          className="flex items-center gap-2 rounded-full border-2 border-[var(--devops-secondary)] px-10 py-3 text-[var(--devops-secondary)] hover:bg-[var(--devops-secondary)] hover:text-white transition-all duration-300"
        >
          My Resume
          <Image
            src={assets.download_icon}
            alt="Download icon"
            className="w-4"
          />
        </a>
      </div>

{/* GitHub and LinkedIn Links */}
      <div className="flex gap-6 my-10">
        <a
          href="https://github.com/dori654"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center w-12 h-12 rounded-full border-2 border-[var(--devops-primary)] text-[var(--devops-primary)] hover:bg-[var(--devops-primary)] hover:text-[var(--devops-dark)] transition-all duration-300"
          aria-label="GitHub Profile"
        >
          <Image src={assets.github_icon} alt="GitHub" className="w-6 brightness-0 invert hover:brightness-100" />
        </a>
        <a
          href="https://linkedin.com/in/dori-fourer"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center w-12 h-12 rounded-full border-2 border-[var(--devops-primary)] text-[var(--devops-primary)] hover:bg-[var(--devops-primary)] hover:text-[var(--devops-dark)] transition-all duration-300"
          aria-label="LinkedIn Profile"
        >
          <Image src={assets.linkedin_icon} alt="LinkedIn" className="w-6 brightness-0 invert hover:brightness-100" />
        </a>
      </div>

      <ContactModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
    </header>
  );
};
export default Header;