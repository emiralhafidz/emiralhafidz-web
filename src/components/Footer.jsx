import React from "react";
import {
  BsGeoAltFill,
  BsEnvelopeAt,
  BsTelephone,
  BsInstagram,
  BsLinkedin,
  BsTiktok,
  BsFacebook,
} from "react-icons/bs";

const Footer = () => {
  return (
    <footer>
      <div className="main">
        <div className="kolom1 kolom">
          <h1>Contact Me</h1>
          <div className="wrapper">
            <div className="contact">
              <BsGeoAltFill className="icon" /> Suradita, Cisauk Kab. Tangerang
            </div>
            <div className="contact">
              <BsTelephone className="icon" /> +628 95 0981 2109
            </div>
            <div className="contact">
              <BsEnvelopeAt className="icon" /> hafidz853@gmail.com
            </div>
          </div>
        </div>
        <div className="kolom2 kolom">
          <h1>QUOTES</h1>
          <p>
            "Consistency is not about being perfect every day, but about showing
            up, learning from mistakes, and moving forward. Small steps repeated
            with discipline will always create a bigger impact than occasional
            bursts of effort."{" "}
          </p>
        </div>
        <div className="kolom3 kolom">
          <h1>Some Experience</h1>
          <ul>
            <li>
              <a href="https://github.com/emiralhafidz/GCS_APP">
                Komunikasi drone dengan website protokol MQTT
              </a>
            </li>
            <li>
              <a href="https://github.com/emiralhafidz/presensi_rfid">
                Sistem Presensi dengan Kartu RFID
              </a>
            </li>
            <li>
              <a href="">Electrical SCADA</a>
            </li>
          </ul>
        </div>
      </div>
      <div className=" bottom">
        <div className="copyright">
          Made with love using JavaScript by Eahafidz
        </div>
        <div className="accounts">
          <a href="https://www.instagram.com/eahafidz/">
            <BsInstagram style={{ color: "#e91e1eff" }} />
          </a>
          <a href="https://linkedin.com/in/muhammad-emir-al-hafidz">
            <BsLinkedin style={{ color: "#1e0ff0ff" }} />
          </a>
          <a href="https://web.facebook.com/hafidz.emir.9">
            <BsFacebook style={{ color: "#0051ffff" }} />
          </a>
          <a href="https://www.tiktok.com/@nostelewew?_t=ZS-8zGkrKhp3Th&_r=1">
            <BsTiktok style={{ color: "#000" }} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
