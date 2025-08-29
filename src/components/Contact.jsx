import { useState, useEffect, useRef } from "react";
import emailjs from "@emailjs/browser";
import AOS from "aos";
import "aos/dist/aos.css";
import Swal from "sweetalert2";

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_i81a3pv", "template_to3qe9n", form.current, {
        publicKey: "AgUQlOVaU1KY6bL_p",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Thanks, your message has sent",
            backdrop: `
    rgba(0,0,123,0.4)
    url("https://sweetalert2.github.io/images/nyan-cat.gif")
    left top
    no-repeat
  `,
            showConfirmButton: false,
            timer: 2000,
          });
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 1500,
      easing: "ease-in-sine",
      delay: 100,
    });
  }, []);
  return (
    <section className="contact">
      <div className="container1" data-aos="flip-up">
        <h1 className="title">Get in touch</h1>
        <h2>
          Let's Work <br /> With Me !
        </h2>
      </div>
      <div className="container2" data-aos="flip-down">
        <form ref={form} onSubmit={sendEmail}>
          <input
            className="inputStyle"
            type="email"
            name="user_email"
            placeholder="Enter Your Email"
          />
          <input
            className="inputStyle"
            type="text"
            name="user_name"
            placeholder="Enter Your Name"
          />
          <textarea
            className="inputStyle"
            name="message"
            placeholder="Enter Your Message"
          ></textarea>
          <button className="tombol" type="submit">
            Send Messages
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
