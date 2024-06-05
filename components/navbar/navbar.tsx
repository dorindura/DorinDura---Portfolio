import Link from "next/link";
import React, { useEffect, useState } from "react";
import "../../styles/globals.css";
import { usePathname } from "next/navigation";
import hamburgerBtn from "../../images/hamburger-menu.png";
import hamburgerCloseBtn from "../../images/hamburger-close-btn.png";

export default function Navbar() {
  const pathName = usePathname();

  const [hamburgerValue, setHamburgerValue] = useState(false);

  const handlehamburgerValue = (event: any) => {
    event.stopPropagation();
    setHamburgerValue(!hamburgerValue);
  };

  useEffect(() => {
    if (hamburgerValue) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, [hamburgerValue]);

  return (
    <div className="w-full sticky">
      <div className="flex flex-row justify-between py-8 box-shadow-class px-20 max-sm/4-screen:px-0">
        <div className="text-4xl flex items-center font-serif max-sm/2-screen:hidden">
          Dorin Dura
        </div>
        <div className="flex flex-row gap-16 items-center max-lg-screen:hidden">
          <div
            className={`text-xl hover:underline hover:text-white ${
              pathName === "/" ? "text-white" : "text-current"
            }`}
          >
            <Link href="/" passHref>
              Home
            </Link>
          </div>
          <div
            className={`text-xl hover:underline hover:text-white ${
              pathName === "/about" ? "text-white" : "text-current"
            }`}
          >
            <Link href="/about" passHref>
              About
            </Link>
          </div>
          <div
            className={`text-xl hover:underline hover:text-white ${
              pathName === "/services" ? "text-white" : "text-current"
            }`}
          >
            <Link href="/services" passHref>
              Services
            </Link>
          </div>
          <div
            className={`text-xl hover:underline hover:text-white ${
              pathName === "/resume" ? "text-white" : "text-current"
            }`}
          >
            <Link href="/resume" passHref className="py-2">
              Resume
            </Link>
          </div>
        </div>
        <div
          className={`lg-screen2:hidden max-lg-screen:visible flex my-auto justify-center max-sm/2-screen:mx-auto ${
            hamburgerValue ? "hidden" : "visible"
          } `}
        >
          <div
            className="flex items-center justify-center cursor-pointer pl-6 my-auto max-sm/2-screen:mx-auto max-sm/2-screen:pl-0"
            onClick={handlehamburgerValue}
          >
            <img
              className="w-8 h-8 flex justify-center items-center my-auto max-sm/2-screen:mx-auto "
              src={hamburgerBtn.src}
              alt="Hamburger Button"
            />
          </div>
        </div>
        {hamburgerValue ? (
          <div
            className={`absolute w-full h-screen max-sm/2-screen:w-full right-0 top-0 bg-light-blue-200 rounded-xl lg-screen2:hidden`}
          >
            <div className="flex flex-col h-full">
              <div
                className="flex py-8 px-20 cursor-pointer justify-between max-sm/4-screen:px-0"
                onClick={handlehamburgerValue}
              >
                <div className="flex justify-center my-auto font-medium text-xl max-sm/4-screen:hidden">
                  Dorin Dura
                </div>
                <div className="max-sm/4-screen:justify-center max-sm/4-screen:flex max-sm/4-screen:mx-auto">
                  <img className="w-8 h-8" src={hamburgerCloseBtn.src} alt="" />
                </div>
              </div>
              <div className="flex flex-col gap-16 items-center max-lg-screen:visible py-8">
                <div
                  className={`text-xl hover:underline hover:text-white ${
                    pathName === "/" ? "text-white" : "text-current"
                  }`}
                >
                  <Link href="/" passHref>
                    Home
                  </Link>
                </div>
                <div
                  className={`text-xl hover:underline hover:text-white ${
                    pathName === "/about" ? "text-white" : "text-current"
                  }`}
                >
                  <Link href="/about" passHref>
                    About
                  </Link>
                </div>
                <div
                  className={`text-xl hover:underline hover:text-white ${
                    pathName === "/services" ? "text-white" : "text-current"
                  }`}
                >
                  <Link href="/services" passHref>
                    Services
                  </Link>
                </div>
                <div
                  className={`text-xl hover:underline hover:text-white ${
                    pathName === "/resume" ? "text-white" : "text-current"
                  }`}
                >
                  <Link href="/resume" passHref className="py-2">
                    Resume
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
}
