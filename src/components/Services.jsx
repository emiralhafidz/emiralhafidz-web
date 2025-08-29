import { useState, useEffect } from "react";
import { BiRightTopArrowCircle } from "react-icons/bi";

import AOS from "aos";
import "aos/dist/aos.css";

const Services = () => {
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 1500,
      easing: "ease-in-sine",
      delay: 100,
    });
  }, []);

  const services = [
    {
      name: "Electrical Engineer",
      description:
        "Saya memiliki minat yang besar pada sistem kelistrikan, terampil menggunakan AutoCAD Electrical, dan sangat tertarik pada bidang rekayasa otomasi sistem kontrol.",
    },
    {
      name: "Electronics Engineer",
      description:
        "Saya memiliki ketertarikan yang kuat dalam bekerja dengan komponen dan rangkaian elektronik.",
    },
    {
      name: "IoT Developer",
      description:
        "Saya bersemangat untuk mempelajari teknologi IoT, dengan fokus pada menghubungkan perangkat, mengumpulkan data, serta mengintegrasikannya dengan platform cloud untuk menciptakan sistem yang lebih cerdas.",
    },
    {
      name: "Fullstack Developer",
      description:
        "Saya sedang mempelajari pengembangan front-end dan back-end, khususnya bagaimana membangun aplikasi web responsif dengan React.js serta mengelola data melalui API.",
    },
  ];

  return (
    <section className="services">
      <div className="container1" data-aos="zoom-in">
        <h1 className="title">What I Do</h1>
        <p>
          Halo semuanya, saya Muhammad Emir Al Hafidz. Saya memiliki minat dan
          bakat dalam bidang teknik dan teknologi. Selain itu, saya memiliki
          pengalaman bekerja di perusahaan EPC sebagai Electrical Engineer,
          terlibat dalam perencanaan hingga implementasi proyek. Saya juga
          memiliki ketertarikan yang kuat di bidang tenaga listrik serta sistem
          SCADA, yang mendorong saya untuk terus mengembangkan kemampuan dan
          pengetahuan saya di bidang tersebut.
        </p>
        <a href="" className="tombol btnServices">
          see my work
        </a>
      </div>
      <div className="container2" data-aos="flip-left">
        {services.map((service, index) => (
          <div className="item hvr-grow-shadow">
            <div className="part1" key={index}>
              <h3>{service.name}</h3>
              <p>{service.description}</p>
            </div>

            <div className="part2">
              <BiRightTopArrowCircle className="icon" />
              <a href="">Learn More</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
