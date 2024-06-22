import React from "react";
import ServicesData from "./ServicesData";

const Service = () => {
  return (
    <>
      <div className="main-container w-full">
        <div className="service flex items-center">
          <div className="wrapper relative top-16 md:top-10">
            <h2 className="sm:text-base text-sm text-[#ffab00] font-semibold lg:w-3/4 lg:mx-0 w-11/12 mx-auto">
              SERVICES
            </h2>
            <div className="caption lg:w-3/4 lg:mx-0 w-11/12 mx-auto  text-[#333132]">
              <p className="font-normal lg:text-5xl md:text-4xl sm:text-3xl text-2xl md:leading-tight py-3">
                At <span className="text-[#124af4]">NAXA</span>, we work on{" "}
                <span className="text-[#124af4]">ideas</span>; ideas that can
                provide{" "}
                <span className="text-[#124af4]">simple solutions </span>
                to <span className="text-[#124af4]">complex problems.</span>
              </p>
              <p className="font-semibold lg:text-base lg:leading-8 md:text-sm md:leading-7 sm:text-base sm:leading-6 text-sm py-3 lg:w-9/12 w-11/12">
                We work as a team to generate, explore, build and validate
                ideas. We also contectualize innovations around the worls to
                find the best fitting solutions to local problems.
              </p>
            </div>
          </div>
        </div>
        <ServicesData />
      </div>
    </>
  );
};

export default Service;
