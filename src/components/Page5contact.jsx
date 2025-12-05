import React from "react";
import Button from "./Button";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
const Page5contact = () => {
  useGSAP(() => {
    gsap.set("#contact-1", {
      clipPath: "polygon(0 2%, 100% 0, 87% 82%, 10% 92%)",
    });

    gsap.set("#contact-2", {
      clipPath: "polygon(0% 0%, 100% 50%, 100% 100%, 0% 100%)",
    });

    gsap.set("#swordman", {
      clipPath: "polygon(87% 0, 100% 71%, 0 100%, 0 23%)",
    });

    gsap.from(".happy h1", {
      opacity: 0,
      y: 100,
      duration: 3,
      scrollTrigger: {
        trigger: ".happy",
        start: "top 60%",
        end: "top 30%",
        scrub: true,
      },
    });
  });
  return (
    <div className="h-[90vh] w-screen p-[3vw] bg-[#DFDFF2] text-white">
      <div className="happy w-full h-full bg-black relative rounded-2xl flex flex-col justify-center items-center gap-[1.5vw]">
      <p className="font-general text-[0.8vw] text-white">
  JOIN ME
</p>

<h1 className="special-font font-zentry text-[6vw] text-center leading-[5vw] tracking-normal bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500 text-transparent bg-clip-text">
  let’s b<b>u</b>ild the <br />
  new era of ci<b>n</b>ema <br />t<b>o</b>gether.
</h1>


        <button
 className="bg-red-700 text-white px-5 py-1"

  onClick={() => window.open("https://www.instagram.com/aryanshivva/", "_blank")}
>
  FOLLOW ME ON INSTAGRAM
</button>



        <img
          src="/img/contact-1.webp"
          id="contact-1"
          className="absolute top-[0] left-[10%] h-[10vw] w-[10vw]"
        />

        <img
          src="/img/contact-2.webp"
          id="contact-2"
          className="absolute bottom-[0] left-[20%] h-[10vw] w-[10vw]"
        />

        <img
          src="/img/swordman.webp"
          id="swordman"
          className="absolute top-[0] right-[5%] h-[25vw] w-[20vw]"
        />
      </div>
    </div>
  );
};

export default Page5contact;
