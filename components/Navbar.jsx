import React, { useEffect, useState } from "react";
import Image from "next/image";
import { assets } from "@/assets/assets";
import { motion, AnimatePresence } from "framer-motion";
import ContactModal from "./ContactModal";

const Navbar = () => {
  const [isScroll, setIsScroll] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScroll(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Home", href: "#top" },
    { label: "About", href: "#about" },
    { label: "Tech Stack", href: "#techstack" },
    { label: "Expertise", href: "#services" },
    { label: "Projects", href: "#work" },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex justify-between items-center z-50 transition-all duration-300 ${
          isScroll
            ? "glass shadow-lg"
            : "bg-transparent"
        }`}
      >
        <a href="#top" className="text-xl font-bold gradient-text-alt">
          DF
        </a>

        <ul className="hidden md:flex items-center gap-6 lg:gap-8">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                className="font-Outfit text-sm text-[var(--text-secondary)] hover:text-[var(--primary)] transition-colors duration-300"
                href={link.href}
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <button
              onClick={() => setIsContactOpen(true)}
              className="font-Outfit text-sm text-[var(--text-secondary)] hover:text-[var(--primary)] transition-colors duration-300 cursor-pointer bg-transparent border-none p-0"
            >
              Contact
            </button>
          </li>
        </ul>

        <div className="flex items-center gap-3">
          <button
            onClick={() => setIsContactOpen(true)}
            className="hidden lg:flex items-center gap-2 px-6 py-2 rounded-full bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] text-white text-sm font-medium hover:opacity-90 transition-opacity duration-300 cursor-pointer"
          >
            Get in Touch
          </button>

          <button
            className="block md:hidden"
            onClick={() => setIsMobileOpen(true)}
            aria-label="Open Menu"
          >
            <Image src={assets.menu_black} alt="Menu" className="w-6 brightness-0 invert" />
          </button>
        </div>

        <AnimatePresence>
          {isMobileOpen && (
            <>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
                onClick={() => setIsMobileOpen(false)}
              />
              <motion.div
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "100%" }}
                transition={{ type: "spring", damping: 25, stiffness: 200 }}
                className="fixed right-0 top-0 bottom-0 w-72 z-50 glass py-20 px-8 flex flex-col gap-6"
                style={{ borderRadius: "1rem 0 0 1rem" }}
              >
                <button
                  onClick={() => setIsMobileOpen(false)}
                  className="absolute right-6 top-6"
                  aria-label="Close Menu"
                >
                  <Image src={assets.close_black} alt="Close" className="w-5 brightness-0 invert" />
                </button>
                {navLinks.map((link, i) => (
                  <motion.a
                    key={link.label}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                    className="font-Outfit text-[var(--text-secondary)] hover:text-[var(--primary)] transition-colors text-lg"
                    href={link.href}
                    onClick={() => setIsMobileOpen(false)}
                  >
                    {link.label}
                  </motion.a>
                ))}
                <motion.button
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: navLinks.length * 0.05 }}
                  onClick={() => { setIsContactOpen(true); setIsMobileOpen(false); }}
                  className="font-Outfit text-[var(--text-secondary)] hover:text-[var(--primary)] transition-colors text-lg text-left bg-transparent border-none p-0 cursor-pointer"
                >
                  Contact
                </motion.button>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </motion.nav>

      <ContactModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
    </>
  );
};

export default Navbar;
