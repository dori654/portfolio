import React, { useRef } from "react";
import Image from "next/image";
import { techStackData } from "@/assets/assets";
import { motion, useInView } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

function TechStack() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="techstack" className="scroll-mt-20 w-full px-[5%] py-16 sm:px-[12%] sm:py-20">
      <motion.div
        ref={ref}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
      >
        <motion.p variants={fadeInUp} className="mb-2 text-center text-sm font-Outfit text-[var(--primary)] tracking-widest uppercase">
          Technologies
        </motion.p>
        <motion.h2 variants={fadeInUp} className="text-center text-3xl sm:text-5xl font-bold gradient-text mb-14">
          Tech Stack
        </motion.h2>

        <div className="space-y-10">
          {techStackData.map((group) => (
            <motion.div key={group.category} variants={fadeInUp}>
              <h3 className="text-lg font-semibold text-[var(--text-secondary)] mb-4 pl-1">
                {group.category}
              </h3>
              <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-3 sm:gap-4">
                {group.items.map((tool, i) => (
                  <motion.div
                    key={tool.name}
                    variants={fadeInUp}
                    whileHover={{ y: -6, scale: 1.05 }}
                    className="glass glass-hover flex flex-col items-center justify-center gap-2 p-4 cursor-pointer aspect-square"
                  >
                    <Image src={tool.icon} alt={tool.name} className="w-8 sm:w-10" />
                    <span className="text-[10px] sm:text-xs text-[var(--text-secondary)] text-center leading-tight">
                      {tool.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

export default TechStack;
