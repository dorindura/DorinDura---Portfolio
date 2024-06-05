import React, { useState } from "react";
import ArrowsIcon from "../images/arrows-icon.png";
import JoggaMainApp from "../images/Jogga-app-main-photo.png";
import JoggaAppCarousel from "../images/jogga-app-carousel-section.png";
import JoggaAppPhoneCarousel from "../images/jogga-app-carousel-phones.png";

export default function JoggaApplication() {
  const [firstButtonValue, setFirstButtonValue] = useState(true);
  const [secondButtonValue, setSecondButtonValue] = useState(true);
  const [thirdButtonValue, setThirdButtonValue] = useState(true);

  const handleFirstButton = () => {
    setFirstButtonValue(!firstButtonValue);
  };

  const handleSecondButton = () => {
    setSecondButtonValue(!secondButtonValue);
  };

  const handleThirdButton = () => {
    setThirdButtonValue(!thirdButtonValue);
  };

  return (
    <div className="flex flex-col gap-8">
      <a
        href="https://jogga.ro/"
        className="font-bold flex text-2xl max-w-10 max-xl2-screen:justify-center max-xl2-screen:mx-auto"
      >
        JOGGA
      </a>
      <div
        className={`flex  justify-between w-full py-4 max-xl2-screen:flex-col max-xl2-screen:justify-center max-xl2-screen:mx-auto ${
          firstButtonValue
            ? "flex-row max-xl2-screen:flex-col"
            : "flex-row-reverse max-xl2-screen:flex-col-reverse"
        }`}
      >
        <div className="flex flex-col gap-2 my-auto max-width-imgs-portfolio text-justify max-xl2-screen:justify-center max-xl2-screen:mx-auto">
          <p>• Contributed to recreating the Jogga App with Next.js. 🔄</p>
          <p>
            • Leveraged Next.js for SEO🌐, SSR🚀, and enhanced performance. 💨
          </p>
          <p>
            • Use the ability to order cards to always feature top destinations
            like Bucharest, and more in future. ⭐️
          </p>
          <p>
            • Allow users to save their preferred card order using the prebuilt
            functionality for a personalized experience. 📝
          </p>
        </div>
        <button
          onClick={() => handleFirstButton()}
          className="flex my-auto bg-blue-400 rounded-full w-20 h-20 max-xl2-screen:justify-center max-xl2-screen:mx-auto max-xl2-screen:my-4"
        >
          <img
            src={ArrowsIcon.src}
            alt=""
            className="w-12 h-12 justify-center flex m-auto "
          />
        </button>
        <div className="flex max-xl2-screen:justify-center max-xl2-screen:mx-auto">
          <img
            className="rounded-lg max-width-imgs-portfolio"
            src={JoggaMainApp.src}
            alt="Jogga App"
          />
        </div>
      </div>
      <div
        className={`flex  justify-between w-full py-4 max-xl2-screen:flex-col max-xl2-screen:justify-center max-xl2-screen:mx-auto ${
          secondButtonValue
            ? "flex-row-reverse max-xl2-screen:flex-col"
            : "flex-row max-xl2-screen:flex-col-reverse"
        }`}
      >
        <div className="flex flex-col gap-2 my-auto max-width-imgs-portfolio text-justify max-xl2-screen:justify-center max-xl2-screen:mx-auto">
          <p>
            • Designed a dedicated section to showcase the mobile version of the
            Jogga App, highlighting its key features and user interface. 📱
          </p>
          <p>
            • Implemented custom links for both Google Play and the App Store,
            making it easy for users to download the Jogga App directly. 📲
          </p>
          <p>
            • Used a custom plugin to present the mobile application within a
            dynamic and visually appealing carousel of images. 🎠
          </p>
          <p>
            • Leveraged custom buttons to seamlessly redirect clients to the
            renting, playing, and meetings sections, enhancing user navigation.
            🔄
          </p>
        </div>
        <button
          onClick={() => handleSecondButton()}
          className="flex my-auto bg-blue-400 rounded-full w-20 h-20 max-xl2-screen:justify-center max-xl2-screen:mx-auto max-xl2-screen:my-4"
        >
          <img
            src={ArrowsIcon.src}
            alt=""
            className="w-12 h-12 justify-center flex m-auto"
          />
        </button>
        <div className="flex max-xl2-screen:justify-center max-xl2-screen:mx-auto">
          <img
            className="rounded-lg max-width-imgs-portfolio"
            src={JoggaAppCarousel.src}
            alt="Jogga App"
          />
        </div>
      </div>

      <div
        className={`flex  justify-between w-full py-4 max-xl2-screen:flex-col max-xl2-screen:justify-center max-xl2-screen:mx-auto ${
          thirdButtonValue
            ? "flex-row max-xl2-screen:flex-col"
            : "flex-row-reverse max-xl2-screen:flex-col-reverse"
        }`}
      >
        <div className="flex flex-col gap-2 my-auto max-width-imgs-portfolio text-justify max-xl2-screen:justify-center max-xl2-screen:mx-auto">
          <p>
            • Formed a section where the useWindowResize hook was essential for
            the phone carousel's functionality and appearance. 📱
          </p>
          <p>
            • Solved a bug caused by using the useWindowResize hook in Next.js
            instead of React.js, which also resulted in saving other sections.
            🐞✅
          </p>
          <p>
            • Presented detailed information about the application's features
            and included images to visually demonstrate them. 🌟🖼️
          </p>
          <p>
            • Added links in each carousel image that direct users to the page
            dedicated to downloading the application. 📥
          </p>
        </div>
        <button
          onClick={() => handleThirdButton()}
          className="flex my-auto bg-blue-400 rounded-full w-20 h-20 max-xl2-screen:justify-center max-xl2-screen:mx-auto max-xl2-screen:my-4"
        >
          <img
            src={ArrowsIcon.src}
            alt=""
            className="w-12 h-12 justify-center flex m-auto"
          />
        </button>
        <div className="flex max-xl2-screen:justify-center max-xl2-screen:mx-auto">
          <img
            className="rounded-lg max-width-imgs-portfolio"
            src={JoggaAppPhoneCarousel.src}
            alt="Jogga App"
          />
        </div>
      </div>
    </div>
  );
}
