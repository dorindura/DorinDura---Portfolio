import Navbar from "@/components/navbar/navbar";
import React, { useState } from "react";
import VisulStudioIcn from "../images/visual-studio-code.png";
import WordpressIcn from "../images/wordpress-icon.png";
import PremiereIcn from "../images/premiere-pro-icon.png";
import AppDevelopmentImg from "../images/app-development-img.png";
import AppDevImg2 from "../images/Car Rental - Mobile Version - S5.png";
import VrajaMunteluiHome from "../images/vraja-muntelui.png";
import VrajaMuntelui2 from "../images/Vraja-Muntelui-Home-Page2.png";
import VideoEditing from "../images/video-editing.png";
import VideoExporting from "../images/video-exporting.png";

export default function Services() {
  const [firstValue, setFirstValue] = useState(false);
  const [secondValue, setSecondValue] = useState(false);
  const [thirdValue, setThirdValue] = useState(false);
  const [fourthValue, setFourthValue] = useState(false);

  const handleFirstValue = () => {
    setFirstValue(!firstValue);
    setSecondValue(false);
    setThirdValue(false);
  };

  const handleSecondValue = () => {
    setFirstValue(false);
    setSecondValue(!secondValue);
    setThirdValue(false);
  };

  const handleThirdValue = () => {
    setFirstValue(false);
    setSecondValue(false);
    setThirdValue(!thirdValue);
  };

  const handleAllValues = () => {
    setFirstValue(false);
    setSecondValue(false);
    setThirdValue(false);
    setFourthValue(!fourthValue);
    if (firstValue || secondValue || thirdValue == true) {
      setFourthValue(false);
    }
  };

  return (
    <div className="">
      <div className="">
        <Navbar />
        <div className="px-20 max-sm-screen:px-0">
          <div className="py-8">
            <div className="text-4xl font-bold py-4 max-sm-screen:justify-center max-sm-screen:flex">
              Services
            </div>
          </div>
          <div className="flex flex-wrap gap-8 justify-center max-sm/4-screen:width-services-cards-90">
            <div
              onClick={() => handleFirstValue()}
              className={`cards-services-section cursor-pointer bg-light-blue-sky rounded-lg outline hover:outline-white max-sm/4-screen:width-services-cards-90 ${
                firstValue
                  ? "outline-white bg-dark-blue-sky text-white"
                  : "outline bg-light-blue-sky"
              } ${
                fourthValue
                  ? "outline-white bg-dark-blue-sky text-white"
                  : "outline bg-light-blue-sky"
              }`}
            >
              <div className="flex flex-col justify-center py-4">
                <div className="flex justify-center">
                  <img
                    className="width-height-skills-cards"
                    src={VisulStudioIcn.src}
                    alt=""
                  />
                </div>
                <div className="flex justify-center py-4 font-medium text-lg max-sm/4-screen:text-center">
                  App Development
                </div>
                <div></div>
              </div>
            </div>
            <div
              onClick={() => handleSecondValue()}
              className={`cards-services-section cursor-pointer bg-light-blue-sky rounded-lg outline hover:outline-white max-sm/4-screen:width-services-cards-90 ${
                secondValue
                  ? "outline-white bg-dark-blue-sky text-white"
                  : "outline bg-light-blue-sky"
              } ${
                fourthValue
                  ? "outline-white bg-dark-blue-sky text-white"
                  : "outline bg-light-blue-sky"
              }`}
            >
              <div className="flex flex-col justify-center py-4">
                <div className="flex justify-center">
                  <img
                    className="width-height-skills-cards"
                    src={WordpressIcn.src}
                    alt=""
                  />
                </div>
                <div className="flex justify-center py-4 font-medium text-lg max-sm/4-screen:text-center">
                  Website Development
                </div>
                <div></div>
              </div>
            </div>
            <div
              onClick={() => handleThirdValue()}
              className={`cards-services-section cursor-pointer bg-light-blue-sky rounded-lg outline hover:outline-white max-sm/4-screen:width-services-cards-90 ${
                thirdValue
                  ? "outline-white bg-dark-blue-sky text-white"
                  : "outline bg-light-blue-sky"
              } ${
                fourthValue
                  ? "outline-white bg-dark-blue-sky text-white"
                  : "outline bg-light-blue-sky"
              }`}
            >
              <div className="flex flex-col justify-center py-4">
                <div className="flex justify-center">
                  <img
                    className="width-height-skills-cards"
                    src={PremiereIcn.src}
                    alt=""
                  />
                </div>
                <div className="flex justify-center py-4 font-medium text-lg max-sm/4-screen:text-center">
                  Video Editing
                </div>
                <div></div>
              </div>
            </div>
          </div>
          <div className="flex justify-center py-8">
            <button
              className={`flex justify-center items-center text-white py-8 bg-light-blue-sky outline rounded-xl w-32 h-6 font-medium text-lg ${
                fourthValue
                  ? " bg-light-blue-sky outline-white text-black"
                  : "bg-dark-blue-sky outline-black"
              }`}
              onClick={() => handleAllValues()}
            >
              All of Them
            </button>
          </div>
        </div>
        <div className="px-20 max-sm-screen:px-0">
          <div
            className={`py-8 ${
              firstValue || fourthValue ? "visible" : "hidden"
            }`}
          >
            <div className="text-2xl font-medium max-xl-screen:flex max-xl-screen:justify-center max-xl-screen:text-center max-xl-screen:mx-auto">
              Application Development
            </div>
            <div>
              <div>
                <div className="text-2xl font-medium flex justify-center mx-auto py-8 max-xl-screen:flex max-xl-screen:justify-center max-xl-screen:text-center max-xl-screen:mx-auto">
                  Frontend Development
                </div>
                <div className="">
                  <div className="flex flex-col gap-8">
                    <div className="flex flex-row-reverse justify-between m-auto max-xl-screen:flex-col max-xl-screen:justify-center max-xl-screen:mx-auto">
                      <div className="flex flex-col gap-4 width-section-app items-center justify-center max-xl-screen:mx-auto">
                        <p className=" text-justify">
                          <span className="font-semibold">React.js:</span>{" "}
                          Developed dynamic, high-performance web applications
                          using React.js, focusing on component-based
                          architecture and state management.
                        </p>
                        <p className=" text-justify max-xl-screen:text-wrap">
                          <span className="font-semibold">Next.js:</span>{" "}
                          Implemented server-side rendering and static site
                          generation for enhanced performance and SEO using
                          Next.js.
                        </p>
                        <p className=" text-justify">
                          <span className="font-semibold">JavaScript:</span>{" "}
                          Proficient in JavaScript, utilizing ES6+ features to
                          write clean, maintainable, and efficient code.
                        </p>
                        <p className=" text-justify">
                          <span className="font-semibold">HTML5:</span> Expert
                          in crafting semantic and accessible HTML5 structures
                          to ensure cross-browser compatibility and SEO
                          optimization.
                        </p>
                      </div>
                      <div className="width-section-app flex justify-center items-center max-xl-screen:mx-auto max-lg-screen:pt-4">
                        <img
                          className="rounded-xl"
                          src={AppDevelopmentImg.src}
                          alt=""
                        />
                      </div>
                    </div>
                    <hr id="hr-services" />
                    <div className="flex flex-row justify-between m-auto max-xl-screen:flex-col max-xl-screen:justify-center max-xl-screen:mx-auto">
                      <div className="flex flex-col gap-4 width-section-app items-center justify-center max-xl-screen:mx-auto">
                        <p className=" text-justify">
                          <span className="font-semibold">CSS3:</span> Styled
                          web applications with CSS3, leveraging advanced layout
                          techniques like Flexbox and Grid for responsive
                          design.
                        </p>
                        <p className=" text-justify">
                          <span className="font-semibold">TypeScript:</span>{" "}
                          Employed TypeScript to add static typing to
                          JavaScript, improving code quality and
                          maintainability.
                        </p>
                        <p className=" text-justify">
                          <span className="font-semibold">TailwindCSS:</span>{" "}
                          Used TailwindCSS to rapidly build modern and
                          responsive UIs with a utility-first approach.
                        </p>
                        <p className=" text-justify">
                          <span className="font-semibold">SCSS:</span> Used
                          Enhanced styling capabilities with SCSS, implementing
                          nested rules, variables, and mixins for scalable CSS.
                        </p>
                        <p className=" text-justify">
                          <span className="font-semibold">
                            Version Control:
                          </span>{" "}
                          Used Enhanced Managed code repositories and
                          collaborated with teams using Git and GitHub, ensuring
                          smooth version control and integration.
                        </p>
                      </div>
                      <div className="width-section-app flex justify-center items-center max-xl-screen:mx-auto max-lg-screen:pt-4">
                        <img
                          className="rounded-xl"
                          src={AppDevImg2.src}
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <hr
            id="hr-services2"
            className={`${fourthValue ? "visible" : "hidden"}`}
          />

          <div
            className={`py-8 ${
              secondValue || fourthValue ? "visible" : "hidden"
            }`}
          >
            <div className="text-2xl font-medium max-xl-screen:flex max-xl-screen:justify-center max-xl-screen:text-center max-xl-screen:mx-auto">
              Website Development
            </div>
            <div>
              <div>
                <div className="text-2xl font-medium flex justify-center mx-auto py-8 max-xl-screen:flex max-xl-screen:justify-center max-xl-screen:text-center max-xl-screen:mx-auto">
                  WordPress Development
                </div>
                <div className="">
                  <div className="flex flex-col gap-8">
                    <div className="flex flex-row-reverse justify-between m-auto max-xl-screen:flex-col max-xl-screen:justify-center max-xl-screen:mx-auto">
                      <div className="flex flex-col gap-4 width-section-app items-center justify-center max-xl-screen:mx-auto">
                        <p className=" text-justify">
                          <span className="font-semibold">
                            Theme Development:
                          </span>{" "}
                          Created custom WordPress themes from scratch, ensuring
                          unique and tailored designs that meet client
                          specifications.
                        </p>
                        <p className=" text-justify">
                          <span className="font-semibold">
                            Plugin Development:
                          </span>{" "}
                          Developed and customized plugins to extend the
                          functionality of WordPress sites, adhering to coding
                          standards and best practices.
                        </p>
                        <p className=" text-justify">
                          <span className="font-semibold">Customization:</span>{" "}
                          Customized existing themes and plugins to fit specific
                          requirements, ensuring seamless integration and
                          functionality.
                        </p>
                        <p className=" text-justify">
                          <span className="font-semibold">
                            Responsive Design:{" "}
                          </span>
                          Ensured all WordPress websites are fully responsive,
                          providing an optimal user experience across all
                          devices.
                        </p>
                      </div>
                      <div className="width-section-app flex justify-center items-center max-xl-screen:mx-auto max-lg-screen:pt-4">
                        <img
                          className="rounded-xl"
                          src={VrajaMunteluiHome.src}
                          alt=""
                        />
                      </div>
                    </div>
                    <hr id="hr-services" />
                    <div className="flex flex-row justify-between m-auto max-xl-screen:flex-col max-xl-screen:justify-center max-xl-screen:mx-auto">
                      <div className="flex flex-col gap-4 width-section-app items-center justify-center max-xl-screen:mx-auto">
                        <p className=" text-justify">
                          <span className="font-semibold">
                            Performance Optimization:
                          </span>{" "}
                          Optimized WordPress sites for speed and performance,
                          using techniques like caching, image optimization, and
                          minification.
                        </p>
                        <p className=" text-justify">
                          <span className="font-semibold">
                            Security Implementation:{" "}
                          </span>
                          Enhanced website security by implementing measures
                          such as regular updates, secure login protocols, and
                          malware scanning.
                        </p>
                        <p className=" text-justify">
                          <span className="font-semibold">
                            SEO Best Practices:
                          </span>
                          Integrated SEO best practices within WordPress sites,
                          utilizing plugins and custom code to improve search
                          engine rankings.
                        </p>
                        <p className=" text-justify">
                          <span className="font-semibold">
                            Content Management:
                          </span>
                          Utilized the WordPress CMS to its full potential,
                          enabling clients to easily manage and update their
                          site content.
                        </p>
                        <p className=" text-justify">
                          <span className="font-semibold">
                            E-commerce Integration:
                          </span>
                          Built and customized WooCommerce stores, setting up
                          products, payment gateways, and ensuring a smooth
                          shopping experience.
                        </p>
                      </div>
                      <div className="width-section-app flex justify-center items-center max-xl-screen:mx-auto max-lg-screen:pt-4">
                        <img
                          className="rounded-xl"
                          src={VrajaMuntelui2.src}
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <hr
            id="hr-services2"
            className={`${fourthValue ? "visible" : "hidden"}`}
          />

          <div
            className={`py-8 ${
              thirdValue || fourthValue ? "visible" : "hidden"
            }`}
          >
            <div className="text-2xl font-medium max-xl-screen:flex max-xl-screen:justify-center max-xl-screen:text-center max-xl-screen:mx-auto">
              Video Editing
            </div>
            <div>
              <div>
                <div className="text-2xl font-medium flex justify-center mx-auto py-8 max-xl-screen:flex max-xl-screen:justify-center max-xl-screen:text-center max-xl-screen:mx-auto">
                  Video Editing in Premier Pro
                </div>
                <div className="">
                  <div className="flex flex-col gap-8">
                    <div className="flex flex-row-reverse justify-between m-auto max-xl-screen:flex-col max-xl-screen:justify-center max-xl-screen:mx-auto">
                      <div className="flex flex-col gap-4 width-section-app items-center justify-center max-xl-screen:mx-auto">
                        <p className=" text-justify">
                          <span className="font-semibold">
                            Adobe Premiere Pro:
                          </span>{" "}
                          Proficient in using Adobe Premiere Pro for
                          professional video editing, including cutting,
                          trimming, and arranging footage.
                        </p>
                        <p className=" text-justify">
                          <span className="font-semibold">Storytelling:</span>{" "}
                          Skilled in crafting compelling narratives through
                          video, ensuring a coherent and engaging storyline.
                        </p>
                        <p className=" text-justify">
                          <span className="font-semibold">
                            Color Correction:
                          </span>{" "}
                          Applied color correction techniques to enhance the
                          visual appeal and consistency of footage.
                        </p>
                        <p className=" text-justify">
                          <span className="font-semibold">Audio Editing: </span>
                          Edited and synced audio tracks, including dialogue,
                          music, and sound effects, to achieve high-quality
                          sound.
                        </p>
                      </div>
                      <div className="width-section-app flex justify-center items-center max-xl-screen:mx-auto max-lg-screen:pt-4">
                        <img
                          className="rounded-xl"
                          src={VideoEditing.src}
                          alt=""
                        />
                      </div>
                    </div>
                    <hr id="hr-services" />
                    <div className="flex flex-row justify-between m-auto max-xl-screen:flex-col max-xl-screen:justify-center max-xl-screen:mx-auto">
                      <div className="flex flex-col gap-4 width-section-app items-center justify-center max-xl-screen:mx-auto">
                        <p className=" text-justify">
                          <span className="font-semibold">
                            Transitions and Effects:
                          </span>{" "}
                          Utilized transitions and effects to enhance video flow
                          and visual interest, ensuring a polished final
                          product.
                        </p>
                        <p className=" text-justify">
                          <span className="font-semibold">
                            Motion Graphics:{" "}
                          </span>
                          Integrated motion graphics and titles using Adobe
                          After Effects to add dynamic elements and information
                          to videos.
                        </p>
                        <p className=" text-justify">
                          <span className="font-semibold">Exporting:</span>
                          Exported final videos in various formats and
                          resolutions, optimized for different platforms such as
                          social media, YouTube, and broadcast.
                        </p>
                      </div>
                      <div className="width-section-app flex justify-center items-center max-xl-screen:mx-auto max-lg-screen:pt-4">
                        <img
                          className="rounded-xl"
                          src={VideoExporting.src}
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
