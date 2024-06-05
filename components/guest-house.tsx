import React, { useState } from "react";
import ArrowsIcon from "../images/arrows-icon.png";

import GuestHouse2 from "../images/Vraja-Muntelui-Home-Page2.png";
import GuestHouseMain from "../images/vraja-muntelui.png";
import GuestHouseAbout from "../images/Vraja-Muntelui-About-Page2.png";
import GuestHouseContact from "../images/Vraja-Muntelui-Contact-Page.png";

export default function GuestHouseApplication() {
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
    <div className="flex flex-col gap-8 mt-8">
      <div className="font-bold flex text-2xl max-xl2-screen:justify-center max-xl2-screen:mx-auto">
        Vraja Muntelui
      </div>
      <div
        className={`flex  justify-between w-full py-4 max-xl2-screen:flex-col max-xl2-screen:justify-center max-xl2-screen:mx-auto ${
          firstButtonValue
            ? "flex-row-reverse max-xl2-screen:flex-col"
            : "flex-row max-xl2-screen:flex-col-reverse"
        }`}
      >
        <div className="flex flex-col gap-2 my-auto max-width-imgs-portfolio text-justify max-xl2-screen:justify-center max-xl2-screen:mx-auto">
          <p>
            • Created a personal website for my client named Vraja Muntelui,
            fulfilling their desire for an engaging online presence. 🌐🏡
          </p>
          <p>
            • Utilized WordPress for its ease of use and rapid development
            capabilities, ensuring a quick and efficient creation process. ⚡️
          </p>
          <p>
            • Added visually appealing photos to capture clients' attention and
            inspire them to visit the guest house. 📸✨
          </p>
          <p>
            • Supplied detailed information about the main attractions and
            amenities offered by the guest house. 📋🏞️
          </p>
        </div>
        <button
          onClick={() => handleFirstButton()}
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
            src={GuestHouseMain.src}
            alt="Guest House Home Main"
          />
        </div>
      </div>

      <div
        className={`flex  justify-between w-full py-4 max-xl2-screen:flex-col max-xl2-screen:justify-center max-xl2-screen:mx-auto ${
          secondButtonValue
            ? "flex-row max-xl2-screen:flex-col"
            : "flex-row-reverse max-xl2-screen:flex-col-reverse"
        }`}
      >
        <div className="flex flex-col gap-2 my-auto max-width-imgs-portfolio text-justify max-xl2-screen:justify-center max-xl2-screen:mx-auto">
          <p>
            • Formed a section where people can find the most asked questions
            when looking for a mountain retreat, ensuring they have all the
            information they need. ❓🏔️
          </p>
          <p>
            • Implemented a photo of the place during the winter season,
            allowing people to see the beauty of the location throughout the
            year. ❄️📷
          </p>
          <p>
            • Used plugins to ensure the website is responsive and looks great
            on all gadgets and devices. 📱💻
          </p>
          <p>
            • Leveraged custom colors to give potential clients a warm and
            inviting vibe, helping them feel the energy they will experience
            during their stay. 🌈🌟
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
            src={GuestHouse2.src}
            alt="Guest House Second Section"
          />
        </div>
      </div>

      <div
        className={`flex  justify-between w-full py-4 max-xl2-screen:flex-col max-xl2-screen:justify-center max-xl2-screen:mx-auto ${
          thirdButtonValue
            ? "flex-row-reverse max-xl2-screen:flex-col"
            : "flex-row max-xl2-screen:flex-col-reverse"
        }`}
      >
        <div className="flex flex-col gap-2 my-auto max-width-imgs-portfolio text-justify max-xl2-screen:justify-center max-xl2-screen:mx-auto">
          <p>
            • Implemented the About section to introduce guests and share the
            principles that define their hospitality. 👥🏡
          </p>
          <p>
            • Additionally, unveiled a secret ambition: to become the greatest
            accommodation place in their zone. 🌟🔒
          </p>
          <p>
            • Created a section featuring a recommendation from their
            longest-standing customer, endorsing the place as a great
            destination. 🌟💬
          </p>
          <p>
            • Centered a beautiful winter landscape photo of the place, assuring
            visitors of its charm and joy in every season. ❄️🏞️
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
            src={GuestHouseAbout.src}
            alt="Guest House About"
          />
        </div>
      </div>

      {/* <div
        className={`flex  justify-between w-full py-4 ${
          secondButtonValue ? "flex-row" : "flex-row-reverse"
        }`}
      >
        <div className="flex flex-col gap-2 my-auto max-width-imgs-portfolio text-justify">
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
          className="flex my-auto bg-blue-400 rounded-full w-20 h-20"
        >
          <img
            src={ArrowsIcon.src}
            alt=""
            className="w-12 h-12 justify-center flex m-auto"
          />
        </button>
        <div className="flex ">
          <img
            className="rounded-lg max-width-imgs-portfolio"
            src={GuestHouseContact.src}
            alt="Guest House Contact"
          />
        </div>
      </div> */}
    </div>
  );
}
