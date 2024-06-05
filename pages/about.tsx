import Navbar from "@/components/navbar/navbar";
import React from "react";
import photoOfMe from "../images/Photo-of-myself-portfolio.png";
import JoggaApplication from "../components/jogga-app";
import GuestHouseApplication from "@/components/guest-house";

import JavaScriptImg from "../images/javascript-image.svg";
import HtmlImg from "../images/html-image.png";
import CSSImg from "../images/css-image.png";
import TypeScriptImg from "../images/tyepscript-image.png";
import ReactImg from "../images/react-image.png";
import NextImg from "../images/next-image.png";
import TailwindImg from "../images/tailwind-image.png";
import GitImg from "../images/git-image.png";
import GitHubImg from "../images/github-image.png";
import AxiosImg from "../images/axios-image.png";
import FetchImg from "../images/fetch-image.png";
import FigmaImg from "../images/figma-image.png";
import VercelImg from "../images/vercel-image.png";

import ArrowsIcon from "../images/arrows-icon.png";

import JoggaApp from "../images/jogga-app.png";
import JoggaMainApp from "../images/Jogga-app-main-photo.png";
import CarRentalApp from "../images/cftbr-app.png";
import GuestHouseApp from "../images/vraja-muntelui.png";

export default function About() {
  return (
    <div className="">
      <Navbar />
      <div className="px-20 py-8 flex flex-col justify-between max-xl-screen:px-0">
        <div className="flex flex-col">
          <div className="flex flex-row justify-between max-xl2-screen:flex-col max-xl2-screen:justify-center max-xl2-screen:mx-auto">
            <div className="flex flex-col width-pghp-about text-justify gap-4 max-xl2-screen:justify-center max-xl2-screen:mx-auto">
              <div className="text-4xl py-4 font-bold">About</div>
              <div>
                👋Hello! With a robust passion for crafting immersive digital
                experiences, I bring extensive experience as a seasoned Frontend
                Developer. I specialize in HTML, CSS, and JavaScript to build
                dynamic and user-friendly web applications. With expertise in
                modern frameworks like React and Next.js and proficiency in
                TypeScript for enhanced code scalability and maintainability, I
                deliver high-quality solutions tailored to meet client needs and
                industry standards. 💼
              </div>
              <div>
                My skills extend to using CSS preprocessors like SCSS and
                frameworks like Tailwind CSS for streamlined development and
                pixel-perfect designs. Experience with version control systems
                such as Git and collaborative platforms like GitHub underscores
                my commitment to teamwork and efficient project management. 🛠️
              </div>
              <div>
                I thrive in fast-paced environments where innovation and
                creativity drive success, bringing a proactive approach to
                problem-solving and continuous improvement. Let's connect to
                discuss how my skills and experience can contribute to your next
                frontend development endeavor. 🚀
              </div>
            </div>
            <div className="width-height-img-about content-end max-xl2-screen:justify-center max-xl2-screen:flex max-xl2-screen:mx-auto max-xl2-screen:pt-4">
              <img src={photoOfMe.src} alt="" />
            </div>
          </div>
          <div className="py-8 flex flex-col">
            <div className="flex justify-center items-center py-8 text-4xl font-medium">
              My Skills
            </div>
            <div className="flex justify-center py-4">
              <div className="flex flex-wrap gap-8 max-width-skill-cards justify-center">
                <a
                  href="https://www.w3schools.com/html/"
                  className="width-height-skills-cards bg-blue-400 flex flex-col justify-center items-center gap-2 hover:bg-light-blue-500 focus-visible:bg-light-blue-500 font-semibold"
                >
                  <img className=" w-16 h-16 rounded-lg" src={HtmlImg.src} />
                  HTML
                </a>
                <a
                  href="https://www.w3schools.com/css/"
                  className="width-height-skills-cards bg-blue-400 flex flex-col justify-center items-center gap-2 hover:bg-light-blue-500 focus-visible:bg-light-blue-500 font-semibold"
                >
                  <img className=" w-16 h-16 rounded-lg" src={CSSImg.src} />
                  CSS
                </a>
                <a
                  href="https://www.w3schools.com/js/"
                  className="width-height-skills-cards bg-blue-400 flex flex-col justify-center items-center gap-2 hover:bg-light-blue-500 focus-visible:bg-light-blue-500 font-semibold"
                >
                  <img
                    className=" w-16 h-16 rounded-lg"
                    src={JavaScriptImg.src}
                  />
                  JavaScript
                </a>
                <a
                  href="https://www.w3schools.com/typescript/index.php"
                  className="width-height-skills-cards bg-blue-400 flex flex-col justify-center items-center gap-2 hover:bg-light-blue-500 focus-visible:bg-light-blue-500 font-semibold"
                >
                  <img
                    className=" w-16 h-16 rounded-lg"
                    src={TypeScriptImg.src}
                  />
                  TypeScript
                </a>
                <a
                  href="https://www.w3schools.com/REACT/DEFAULT.ASP"
                  className="width-height-skills-cards bg-blue-400 flex flex-col justify-center items-center gap-2 hover:bg-light-blue-500 focus-visible:bg-light-blue-500 font-semibold"
                >
                  <img className=" w-16 h-16 rounded-lg" src={ReactImg.src} />
                  React.Js
                </a>
                <a
                  href="https://nextjs.org/"
                  className="width-height-skills-cards bg-blue-400 flex flex-col justify-center items-center gap-2 hover:bg-light-blue-500 focus-visible:bg-light-blue-500 font-semibold"
                >
                  <img className=" w-16 h-16 rounded-lg" src={NextImg.src} />
                  Next.Js
                </a>
                <a
                  href="https://tailwindcss.com/"
                  className="width-height-skills-cards bg-blue-400 flex flex-col justify-center items-center gap-2 hover:bg-light-blue-500 focus-visible:bg-light-blue-500 font-semibold"
                >
                  <img
                    className=" w-16 h-16 rounded-lg"
                    src={TailwindImg.src}
                  />
                  TailwindCSS
                </a>
                <a
                  href="https://git-scm.com/"
                  className="width-height-skills-cards bg-blue-400 flex flex-col justify-center items-center gap-2 hover:bg-light-blue-500 focus-visible:bg-light-blue-500 font-semibold"
                >
                  <img className=" w-16 h-16 rounded-lg" src={GitImg.src} />
                  Git
                </a>
                <a
                  href="https://github.com/"
                  className="width-height-skills-cards bg-blue-400 flex flex-col justify-center items-center gap-2 hover:bg-light-blue-500 focus-visible:bg-light-blue-500 font-semibold"
                >
                  <img className=" w-16 h-16 rounded-lg" src={GitHubImg.src} />
                  GitHub
                </a>
                <a
                  href="https://www.axios.com/"
                  className="width-height-skills-cards bg-blue-400 flex flex-col justify-center items-center gap-2 hover:bg-light-blue-500 focus-visible:bg-light-blue-500 font-semibold"
                >
                  <img className=" w-16 h-16 rounded-lg" src={AxiosImg.src} />
                  Axios
                </a>
                <a
                  href="https://www.w3schools.com/js/js_api_fetch.asp"
                  className="width-height-skills-cards bg-blue-400 flex flex-col justify-center items-center gap-2 hover:bg-light-blue-500 focus-visible:bg-light-blue-500 font-semibold"
                >
                  <img className=" w-16 h-16 rounded-lg" src={FetchImg.src} />
                  Fetch
                </a>
                <a
                  href="https://www.figma.com/"
                  className="width-height-skills-cards bg-blue-400 flex flex-col justify-center items-center gap-2 hover:bg-light-blue-500 focus-visible:bg-light-blue-500 font-semibold"
                >
                  <img className=" w-16 h-16 rounded-lg" src={FigmaImg.src} />
                  Figma
                </a>
                <a
                  href="https://vercel.com/"
                  className="width-height-skills-cards bg-blue-400 flex flex-col justify-center items-center gap-2 hover:bg-light-blue-500 focus-visible:bg-light-blue-500 font-semibold"
                >
                  <img className=" w-16 h-16 rounded-lg" src={VercelImg.src} />
                  Vercel
                </a>
              </div>
            </div>
          </div>
          <div className="flex flex-col py-8 justify-between w-full">
            <a
              href="https://github.com/dorindura"
              className="text-4xl font-medium flex justify-center mx-auto items-center hover:underline hover:text-white max-w-40"
            >
              Portfolio
            </a>
            <div className="flex flex-col gap-4 py-10">
              {/* <div className="flex flex-col gap-8">
                <div className="font-bold flex text-2xl">JOGGA</div>
                <div className="flex flex-row justify-between w-full">
                  <div className="flex flex-col gap-2 my-auto max-width-imgs-portfolio">
                    <p>
                      • Contributed to recreating the Jogga App with Next.js. 🔄
                    </p>
                    <p>
                      • Leveraged Next.js for SEO🌐, SSR🚀, and enhanced
                      performance. 💨
                    </p>
                    <p>
                      • Use the ability to order cards to always feature top
                      destinations like Bucharest, and more in future. ⭐️
                    </p>
                    <p>
                      • Allow users to save their preferred card order using the
                      prebuilt functionality for a personalized experience. 📝
                    </p>
                  </div>
                  <div className="flex my-auto bg-blue-400 rounded-full w-20 h-20">
                    <img
                      src={ArrowsIcon.src}
                      alt=""
                      className="w-12 h-12 justify-center flex m-auto"
                    />
                  </div>
                  <div className="flex ">
                    <img
                      className="rounded-lg max-width-imgs-portfolio"
                      src={JoggaMainApp.src}
                      alt="Jogga App"
                    />
                  </div>
                </div>
              </div> */}
              <JoggaApplication />
              <div className="pt-8">
                <GuestHouseApplication />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
