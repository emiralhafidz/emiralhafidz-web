import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import AnimatedCursor from "react-animated-cursor";

import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Overall from "./pages/Overall";
import Experience from "./pages/Experience";
import Education from "./pages/Education";
import Contact from "./pages/Contact";

function App() {
  return (
    <Router>
      {/* <AnimatedCursor
        className="allCursor"
        color="#fff"
        innerSize={8}
        outerSize={35}
        innerScale={1}
        outerScale={1.7}
        outerAlpha={0}
        outerStyle={{
          mixBlendMode: "exclusion",
        }}
      /> */}
      <Header />


      <Routes>
        <Route path="/" element={<Overall />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/education" element={<Education />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
