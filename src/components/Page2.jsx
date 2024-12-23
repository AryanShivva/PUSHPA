import React from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";

const Page2 = () => {
  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.from("#para h1", {
      y: 100,
      opacity: 0,
      duration: 5,
      stagger: 0.1,
      scrollTrigger: {
        trigger: "#para",
        start: "top 90%",
        end: "bottom center",
        scrub: true,
      },
    });

    gsap.to("#simg", {
      width: "100vw",
      height: "100vh",
      duration: 20,
      scrollTrigger: {
        trigger: "#simg",
        start: "top 50%",
        end: "bottom center",
        scrub: true,
      },
    });
  }, []);

  return (
    <div className="relative flex flex-col justify-between items-center gap-10 w-screen min-h-screen px-[10vw] mb-[5vw] mt-[6vw]">
      <div className="flex justify-center items-center flex-col mt-8">
        <p className="font-general text-[4vw] uppercase md:text-[10px] mb-8"  >
          PUSHPARAJ
        </p>

        <div
  id="para"
  className="special-font font-zentry text-[5vw] tracking-tight text-center leading-none"
  style={{ color: "red" }}
>
<h1 className="special-font font-zentry text-[5vw] text-red-700 tracking-[0.1em]">
  DAMMUNTE PATTUKO RA SHEKAWATUU
</h1>
<h1 className="special-font font-zentry text-[5vw] text-red-700 tracking-[0.05em]">
  PATTUNKUNTE VODILESTHA SYNDICATUU
</h1>



</div>


      </div>

      <div className="w-[30vw] h-[70vh] rounded-[1vw]" id="simg">
        <img
          src="/img/about.webp"
          alt=""
          className="object-cover h-full w-full rounded-[1vw]"
        />
      </div>

      <div className="w-full flex flex-col justify-center items-center font-circular-web">
        {/* <p>The Game of Games begins—your life, now an epic MMORPG</p> */}
        <p className="text-white text-center">
        Pushpa 2: The Rule is a 2024 Indian Telugu-language action drama film directed by Sukumar and produced by Mythri Movie Makers, in association with Sukumar Writings. The film stars Allu Arjun in the title role, alongside Rashmika Mandanna, Fahadh Faasil, Jagapathi Babu, Dhananjaya, Rao Ramesh, Sunil 
        </p>
      </div>
    </div>
  );
};

export default Page2;
