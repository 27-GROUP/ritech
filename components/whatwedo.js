import React from "react";
import Image from "next/image";
import Maps from "../public/assets/HugeGlobal.svg";
import P_section from "./P_section";

const Whatwedo = () => {
  return (
    <div
      className="bg-gradient-to-b from-white-300 to-white-500 w-full py-14"
      id="product"
    >
      <div className="max-w-screen-xl  px-6 sm:px-8 lg:px-16 mx-auto flex flex-col w-full text-center justify-center">
        <div className="flex flex-col w-full">
          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-medium text-black-600 leading-relaxed">
            Products & Services
          </h3>
          <p className="leading-normal w-10/12 sm:w-7/12 lg:w-6/12 mx-auto my-2 text-center">
            We always seek to provide the highest-quality Products and Services to our customers.
          </p>
          <div className="grid grid-flow-row sm:grid-flow-col grid-cols-1 sm:grid-cols-3 gap-4 lg:gap-12 py-8 lg:py-12 px-6 sm:px-0 lg:px-6">
            <div className="flex flex-col justify-center items-center border-2 border-gray-500 rounded-xl py-4 px-6 lg:px-12 xl:px-20">
              <div className="p-4 lg:p-0 mt-6 lg:mt-16">
                <Image
                  src="/assets/robot-arm.png"
                  width={145}
                  height={165}
                  alt="Robotics"
                />
              </div>
              <p className="text-lg text-black-600 font-medium capitalize my-2 sm:my-7">
                Robotics Development
              </p>
              <ul className="flex flex-col list-inside pl-6 xl:pl-0 items-start justify-start text-left text-black-500 flex-grow">
                <li className="relative check custom-list my-2">
                  Develop & Sell High-Quality Robots
                </li>
                <li className="relative check custom-list my-2">
                  Military Robots
                </li>
                <li className="relative check custom-list my-2">
                  Firefighting Robots
                </li>
                <li className="relative check custom-list my-2">
                  Mining Robots
                </li>
                <li className="relative check custom-list my-2">
                  Many Others
                </li>
              </ul>
            </div>
            <div className="flex flex-col justify-center items-center border-2 border-gray-500 rounded-xl py-4 px-6 lg:px-12 xl:px-20">
              <div className="p-4 lg:p-0 mt-6 lg:mt-16">
                <Image
                  src="/assets/acquisition.png"
                  width={145}
                  height={165}
                  alt="Sell"
                />
              </div>
              <p className="text-lg text-black-600 font-medium capitalize my-2 sm:my-7">
                Sell Innovative Technologies
              </p>
              <ul className="flex flex-col list-inside pl-6 xl:pl-0 items-start justify-start text-left text-black-500 flex-grow">
                <li className="relative check custom-list my-2">
                Provide the African continent with all kinds innovative technologies 
                from around the world that can have a positive impact in Africa.
                </li>
                <li className="relative check custom-list my-2">
                  Industrial Machines
                </li>
                <li className="relative check custom-list my-2">
                  Innovative Systems
                </li>
              </ul>
            </div>
            <div className="flex flex-col justify-center items-center border-2 border-gray-500 rounded-xl py-4 px-6 lg:px-12 xl:px-20">
              <div className="p-4 lg:p-0 mt-6 lg:mt-16">
                <Image
                  src="/assets/customer-service.png"
                  width={145}
                  height={165}
                  alt="Post-sale service"
                />
              </div>
              <p className="text-lg text-black-600 font-medium capitalize my-2 sm:my-7">
                Post-sale Services
              </p>
              <ul className="flex flex-col list-inside pl-6 xl:pl-0 items-start justify-start text-left text-black-500 flex-grow">
                <li className="relative check custom-list my-2">
                  3 Months Maintenance of our products
                </li>
                <li className="relative check custom-list my-2">
                  Training Customers to use our products
                </li>
                <li className="relative check custom-list my-2">
                  Repairing Services
                </li>
                <li className="relative check custom-list my-2">
                  Available Customer Service
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex flex-col w-full my-16">
          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-medium text-black-600 leading-relaxed w-9/12 sm:w-6/12 lg:w-4/12 mx-auto">
            Huge Global Network of Fast VPN{" "}
          </h3>
          <p className="leading-normal  mx-auto my-2 w-10/12 sm:w-7/12 lg:w-6/12">
            See LaslesVPN everywhere to make it easier for you when you move
            locations.
          </p>
          <div className="py-12 w-full px-8 mt-16">
            <Maps className="w-full h-auto" />
          </div>
          <div className="w-full flex justify-evenly items-center mt-4 flex-wrap lg:flex-nowrap">
            {/* <Netflix className="h-18 w-auto" /> */}
            <img
              src="/assets/Icon/amazon.png"
              className="h-14 w-auto mt-4 lg:mt-2"
              alt=""
            />
            <img
              src="/assets/Icon/netflix.png"
              className="h-14 w-auto mt-2 lg:mt-0"
              alt=""
            />
            <img
              src="/assets/Icon/reddit.png"
              className="h-12 w-auto mt-2 lg:mt-0"
              alt=""
            />
            <img
              src="/assets/Icon/discord.png"
              className="h-14 w-auto mt-2 lg:mt-0"
              alt=""
            />
            <img
              src="/assets/Icon/spotify.png"
              className="h-12 w-auto mt-2 lg:mt-0"
              alt=""
            />
          </div>
        </div>
        <div className="flex flex-col w-full my-16" id="catalog">
          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-medium text-black-600 leading-normal w-9/12 sm: lg:w-4/12 mx-auto">
            Some Products{" "}
          </h3>
          <p className="leading-normal mx-auto mb-1 mt-4 w-10/12 sm:w-7/12 lg:w-6/12">
            They are all made by experts and are certified reliable
          </p>
          <div className="w-full flex flex-col">
            <P_section />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Whatwedo;
