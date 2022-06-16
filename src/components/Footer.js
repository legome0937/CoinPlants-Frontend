import React from "react";
import { Link } from "react-router-dom";
import headerLogo from "../assets/header-logo-cropped.png";
import discord from "../assets/discord.png";
import opensea from "../assets/opensea.png";
import twitter from "../assets/twitter.png";
import raritySniper from "../assets/raritysniper.png";

function Footer() {

  const FooterSocialIcon = ({ logo, link, name }) => {
    return (
      <div className="text-center">
        <a href={link} target="_blank" rel="noopener noreferrer" aria-label={`Link to ${name}`}>
          <img
            src={logo}
            className="w-5 mx-2 cursor-pointer lg:w-10 lg:mx-4"
            alt={`${name} icon`}
          />
        </a>
      </div>
    );
  };
  return (
    <footer
      style={{ backgroundColor: "rgba(0,0,0, 0.4)" }}
      className="footer text-white bottom-0 z-50 h-28 
        flex w-full  items-center justify-center pt-2 pb-2
        sm:flex sm:flex-row sm:justify-between
        sm:h-36 sm:bottom-0 
        lg:h-36 lg:bottom-0 relative"
        >
      <img
        className="w-16 lg:w-[130px] ml-2 lg:ml-14 lg:block "
        src={headerLogo}
        width={150}
        alt=""
      />

      <div className="footer-links flex pt-1 pb-1 sm:p-2 ">
        <ul className="footer-links-section flex flex-wrap">
          <li className="nav-link font-title text-shadow footer-link">
            <a 
              href="https://coconut-laugh-90c.notion.site/Coin-Plants-NFT-Roadmap-d255f7d5b24041a38acf533de7ec03ba" 
              rel="noopener noreferrer"
              target="_blank"
            >
              Roadmap
            </a>
          </li>
          {/* <li className="nav-link font-title text-shadow footer-link" onClick={() => handleNavClick("rarity_id")}>
            Rarity
          </li> */}
        </ul>

        <ul className="footer-links-section flex flex-wrap">
          <li className="nav-link font-title text-shadow footer-link">
            <Link to="/staking">Staking</Link>
          </li>
          {/* <li className="nav-link font-title text-shadow footer-link" onClick={() => handleNavClick("team_id")}>
            Team
          </li> */}
        </ul>
      </div>

      <div
        style={{ alignItems: "center" }}
        className="footer-socials flex justify-evenly mr-2 lg:mr-14"
      >
        <FooterSocialIcon
          logo={discord}
          link="https://discord.gg/gSxyUEF3qH"
          name="Discord"
        />
        <FooterSocialIcon
          logo={twitter}
          link="https://twitter.com/CoinPlantsNFT"
          name="Twitter"
        />
        <FooterSocialIcon 
          logo={opensea} 
          link="https://opensea.io/collection/coinplants"
          name="OpenSea"
        />
        <FooterSocialIcon 
          logo={raritySniper}
          link="https://raritysniper.com/nft-drops-calendar"
          name="Rarity Sniper"
        />
      </div>
    </footer>
  );
}

export default Footer;
