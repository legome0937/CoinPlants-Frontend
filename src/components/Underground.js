import React from "react";
import CPIntro from "./CPIntro";
import Mint from "./Mint";
import MintOtherSideGems from "./MintOtherSideGems";
import MintSideGems from "./MintSideGems";
import Utility from "./Utility";
import Rarity from "./Rarity";
import Team from "./Team";
import End from "./End";
import Footer from "./Footer";
import Promo from "./Promo";

function Underground() {
  return (
    <div className="underground-wrapper">
      <main>
        <div className="underContainer w-full text-center ">
          <h1 className="underTitle relative z-50 text-white font-title text-[16px] lg:text-[40px]">
            MINT A COIN PLANT!
          </h1>
          <div className="mintWrapper w-full flex justify-center pt-[1rem] lg:pt-10">
            <MintSideGems />
            <Mint />
            <MintOtherSideGems />
          </div>
          
          <CPIntro />

          <div className="promo-vid-container">
            <Promo />
          </div>

          <Utility />
          <Rarity />
          <Team />
          <End />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default Underground;
