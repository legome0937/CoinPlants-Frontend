import React from "react";
import eegWorm from "../assets/eegg-worm.png";
import plane3 from "../assets/eegg-plane3-dirty.png";
import commonChart from "../assets/Common chart.png";
import rareChart from "../assets/Rare chart.png";
import ultraRare from "../assets/Ultra Rare chart.png";
import ucChart from "../assets/Uncommon chart.png";
import cpGif from '../assets/CP rotating gif (dirty).gif';

function Rarity() {
  const RarityType = ({ type, image }) => {
    return (
      <div className="rarityTy mt-16 pt-[-200px] lg:mt-28">
        <h3 className="typeHead ml-10 text-white text-left text-[14px]  font-title lg:text-[40px] ">
          {type}
        </h3>
        <div className="chart">
          <img
            src={image}
            className="object-contain w-[250px] ml-11 mt-4 lg:w-[500px]"
            alt=""
          />
        </div>
      </div>
    );
  };
  return (
    <section id="rarity_id" className="Utility utilityBG px-4 pb-24 pt-0 lg:px-32 lg:pb-32 mt-[-12px] ">
      <h2
        className="utilityHeading text-white text-[20px] text-left mb-0 ml-5 font-title lg:text-[45px] lg:ml-10"
      >
        RARITY
      </h2>

      {/* text left heading */}
      <div className="flex font-early ">
        <div className="utilityLeft m-5 mt-2 relative lg:m-10">
          <img
            src={plane3}
            className="w-10 sm:w-16 absolute top-[-4rem] right-0 z-0  rotate-6 opacity-70 lg:w-32 lg:top-[-2rem] "
            alt=""
          />
          <img
            src={eegWorm}
            className="w-14 absolute bottom-[-2rem] left-[-4rem] lg:w-20 "
            alt=""
          />
          <div className="text-left text-[9px] lg:text-[15px]">
            <span className="text-[rgba(255,255,124,1)] text-[8px] relative z-10 lg:text-[15px] ">
              Coin Plants feature 8 unique properties{" "}
            </span>
            <span className="text-[rgba(255,255,255,1)] relative z-10 lg:text-[15px]">
              with property 1 being a set of 17 beautiful backgrounds and
              property 8 being extremely rare! <br />
              <br />
              Every other Coin Plant property contains at least{" "}
            </span>
            <span className="text-[rgba(255,255,124,1)] lg:text-[15px]  relative z-10">
              26 variable colour variations
            </span>
            <span className="text-[rgba(255,255,255,1)]  relative z-10 lg:text-[15px]">
              {" "}
              which make up the complete design, each representing the colour
              scheme of a blue chip Cryptocurrency. <br />
              <br />
              Almost every Coin Plant is randomised, but{" "}
            </span>
            <span className="text-[#7BD98D]  relative z-10 lg:text-[15px]">
              there are a handful of custom 1 of 1 designs
            </span>
            <span className="text-[rgba(255,255,255,1)]  relative z-10 lg:text-[15px]">
              {" "}
              amongst collection, so keep an eye out for those!
            </span>
          </div>
        </div>

        <div className="utilityRight  hidden sm:block m-10 mr-0 w-[100%]">
          <img
            className="w-[15rem] ml-[auto] mr-[auto] hidden sm:block sm:w-32 lg:w-56 "
            src={cpGif}
            alt=""
          />
        </div>
        {/* utility right text end */}
      </div>

      <div
        id="rarityTypes_id"
        className="rarityTypes flex flex-wrap justify-between 
    "
      >
        <RarityType type="COMMON" image={commonChart} />
        <RarityType type="UNCOMMON" image={ucChart} />
        <RarityType type="RARE" image={rareChart} />
        <RarityType type="ULTRA RARE" image={ultraRare} />
      </div>
    </section>
  );
}

export default Rarity;
