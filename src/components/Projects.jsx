import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Projects = () => {
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 2000,
      easing: "ease-in-sine",
      delay: 100,
    });
  }, []);
  return (
    <section className="projects">
      <div className="container1" data-aos="fade-right">
        <div className="item special">
          <h1 className="title">My Projects</h1>
          <p>
            Saya mengembangkan aplikasi dashboard monitoring yang dinamis
            menggunakan React.js pada bagian frontend, dengan fokus pada
            pembuatan antarmuka pengguna yang responsif dan intuitif. Proyek ini
            memanfaatkan Node.js sebagai backend dan C++ untuk pemrograman
            mikrokontroler, yang menunjukkan keterampilan saya dalam
            pengembangan full-stack, integrasi API, serta pemrograman sistem
            tertanam.
          </p>
          <a href="https://github.com/emiralhafidz" className="tombol">
            View All Projects
          </a>
        </div>
        <div className="item hvr-pulse">
          <h2 className="hvr-grow-shadow">Internet of Things</h2>
          <h5>Ground Control Station</h5>
        </div>
      </div>
      <div className="container2" data-aos="zoom-out">
        <div className="item hvr-pulse">
          {" "}
          <h2 className="hvr-grow-shadow">Internet of Things</h2>
          <h5>Fish Pond Monitoring</h5>
        </div>
        <div className="item hvr-pulse">
          {" "}
          <h2 className="hvr-grow-shadow">Internet of Things</h2>
          <h5>Web Based RFID Attendance</h5>
        </div>
      </div>
    </section>
  );
};

export default Projects;
