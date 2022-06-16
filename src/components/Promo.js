import React from 'react';

const Promo = () => {
  return (
    <iframe
      className='promo-vid'
      src="https://www.youtube.com/embed/IXzB621DwNg" 
      title="YouTube video player"  
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
      allowFullScreen
    ></iframe>
  );
}

export default Promo;
