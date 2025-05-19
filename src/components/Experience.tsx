"use client";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";
import Card from "./Card";
gsap.registerPlugin(ScrollTrigger);

const experiences = [
  {
    company: "A.I-SOFT Technology Joint Stock Company",
    time: "10/2020 - 12/2021",
    desc: "The company researches and builds a digital university platform that allows training institutions to radically transform digitally and optimize processes and operations in the network environment.",
    type: "Outsource",
  },
  {
    company: "FPT Software",
    time: "3/2022 - Now",
    desc: "FPT Software is the global technology and IT services group headquartered in VietNam. The company has served in the industries of Aerospace & Aviation, Automotive, Banking and Finance, Logistics & Transportation, Utilities and more.",
    type: "Outsource",
  },
];

const Experience = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const items = document.querySelectorAll(".exp-item");
    if (!items) return;
    items.forEach((item) => {
      gsap.fromTo(
        item,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          ease: "power3.out",
          scrollTrigger: {
            trigger: item,
            start: "top 99%",
            end: "bottom 1%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });
  }, []);
  return (
    <Card ref={sectionRef} id="experience" title="Work Experience">
      <div className="flex flex-col gap-4">
        {experiences.map((exp, index) => (
          <div key={index} className="exp-item relative ml-4">
            <div className="flex-1">
              <div className="absolute -left-3 top-0.5 h-6 w-6 rounded-full border-4 border-sky-400 mb-2" />
              <div className="px-6 mb-2 flex flex-wrap items-baseline">
                <h2 className="text-xl font-normal text-gray-700">
                  {exp.company}
                </h2>
                <span className="ml-2 text-gray-500 font-medium">
                  - {exp.type}
                </span>
              </div>
              <div className="px-6 pb-6 border-l-2 border-gray-200">
                <p className="text-gray-500">{exp.time}</p>
                <p className="mt-4 text-gray-600 leading-relaxed">{exp.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
};

export default Experience;
