"use client";
import { useAnimationText } from "@/hooks/useAnimationText";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";
import {
  FaBirthdayCake,
  FaEnvelope,
  FaFacebook,
  FaMapMarkerAlt,
  FaPhone,
} from "react-icons/fa";
import Card from "./Card";
gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const { displayText } = useAnimationText([
    "Tuan Anh",
    "a Front-end Developer",
  ]);
  const sectionRef = useRef<HTMLDivElement>(null);
  const cursorRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    gsap.from(sectionRef.current, {
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%",
      },
      y: 50,
      opacity: 0,
      duration: 0.8,
      ease: "power3.out",
    });
  }, []);

  useEffect(() => {
    if (!cursorRef.current) return;
    gsap.to(cursorRef.current, {
      opacity: 0,
      repeat: -1,
      yoyo: true,
      duration: 0.6,
      ease: "power1.inOut",
    });
  }, []);

  return (
    <Card
      ref={sectionRef}
      id="about"
      className="flex flex-col md:flex-row md:gap-16 gap-8"
    >
      {/* Left: About Me */}
      <div className="flex-1 min-w-0">
        <div className="text-[32px] font-light mb-6">About Me</div>
        <div className="min-h-[32px]">
          Hello! I&apos;m{" "}
          <span className="font-semibold">
            <span>{displayText}</span>
            <span
              ref={cursorRef}
              className="inline-block w-1 h-6 bg-gray-800 align-middle ml-1 animate-blink"
              style={{ borderRadius: 2 }}
            ></span>
          </span>
        </div>
        <p className=" leading-relaxed">
          My job target is developing and creating lots of high quality websites
          for users. I am looking for a suitable position at a company to
          experience new challenges which help me improve my skill. At the same
          time, I want to improve my knowledge through your professional working
          environment and bring the best products to the company&apos;s
          customers.
        </p>
      </div>
      {/* Right: Bio */}
      <div className="flex-1 min-w-0 flex flex-col justify-center">
        <h3 className="text-[32px] font-light mb-6">Bio</h3>
        <ul className="space-y-4">
          <li className="flex items-center gap-4">
            <FaBirthdayCake className="text-xl text-gray-500 min-w-[20px]" />
            <span className="font-semibold w-28 inline-block">D.O.B</span>
            <span className="text-gray-600">22/04/1999</span>
          </li>
          <li className="flex items-center gap-4">
            <FaEnvelope className="text-xl text-gray-500 min-w-[20px]" />
            <span className="font-semibold w-28 inline-block">Email</span>
            <span className="text-gray-600">anhlt2204.dev@gmail.com</span>
          </li>
          <li className="flex items-center gap-4">
            <FaFacebook className="text-xl text-gray-500 min-w-[20px]" />
            <span className="font-semibold w-28 inline-block">Facebook</span>
            <span className="text-gray-600">facebook.com/lakillah.ptit</span>
          </li>
          <li className="flex items-center gap-4">
            <FaPhone className="text-xl text-gray-500 min-w-[20px]" />
            <span className="font-semibold w-28 inline-block">Phone</span>
            <span className="text-gray-600">084.224.1999</span>
          </li>
          <li className="flex items-center gap-4">
            <FaMapMarkerAlt className="text-xl text-gray-500 min-w-[20px]" />
            <span className="font-semibold w-28 inline-block">Address</span>
            <span className="text-gray-600">Tan Trieu, Thanh Tri, Ha Noi</span>
          </li>
        </ul>
      </div>
    </Card>
  );
};

export default About;
