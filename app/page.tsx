"use client";
import React from "react";
import Navbar from "@/components/navbar/navbar";
import PhotoOfMe from "../images/Photo-of-myself-portfolio.png";
import PhotoOfMe2 from "../images/photo-of-me.jpg";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faFacebook } from "@fortawesome/free-brands-svg-icons/faFacebook";
import { faInstagram } from "@fortawesome/free-brands-svg-icons/faInstagram";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons/faLinkedin";
import { faGithub } from "@fortawesome/free-brands-svg-icons/faGithub";

export default function Home() {
  const sendEmail = () => {
    window.open(
      "mailto:duradorin11@yahoo.com?subject=SendMail&body=Description"
    );
  };

  return (
    <div className="">
      <div>
        {/* <div className="sticky"> */}
        <Navbar />
        {/* </div> */}
        <div className="py-8 flex flex-row justify-between mx-20 max-xl2-screen:justify-center max-xl2-screen:flex-col max-xl2-screen:mx-2">
          <div className="flex flex-col gap-6 py-6">
            <div className="text-4xl font-semi-bold paragraph-width-home max-xl2-screen:justify-center max-xl2-screen:flex max-xl2-screen:mx-auto max-sm/3.5-screen:text-2xl">
              Experienced
            </div>
            <div className="text-5xl text-violet font-bold paragraph-width-home max-xl2-screen:justify-center max-xl2-screen:flex max-xl2-screen:mx-auto max-xl2-screen:text-center max-sm/3.5-screen:text-3xl">
              Frontend Developer
            </div>
            <div className="paragraph-width-home font-medium text-justify max-xl2-screen:justify-center max-xl2-screen:flex max-xl2-screen:mx-auto max-xl2-screen:text-center">
              Crafting captivating user experiences, one pixel at a time, with
              precision and creativity.
            </div>
            <div className="py-2 paragraph-nd-width-home font-medium text-justify max-xl2-screen:justify-center max-xl2-screen:flex max-xl2-screen:mx-auto max-xl2-screen:text-center">
              👋 Hello, as a seasoned Frontend Developer with a passion for
              crafting immersive digital experiences, I am specialized in
              leveraging a robust skill set including HTML, CSS, and JavaScript
              to build dynamic and user-friendly web applications.{" "}
            </div>
            <div className="font-medium max-xl2-screen:justify-center max-xl2-screen:flex max-xl2-screen:mx-auto">
              English - Advanced
            </div>
            <div className="font-medium max-xl2-screen:justify-center max-xl2-screen:flex max-xl2-screen:mx-auto">
              Romanian - Native
            </div>
            <div className="font-medium max-xl2-screen:justify-center max-xl2-screen:flex max-xl2-screen:mx-auto">
              French - Elementary
            </div>

            <div className="bg-dark-blue w-36 h-12 rounded-xl flex items-center justify-center my-4 max-xl2-screen:justify-center max-xl2-screen:flex max-xl2-screen:mx-auto">
              <button
                className="text-3xl text-white"
                onClick={() => sendEmail()}
              >
                Hire me
              </button>
            </div>
          </div>
          <div className=" max-xl-screen:">
            <div className="width-and-height-psect width-and-height-sm bg-dark-blue rounded-full flex justify-center items-center content-end outline max-xl2-screen:mx-auto">
              <div className="width-and-height-psect2 width-and-height2-sm">
                <img
                  className="rounded-full outline"
                  src={PhotoOfMe2.src}
                  alt="Photo of me"
                />
              </div>
            </div>
            <div className="py-4">
              <div className="flex justify-center py-4 text-2xl font-medium">
                Dorin Dura
              </div>
              <div className="flex flex-row justify-between py-4 max-xl-screen-page-width max-xl2-screen:justify-center max-xl2-screen:flex max-xl2-screen:mx-auto">
                <a
                  href="https://www.facebook.com/dorin.dura.31/"
                  className="max-xl2-screen:px-4"
                >
                  <FontAwesomeIcon icon={faFacebook} size="lg" />
                </a>
                <a
                  href="https://www.instagram.com/dorindura/"
                  className="max-xl2-screen:px-4"
                >
                  <FontAwesomeIcon icon={faInstagram} size="lg" />
                </a>
                <a
                  href="https://www.linkedin.com/in/dorin-dura-frontend-developer/"
                  className="max-xl2-screen:px-4"
                >
                  <FontAwesomeIcon icon={faLinkedin} size="lg" />
                </a>
                <a
                  href="https://github.com/dorindura"
                  className="max-xl2-screen:px-4"
                >
                  <FontAwesomeIcon icon={faGithub} size="lg" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
