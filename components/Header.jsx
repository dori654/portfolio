"use client";
import React from "react";
import Image from "next/image";
import { assets } from "@/assets/assets";
import { GithubIcon, LinkedinIcon } from "./ui";

export const Header = ({ onContact }) => {
  return (
    <section id="top" className="hero" aria-labelledby="top-title">
      <div className="container hero__grid">
        <div className="hero__copy">
          <h1 id="top-title">Dori Fourer</h1>
          <p className="lead hero__lede">
            Software Engineer in Israel, <mark>from code to production</mark>.
          </p>

          <div className="hero__actions">
            <button type="button" onClick={onContact} className="btn btn--primary">
              Get in touch
            </button>
            <a href="/Dori_Fourer.pdf" download className="btn">
              Download resume
            </a>
          </div>
        </div>

        <div className="hero__record">
        <aside className="panel record" aria-label="Record">
          <div className="record__portrait">
            <Image
              src={assets.MyPic}
              alt="Portrait of Dori Fourer"
              fill
              priority
              sizes="(min-width: 60rem) 40vw, 100vw"
            />
          </div>
          <dl className="readings">
            <div>
              <dt>Certified</dt>
              <dd>Google Cloud Professional Cloud Architect</dd>
            </div>
            <div>
              <dt>Clouds</dt>
              <dd>Multi-cloud on AWS and GCP</dd>
            </div>
            <div>
              <dt>Works as</dt>
              <dd>Full-Stack Developer, DevOps Specialist, Cloud Architect</dd>
            </div>
            <div>
              <dt>Find me</dt>
              <dd className="record__links">
                <a
                  href="https://github.com/dori654"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="icon-btn"
                  aria-label="GitHub"
                >
                  <GithubIcon />
                </a>
                <a
                  href="https://linkedin.com/in/dori-fourer"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="icon-btn"
                  aria-label="LinkedIn"
                >
                  <LinkedinIcon />
                </a>
              </dd>
            </div>
          </dl>
        </aside>
        </div>
      </div>
    </section>
  );
};

export default Header;
