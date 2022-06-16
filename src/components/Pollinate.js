import React from 'react';
import shelfGraphic from '../assets/Shelf_CP.png';
import coinFront from '../assets/coin-front.png';
import coinQuarter from '../assets/coin-quarter.png';
import coinThreeQuarters from '../assets/coin-three-quarters.png';
import pollenOne from '../assets/pollen-1.png';
import pollenTwo from '../assets/pollen-2.png';
import eeggWorm from '../assets/eegg-worm.png';
import eeggGem1 from '../assets/eegg-gem1-dirty.png';
import eeggGem3 from '../assets/eegg-gem3-dirty.png';
import eeggGem6 from '../assets/eegg-gem6-dirty.png';
import eeggHodl from '../assets/eegg-hodl.png';
import eeggTamagochi1 from '../assets/eegg-tamagochi1-dirty.png';
import eeggTamagochi3 from '../assets/eegg-tamagochi3-dirty.png';
import eeggApeSkull from '../assets/eegg-apeskull-dirty.png';
import eeggDiamond from '../assets/eegg-diamondget-dirty.png';


const Pollinate = ({ handleNurseryViewToggle }) => {
  return (
    <section className="staking-section pollinate flex flex-col items-center justify-start text-center pb-60">
      <h1>Time to Pollinate!</h1>
      <div className="staking-graphic-container relative w-max flex justify-center">
        <img src={shelfGraphic} alt="Coin Plants Shelf Graphic" className='shelf-graphic' />
        <img src={coinFront} alt="$POLLEN Coin" className="pollen-coin coin-front" />
        <img src={coinQuarter} alt="$POLLEN Coin" className="pollen-coin coin-quarter" />
        <img src={coinThreeQuarters} alt="$POLLEN Coin" className="pollen-coin coin-three-quarters" />
        <img src={pollenOne} alt="Pollen" className="pollen pollen-left" />
        <img src={pollenTwo} alt="Pollen" className="pollen pollen-top-right" />
        <img src={pollenTwo} alt="Pollen" className="pollen pollen-bottom-right" />
      </div>
      <p className="pollinate-text font-early text-white">You just minted your coin plant, great!</p>
      <p className="pollinate-text font-early text-white pt-5">
        It's now time to stake your plant in the nursery and start earning
        <span className="pollinate-dollar font-upheaval text-[rgb(255,255,124)] pr-[0.1rem]"> $</span>
        <span className="text-[rgb(255,255,124)]">POLLEN</span>
        !
      </p>
      <button 
        className="cta pollinate-cta font-early text-[12px] lg:text-[14px]"
        onClick={handleNurseryViewToggle}
      >
        Stake Now
      </button>
      <div className="easter-eggs">
        <img src={eeggGem1} alt="Pixel Gem" className="staking-eegg top-8 left-[26%] lg:top-10 lg:left-[38%] rotate-[-25deg]" />
        <img src={eeggHodl} alt="Pixel Hodl" className="staking-eegg top-16 left-0 rotate-[10deg]" />
        <img src={eeggTamagochi1} alt="Pixel Tamagochi" className="staking-eegg top-20 lg:top-28 lg:right-[37%] rotate-[-70deg]" />
        <img src={eeggWorm} alt="Pixel Worm" className="staking-eegg top-[4rem] right-0 lg:right-[-1rem]" />
        <img src={eeggGem3} alt="Pixel Gem" className="staking-eegg top-40 left-6 rotate-[-65deg]" />
        <img src={eeggGem6} alt="Pixel Gem" className="staking-eegg top-40 right-2 lg:top-48 lg:right-[15%] rotate-[-20deg]" />
        <img src={eeggWorm} alt="Pixel Worm" className="staking-eegg top-[25rem] left-24 rotate-[-50deg]" />
        <img src={eeggTamagochi3} alt="Pixel Tamagochi" className="staking-eegg top-[21rem] right-0 lg:right-[-0.5rem]" />
        <img src={eeggApeSkull} alt="Pixel Ape Skull" className="staking-eegg bottom-30 lg:bottom-auto lg:top-[50rem] right-8" />
        <img src={eeggDiamond} alt="Pixel Diamond" className="staking-eegg bottom-24 lg:bottom-auto lg:top-[60rem] left-[23%]" />
      </div>
    </section>
  );
}

export default Pollinate;
