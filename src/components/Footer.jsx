import React from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";

const Footer = () => {
  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.from(".footer h1 span", {
      y: -200,
      opacity: 0,
      duration: 5,
      stagger: 0.5,
      ease: "elastic",
      scrollTrigger: {
        trigger: ".footer",
        start: "top 60%",
        end: "top 15%",
        scrub: true,
      },
    });
  });
  return (
    <div className=" h-1/2 w-full text-black bg-red-800 ">
      <div className="footer w-full h-[30%] special-font font-zentry text-[40vw] leading-none pt-5">
        <h1>
          <span>P</span>
          <span>U</span>
          <span>S</span>
          <span>H</span>
          <span>P</span>
          <span>A</span>
        </h1>
      </div>

      {/* <div className="w-full flex justify-evenly items-center font-circular-web mt-10">
        <div className="flex flex-col justify-start items-start h-full w-[15%]">
          <p className="text-[0.7vw] mb-5">EXPLORE</p>
          {["HOME", "PROLONGE", "ABOUT", "CONTACT"].map((items, idx) => {
            return (
              <a href="#" key={idx}>
                {items}
              </a>
            );
          })}
        </div>
        <div className="flex flex-col justify-start items-start h-full w-[15%]">
          <p className="text-[0.7vw] mb-5">PRODUCT</p>
          {["RADIANT", "NEXUS", "ZIGMA", "AZUL"].map((items, idx) => {
            return (
              <a href="#" key={idx}>
                {items}
              </a>
            );
          })}
        </div>
        <div className="flex flex-col justify-start items-start h-full w-[15%]">
          <p className="text-[0.7vw] mb-5">FOLLOW US</p>
          {["X", "DISCORD", "INSTAGRAM", "YOUTUBE"].map((items, idx) => {
            return (
              <a href="#" key={idx}>
                {items}
              </a>
            );
          })}
        </div>
        <div className="flex flex-col justify-start items-start h-full w-[15%]">
          <p className="text-[0.7vw] mb-5">RESOURCES</p>
          {["MEDKIT"].map((items, idx) => {
            return (
              <a href="#" key={idx}>
                {items}
              </a>
            );
          })}
        </div>
      </div> */}

      <h1 className="ml-8 p-5 text-[0.8vw] text-white">
        &copy;ARYAN SHIVVA. ALL RIGHTS RESERVED.
      </h1>
    </div>
  );
};

export default Footer;
