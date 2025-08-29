import React from "react";
import Banner from "../components/Banner";
import About from "../components/About";
import Services from "../components/Services";
import Projects from "../components/Projects";
import Contact from "../components/Contact";

const Overall = () => {
  return (
    <div>
      <Banner />
      <About />
      <Services />
      <Projects />
      <Contact />
    </div>
  );
};

export default Overall;
