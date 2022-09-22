import React from "react";
import Image from "next/image";
import ButtonPrimary from "./misc/ButtonPrimary";
import { Link as LinkScroll } from "react-scroll";
import { useState, useEffect } from "react";

export default function About() {
  const [activeLink, setActiveLink] = useState(null);
  const [scrollActive, setScrollActive] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScrollActive(window.scrollY > 20);
    });
  }, []);
  return (
    <div className="max-w-screen-xl mt-24 px-8 xl:px-16 mx-auto" id="about">
      <div className="grid grid-flow-row sm:grid-flow-col grid-rows-2 md:grid-rows-1 sm:grid-cols-2 gap-8 py-6 sm:py-16 ">
        <div className=" flex flex-col justify-center items-start row-start-2 sm:row-start-1">
          <h1 className="text-3xl lg:text-4xl xl:text-5xl font-medium text-black-600 leading-normal">
            <strong>RITech</strong>, Robotics & Innovative Technologies.
          </h1>
          <p className="text-black-500 mt-4 mb-6">
            Provide the African Continent with Highest-Quality Technologies.
          </p>
          <ButtonPrimary>
            <LinkScroll
              activeClass="contact"
              to="contact"
              spy={true}
              smooth={true}
              duration={1000}
              onSetActive={() => {
                setActiveLink("contact");
              }}
              className={
                (activeLink === "contact")
              }
            >
              Contact Us
            </LinkScroll>
          </ButtonPrimary>
        </div>
        <div className="flex w-full">
          <div className="h-full w-full">
            <Image
              src="/assets/m_violet.png"
              alt="VPN Illustrasi"
              quality={100}
              width={612}
              height={383}
              layout="responsive"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
