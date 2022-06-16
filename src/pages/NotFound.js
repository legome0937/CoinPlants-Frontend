import React from 'react';
import { Link } from 'react-router-dom';
import foregroundUnderground from "../assets/foreground-underground.png";

const NotFound = () => {

  return (
    <div className="not-found">
      <div className="underground-wrapper flex justify-center">
        <main className='not-found-main flex flex-col justify-center items-center text-center'>
          <h1>404</h1>
          <p>Oops! Looks like you've gone too far underground!</p>
          <p>
            The page you're looking for doesn't exist, we recommend you go back to our&nbsp;
            <Link className='not-found-home-link' to="/">homepage</Link>.
          </p>
          <Link className='cta' to="/">Take me back up</Link>
        </main>
      </div>
      <img src={foregroundUnderground} alt="Background" className='not-found-bottom' />
    </div>
  );
}

export default NotFound;
