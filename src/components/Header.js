import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import headerLogo from "../assets/header-logo-cropped.png";
import { ReactComponent as DiscordIcon } from "../assets/discord-icon.svg";
import { ReactComponent as TwitterIcon } from "../assets/twitter-icon.svg";
import { ReactComponent as OpenseaIcon } from "../assets/opensea-icon.svg";
import { ReactComponent as RaritySniperIcon } from "../assets/raritysniper-icon.svg";

//useDapp
import { useEthers, shortenAddress, Mainnet } from "@usedapp/core";

// Redux
import { useSelector, useDispatch } from "react-redux";
import { userActions } from "../store/user-slice";

// Ethers
import { ethers } from "ethers";

// Web3Modal
import Web3Modal from "web3modal";
import WalletConnectProvider from "@walletconnect/web3-provider";
import WalletLink from "walletlink";

// Toast
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const mobileMenuBtn = useRef(null);

  // const provider = useSelector((state) => state.user.provider);

  // const dispatch = useDispatch();

  const { account, activate, chainId, deactivate } = useEthers();

  useEffect(() => {
    deactivate();
  }, [deactivate]);

  const handleConnection = async () => {
    if (account) {
      deactivate();
      return;
    }

    const providerOptions = {
      walletconnect: {
        package: WalletConnectProvider, // required
        options: {
          chainId: 1,
          rpc: {
            1: "https://mainnet.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161",
          },
        },
      },

      injected: {
        display: {
          logo: "https://github.com/MetaMask/brand-resources/raw/master/SVG/metamask-fox.svg",
          name: "MetaMask",
          description: "Connect with MetaMask in your browser",
        },
        package: null,
      },

      "custom-walletlink": {
        display: {
          logo: "https://play-lh.googleusercontent.com/PjoJoG27miSglVBXoXrxBSLveV6e3EeBPpNY55aiUUBM9Q1RCETKCOqdOkX2ZydqVf0",
          name: "Coinbase Wallet",
          description: "Connect to Coinbase Wallet",
        },
        options: {
          appName: "Coinbase", // Your app name
          networkUrl: `https://mainnet.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161`,
          chainId: 1,
        },
        package: WalletLink,
        connector: async (_, options) => {
          const { appName, networkUrl, chainId } = options;
          const walletLink = new WalletLink({
            appName,
          });
          const provider = walletLink.makeWeb3Provider(networkUrl, chainId);
          await provider.enable();
          return provider;
        },
      },
    };

    const web3Modal = new Web3Modal({
      cacheProvider: false, // optional
      providerOptions, // required
      theme: {
        background: `#fff`,
        main: "#7BD98D",
        secondary: "#7BD98D",
        border: "#fff",
        hover: "#fff",
      },
    });

    if (!account) {
      const web3Modal = new Web3Modal({
        providerOptions,
      });
      const provider = await web3Modal.connect();
      await activate(provider);
    }

    // console.log(provider);

    // if (provider) {
    //   dispatch(userActions.setUserAddress(""));
    //   dispatch(userActions.setProvider(""));
    // } else {

    //   const connection = await web3Modal.connect();

    //   console.log(connection);

    //   const provider = new ethers.providers.Web3Provider(connection);
    //   const signer = provider.getSigner();

    //   provider.on("disconnect", (error) => {
    //     web3Modal.clearCachedProvider();
    //     window.location.reload();

    //     dispatch(userActions.setUserAddress(""));
    //     dispatch(userActions.setProvider(""));
    //   });

    //   const addy = await signer.getAddress();

    //   dispatch(userActions.setUserAddress(addy));
    //   dispatch(userActions.setProvider(provider));
    // }
  };

  const NavigationLinks = ({ desktop }) => {
    return (
      <ul
        className={
          desktop ? "desktop-nav-items flex justify-evenly items-center" : null
        }
      >
        <li
          className={`nav-link font-title text-shadow ${
            desktop ? null : "mobile-menu-item"
          }`}
        >
          <a
            href="https://coconut-laugh-90c.notion.site/Coin-Plants-NFT-Roadmap-d255f7d5b24041a38acf533de7ec03ba"
            rel="noopener noreferrer"
            target="_blank"
          >
            Roadmap
          </a>
        </li>
        {/* <li 
          className={`nav-link font-title text-shadow ${desktop ? null : "mobile-menu-item"}`} 
          onClick={() => handleNavClick("rarity_id")}
        >
          Rarity
        </li> */}
        <li
          className={`nav-link font-title text-shadow ${
            desktop ? null : "mobile-menu-item"
          }`}
        >
          <Link to="/staking">Staking</Link>
        </li>
        {/* <li 
          className={`nav-link font-title text-shadow ${desktop ? null : "mobile-menu-item"}`} 
          onClick={() => handleNavClick("team_id")}
        >
          Team
        </li> */}
        <ToastContainer
          theme="light"
          style={{ width: "400px" }}
          toastClassName="font-bold  border-[1px] border-[#23263D] rounded-[10px] w-2xl"
          position="top-center"
          rtl={false}
        />
      </ul>
    );
  };

  const HeaderLogo = () => {
    return (
      <a
        className="logo flex items-center"
        href="/"
        rel="noopener noreferrer"
        aria-label="Home"
      >
        <img src={headerLogo} className="w-24 z-50 lg:w-44" alt="Logo" />
      </a>
    );
  };

  const SocialLink = ({ svg, link, socialName }) => {
    return (
      <div className="text-center">
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Link to ${socialName}`}
        >
          <div
            className={`social-icon-container 
            ${socialName === "Twitter" ? "twitter-icon-container" : ""}`}
          >
            {svg}
          </div>
        </a>
      </div>
    );
  };

  const ConnectWalletBtn = () => {
    return (
      <button
        className="connect-wallet-btn cta flex justify-center items-center relative w-20 z-50 sm:w-32 sm:text-[10px] cursor-pointer text-[8px] font-[Early GameBoy] text-[white] h-7 px-1 py-0 ml-1 rounded-2xl font-early md:w-52  lg:text-[13px] lg:h-14 lg:px-3 lg:py-3 lg:ml-10  "
        onClick={handleConnection}
      >
        {account ? "Disconnect" : " Connect Wallet"}
      </button>
    );
  };

  const handleMobileMenuToggle = () => {
    setIsNavOpen((prev) => !prev);
    mobileMenuBtn.current.classList.toggle("mobile-menu-btn-active");
  };

  const isDesktop = useMediaQuery({ query: "(min-width: 1200px)" });

  return (
    <header className="header absolute pl-2 pr-2 top-0 mt-2  flex flex-col w-full min-w-full">
      <div className="uppderHead flex justify-between 2xl:justify-evenly align-middle h-full">
        <div className="leftHeader flex justify-evenly items-center">
          <button
            onClick={handleMobileMenuToggle}
            className="mobile-menu-btn"
            ref={mobileMenuBtn}
            aria-label="Menu"
          >
            <span className="hidden">Menu</span>
          </button>
          <NavigationLinks desktop={true} />
        </div>
        {!isDesktop && isNavOpen ? (
          <nav className="mobile-menu">
            <NavigationLinks />
            <div className="mobile-nav-social-links">
              <SocialLink
                svg={<DiscordIcon />}
                link="https://discord.gg/gSxyUEF3qH"
                socialName="Discord"
              />
              <SocialLink
                svg={<TwitterIcon />}
                link="https://twitter.com/CoinPlantsNFT"
                socialName="Twitter"
              />
              <SocialLink
                svg={<OpenseaIcon />}
                link="https://opensea.io/collection/coinplants"
                socialName="OpenSea"
              />
              <SocialLink
                svg={<RaritySniperIcon />}
                link="https://raritysniper.com/nft-drops-calendar"
                socialName="Rarity Sniper"
              />
            </div>
          </nav>
        ) : null}

        {isDesktop ? (
          <div className="rightHeader flex justify-evenly items-center ">
            <HeaderLogo />
            <div className="desktop-social-icons flex justify-evenly items-center">
              <SocialLink
                svg={<DiscordIcon />}
                link="https://discord.gg/gSxyUEF3qH"
                socialName="Discord"
              />
              <SocialLink
                svg={<TwitterIcon />}
                link="https://twitter.com/CoinPlantsNFT"
                socialName="Twitter"
              />
              <SocialLink
                svg={<OpenseaIcon />}
                link="https://opensea.io/collection/coinplants"
                socialName="OpenSea"
              />
            </div>
          </div>
        ) : (
          <div className="rightHeader flex justify-between items-center ">
            <HeaderLogo />
          </div>
        )}
        <div className="rightHeader flex  items-center ">
          <ConnectWalletBtn />
        </div>
      </div>
    </header>
  );
}

export default Header;
