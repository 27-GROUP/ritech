import React from "react";
import LogoVPN from "../../public/assets/ritech_logo.svg";
import Facebook from "../../public/assets/Icon/facebook.svg";
import Twitter from "../../public/assets/Icon/twitter.svg";
import Instagram from "../../public/assets/Icon/instagram.svg";
const Footer = () => {
  return (
    <div className="bg-white-300 pt-44 pb-24">
      <div className="max-w-screen-xl w-full mx-auto px-6 sm:px-8 lg:px-16 grid grid-rows-6 sm:grid-rows-1 grid-flow-row sm:grid-flow-col grid-cols-3 sm:grid-cols-12 gap-4" id="contact">
        <div className="row-span-2 sm:col-span-4 col-start-1 col-end-4 sm:col-end-5 flex flex-col items-start ">
          <LogoVPN className="h-20 w-auto mb-6" />
          <p className="mb-4">
            <strong className="font-medium">RITech</strong> is a fully owned subsidiary of
            the 27 ~ Group focused on Robotics & Innovative Technologies.
          </p>
          <p className="text-gray-400">©2020RITech</p>
        </div>

        <div className="row-span-2 sm:col-span-2 sm:col-start-11 sm:col-end-13 flex flex-col">
          <img src="/assets/africa.png" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
