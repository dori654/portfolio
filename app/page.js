"use client";
import About from "@/components/About";
import { Header } from "@/components/Header";
import Navbar from "@/components/Navbar";
import TechStack from "@/components/TechStack";
import Services from "@/components/Services";
import { Work } from "@/components/Work";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Header />
      <About />
      <TechStack />
      <Services />
      <Work />
      <Footer />
    </>
  );
}
