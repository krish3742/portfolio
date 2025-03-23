import { Menu, X } from "lucide-react";
import debounce from "lodash.debounce";
import { useState, useEffect, useCallback } from "react";

import { scrollToSection } from "./Scroll";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("Home");

  const navItems = ["Home", "About", "Portfolio", "Contact"];

  const handleScroll = useCallback(
    debounce(() => {
      setScrolled(window.scrollY > 20);

      const sections = navItems
        .map((id) => {
          const section = document.getElementById(id);
          if (section) {
            return {
              id,
              top: section.offsetTop - 550,
              bottom: section.offsetTop + section.offsetHeight - 550,
            };
          }
          return null;
        })
        .filter(Boolean);

      const scrollPosition = window.scrollY;
      const active = sections.find(
        (section) =>
          scrollPosition >= section.top && scrollPosition < section.bottom
      );

      if (active) {
        setActiveSection(active.id);
      }
    }, 100),
    []
  );

  const scroll = (e, id) => {
    scrollToSection(e, id);
    setIsOpen(false);
  };

  // Use Effect for Scroll Events
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  // Handle Overflow When Mobile Menu is Open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "unset";
  }, [isOpen]);

  return (
    <nav
      className={`fixed w-full top-0 z-50 transition-all duration-500
      ${
        isOpen
          ? "opacity-100 bg-[#030014]"
          : scrolled
          ? "backdrop-blur-xl bg-[#030014]/50"
          : ""
      }
    `}
    >
      <div className="container mx-auto px-4 sm:px-6 md:px-10 lg:px-20">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <button
              onClick={(e) => scroll(e, "Home")}
              className="text-xl font-bold bg-gradient-to-r bg-clip-text text-transparent from-[#a855f7] to-[#6366f1]"
            >
              KA
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-8 flex items-center space-x-8">
              {navItems.map((item) => (
                <button
                  key={item}
                  onClick={(e) => scroll(e, item)}
                  className="group relative px-1 py-2 text-sm font-medium"
                >
                  <span
                    className={`relative z-10 transition-colors duration-300 ${
                      activeSection === item
                        ? "bg-gradient-to-r bg-clip-text text-transparent font-semibold from-[#6366f1] to-[#a855f7]"
                        : "text-[#e2d3fd] group-hover:text-white"
                    }`}
                  >
                    {item}
                  </span>
                  <span
                    className={`absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-[#6366f1] to-[#a855f7]
                    transform origin-left transition-transform duration-300
                    ${
                      activeSection === item
                        ? "scale-x-100"
                        : "scale-x-0 group-hover:scale-x-100"
                    }`}
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center justify-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`relative p-2 text-white transition-transform duration-300 ease-in-out transform ${
                isOpen ? "rotate-90 scale-125" : "rotate-0 scale-100"
              }`}
            >
              {isOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`md:hidden h-max fixed inset-0 bg-[#030014] transition-all duration-300 ease-in-out ${
          isOpen
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-[-100%] pointer-events-none"
        }`}
        style={{
          top: "64px",
          backgroundColor: "#030014",
          willChange: "opacity, transform",
          WebkitBackfaceVisibility: "hidden",
          WebkitTransform: "translateZ(0)",
        }}
      >
        <div className="flex flex-col h-full border-t border-white">
          <div className="container mx-auto px-4 sm:px-6 md:px-10 lg:px-20 py-1 space-y-3 flex-1">
            {navItems.map((item, index) => (
              <button
                key={item}
                onClick={(e) => scroll(e, item)}
                className={`block px-4 py-3 text-lg font-medium transition-all duration-300 ease ${
                  activeSection === item
                    ? "bg-gradient-to-r bg-clip-text text-transparent font-semibold from-[#6366f1] to-[#a855f7]"
                    : "text-[#e2d3fd] group-hover:text-white"
                }`}
                style={{
                  transitionDelay: `${index * 100}ms`,
                  transform: isOpen ? "translateX(0)" : "translateX(50px)",
                  opacity: isOpen ? 1 : 0,
                }}
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
