import React, { useEffect, useState, useRef } from "react";
import { useMediaQuery } from "react-responsive";
import underGround from "../assets/foreground-underground.png";
import eegGem4 from "../assets/eegg-gem4-dirty.png";
import eegHodl from "../assets/eegg-hodl.png";
import eegTama from "../assets/eegg-tamagochi1-dirty.png";
import eegWorm from "../assets/eegg-worm.png";
import gem6Dirty from "../assets/eegg-gem6-dirty.png";
import siteM from "../assets/Site_header_No_Mountains.png";
import "../index.css";
import Header from "./Header";

function PageTop3() {
  const [offsetY, setOffsetY] = useState(0);
  const clouds = useRef(null);
  const stars = useRef(null);
  const mountains = useRef(null);

  const canParallax = useMediaQuery({ query: "(min-width: 1440px)" });

  useEffect(() => {

    const handleScroll = () => {
      if (canParallax) {
        // Parallax effect adapted from https://www.oodlestechnologies.com/blogs/smooth-parallax-scrolling-using-css-and-js/
        const speed = 0.3;
        let windowOffset = window.scrollY;
        let scrollPosition = `0 ${windowOffset * speed}px`;
        mountains.current.style.backgroundPosition = scrollPosition;
        
        // Keep clouds and stars fixed while scrolling down
        clouds.current.style.backgroundPosition = `0 ${windowOffset}px`;
        stars.current.style.backgroundPosition = `0 ${windowOffset}px`;
  
        setOffsetY(window.scrollY);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [offsetY, canParallax]);

  const handleLearnMore = () => {
    const section = document.getElementById("CPIntro_id");
    section.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="PageTop skyBG min-w-full max-w-full overflow-x-clip mb-0 w-full">
      <div className="sky"></div>
      <div className="clouds-container">
        <div className="clouds" ref={clouds}></div>
      </div>
      <div className="stars" ref={stars}></div>
      <Header />

      <div className="hero z-20 flex flex-col items-center">
        <span className="text-shadow mt-5 font-early text-[8px] text-center text-[white] p-2 lg:text-[12px] max-w-3xl">
          Coin Plants is an NFT collection of 2500 succulent JPEG's that will
          help rebuild our forests!
        </span>
        <div className="btnWrapper flex justify-center mt-2 lg:mt-5 ">
          <button
            className="cta mintBtn text-center px-10 py-2 rounded-2xl w-fit font-early text-[8px] lg:px-20 lg:py-4 lg:text-[12px] cursor-pointer"
            onClick={handleLearnMore}
          >
            Learn More
          </button>
        </div>
      </div>

      <div className="hero-graphics-container">
        <div className="mountains" ref={mountains}></div>
        <img
          src={siteM}
          alt=""
          className="relative z-10 bottom-[0px] w-full pt-40 sm:pt-16"
        />
      </div>
      

      <div className="relative z-10">
        <img src={underGround} className="mt-[0rem] z-50 w-[100vw]" alt="" />
        <img
          src={eegGem4}
          className="absolute top-3 w-10 left-24 z-40  -rotate-[70deg] lg:w-20"
          alt=""
        />
        <img
          src={eegHodl}
          className="absolute top-8 w-10 left-14 z-40  rotate-[10deg] lg:w-20 "
          alt=""
        />
        <img
          src={eegTama}
          className=" hidden md:display-block absolute top-5 w-10 left-[45.5rem] z-40  -rotate-[70deg] lg:w-20 "
          alt=""
        />
        <img
          src={eegWorm}
          className="absolute top-0 w-8 left-[50%] z-40 rotate-[25deg] lg:w-20"
          alt=""
        />
        <img
          src={gem6Dirty}
          className="absolute top-4 w-8 sm:w-16 left-[80%] z-40 rotate-[0deg]"
          alt=""
        />
      </div>
    </div>
  );
}

export default PageTop3;
