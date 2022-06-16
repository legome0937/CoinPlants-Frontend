import React from "react";
import eegWorm from "../assets/eegg-worm.png";
import gem3Dirty from "../assets/eegg-gem3-dirty.png";
import gem7Dirty from "../assets/eegg-gem7-dirty.png";
import ufo2 from "../assets/eegg-ufo2-dirty.png";
import eegTama3 from "../assets/eegg-tamagochi3-dirty.png";

function MintSideGems() {
  return (
    <div className="MintSideGems grid grid-cols-3 gap-4 max-w-[15%] min-w-[15%] ">
      <img className="w-10 -rotate-[50deg]  lg:w-20 " src={eegWorm} alt="" />
      <img
        className="w-10 col-span-2 ml-auto mb-10 mt-[-2rem] -rotate-[60deg] lg:w-20"
        src={gem3Dirty}
        alt=""
      />
      <img
        className="w-10 col-span-1 ml-[70%] lg:w-20"
        src={gem7Dirty}
        alt=""
      />
      <img
        className="w-10 col-span-3 ml-auto mr-5 -rotate-[40deg] lg:w-20"
        src={ufo2}
        alt=""
      />
      <img className="w-10 col-span-1 ml-[95%] lg:w-20" src={eegTama3} alt="" />
    </div>
  );
}

export default MintSideGems;
