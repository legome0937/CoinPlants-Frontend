import React from "react";
import dinoSkelly from "../assets/dino-skelly.png";

function End() {
  return (
    <div
      className=" End CPIntro flex justify-center  
    mt-[-12px] pt-12 pb-24"
    >
      <img
        className="w-60  lg:w-[700px] object-contain"
        src={dinoSkelly}
        alt=""
      />
    </div>
  );
}

export default End;
