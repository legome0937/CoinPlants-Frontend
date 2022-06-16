import React, { useState } from 'react';
import Header from '../components/Header';
import foregroundGround from "../assets/foreground-ground.png";
import foregroundUnderground from "../assets/foreground-underground.png";
import Pollinate from '../components/Pollinate';
import Nursery from '../components/Nursery';
import Footer from '../components/Footer';

const Staking = () => {

  const [nurseryView, setNurseryView] = useState(false);

  const handleNurseryViewToggle = () => {
      setNurseryView(true);
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
  }
  
  return (
    <div className="staking">
      <Header />
      <img src={foregroundGround} alt="Background" className='mt-[-0.5rem] lg:mt-[-1rem]' />
      <img src={foregroundUnderground} alt="Background" />
      <div className="underground-wrapper">
        <main className='staking-main flex justify-center text-center'>
          {nurseryView ? <Nursery /> : <Pollinate handleNurseryViewToggle={handleNurseryViewToggle} />}
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default Staking;
