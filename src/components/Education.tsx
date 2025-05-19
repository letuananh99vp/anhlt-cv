"use client";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";
import Card from "./Card";
gsap.registerPlugin(ScrollTrigger);

const education = [
  {
    school: "Posts and Telecommunications Institute of Technology",
    time: "2017 - 2022",
    desc: "Information Security Engineer from Posts and Telecommunications Institute of Technology. Education and training for society and for the needs of Vietnam's information and communication industry.",
  },
];

const Education = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const items = document.querySelectorAll(".edu-item");
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
    <Card ref={sectionRef} id="education" title="Education">
      <div className="flex flex-col gap-4">
        {education.map((exp, index) => (
          <div key={index} className="edu-item relative ml-4">
            <div className="flex-1">
              <div className="absolute -left-3 top-0.5 h-6 w-6 rounded-full border-4 border-[#20c997] mb-2" />
              <div className="px-6 mb-2 flex flex-wrap items-baseline">
                <h2 className="text-xl font-normal text-gray-700">
                  {exp.school}
                </h2>
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

export default Education;
