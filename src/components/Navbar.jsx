import gsap from "gsap";
import { useWindowScroll } from "react-use";
import { useEffect, useRef, useState } from "react";
import { TiLocationArrow } from "react-icons/ti";

import Button from "./Button";

const navItems = ["ALLU ARJUN", "RASHMIKA", "FAHAD FASSIL", "SUKUMAR", "DSP"];

const NavBar = () => {
  // State for toggling audio and visual indicator
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);
  const [isIndicatorActive, setIsIndicatorActive] = useState(false);

  // Refs for audio and navigation container
  const audioElementRef = useRef(null);
  const navContainerRef = useRef(null);

  const { y: currentScrollY } = useWindowScroll();
  const [isNavVisible, setIsNavVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  // Toggle audio and visual indicator (button click)
  const toggleAudioIndicator = async () => {
    const audio = audioElementRef.current;
    if (!audio) return;

    if (isAudioPlaying) {
      audio.pause();
      setIsAudioPlaying(false);
      setIsIndicatorActive(false);
    } else {
      try {
        // ensure audio is unmuted for audible playback on user gesture
        audio.muted = false;
        await audio.play();
        setIsAudioPlaying(true);
        setIsIndicatorActive(true);
      } catch (err) {
        // Play failed — keep muted/paused; user can try again
        console.warn("Audio play failed on toggle:", err);
        setIsAudioPlaying(false);
        setIsIndicatorActive(false);
      }
    }
  };

  // Keep audio play/pause in sync if something else changes isAudioPlaying
  useEffect(() => {
    const audio = audioElementRef.current;
    if (!audio) return;

    if (isAudioPlaying) {
      audio.play().catch((err) => {
        console.warn("Play rejected while syncing state:", err);
        setIsAudioPlaying(false);
        setIsIndicatorActive(false);
      });
    } else {
      audio.pause();
    }
  }, [isAudioPlaying]);

  // Attempt autoplay on mount (muted-first trick) and try to unmute if allowed.
  useEffect(() => {
    const audio = audioElementRef.current;
    if (!audio) return;

    let didAutoPlay = false;
    let mounted = true;

    const attemptAutoplay = async () => {
      try {
        // Start muted so autoplay is allowed
        audio.muted = true;
        // preload + play while muted
        await audio.play();
        if (!mounted) return;
        didAutoPlay = true;

        // Try to unmute — some browsers allow this after playback started
        try {
          audio.muted = false;
        } catch (unmuteErr) {
          // if unmuting fails keep it muted but playing
          console.warn("Unmute attempt failed (will keep muted):", unmuteErr);
        }

        // Update visual/play states based on whether audio is audible or paused
        setIsAudioPlaying(!audio.paused);
        setIsIndicatorActive(!audio.paused && !audio.muted);
        console.info("Autoplay attempt succeeded (muted-first).");
      } catch (err) {
        // Autoplay blocked — will wait for user gesture
        console.info("Autoplay blocked; waiting for user interaction.", err);
        audio.pause();
        audio.muted = true;
        setIsAudioPlaying(false);
        setIsIndicatorActive(false);
      }
    };

    attemptAutoplay();

    // If autoplay was blocked, try again once on the user's first interaction (click/keypress/pointer)
    const onFirstInteraction = async () => {
      if (!audio) return;
      if (!didAutoPlay && audio.paused) {
        try {
          audio.muted = false;
          await audio.play();
          if (!mounted) return;
          setIsAudioPlaying(true);
          setIsIndicatorActive(true);
          console.info("Playback started after first user interaction.");
        } catch (err) {
          console.warn("Still blocked after interaction:", err);
        }
      }
      window.removeEventListener("pointerdown", onFirstInteraction);
      window.removeEventListener("keydown", onFirstInteraction);
    };

    window.addEventListener("pointerdown", onFirstInteraction);
    window.addEventListener("keydown", onFirstInteraction);

    return () => {
      mounted = false;
      window.removeEventListener("pointerdown", onFirstInteraction);
      window.removeEventListener("keydown", onFirstInteraction);
    };
  }, []);

  // NAV show/hide logic (same as before)
  useEffect(() => {
    if (currentScrollY === 0) {
      setIsNavVisible(true);
      navContainerRef.current?.classList.remove("floating-nav");
    } else if (currentScrollY > lastScrollY) {
      setIsNavVisible(false);
      navContainerRef.current?.classList.add("floating-nav");
    } else if (currentScrollY < lastScrollY) {
      setIsNavVisible(true);
      navContainerRef.current?.classList.add("floating-nav");
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
              aria-pressed={isAudioPlaying}
              aria-label={isAudioPlaying ? "Pause background music" : "Play background music"}
              className="ml-10 flex items-center space-x-3 p-2 rounded-lg shadow-md hover:bg-gray-600 bg-black/80"
            >
              {/* Audio element: muted + playsInline + preload helps autoplay */}
              <audio
                ref={audioElementRef}
                className="hidden"
                src="/audio/loop.mp3"
                loop
                muted
                playsInline
                preload="auto"
              />

              {/* Speaker icon changes tint based on playing state */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`h-8 w-8 ${isAudioPlaying ? "text-white" : "text-gray-300"}`}
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M11 5L6 9H3v6h3l5 4V5zm5.5 5a3.5 3.5 0 010 5m2.5-7a6 6 0 010 9" />
              </svg>

              {/* Indicator bars */}
              <div className="flex space-x-1">
                {[1, 2, 3, 4].map((bar) => (
                  <div
                    key={bar}
                    className={`indicator-line ${isIndicatorActive ? "bg-white" : "bg-gray-400"}`}
                    style={{
                      width: "4px",
                      height: "20px",
                      animationDelay: `${bar * 0.1}s`,
                      animation: isIndicatorActive ? `bounce ${1 + bar * 0.2}s ease-in-out infinite` : "none",
                    }}
                  />
                ))}
              </div>

              {/* Local CSS for indicator animation */}
              <style jsx>{`
                @keyframes bounce {
                  0%, 100% {
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
