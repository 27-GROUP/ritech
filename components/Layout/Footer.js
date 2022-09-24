import React from "react";
import LogoVPN from "../../public/assets/ritech_logo.svg";

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
          <div class="row-span-2 sm:col-span-4 col-start-1 col-end-4 sm:col-end-5 flex flex-col items-start">
            <h2 class="title-font font-semibold text-gray-900 tracking-widest text-xs">EMAIL</h2>
            <a class="text-indigo-500 leading-relaxed">mamadouk393@email.com</a>
            <h2 class="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">PHONE</h2>
            <p class="leading-relaxed">+223 91596249</p>
          </div>
          <p className="text-gray-400 mt-5">©2020~RITech</p>
        </div>
        <div className="row-span-2 sm:col-span-2 sm:col-start-11 sm:col-end-13 flex flex-col">
          <img src="/assets/africa.png" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
