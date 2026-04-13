import React, { useRef } from "react";
import Image from "next/image";
import { assets, infoList } from "@/assets/assets";
import { motion, useInView } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="scroll-mt-20 w-full px-[5%] py-16 sm:px-[12%] sm:py-20">
      <motion.div
        ref={ref}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
      >
        {/* Section header */}
        <motion.p variants={fadeInUp} className="mb-2 text-center text-sm font-Outfit text-[var(--primary)] tracking-widest uppercase">
          Introduction
        </motion.p>
        <motion.h2 variants={fadeInUp} className="text-center text-3xl sm:text-5xl font-bold gradient-text mb-12">
          About Me
        </motion.h2>

        {/* Content */}
        <div className="flex w-full flex-col items-center gap-12 lg:flex-row lg:gap-16">
          {/* Image */}
          <motion.div
            variants={{ hidden: { opacity: 0, x: -50 }, visible: { opacity: 1, x: 0, transition: { duration: 0.7 } } }}
            className="w-48 sm:w-64 md:w-80 flex-shrink-0"
          >
            <div className="rounded-2xl overflow-hidden glow-primary">
              <Image
                src={assets.MyPic}
                alt="Dori Fourer"
                className="w-full rounded-2xl"
              />
            </div>
          </motion.div>

          {/* Text content */}
          <motion.div
            variants={{ hidden: { opacity: 0, x: 50 }, visible: { opacity: 1, x: 0, transition: { duration: 0.7 } } }}
            className="flex-1 w-full"
          >
            <p className="mb-10 text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed">
              Software Engineer based in Israel with a B.Sc. in Computer Science and a Google Cloud
              Professional Cloud Architect (PCA) certification. I combine software development
              expertise with deep DevOps knowledge — from building web applications with modern
              frameworks to designing cloud infrastructure and automated pipelines. Experienced
              with full-stack development, Kubernetes, Docker, CI/CD, and multi-cloud
              environments (AWS, GCP).
            </p>

            {/* Info cards */}
            <ul className="grid w-full gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
              {infoList.map(({ icon, title, description }, index) => (
                <motion.li
                  key={index}
                  variants={fadeInUp}
                  whileHover={{ y: -4 }}
                  className="glass glass-hover card-gradient-border cursor-pointer p-5 sm:p-6"
                >
                  <Image src={icon} alt={title} className="w-6 brightness-0 invert opacity-70" />
                  <h3 className="my-3 text-sm sm:text-base text-[var(--primary)] font-semibold">{title}</h3>
                  <p className="text-xs sm:text-sm text-[var(--text-secondary)]">{description}</p>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

export default About;
