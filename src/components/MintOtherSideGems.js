import React from "react";
import eegDip1 from "../assets/eegg-dip1-dirty.png";
import car2Dirty from "../assets/eegg-car2-dirty.png";
import gem1Dirty from "../assets/eegg-gem1-dirty.png";
import eegDiamond from "../assets/eegg-diamondget-dirty.png";

function MintOtherSideGems() {
  return (
    <div className="MintOtherSideGems grid grid-cols-3 gap-4 mt-16 max-w-[15%] min-w-[15%]">
      <img className="w-10 -rotate-[55deg] lg:w-20 " src={eegDip1} alt="" />
      <img
        className="w-5 sm:w-10 col-span-2 sm:ml-auto sm:mr-[4.5rem] mb-10 mt-[-5rem] lg:w-20 "
        src={car2Dirty}
        alt=""
      />
      <img
        className="w-10 col-span-1 sm:ml-[95%] -rotate-[20deg] lg:w-20"
        src={gem1Dirty}
        alt=""
      />

      <img
        className="w-10 col-span-3 sm:ml-[60%] lg:w-20"
        src={eegDiamond}
        alt=""
      />
    </div>
  );
}

export default MintOtherSideGems;
