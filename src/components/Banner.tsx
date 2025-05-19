"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import Image from "next/image";

const Banner = () => {
  const avatarRef = useRef(null);
  const nameRef = useRef(null);
  const subtitleRef = useRef(null);
  const socialRef = useRef<HTMLAnchorElement[]>([]);
  const buttonRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();
    tl.from(avatarRef.current, {
      scale: 0,
      opacity: 0,
      duration: 0.8,
      ease: "back.out(1.7)",
    })
      .from(
        nameRef.current,
        { y: 40, opacity: 0, duration: 0.6, ease: "power3.out" },
        "-=0.3"
      )
      .from(
        subtitleRef.current,
        { y: 20, opacity: 0, duration: 0.5, ease: "power3.out" },
        "-=0.3"
      )
      .from(
        socialRef.current,
        { opacity: 0, y: 20, duration: 0.5, stagger: 0.1, ease: "power3.out" },
        "-=0.3"
      )
      .fromTo(
        buttonRef.current,
        { scale: 0.8, opacity: 0, duration: 0.5, ease: "back.out(1.7)" },
        {
          opacity: 1,
        },
        "-=0.2"
      );
  }, []);

  return (
    <section
      className="shadow-[0_2px_5px_0_rgba(0,0,0,0.25),0_3px_10px_0_rgba(0,0,0,0.2)] relative w-full flex flex-col items-center justify-center min-h-[500px] py-16"
      id="home"
    >
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/header-background.jpg"
          alt="background"
          fill
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-black opacity-60" />
      </div>
      <div className="relative z-10 flex flex-col items-center">
        <div ref={avatarRef} className="mb-4">
          <Image
            src="/images/avatar.jpg"
            alt="avatar"
            width={150}
            height={150}
            className="rounded-full border-4 border-white shadow-lg object-cover"
            priority
          />
        </div>
        <div ref={nameRef} className="text-[40px] font-bold text-white">
          Le Tuan Anh
        </div>
        <div ref={subtitleRef} className="text-gray-200 mb-6">
          Front-end Developer
        </div>
        <div className="flex space-x-6 mb-8">
          <a
            ref={(el) => {
              if (el) socialRef.current[0] = el;
            }}
            href="https://facebook.com/lakillah.ptit"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-blue-400 text-2xl transition-colors"
            aria-label="Facebook"
          >
            {/* Facebook SVG */}
            <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
              <path d="M22.675 0h-21.35C.595 0 0 .592 0 1.326v21.348C0 23.406.595 24 1.326 24h11.495v-9.294H9.691v-3.622h3.13V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24l-1.918.001c-1.504 0-1.797.715-1.797 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116C23.406 24 24 23.406 24 22.674V1.326C24 .592 23.406 0 22.675 0" />
            </svg>
          </a>
          <a
            ref={(el) => {
              if (el) socialRef.current[1] = el;
            }}
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-blue-400 text-2xl transition-colors"
            aria-label="LinkedIn"
          >
            {/* LinkedIn SVG */}
            <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-9h3v9zm-1.5-10.28c-.97 0-1.75-.79-1.75-1.75s.78-1.75 1.75-1.75 1.75.79 1.75 1.75-.78 1.75-1.75 1.75zm13.5 10.28h-3v-4.5c0-1.08-.02-2.47-1.5-2.47-1.5 0-1.73 1.18-1.73 2.39v4.58h-3v-9h2.89v1.23h.04c.4-.75 1.38-1.54 2.84-1.54 3.04 0 3.6 2 3.6 4.59v4.72z" />
            </svg>
          </a>
        </div>
        <a
          ref={buttonRef}
          href="/cv.pdf"
          download
          className="mt-2 px-8 py-3 border-2 border-white rounded bg-transparent text-white text-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300 transform hover:scale-105 shadow-lg"
        >
          DOWNLOAD CV
        </a>
      </div>
    </section>
  );
};

export default Banner;
