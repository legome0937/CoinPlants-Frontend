import React from "react";
import butBitcoin from "../assets/eegg-buybitcoin.png";
import ufo1Dirty from "../assets/eegg-ufo1-dirty.png";
import gem3 from "../assets/eegg-gem3.png";

function BottomGemsBlock() {
  return (
    <div className="BottomGemsBlock  CPIntro   ">
      <div className="gemB1 flex justify-end mr-48">
        <img
          src={butBitcoin}
          className="w-20 -rotate-[20deg] absolute top-[3960px] lg:top-[3100px]"
          alt=""
        />
      </div>

      <div className="gemB1 flex justify-end mr-20 mt-28">
        <img src={ufo1Dirty} className="w-20" alt="" />
      </div>

      <div className="gemB1 flex justify-start lg:ml-96 lg:mt-40 lg: mb-[-100px] ">
        <img src={gem3} className="w-20 -rotate-[90deg]" alt="" />
      </div>
    </div>
  );
}

export default BottomGemsBlock;
