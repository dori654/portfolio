import { serviceData } from "@/assets/assets";
import React, { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="services" className="scroll-mt-20 w-full px-[5%] py-16 sm:px-[12%] sm:py-20">
      <motion.div
        ref={ref}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
      >
        <motion.p variants={fadeInUp} className="mb-2 text-center text-sm font-Outfit text-[var(--primary)] tracking-widest uppercase">
          What I Do
        </motion.p>
        <motion.h2 variants={fadeInUp} className="text-center text-3xl sm:text-5xl font-bold gradient-text mb-4">
          My Expertise
        </motion.h2>
        <motion.p variants={fadeInUp} className="text-center max-w-2xl mx-auto mb-14 text-[var(--text-secondary)] text-sm sm:text-base leading-relaxed">
          I build end-to-end software solutions — from modern web applications to
          cloud infrastructure and automated deployment pipelines. Here's what I bring to the table.
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {serviceData.map(({ icon, title, description }, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              whileHover={{ y: -8 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="glass glass-hover card-gradient-border p-8 cursor-pointer group"
            >
              <motion.div whileHover={{ rotate: 5, scale: 1.1 }}>
                <Image src={icon} alt={title} className="w-10 opacity-80" />
              </motion.div>
              <h3 className="text-lg my-4 text-white font-semibold group-hover:text-[var(--primary)] transition-colors duration-300">
                {title}
              </h3>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Services;
