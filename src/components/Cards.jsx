import React from "react";
import Button from "./Button";
import { TiLocationArrow } from "react-icons/ti";

const Cards = ({ title, description, video, containerClass }) => {
  // useGSAP(() => {
  //   const card = document.querySelector(".cards");

  //   card.addEventListener("mouseenter", () => {
  //     gsap.to(card, {
  //       duration: 0.3,
  //       scale: 0.99,

  //     });
  //   });

  //   card.addEventListener("mouseleave", () => {
  //     gsap.to(card, {
  //       duration: 0.3,
  //       scale: 1,
  //     });
  //   });

  // })

  return (
    <div
      className={`cards rounded-xl border-[1px] border-gray-700 ${containerClass}`}
    >
      <video
        src={video}
        loop
        autoPlay
        muted
        className="z-[2] rounded-xl h-full w-full object-cover"
      />
      <div className="absolute top-[0px] z-[10] flex justify-between h-full w-[50%] flex-col p-6 to-transparent">
        <div className="w-[80%] flex flex-col h-[50%] leading-none">
          <h1
            className="special-font font-zentry text-[4vw] tracking-tight text-white"
            dangerouslySetInnerHTML={{ __html: title }}
          />
          <p className="text-xs text-gray-300">{description}</p>
        </div>

         
      </div>
    </div>
  );
};

export default Cards;
