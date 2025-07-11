import { serviceData, assets } from "@/assets/assets";
import React from "react";
import Image from "next/image";
import "@/app/globals.css";

export const Services = () => {
  return (
    <div id="services" className="scroll-mt-20 w-full px-[12%] py-10">
      <h4 className="mb-2 text-center text-lg font-Ovo">What I offer</h4>
      <h2 className="text-center text-5xl font-Ovo">My Services</h2>
      <p className="text-center max-w-2xl mx-auto mt-5 mb-10 font-Ovo">
        I specialize in full-stack development, DevOps, and cloud solutions. My
        services include building scalable web applications, automating
        deployment processes, and optimizing system performance. I focus on
        delivering practical, user-focused solutions that meet real-world needs.
      </p>

      <div className="grid gridTemplate  gap-6 my-10 ">
        {serviceData.map(({ icon, title, description, link }, index) => (
          <div
            key={index}
            className="border border-gray-400 rounded-lg px-8 py-12 hover:shadow-black cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500"
          >
            <Image src={icon} alt="" className="w-10" />
            <h3 className="text-lg my-4 text-gray-700">{title}</h3>
            <p className="text-sm text-gray-600 leading-5">{description}</p>
            <a href={link} className="flex items-center gap-2 text-sm mt-5">
              Read more{" "}
              <Image src={assets.right_arrow} alt="" className="w-4" />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Services;
