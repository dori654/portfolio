"use client";
import { useState } from "react";
import { MotionConfig } from "framer-motion";
import About from "@/components/About";
import { Header } from "@/components/Header";
import Navbar from "@/components/Navbar";
import Experience from "@/components/Experience";
import TechStack from "@/components/TechStack";
import Services from "@/components/Services";
import { Work } from "@/components/Work";
import Footer from "@/components/Footer";
import ContactModal from "@/components/ContactModal";

export default function Home() {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const openContact = () => setIsContactOpen(true);

  return (
    <MotionConfig reducedMotion="user">
      <Navbar onContact={openContact} />
      <main>
        <Header onContact={openContact} />
        <About />
        <Experience />
        <TechStack />
        <Services />
        <Work />
      </main>
      <Footer onContact={openContact} />
      <ContactModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
    </MotionConfig>
  );
}
