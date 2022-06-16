import React from "react";
import rocketDirty from "../assets/eegg-rocket1-dirty.png";
import shelf from "../assets/Shelf_CP.png";

function CPIntro() {
  return (
    <section
      id="CPIntro_id"
      className="flex flex-col sm:flex-row items-center ml-auto mr-auto CPIntro p-12 pl-16 pt-24"
    >
      <div className="cpIntroLeft ml-[-25px] lg:ml-0 ">
        <img src={rocketDirty} className="ml-[-35px] mb-[-35px] w-[63px] sm:w-[126px] sm:ml-[-70px] sm:mb-[-70px]" alt="" />

        <div className="cplTitle text-left text-[1rem] text-white mb-5 font-title lg:text-[2rem]">
          WHAT ARE COIN PLANTS?
        </div>

        <div className="text-[8px] text-left font-early lg:text-[1rem]">
          <span className="text-[rgba(255,255,124,1)]">
            Coin Plants are a collection of 2500 randomly generated pixel art
            NFTs
          </span>
          <span className="text-[rgba(255,255,255,1)]">
            {" "}
            that are sprouting up on the Ethereum blockchain. <br />
          </span>
          <br />
          <span className="text-[rgba(255,255,124,1)]">
            Each Coin Plant design represents one of the top blue chip
            Cryptocurrencies
          </span>
          <span className="text-[rgba(255,255,255,1)]">
            {" "}
            through their colour scheme, excluding stable coins.These colours
            are expressed in various aspects of the plant and even in the pot
            itself, which prominently displays one of 12 Cryptocurrency emblems.{" "}
            <br />
          </span>
          <br />
          <span className="text-[rgba(255,255,124,1)]">
            The purpose of Coin Plants is to help irl plants by rebuilding our
            forests!
          </span>
          <span className="text-[rgba(255,255,255,1)]">
            {" "}
            there is a lot of deforestation happening around the globe, so{" "}
          </span>
          <span className="text-[rgba(255,255,124,1)]">
            we have partnered with the charity
          </span>
          <span className="text-[rgba(255,255,255,1)]"> </span>
          <span className="text-[#7BD98D]">One Tree Planted</span>
          <span className="text-[rgba(255,255,255,1)]">
            {" "}
            to help the cause and plant thousands of trees!
            <br />
          </span>
          <br />
          <span className="text-[rgba(255,255,124,1)]">
            Our aim is to donate $50,000
          </span>
          <span className="text-[rgba(255,255,255,1)]">
            {" "}
            through the minting of Coin Plants. So every one you mint means
            you're helping us get another step closer to making this
            reforestation dream a reality!
          </span>
        </div>
      </div>

      {/* <div className="cpGifWrapper flex justify-center mt-16 ml-[-1rem] sm:mt-auto sm:ml-20 mb-auto"> */}
      <div className="plant-rack flex justify-center ml-[-1rem] sm:ml-20">
        <img src={shelf} className="w-[120rem] " alt="" />
      </div>
    </section>
  );
}

export default CPIntro;
