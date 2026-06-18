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
                <Link href={project.slug ? `/projects/${project.slug}` : "#"} className="flex flex-col h-full">
                  {/* Project image */}
                  <div className="h-48 sm:h-56 overflow-hidden">
                    <div
                      className="w-full h-full bg-cover bg-center group-hover:scale-105 transition-transform duration-500"
                      style={{ backgroundImage: `url(${project.bgImage})` }}
                    />
                  </div>

                  {/* Project details */}
                  <div className="p-6 flex flex-col flex-1">
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

                    {/* Links */}
                    {(project.link || project.github) && (
                      <div className="flex items-center gap-3 mt-auto pt-4">
                        {project.link && (
                          <a href={project.link} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()} aria-label="Live app" className="text-[var(--text-secondary)] hover:text-[var(--primary)] transition-colors">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                              <polyline points="15 3 21 3 21 9" />
                              <line x1="10" y1="14" x2="21" y2="3" />
                            </svg>
                          </a>
                        )}
                        {project.github && (
                          <a href={project.github} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()} aria-label="GitHub repository" className="text-[var(--text-secondary)] hover:text-[var(--primary)] transition-colors">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                              <path d="M12 .5C5.37.5 0 5.87 0 12.5c0 5.3 3.44 9.8 8.21 11.39.6.11.82-.26.82-.58 0-.29-.01-1.04-.02-2.05-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.75.08-.73.08-.73 1.21.09 1.84 1.24 1.84 1.24 1.07 1.84 2.81 1.31 3.5 1 .11-.78.42-1.31.76-1.61-2.67-.3-5.47-1.34-5.47-5.95 0-1.31.47-2.38 1.24-3.22-.13-.31-.54-1.52.12-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.29-1.55 3.3-1.23 3.3-1.23.66 1.66.25 2.87.12 3.18.77.84 1.24 1.91 1.24 3.22 0 4.62-2.81 5.64-5.49 5.94.43.37.81 1.1.81 2.22 0 1.6-.01 2.89-.01 3.29 0 .32.22.7.83.58A12.01 12.01 0 0 0 24 12.5C24 5.87 18.63.5 12 .5z" />
                            </svg>
                          </a>
                        )}
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
