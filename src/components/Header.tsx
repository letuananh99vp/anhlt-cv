import Link from "next/link";
import { useAnimationText } from "@/hooks/useAnimationText";
import { useEffect, useRef } from "react";
import gsap from "gsap";

const Header = () => {
  const { displayText } = useAnimationText([
    "Le Tuan Anh",
    "Front-end Developer",
  ]);
  const cursorRef = useRef<HTMLSpanElement>(null);

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
    <header className="md:flex justify-between text-center items-center py-8">
      <div className="text-xl font-medium">
        <span>{displayText}</span>
        <span
          ref={cursorRef}
          className="inline-block w-1 h-6 bg-gray-800 align-middle ml-1 animate-blink"
          style={{ borderRadius: 2 }}
        ></span>
      </div>
      <nav className="space-x-4 md:space-x-6">
        {[
          { href: "#about", label: "About" },
          { href: "#skills", label: "Skills" },
          { href: "#experience", label: "Experience" },
          { href: "#education", label: "Education" },
          { href: "#portfolio", label: "Portfolio" },
        ].map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="hover:text-black font-normal"
            onClick={(e) => {
              if (item.href) {
                e.preventDefault();
                const el = document.querySelector(item.href);
                if (el) {
                  el.scrollIntoView({ behavior: "smooth" });
                }
              }
            }}
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </header>
  );
};

export default Header;
