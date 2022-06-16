import React from 'react';
import useImage from '../hooks/useImage';

const CoinPlantItem = ({ coinPlant, handleSelection }) => {

  // Image currently being imported from local files
  // Change image to NFT hyperlink – this variable won't be needed
  const { image } = useImage(coinPlant.img);

  return (
    <img 
      src={image} 
      alt={coinPlant.name} 
      className={`coin-plant-item ${coinPlant.staked === true ? 'staked-cp' : 'unstaked-cp'}`}
      onClick={handleSelection}
      data-id={coinPlant.id}
    />
  )
}

export default CoinPlantItem;