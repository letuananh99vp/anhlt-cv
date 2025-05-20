import { useEffect, useState } from "react";

export const useAnimationText = (texts: string[]) => {
  const [displayText, setDisplayText] = useState<string>("");
  useEffect(() => {
    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let timeout: NodeJS.Timeout;

    function type() {
      const current = texts[textIndex];
      if (!isDeleting) {
        setDisplayText(current.slice(0, charIndex + 1));
        if (charIndex < current.length) {
          charIndex++;
          timeout = setTimeout(type, 80);
        } else {
          isDeleting = true;
          timeout = setTimeout(type, 1000);
        }
      } else {
        setDisplayText(current.slice(0, charIndex - 1));
        if (charIndex > 0) {
          charIndex--;
          timeout = setTimeout(type, 50);
        } else {
          setDisplayText("");
          timeout = setTimeout(() => {
            isDeleting = false;
            textIndex = (textIndex + 1) % texts.length;
            charIndex = 0;
            type();
          }, 600);
          return;
        }
      }
    }
    type();
    return () => clearTimeout(timeout);
  }, [texts]);
  return { displayText };
};
