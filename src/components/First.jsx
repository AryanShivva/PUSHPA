import Button from "./Button";
import { TiLocationArrow } from "react-icons/ti";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";

const First = () => {
  const [currentIndex, setCurrentIndex] = useState(1);
  const [hasClicked, setHasClicked] = useState(false);

  const [loading, setLoading] = useState(true);
  const [loadedVideos, setLoadedVideos] = useState(0);

  const totalVideos = 4;
  const nextVdRef = useRef(null);

  useGSAP(
    () => {
      if (hasClicked) {
        gsap.set("#next-video", { visibility: "visible" });
        gsap.to("#next-video", {
          transformOrigin: "center center",
          scale: 1,
          width: "100%",
          height: "100%",
          duration: 1,
          ease: "power1.inOut",
          onStart: () => nextVdRef.current.play(),
        });
        gsap.from("#current-video", {
          transformOrigin: "center center",
          scale: 0,
          duration: 1.5,
          ease: "power1.inOut",
        });
      }
    },
    {
      dependencies: [currentIndex],
      revertOnUpdate: true,
    }
  );

  useGSAP(() => {
    gsap.set("#video-frame", {
      clipPath: "polygon(14% 0, 72% 0, 88% 90%, 0 95%)",
      borderRadius: "0% 0% 40% 10%",
    });
    gsap.from("#video-frame", {
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      borderRadius: "0% 0% 0% 0%",
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: "#video-frame",
        start: "center center",
        end: "bottom center",
        scrub: true,
      },
    });
  });

  const handleVideoLoad = () => {
    setLoadedVideos((prev) => prev + 1);
  };

  useEffect(() => {
    if (loadedVideos === totalVideos - 1) {
      setLoading(false);
    }
  }, [loadedVideos]);

  const handleMiniVdClick = () => {
    setHasClicked(true);

    setCurrentIndex((prevIndex) => (prevIndex % totalVideos) + 1);
  };
  const getVideoSrc = (index) => {
    const videoUrls = [
      "https://res.cloudinary.com/dtprtzn8q/video/upload/v1734958093/oa4ccdznuccckqu1pqgu.mp4", // Video 1
      "https://res.cloudinary.com/dtprtzn8q/video/upload/v1734958088/lt7wsuww4izqqgsegcgl.mp4", // Video 2
      "https://res.cloudinary.com/dtprtzn8q/video/upload/v1734958101/sjokkgv8xxyvsubctvx4.mp4", // Video 3
      "https://res.cloudinary.com/dtprtzn8q/video/upload/v1734958115/h2wvxnwmxonwub8qsm95.mp4", // Video 4
    ];
    return videoUrls[index - 1];
  };
  
  const First = () => {
    const [currentIndex, setCurrentIndex] = useState(1);
    const [hasClicked, setHasClicked] = useState(false);
  
    const [loading, setLoading] = useState(true);
    const [loadedVideos, setLoadedVideos] = useState(0);
  
    const totalVideos = 4;
    const nextVdRef = useRef(null);
  
    const handleVideoLoad = () => {
      setLoadedVideos((prev) => prev + 1);
    };
  
    useEffect(() => {
      if (loadedVideos === totalVideos) {
        setLoading(false);
      }
    }, [loadedVideos]);
  
    const handleMiniVdClick = () => {
      setHasClicked(true);
      setCurrentIndex((prevIndex) => (prevIndex % totalVideos) + 1);
    };
  
    return (
      <div className="relative h-dvh w-screen overflow-x-hidden">
        {loading && (
          <div className="flex-center absolute z-[100] h-dvh w-screen overflow-hidden bg-violet-50">
            <div className="three-body">
              <div className="three-body__dot"></div>
              <div className="three-body__dot"></div>
              <div className="three-body__dot"></div>
            </div>
          </div>
        )}
  
        <div
          id="video-frame"
          className="relative z-10 h-dvh w-screen overflow-hidden rounded-lg bg-blue-75"
        >
          <div>
            <div className="mask-clip-path absolute-center absolute z-50 size-64 cursor-pointer overflow-hidden rounded-lg">
              <div
                onClick={handleMiniVdClick}
                className="origin-center scale-50 opacity-0 transition-all duration-500 ease-in hover:scale-100 hover:opacity-100"
              >
                <video
                  ref={nextVdRef}
                  src={getVideoSrc((currentIndex % totalVideos) + 1)}
                  loop
                  muted
                  id="current-video"
                  className="size-64 origin-center scale-150 object-cover object-center"
                  onLoadedData={handleVideoLoad}
                />
              </div>
            </div>
  
            <video
              ref={nextVdRef}
              src={getVideoSrc(currentIndex)}
              loop
              muted
              id="next-video"
              className="absolute-center invisible absolute z-20 size-64 object-cover object-center"
              onLoadedData={handleVideoLoad}
            />
            <video
              src={getVideoSrc(
                currentIndex === totalVideos ? 1 : currentIndex
              )}
              autoPlay
              loop
              muted
              className="absolute left-0 top-0 size-full object-cover object-center"
              onLoadedData={handleVideoLoad}
            />
          </div>
  
          <h1
            className="special-font hero-heading absolute bottom-5 right-5 z-40 text-red-700"
            style={{ fontSize: "150px" }}
          >
            RAPPA RAPPA
          </h1>
  
          <div className="absolute left-0 top-0 z-40 size-full">
            <div className="mt-24 px-5 sm:px-10">
              <h1
                className="special-font hero-heading text-blue-100 text-red-600"
                style={{ fontSize: "100px", marginTop: "10px" }}
              >
                <b>P</b>USHPA
              </h1>
            </div>
          </div>
        </div>
  
        <h1 className="special-font hero-heading absolute bottom-5 right-5 text-black">
          P<b>U</b>SHPA
        </h1>
      </div>
    );
  };

}
  
  export default First;
  