import React from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Button from "./Button";

const Page4 = () => {
  useGSAP(() => {
    gsap.set("#entrance", {
      clipPath: "polygon(0 0, 88% 14%, 100% 75%, 0% 100%)",
      scale: 0.8,
    });
    gsap.from("#entrance", {
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      borderRadius: "0% 0% 0% 0%",
      scale: 1,
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: "#entrance",
        start: "top 55%",
        end: "top 30%",
        scrub: true,
      },
    });
  });

  return (
    <div className="min-h-screen w-screen bg-black text-[#DFDFF2] flex items-center flex-col t-[10vw] pb-[5vw]">
      <div className="flex flex-center flex-col tracking-tighter leading-[6.5vw]">
        <p className="font-robert-regular text-[0.8vw]">BRAND</p>
        <h1 className="special-font font-zentry text-[8vw]">
          THE ST<b>O</b>RY OF
        </h1>
        <h1 className="special-font font-zentry text-[8vw]">
          PUSHPA RAJ
        </h1>
      </div>

      <img src="img/entrance.webp" id="entrance" className="w-[60%] h-[50%]" />

      <p className="font-circular-web mb-5">
      Brace yourself for the explosive interval sequence from Pushpa 2: The Rule <br /> where the battle for power takes an unexpected turn <br /> leaving you at the edge of your seat
         
      </p>

      <Button
        title="DISCOVER PROLOGUE"
        containerClass="bg-[#DFDFF2] py-1 px-5 text-black"
      />
    </div>
  );
};

export default Page4;
