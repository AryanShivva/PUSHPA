import gsap from "gsap";
import { useWindowScroll } from "react-use";
import { useEffect, useRef, useState } from "react";
import { TiLocationArrow } from "react-icons/ti";

import Button from "./Button";

const navItems = ["ALLU ARJUN", "RASHMIKA", "FAHAD FASSIL", "SUKUMAR", "DSP"];

const NavBar = () => {
  // State for toggling audio and visual indicator
  const [isAudioPlaying, setIsAudioPlaying] = useState(true);
  const [isIndicatorActive, setIsIndicatorActive] = useState(true);

  // Refs for audio and navigation container
  const audioElementRef = useRef(null);
  const navContainerRef = useRef(null);

  const { y: currentScrollY } = useWindowScroll();
  const [isNavVisible, setIsNavVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  // Toggle audio and visual indicator
  const toggleAudioIndicator = () => {
    setIsAudioPlaying((prev) => !prev);
    setIsIndicatorActive((prev) => !prev);
  };

  // Manage audio playback
  useEffect(() => {
    const audio = audioElementRef.current;
    if (!audio) return;

    const playAudio = async () => {
      try {
        if (isAudioPlaying) {
          await audio.play();
        } else {
          audio.pause();
        }
      } catch (error) {
        console.error("Error playing audio:", error);
      }
    };

    playAudio();
  }, [isAudioPlaying]);

  // Play audio on component mount
  useEffect(() => {
    setIsAudioPlaying(true);
  }, []);

  useEffect(() => {
    if (currentScrollY === 0) {
      // Topmost position: show navbar without floating-nav
      setIsNavVisible(true);
      navContainerRef.current.classList.remove("floating-nav");
    } else if (currentScrollY > lastScrollY) {
      // Scrolling down: hide navbar and apply floating-nav
      setIsNavVisible(false);
      navContainerRef.current.classList.add("floating-nav");
    } else if (currentScrollY < lastScrollY) {
      // Scrolling up: show navbar with floating-nav
      setIsNavVisible(true);
      navContainerRef.current.classList.add("floating-nav");
    }

    setLastScrollY(currentScrollY);
  }, [currentScrollY, lastScrollY]);

  useEffect(() => {
    gsap.to(navContainerRef.current, {
      y: isNavVisible ? 0 : -100,
      opacity: isNavVisible ? 1 : 0,
      duration: 0.2,
    });
  }, [isNavVisible]);

  return (
    <div
      ref={navContainerRef}
      className="fixed inset-x-0 top-4 z-50 h-16 border-none transition-all duration-700 sm:inset-x-6"
    >
      <header className="absolute top-1/2 w-full -translate-y-1/2">
        <nav className="flex size-full items-center justify-between p-4">
          {/* Logo and Product button */}
          <div className="flex items-center gap-7">
            <img src="/img/logo.png" alt="logo" className="w-10" />

            <Button
              id="product-button"
              title="ARYAN SHIVVA"
              rightIcon={<TiLocationArrow />}
              containerClass="bg-black text-white md:flex px-4 py-1 hidden items-center justify-center gap-1"
            />
          </div>

          {/* Navigation Links and Audio Button */}
          <div className="flex h-full items-center">
            <div className="hidden md:block">
              {navItems.map((item, index) => (
                <a
                  key={index}
                  href={`#${item.toLowerCase()}`}
                  className="nav-hover-btn"
                >
                  {item}
                </a>
              ))}
            </div>

            <button
              onClick={toggleAudioIndicator}
              className="ml-10 flex items-center space-x-3 p-2 bg-black-800 rounded-lg shadow-md hover:bg-gray-600"
            >
              <audio
                ref={audioElementRef}
                className="hidden"
                src="/audio/loop.mp3"
                loop
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-white"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M11 5L6 9H3v6h3l5 4V5zm5.5 5a3.5 3.5 0 010 5m2.5-7a6 6 0 010 9" />
              </svg>
              <div className="flex space-x-1">
                {[1, 2, 3, 4].map((bar) => (
                  <div
                    key={bar}
                    className={`indicator-line ${
                      isIndicatorActive ? "bg-white" : "bg-gray-400"
                    }`}
                    style={{
                      width: "4px",
                      height: "20px",
                      animationDelay: `${bar * 0.1}s`,
                      animation: isIndicatorActive
                        ? `bounce ${1 + bar * 0.2}s ease-in-out infinite`
                        : "none",
                    }}
                  />
                ))}
              </div>

              <style jsx>{`
                @keyframes bounce {
                  0%,
                  100% {
                    transform: scaleY(1);
                  }
                  50% {
                    transform: scaleY(1.5);
                  }
                }
              `}</style>
            </button>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default NavBar;

