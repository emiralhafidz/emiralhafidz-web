import { useState, useEffect } from "react";
import PhotoProfile from "../assets/foto_emir.jpeg";
import {
  BiLogoInstagram,
  BiLogoGithub,
  BiLogoLinkedinSquare,
} from "react-icons/bi";
import { TypeAnimation } from "react-type-animation";
import AOS from "aos";
import "aos/dist/aos.css";

const Banner = () => {
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 1500,
      easing: "ease-in-sine",
      delay: 100,
    });
  }, []);

  return (
    <section className="banner">
      <div className="container1" data-aos="fade-right">
        <div className="fullname">Muhammad Emir Al Hafidz</div>
        <div className="fields">
          I Interesting In{" "}
          <span>
            <TypeAnimation
              sequence={[
                "Electrical Engineer",
                1000,
                "Electronics Engineer",
                1000,
                "Iot Developer",
                1000,
              ]}
              speed={50}
              deletionSpeed={10}
              repeat={Infinity}
            />
          </span>
        </div>
        <p className="profile">
          Halo, saya Muhammad Emir Al Hafidz. Saya memiliki motivasi belajar
          yang sangat kuat di bidang engineering dan teknologi. Dalam menjalani
          pekerjaan, saya selalu berpegang pada tiga prinsip kerja yang saya
          yakini, yaitu bener, kurup, dan janji. Bener berarti bekerja dengan
          benar, patuh terhadap aturan, serta melaksanakan jobdesk sesuai
          tanggung jawab. Kurup bermakna menjalani pekerjaan dengan hati yang
          ikhlas, sehingga memberi kepuasan baik bagi diri sendiri maupun
          perusahaan. Sedangkan janji berarti menunaikan amanah dengan penuh
          tanggung jawab serta menjunjung tinggi kedisiplinan dalam bekerja.
          Prinsip ini menjadi dasar saya untuk terus berkembang dan memberikan
          kontribusi terbaik di setiap kesempatan.
        </p>
        <a
          href="https://drive.google.com/drive/folders/1Rz6jbsz1BaucUGlnoeVPN0RR25Mn5Cr3?usp=sharing"
          className="tombol"
        >
          Download CV
        </a>
        <div className="accounts">
          <a href="https://github.com/emiralhafidz">
            <BiLogoGithub />
          </a>
          <a href="http://linkedin.com/in/muhammad-emir-al-hafidz">
            <BiLogoLinkedinSquare />
          </a>
          <a href="https://www.instagram.com/eahafidz">
            <BiLogoInstagram />
          </a>
        </div>
      </div>
      <div className="container2" data-aos="fade-up">
        <div className="imgWrapper">
          <img src={PhotoProfile} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Banner;
