"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import Card from "./Card";
gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    title: "Preschool System",
    desc: "The preschool system is an administrative system with many functions such as managing information about the kindergarten, classes in the school, scheduling classes, etc. to manage the preschools in the same system. Built on both web and mobile apps",
    role: "Front End Web Developer",
    image: "/images/landing-mamnon.png",
  },
  {
    title: "One door office",
    desc: "One door office is a system that helps university students not need to go to school to ask for related documents, but can send from web or application. At the same time, clerical staff can process documents directly on the web.",
    role: "Front End Web Developer",
    image: "/images/project-2.jpg",
  },
  {
    title: "Dtechco",
    desc: "Dtechco is a landing page website introducing Dtechco technology joint stock company.",
    role: "Front End Web Developer",
    image: "/images/landing-dtechco.png",
  },
  {
    title: "Electronic Invoice System",
    desc: "Electronic Invoice System is a platform service which sending and receiving electronic invoices, and saving, searching, in order to support the expected digitization of invoices by email.",
    role: "Front End Web Developer",
    image: "/images/project-3.jpg",
  },
];

const Portfolio = () => {
  const sectionRef = useRef<HTMLDivElement[]>([]);
  useEffect(() => {
    sectionRef.current.forEach((el, idx) => {
      gsap.fromTo(
        el,
        { opacity: 0, x: idx % 2 === 1 ? -100 : 100 },
        {
          opacity: 1,
          x: 0,
          stagger: 0.15,
          duration: 0.7,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });
  }, []);
  return (
    <Card id="portfolio" title="Portfolio">
      <div className="flex flex-col">
        {projects.map((project, idx) => (
          <div
            key={project.title}
            className={`portfolio-item flex flex-col md:flex-row ${
              idx % 2 === 1 ? "md:flex-row-reverse" : ""
            } items-center `}
          >
            <div className="w-full md:w-1/2">
              <Image
                src={project.image}
                alt={project.title}
                width={800}
                height={500}
                className="m-w-full h-auto"
              />
            </div>
            <div
              ref={(el) => {
                if (el) {
                  sectionRef.current[idx] = el;
                }
              }}
              className={`p-6 w-full md:w-1/2 flex flex-col items-start text-left ${
                idx % 2 === 1 && "md:items-end md:text-right"
              }`}
            >
              <span className="text-teal-500 text-[14px] font-semibold mb-2">
                {project.role}
              </span>
              <h3 className="text-2xl md:text-3xl font-semibold text-gray-700 mb-2">
                {project.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">{project.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
};

export default Portfolio;
