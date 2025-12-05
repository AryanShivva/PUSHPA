import React from "react";
import Button from "./Button";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Page5contact from "./Page5contact";

const Extra = () => {
  useGSAP(() => {
    const chotus = document.querySelectorAll(".chotadiv");
    chotus.forEach((chotu) => {
      chotu.addEventListener("mouseenter", () => {
        gsap.to(chotu, {
          scale: 6,
          duration: 0.3,
          ease: "power2.inOut",
          scrub: 10,
        });
        gsap.to(chotu.querySelector("img"), {
          visibility: "visible",
        });
      });
      chotu.addEventListener("mouseleave", () => {
        gsap.to(chotu, {
          scale: 1,
          duration: 0.3,
        });
        gsap.to(chotu.querySelector("img"), {
          visibility: "hidden",
        });
      });
    });
  });

  return (
    <>
      <div className="min-h-screen w-screen py-[5vw] text-black bg-[#DFDFF2] text-center px-[5vw]">
      <p className="font-general text-xl font-bold py-[2vw] uppercase">ARYAN SHIVVA</p>

        <div className="moving flex justify-center items-center flex-col special-font font-zentry text-[7.5vw] leading-[6vw] tracking-normal gap-0">
          {
          <h1 style={{color:'red'}}>
          Lights. Camera. ACTION. Experience the <br></br>world of cinema <br></br>like never before
        </h1>
          
          /* <h1>
            We're b<b>u</b>ildin<b>g</b>
          </h1>
          <h1 className="flex items-center">
            a new
            <div className="chotadiv mx-8 rounded-md bg-black h-[3vw] w-[4vw]">
              <img
                className="object-cover invisible h-full w-full rounded-md"
                src="/img/gallery-5.webp"
                alt=""
              />
            </div>
            realit<b>y</b>
          </h1>
          <h1>
            that rew<b>a</b>rds
          </h1>
          <h1 className="flex items-center">
            play<b>e</b>rs
            <div className="chotadiv mx-8 rounded-md bg-black h-[3vw] w-[4vw]">
              <img
                className="object-cover invisible h-full w-full rounded-md"
                src="/img/gallery-6.webp"
                alt=""
              />
            </div>
            and
          </h1>
          <h1>
            e<b>n</b>coura<b>g</b>es
          </h1>
          <h1>
            com<b>m</b>uniti<b>e</b>s
          </h1>
          <h1 className="flex items-center">
            to
            <div className="chotadiv mx-8 rounded-md bg-black h-[3vw] w-[4vw]">
              <img
                className="object-cover invisible h-full w-full rounded-md"
                src="/img/gallery-7.webp"
                alt=""
              />
            </div>
            thri<b>v</b>e
          </h1> */}
        </div>

        <p className="text-xl py-10">
  Cinema is where dreams come alive, where stories are <br />told in a language that everyone understands
</p>


        <a
  href="https://www.instagram.com/aryanshivva/"
  target="_blank"
  rel="noopener noreferrer"
>
<Button
  title="FOLLOW ME"
  containerClass="px-7 py-2 bg-black text-white"
/>

</a>


      </div>

      <Page5contact />
    </>
  );
};

export default Extra;
