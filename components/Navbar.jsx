import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { assets } from "@/assets/assets";
import ContactModal from "./ContactModal";


const Navbar = () => {
  const [isScroll, setIsScroll] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const sideMenuRef = useRef();
  const openMenu = () => {
    sideMenuRef.current.style.transform = "translateX(-16rem)";
  };
  const closeMenu = () => {
    sideMenuRef.current.style.transform = "translateX(16rem)";
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (scrollY > 50) {
        setIsScroll(true);
      } else {
        setIsScroll(false);
      }
    });
  }, []);

  return (
    <>
      {/* סרגל ניווט */}
      <nav
        className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex justify-between items-center z-50 bg-transparent ${
          isScroll ? "bg-[var(--devops-darker)] bg-opacity-90 backdrop-blur-lg shadow-[0_4px_20px_rgba(79,209,197,0.1)]" : ""
        }`}
      >
        {/* לוגו */}
        <a href="#top" aria-label="Back to Top">
          <Image
            // src={assets.logo}
            
            className="w-28 cursor-pointer mr-14 brightness-0 invert"
          />
        </a>

        {/* תפריט דסקטופ */}
        <ul
          className={`hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 ${
            isScroll ? "" : "bg-[var(--devops-darker)] shadow-[0_0_20px_rgba(79,209,197,0.2)] border border-[var(--devops-primary)]"
          }`}
        >
          <li>
            <a className="font-Ovo text-gray-200 hover:text-[var(--devops-primary)] transition-colors" href="#top">
              Home
            </a>
          </li>
          <li>
            <a className="font-Ovo text-gray-200 hover:text-[var(--devops-primary)] transition-colors" href="#about">
              About Me
            </a>
          </li>
          <li>
            <a className="font-Ovo text-gray-200 hover:text-[var(--devops-primary)] transition-colors" href="#services">
              Services
            </a>
          </li>{" "}
          {/* תיקון spelling */}
          <li>
            <a className="font-Ovo text-gray-200 hover:text-[var(--devops-primary)] transition-colors" href="#work">
              My Work
            </a>
          </li>
          <li>
            <button onClick={() => setIsContactOpen(true)} className="font-Ovo text-gray-200 hover:text-[var(--devops-primary)] transition-colors cursor-pointer bg-none border-none p-0">
              Contact Me
            </button>
          </li>
        </ul>

        {/* כפתורים צדדיים */}
        <div className="flex items-center">
          

          <button
            onClick={() => setIsContactOpen(true)}
            className="hidden lg:flex items-center gap-3 px-10 py-2.5 border-2 border-[var(--devops-primary)] text-[var(--devops-primary)] hover:bg-[var(--devops-primary)] hover:text-[var(--devops-dark)] rounded-full ml-4 font-Ovo transition-all duration-300 bg-transparent cursor-pointer"
          >
            Contact
            <Image src={assets.arrow_icon} alt="Arrow" className="w-3 brightness-0 invert" />
          </button>

          {/* תפריט מובייל */}
          <button
            className="block md:hidden ml-3"
            onClick={openMenu}
            aria-label="Open Menu"
          >
            <Image src={assets.menu_black} alt="Menu" className="w-6 brightness-0 invert" />
          </button>
        </div>

        {/* תפריט צד למובייל */}
        <ul
          ref={sideMenuRef}
          className="flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64 top-0 bottom-0 w-64 z-50 h-screen bg-[var(--devops-darker)] border-l-2 border-[var(--devops-primary)] transition duration-500"
        >
          <li className="absolute right-6 top-6">
            <button onClick={closeMenu} aria-label="Close Menu">
              <Image
                src={assets.close_black}
                alt="Close"
                className="w-5 cursor-pointer brightness-0 invert"
              />
            </button>
          </li>
          <li>
            <a className="font-Ovo text-gray-200 hover:text-[var(--devops-primary)] transition-colors" onClick={closeMenu} href="#top">
              Home
            </a>
          </li>
          <li>
            <a className="font-Ovo text-gray-200 hover:text-[var(--devops-primary)] transition-colors" onClick={closeMenu} href="#about">
              About Me
            </a>
          </li>
          <li>
            <a className="font-Ovo text-gray-200 hover:text-[var(--devops-primary)] transition-colors" onClick={closeMenu} href="#services">
              Services
            </a>
          </li>{" "}
          {/* spelling */}
          <li>
            <a className="font-Ovo text-gray-200 hover:text-[var(--devops-primary)] transition-colors" onClick={closeMenu} href="#work">
              My Work
            </a>
          </li>
          <li>
            <button onClick={() => { setIsContactOpen(true); closeMenu(); }} className="font-Ovo text-gray-200 hover:text-[var(--devops-primary)] transition-colors cursor-pointer bg-none border-none p-0 text-left">
              Contact Me
            </button>
          </li>
        </ul>
      </nav>

      {/* Contact Modal */}
      <ContactModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
    </>
  );
};

export default Navbar;
