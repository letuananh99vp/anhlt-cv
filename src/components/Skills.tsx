"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaReact, FaGitlab, FaJira } from "react-icons/fa";
import {
  SiRedux,
  SiJavascript,
  SiTypescript,
  SiHtml5,
  SiCss3,
  SiAntdesign,
  SiMui,
  SiAdobeillustrator,
  SiAdobephotoshop,
  SiTailwindcss,
  SiJira,
} from "react-icons/si";
import Card from "./Card";
import { FaFlutter } from "react-icons/fa6";
gsap.registerPlugin(ScrollTrigger);

const skills = [
  { name: "React", icon: <FaReact className="text-sky-400" size={40} /> },
  { name: "Redux", icon: <SiRedux className="text-purple-500" size={40} /> },
  {
    name: "JavaScript",
    icon: (
      <SiJavascript className="bg-white text-yellow-300 rounded" size={40} />
    ),
  },
  {
    name: "Typescript",
    icon: (
      <SiTypescript className="text-[#3178c6] bg-white rounded" size={40} />
    ),
  },
  { name: "HTML5", icon: <SiHtml5 className="text-orange-500" size={40} /> },
  { name: "CSS3", icon: <SiCss3 className="text-blue-500" size={40} /> },
  {
    name: "Flutter",
    icon: <FaFlutter className="text-sky-500" size={40} />,
  },
  {
    name: "Ant design",
    icon: <SiAntdesign className="text-sky-500" size={40} />,
  },
  {
    name: "Meterial UI",
    icon: <SiMui className="text-blue-400" size={40} />,
  },
  {
    name: "Tailwind CSS",
    icon: <SiTailwindcss className="text-sky-500" size={40} />,
  },
  { name: "Git lab", icon: <FaGitlab className="text-orange-500" size={40} /> },
  { name: "Jira", icon: <SiJira className="text-blue-400" size={40} /> },
  {
    name: "Photoshop",
    icon: <SiAdobephotoshop className="text-[#001e36]" size={40} />,
  },
  {
    name: "Illustator",
    icon: <SiAdobeillustrator className="text-[#330000]" size={40} />,
  },
];

const Skills = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const items = sectionRef.current?.querySelectorAll(".skill-item");
    if (!items) return;
    gsap.fromTo(
      items,
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        stagger: 0.08,
        duration: 0.7,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);
  return (
    <Card ref={sectionRef} id="skills" title="Professional Skills">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-8 gap-x-8">
        {skills.map((skill) => (
          <div key={skill.name} className="skill-item flex items-center gap-5">
            <div className="flex-shrink-0">{skill.icon}</div>
            <span className="text-xl font-semibold text-gray-700">
              {skill.name}
            </span>
          </div>
        ))}
      </div>
    </Card>
  );
};

export default Skills;
