import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import ContactPage from "./pages/Contact";
import Portofolio from "./pages/Portofolio";

import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import ScrollToTop from "./components/ScrollToTop";
import ProjectDetails from "./components/ProjectDetail";
import AnimatedBackground from "./components/Background";

import "./index.css";

const LandingPage = () => {
  useEffect(() => {
    document.getElementsByTagName("body")[0].style.backgroundColor = "#030014";
  }, []);
  return (
    <div className="bg-[#030014]">
      <Navbar />
      <AnimatedBackground />
      <Home />
      <About />
      <Portofolio />
      <ContactPage />
      <Footer />
      <ScrollToTop />
    </div>
  );
};

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/project/:id" element={<ProjectDetails />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
