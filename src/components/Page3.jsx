import React from "react";
import Cards from "./Cards";
import { TiLocationArrow } from "react-icons/ti";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";

const Page3 = () => {
  gsap.registerPlugin(ScrollTrigger);
  useGSAP(() => {
    const cards = document.querySelectorAll(".cards");
    cards.forEach((card) => {
      card.addEventListener("mouseenter", () => {
        gsap.to(card, {
          scale: 0.95,
          duration: 0.3,
        });
      });

      card.addEventListener("mouseleave", () => {
        gsap.to(card, {
          scale: 1,
          duration: 0.3,
        });
      });

      gsap.from(card, {
        opacity: 0,
        y: 100,
        duration: 1,
        scrollTrigger: {
          trigger: card,
          start: "top 80%",
          end: "top 50%",
          scrub: 1,
        },
      });
    });
  });

  return (
    <div className="page-4 min-h-screen w-screen bg-black p-10">
      <div className="text-2xl text-white h-[20%] mt-[2vw] text-center flex flex-col items-center justify-center">
      <h1 className="special-font font-zentry text-[8vw] text-red-700">
  PU<b>S</b>HPA RULE BEGINS
</h1>

  <br></br>
  {/* <p className="text-sm text-gray-500">
    The battle for supremacy intensifies in Pushpa 2: The Rule – it’s more than just a film, it’s a revolution!
  </p> */}
</div>


      <div className="w-full h-[250vh] px-[5vw] grid grid-rows-5 grid-cols-2 gap-7 mt-[6vw]">
        <Cards
          className="cards"
          containerClass="relative row-start-1 row-end-3 col-start-1 col-end-3"
          title="RAPPA RAPPA"
          //description="A cross-platform metagame app,turning your activities across Web2 and Web3 games into a rewarding adventure."
          // video="/videos/feature-1.mp4"
          video="https://res.cloudinary.com/dtprtzn8q/video/upload/v1734952357/or3zy55kvpb00mq2xkuv.mp4"
        />

        <Cards
          className="cards"
          containerClass="relative row-start-3 row-end-5 col-start-1 col-end-2 w-full h-full"
          title="SAMANTHA"
         // description="An anime and gaming-inspired NFT collection - the IP primed for expansion"
          video="https://res.cloudinary.com/dtprtzn8q/video/upload/v1734957878/obys35sanxpmg2vmtcxp.mp4"
        />

        <Cards
          className="cards"
          containerClass="relative row-start-3 row-end-4 col-start-2 col-end-3 w-full h-full"
          title="SREELELA"
          //description="A gamified social hub, adding a new dimension of play to your identity, Web3 engagement and social interaction"
          video="https://res.cloudinary.com/dtprtzn8q/video/upload/v1734957869/ogd4o4lvpnkjlyydxjgu.mp4"
        />

        <Cards
          className="cards"
          containerClass="relative row-start-4 row-end-5 col-start-2 col-end-3 w-full h-full"
          title="RASHMIKA"
         // description="A cross-world AI Agent - elevating your gameplay to be more fun and productive. "
          video="https://res.cloudinary.com/dtprtzn8q/video/upload/v1734957873/vxye1c3ulw0hdxvzvc3w.mp4"
        />
        

         
{/* 
        <div className="cards bg-[#5724FF] relative special-font font-zentry text-[4vw] text-black row-start-5 row-end-6 col-start-1 col-end-2 w-full h-full p-6 rounded-xl">
          <div className="flex flex-col leading-[3.3vw]">
            <span>
              M<b>O</b>RE
            </span>
            <span>
              co<b>m</b>ing
            </span>
            <span>
              S<b>O</b>ON
            </span>
          </div>
          <br />

          <TiLocationArrow className="absolute bottom-4 right-4 text-[5vw]" />
        </div> */}
       <Cards
          className="cards"
          containerClass="relative bg-row-start-5 row-end-6 col-start-1 col-end-2 w-full h-full"
          title="THAGADHE LEE"
          description=""
          video="https://res.cloudinary.com/dtprtzn8q/video/upload/v1734957864/hgwvgvbhgi3eei2puyma.mp4"
        />  
        <Cards
          className="cards"
          containerClass="relative bg-row-start-5 row-end-6 col-start-2 col-end-3 w-full h-full"
          title="PUSHPA ANTE FLOWER ANUKUNTIVA FIREUUU"
          description=""
          video="https://res.cloudinary.com/dtprtzn8q/video/upload/v1734959066/pmrp0lohujgbj18uouv9.mp4"
        />
      </div>
    </div>
  );
};

export default Page3;
