import { useRef } from "react";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import ScrollToTop from "./components/ScrollToTop";
import Education from "./components/Education";

function App() {
  const home = useRef(null);
  const about = useRef(null);
  const education = useRef(null);
  const experience = useRef(null);
  const skills = useRef(null);
  const project = useRef(null);
  const contact = useRef(null);
  const scrollToSection = (eleRef) => {
    window.scrollTo({
      top: eleRef.current.offsetTop - 64,
      behavior: "smooth",
    });
  };
  return (
    <>
      <Navbar
        scrollToSection={scrollToSection}
        home={home}
        about={about}
        education={education}
        experience={experience}
        skills={skills}
        project={project}
        contact={contact}
      />
      <Home home={home} />
      <About about={about} />
      <Education education={education} />
      <Experience experience={experience} />
      <Skills skills={skills} />
      <Projects project={project} />
      <Contact contact={contact} />
      <Footer />
      <ScrollToTop />
    </>
  );
}

export default App;
