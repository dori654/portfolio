import { workData } from "@/assets/assets";
import Image from "next/image";
import Link from "next/link";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export const Work = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="work" className="scroll-mt-20 w-full px-[5%] py-16 sm:px-[12%] sm:py-20">
      <motion.div
        ref={ref}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
      >
        <motion.p variants={fadeInUp} className="mb-2 text-center text-sm font-Outfit text-[var(--primary)] tracking-widest uppercase">
          Portfolio
        </motion.p>
        <motion.h2 variants={fadeInUp} className="text-center text-3xl sm:text-5xl font-bold gradient-text mb-4">
          Featured Projects
        </motion.h2>
        <motion.p variants={fadeInUp} className="mx-auto mb-14 max-w-2xl text-center text-[var(--text-secondary)] text-sm sm:text-base leading-relaxed">
          Real-world projects showcasing full-stack development, cloud infrastructure,
          CI/CD automation, and system monitoring — built with modern engineering practices.
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {workData.map((project, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              whileHover={{ y: -5 }}
              className={`glass glass-hover overflow-hidden group ${
                project.placeholder ? "flex items-center justify-center min-h-[300px] border-dashed" : "cursor-pointer"
              }`}
            >
              {project.placeholder ? (
                <div className="text-center p-6">
                  <div className="w-14 h-14 mx-auto mb-4 rounded-full border-2 border-dashed border-[var(--text-secondary)]/30 flex items-center justify-center">
                    <span className="text-2xl text-[var(--text-secondary)]/50">+</span>
                  </div>
                  <h3 className="text-lg font-semibold text-[var(--text-secondary)] mb-2">
                    {project.title}
                  </h3>
                  <p className="text-sm text-[var(--text-secondary)]/60">
                    {project.description}
                  </p>
                </div>
              ) : (
                <Link href={project.slug ? `/projects/${project.slug}` : "#"} className="block">
                  {/* Project image */}
                  <div className="h-48 sm:h-56 overflow-hidden">
                    <div
                      className="w-full h-full bg-cover bg-center group-hover:scale-105 transition-transform duration-500"
                      style={{ backgroundImage: `url(${project.bgImage})` }}
                    />
                  </div>

                  {/* Project details */}
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-lg font-semibold text-white group-hover:text-[var(--primary)] transition-colors duration-300">
                        {project.title}
                      </h3>
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="text-[var(--text-secondary)] group-hover:text-[var(--primary)] group-hover:translate-x-1 transition-all duration-300 flex-shrink-0 ml-2">
                        <path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-4">
                      {project.description}
                    </p>

                    {/* Tech tags */}
                    {project.techTags && project.techTags.length > 0 && (
                      <div className="flex flex-wrap gap-2">
                        {project.techTags.map((tag) => (
                          <span
                            key={tag}
                            className="px-3 py-1 text-xs rounded-full bg-[var(--primary)]/10 text-[var(--primary)] border border-[var(--primary)]/20"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </Link>
              )}
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Work;
