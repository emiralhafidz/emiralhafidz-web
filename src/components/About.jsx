import { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import CountUp from "react-countup";
import FotoAbout from "../assets/foto_about.jpg";
import AOS from "aos";
import "aos/dist/aos.css";

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.5,
  });
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 1500,
      easing: "ease-in-sine",
      delay: 100,
    });
  }, []);
  return (
    <section className="about" ref={ref}>
      <div className="container1" data-aos="fade-right">
        <div className="imgWrapper">
          <img src={FotoAbout} alt="Emir Foto" />
        </div>
      </div>
      <div className="container2" data-aos="fade-down">
        <h1 className="title">About Me</h1>
        <div className="introduction">
          Halo semuanya, saya Muhammad Emir Al Hafidz memiliki minat dan bakat
          dalam bidang teknik dan teknologi.
        </div>
        <p>
          Sepanjang perjalanan saya, saya telah memperoleh pengalaman berharga
          melalui magang di bidang teknik, di mana saya mempelajari keterampilan
          penting dan mengerjakan proyek nyata. Saya juga menunjukkan
          kreativitas dengan membangun proyek IoT saya sendiri yang mampu
          menyelesaikan masalah dengan cara cerdas. Saya senang mempelajari
          hal-hal baru, menghadapi tantangan, dan dikenal sebagai pribadi yang
          dapat diandalkan serta mampu menangani berbagai tugas dengan baik.
          Selain itu, saya juga memiliki pengalaman kerja di perusahaan EPC
          sebagai Electrical Engineer, di mana saya terlibat dalam perencanaan,
          pengadaan, hingga implementasi proyek ketenagalistrikan.
        </p>
        <div className="container">
          <div className="item">
            <h2>
              {inView ? <CountUp start={0} end={2} duration={8} /> : null}
            </h2>
            <div>years of learning</div>
          </div>
          <div className="item">
            <h2>
              {inView ? <CountUp start={0} end={5} duration={8} /> : null} +
            </h2>

            <div>projects completed</div>
          </div>
          <div className="item">
            <h2>
              {inView ? <CountUp start={0} end={2} duration={8} /> : null} +
            </h2>
            <div>clients</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
