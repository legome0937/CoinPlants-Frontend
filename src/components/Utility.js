import React from "react";
import eegWorm from "../assets/eegg-worm.png";
import pollen from "../assets/$POLLEN.png";
import tp from "../assets/1TP x Coin Plants (dirty).png";
import blueTamagotchi from "../assets/Tamagotchi CP Blue.png";
import treeHouse from "../assets/Tree House.png";
import butBitcoin from "../assets/eegg-buybitcoin.png";
import ufo1Dirty from "../assets/eegg-ufo1-dirty.png";
import gem3 from "../assets/eegg-gem3.png";
import { useMediaQuery } from "react-responsive";

function Utility() {
  const isMobile = useMediaQuery({ query: "(max-width: 667px)" });
  return (
    <section
      id="Utility_id"
      className="Utility utilityBG p-8 pb-0 mt-[-52px] lg:p-32 pt-0 lg:pt-10 xl:pt-10 2xl:pt-10"
    >
      <div className="utilityTopImg flex justify-start">
        <img src={eegWorm} className="w-10 lg:w-20 -rotate-[60deg]" alt="" />
      </div>

      <h2 className="utilityHeading text-white text-[20px] text-left mb-0  mt-10 font-title lg:text-[45px] xl:text-[45px] 2xl:text-[45px] ">
        UTILITY
      </h2>

      <div className="text-left  mt-0 mr-0 mb-5 font-early   ">
        <span className="text-white text-[8px] lg:text-[15px]">
          Owning at least one Coin Plant offers loads of awesome, real-world
          utility.
        </span>
      </div>

      <div className="utlity-content flex flex-col font-early text-[8px] lg:text-[15] ">
        {/* one start */}
        <div id="utility-list-one" className="utility-list-item">
          <div className="utility-list-item-text details font-early text-[8px] lg:text-[15] text-left">
            <span className="text-[rgba(255,255,124,1)] text-[10px] lg:text-[15px]">
              {" "}
              1. STAKING GENERATES{" "}
            </span>
            <span className="font-upheaval pr-[0.05rem] tracking-[1px] text-[rgba(255,255,124,1)] text-[12px] lg:text-[23px]">
              $
            </span>
            <span className="text-[rgba(255,255,124,1)] text-[9px] lg:text-[15px]">
              POLLEN
            </span>
            <br />
            <span className="text-[rgba(255,255,255,1)] lg:text-[15px]">
              Staking your Coin Plant will generate passive income through our
              unique token{" "}
            </span>
            <span className="font-upheaval pr-[0.05rem] text-[12px] tracking-[1px] text-white lg:text-[23px]">
              $
            </span>
            <span className="text-[rgba(255,255,255,1)] lg:text-[15px]">
              POLLEN. This token will enable holders to purchase various assets
              in the Coin Plants ecosystem, including but not limited too:{" "}
            </span>
            <span className="text-[#7BD98D] lg:text-[15px]">
              exclusive limited release merch, digital items, events
            </span>
            <span className="text-[rgba(255,255,255,1)] lg:text-[15px]">
              , and even future generations of Coin Plants.
            </span>
          </div>
          <div className="image-one flex justify-center">
            <img
              src={pollen}
              width={isMobile ? 140 : 175}
              className="lg:w-[350px] object-contain"
              alt="$POLLEN"
            />
          </div>
        </div>
        {/* one end */}

        {/* two start */}
        <div className="utility-list-item utility-list-item-reverse">
          <div className="utility-list-item-text two-details text-left lg:text-[15px]">
            <span className="text-[rgba(255,255,124,1)] text-[9px] lg:text-[15px]">
              <br />
              2. GAMEFI PROJECT IN DEVELOPMENT
            </span>
            <br />
            <span className="text-[rgba(255,255,255,1)] relative z-10 lg:text-[15px]">
              We plan to also incorporate{" "}
            </span>
            <span className="font-upheaval pr-[0.05rem] text-[12px] tracking-[1px] text-white lg:text-[23px]">
              $
            </span>
            <span className="text-[rgba(255,255,255,1)] relative z-10 lg:text-[15px]">
              POLLEN as the main cryptocurrency for our huge{" "}
            </span>
            <span className="text-[#7BD98D] relative z-10 lg:text-[15px]">
              GameFi project
            </span>
            <span className="text-[rgba(255,255,255,1)] relative z-10 lg:text-[15px]">
              . This will be a P2E blockchain game where you’ll be able to
              literally “yield farm” via DeFi in a fun and interactive way, so
              staking your Coin Plants will give you a head start when we launch
              this revolutionary game!
            </span>
          </div>
          <div className="image-two tw-image flex justify-center items-center">
            <img
              src={blueTamagotchi}
              width={140}
              className="lg:w-[240px] object-contain  "
              alt="Arcade Machine Graphic"
            />
          </div>
        </div>
        {/* two end */}

        {/* three start */}
        <div className="utility-list-item">
          <div className="utility-list-item-text details text-left">
            <span className="text-[rgba(255,255,124,1)] text-[9px] lg:text-[15px]  ">
              3. VIP ACCESS TO THE TREE HOUSE CLUB
            </span>
            <br />
            <span className="text-[rgba(255,255,255,1)] lg:text-[15px]">
              Every holder, whether staked or not, will have access to{" "}
            </span>
            <span className="text-[#7BD98D] lg:text-[15px]">
              the Tree House Club
            </span>
            <span className="text-[rgba(255,255,255,1)] lg:text-[15px]">
              . This VIP club resides in our Community Garden Discord as a
              private channel for verified holders of Coin Plants only. You can
              expect a bunch of exclusive news and alpha in this Club. Also, any
              future{" "}
            </span>
            <span className="text-[#7BD98D] lg:text-[15px]">Airdrops</span>
            <span className="text-[rgba(255,255,255,1)] lg:text-[15px]">
              {" "}
              or VIP{" "}
            </span>
            <span className="text-[#7BD98D] lg:text-[15px]">giveaways</span>
            <span className="text-[rgba(255,255,255,1)] lg:text-[15px]">
              {" "}
              will only be accessible in the Tree House, so be sure to verify
              your Coin Plant NFT to join!
            </span>
          </div>
          <div className="image-one flex items-center justify-center w-[50%]">
            <img
              src={treeHouse}
              width={300}
              className="lg:w-[350px] object-contain"
              alt="Treehouse"
            />
          </div>
        </div>
        {/* three end */}

        {/* four start */}
        <div className="utility-list-item utility-list-item-reverse">
          <div className="utility-list-item-text four-details">
            <span className="text-[rgba(255,255,124,1)] text-[9px] lg:text-[15px] ">
              <br />
              4. COIN PLANTS NFT HELPS GROW IRL TREES!
            </span>
            <br />
            <span className="text-[rgba(255,255,255,1)] lg:text-[15px]">
              Each Coin Plant minted means more real trees are planted around
              the globe through our charity partner, One Tree Planted. Utilising
              the power of NFTs, YOU are making a positive impact on our
              environment! The planet can't thank you enough.
            </span>
          </div>

          <div className="image-four mb-2 md:pr-5 flex justify-center">
            <img src={tp} alt="One Tree Planted x Coin Plants" />
          </div>
        </div>
      </div>

      {/* gems bottom */}
      <div>
        <div className="gemB1 flex justify-end mr-48">
          <img src={butBitcoin} className="w-8 sm:w-14 -rotate-[20deg] " alt="" />
        </div>

        <div className="gemB1 flex justify-end mr-20 mt-18">
          <img src={ufo1Dirty} className="w-10 sm:w-20" alt="" />
        </div>

        <div className="gemB1 flex justify-start lg:ml-96 lg:mt-0 lg: ">
          <img src={gem3} className="w-10 sm:w-20 -rotate-[90deg]" alt="" />
        </div>
      </div>
      {/* gems end */}
    </section>
  );
}

export default Utility;
