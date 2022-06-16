import React from "react";
import teamImg1 from "../assets/Me (square).jpg";
import teamImg2 from "../assets/nina.jpg";
import skull from "../assets/eegg-apeskull-dirty.png";
import eegWorm from "../assets/eegg-worm.png";
import gem8Dirty from "../assets/eegg-gem8-dirty.png";
import eegDiamond from "../assets/eegg-diamondget-dirty.png";
import eegHodl from "../assets/eegg-hodl.png";
import { useMediaQuery } from "react-responsive";

function Team() {
  const isMobile = useMediaQuery({ query: "(max-width: 667px)" });
  return (
    <section id="team_id" className="Team utilityBG mt-[-12px]">
      <div className="flex justify-start m-6 mt-0 pb-56 px-5 mb-0 flex-wrap lg:ml-32">
        <h2 className="text-[24px] text-white font-title lg:text-[45px] text-left">
          Team
        </h2>
        <div className="team-members-wrapper pt-5">
          <div className="team-member-container teamLeft text-left relative">
            <img
              src={skull}
              className="z-0 opacity-70 absolute top-36 left-[-55px] w-10 sm:w-20 lg:w-24 lg:left-[-92px]"
              alt=""
            />
            <img
              src={eegWorm}
              className="absolute bottom-[-23rem] lg:bottom-[-19rem] right-34 lg:right-44 w-[50px] sm:w-[90px]"
              alt=""
            />
            <div className="team-member">
              <div
                className={`teamImgWrapper my-5 lg:my-10 ${
                  isMobile ? " mt-auto mb-auto " : ""
                }`}
              >
                <img
                  src={teamImg1}
                  className="w-16 rounded-full lg:w-48"
                  alt=""
                />
              </div>
              <div className="team-member-text">
                <div className="name  text-[15px] text-white font-title lg:text-[30px]">
                  Josiah
                </div>
                <a 
                  className="email mt-1 text-[12px] mb-3 text-white font-early lg:text-[28px] relative z-10"
                  href="https://twitter.com/themavrek"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <span className="font-upheaval text-[18px] lg:text-[40px] pr-1 lg:pr-2">@</span>
                  themavrek
                </a>
                <div className="teamDesc font-[`Early GameBoy`] text-[9px] text-white font-early lg:text-[16px] relative z-10">
                  Bachelor of Business graduate from RMIT in Melbourne, Australia.
                  Has years of experience in the gaming industry, currently works
                  at a Fortune 500 tech company. Head of development and marketing
                  for Coin Plants NFT. Addicted to filter coffee.
                </div>
              </div>
            </div>
          </div>

          {/* right */}

          <div className="team-member-container text-left relative">
            <img
              src={eegHodl}
              className="absolute bottom-[-10rem] right-[0rem] rotate-12 m-12
              w-[50px] sm:w-[130px] lg:right-[7rem]"
              alt=""
            />
            <img
              src={eegDiamond}
              className="absolute bottom-[-9rem] right-[150px] w-[50px] sm:w-[90px] lg:right-[3rem] lg:bottom-[-14rem]"
              alt=""
            />
            <div className="absolute ml-[8rem] w-[40px] sm:w-[90px] mt-[-4rem]">
              <img src={gem8Dirty} alt="" />
            </div>
            <div className="team-member">
              <div
                className="teamImgWrapper my-5 lg:my-10"
              >
                <img
                  src={teamImg2}
                  className="w-16 rounded-full lg:w-48"
                  alt=""
                />
              </div>

              <div className="team-member-text">
                <div className="name text-[15px] text-white font-title lg:text-[30px]">
                  Nina
                </div>
                <a 
                  className="email mt-1 text-[12px] mb-3 text-white font-early lg:text-[28px]"
                  href="https://twitter.com/ninastwenties"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <span className="font-upheaval text-[18px] lg:text-[40px] pr-1 lg:pr-2">@</span>
                  ninastwenties
                </a>
                <div className="teamDesc font-[`Early GameBoy`] text-[9px] text-white font-early lg:text-[16px]">
                  Passionate illustrator with a focus on pixel art. Writes for
                  Medium in her spare time and currently studies Japanese. Spent
                  many sleepless nights hand-crafting each pixel of Coin Plants 
                  with love. Owns the cutest cat known to mankind
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Team;
