import { useEffect, useState } from "react";
import { ArrowUpCircle } from "lucide-react";

import { scrollToSection } from "./Scroll";

function ScrollToTop() {
  const [showScrollTopButton, setScrollTopButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrollTopButton(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {showScrollTopButton && (
        <button
          onClick={(e) => scrollToSection(e, "Home")}
          className="fixed bottom-5 right-5 p-2 rounded-full bg-[#6366f1] text-white shadow-md hover:bg-purple-800 transition-all z-50"
          aria-label="Scroll to top"
        >
          <ArrowUpCircle className="w-8 h-8" />
        </button>
      )}
    </>
  );
}

export default ScrollToTop;
