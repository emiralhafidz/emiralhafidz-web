import {useEffect } from "react";

import DropdownExperience from "../components/DropdownExperience";
import AOS from "aos";
import "aos/dist/aos.css";
import { TypeAnimation } from "react-type-animation";

const Experience = () => {
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 1500,
      easing: "ease-in-sine",
      delay: 100,
    });
  }, []);
  return (
    <section className="experience" data-aos="fade-down">
      <div className="judulHalaman">
        <h1>
          Pengalaman <span>Kerja</span>
        </h1>
        <blockquote></blockquote>
        <p>
          "Electrical Engineer dengan pengalaman 1 tahun di bidang High Voltage
          (HV) dan Medium Voltage (MV), berpengalaman memimpin tim proyek dari
          perencanaan hingga implementasi. Terampil menggunakan AutoCAD untuk
          pembuatan dan modifikasi gambar teknis. Memiliki pemahaman mendalam
          tentang sistem sensor, kontrol, serta telekomunikas dan IoT.
          Berorientasi pada hasil, mampu bekerja sama lintas disiplin, dan
          berkomitmen terhadap standar keselamatan dan kualitas kerja yang
          tinggi".
        </p>
      </div>
      <hr />
      <DropdownExperience />
    </section>
  );
};

export default Experience;
