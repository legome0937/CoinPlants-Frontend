import React, { useState, useEffect } from "react";
import NumberPicker from "react-widgets/NumberPicker";
import "react-widgets/styles.css";
import mintingGif from "../assets/Minting gif.gif";
import inviteLetterImg from '../assets/invite-letter.png';

import { useSelector } from "react-redux";

// Ethers
import { ethers } from "ethers";

// Config
import { nftAddress, rpcUrl, sigs } from "../config";

// Toast
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Contract
import nft from "../ABI/nft.json";

const Mint = () => {
  const [mintAmount, setMintAmonut] = useState(1);

  // const [isPublic, setIsPublic] = useState();
  const [totalSupply, setTotalSupply] = useState();
  // const [price, setPrice] = useState();
  const [isDiscordModalShowing, setDiscordModalShowing] = useState(false);

  const provider = useSelector((state) => state.user.provider);
  const userAddress = useSelector((state) => state.user.userAddress);

  useEffect(() => {
    getRemaining();
  }, []);

  const getRemaining = async () => {
    console.log(rpcUrl, nftAddress);
    const provider = new ethers.providers.JsonRpcProvider(rpcUrl);

    const contract = new ethers.Contract(nftAddress, nft, provider);

    const _remaining = await contract.totalSupply();

    console.log(_remaining.toString());

    setTotalSupply(_remaining.toString());
  };

  // const getState = async () => {
  //   const provider = new ethers.providers.JsonRpcProvider(rpcUrl);

  //   const contract = new ethers.Contract(nftAddress, nft, provider);

  //   const state = await contract.presaleCost();

  //   setTotalSupply(state.toString());
  // };

  const getPrice = async () => {
    const provider = new ethers.providers.JsonRpcProvider(rpcUrl);

    const contract = new ethers.Contract(nftAddress, nft, provider);

    const _price = await contract.presaleCost();

    setTotalSupply(_price.toString());
  };

  const mint = async () => {
    try {
      if (!provider) {
        toast.error("Please connect");
        return;
      }

      const signer = provider.getSigner();

      const contract = new ethers.Contract(nftAddress, nft, signer);

      console.log(mintAmount, ("80000000000000000" * mintAmount).toString());

      const tx = await contract.publicBuy(mintAmount, {
        value: ("80000000000000000" * mintAmount).toString(),
      });

      toast.success("Tx submitted");
      setDiscordModalShowing(true);
    } catch (error) {
      console.log(error);
      if (error.toString().includes("NOT_LIVE")) {
        alert("Sale not live");
      } else if (error.toString().includes("OVER_SUPPLY")) {
        alert("Sold out");
      } else if (error.toString().includes("SIG_FAILED")) {
        alert("Not whitelisted");
      } else if (error.toString().includes("insufficient funds for gas")) {
        alert("Insuffient funds");
      } else if (mintAmount > 25){
        alert("Mint amount cannot exceed 25");
      } else {
        alert("Something went wrong");
      }
    }
  };

  return (
    <div className="Mint relative border-8 border-[#FFFF7C] rounded-[3rem] bg-[rgba(183,102,95,1)] p-5 w-[70%] lg:p-10 lg:mt-[-20px] flex-grow ">
      <div className="mintItems flex justify-center">
        <img
          src={mintingGif}
          className="object-contain w-[60px] sm:w-[100px] lg:w-40"
          alt=""
        />
        <img
          src={mintingGif}
          className="object-contain w-[80px] sm:w-32 lg:w-48"
          alt=""
        />
        <img
          src={mintingGif}
          className="object-contain w-[60px] sm:w-[100px] lg:w-40"
          alt=""
        />
      </div>

      <div
        className="MIDesc mt-10 
        text-[8px] text-white sm:text-[10px] font-early lg:text-[20px]  "
      >
        <span>Each coin plant costs </span>
        <span className="text-[#7BD98D]">0.08 ETH </span>
        to mint, the maximum amount per wallet is 25.
        <span className="text-[rgba(255,255,124,1)]">
          Mint yours now before they sell out! 
        </span>
      </div>

      <div className="mint-btn-wrapper mt-8 lg:mt-20">
        <button
          className="cta text-center px-8 sm:px-8 py-4 rounded-2xl drop-shadow-[0_5px_5px_rgba(0,0,0,0.1)] w-fit cursor-pointer font-early text-[8px] lg:text-[12px] lg:px-20 lg:py-4"
          onClick={mint}
        >
          MINT NOW!
        </button>
        <NumberPicker
          className="mint-amount-input"
          defaultValue={1}
          value={mintAmount}
          onChange={(mintAmount) => setMintAmonut(mintAmount)}
          min={1}
        />
      </div>

      <div className="mintQty mt-5">
        <span className="text-[rgba(255,255,124,1)] text-[10px] font-early lg:text-[14px]">
          {totalSupply}
          <span className="font-upheaval text-[14px] lg:text-[18px] mr-[0.1rem]">
            /
          </span>
          2500 minted
        </span>
      </div>
      {isDiscordModalShowing ? 
        <div className="discord-modal-container flex items-center justify-center">
          <article className="discord-modal">
            <img src={inviteLetterImg} alt="Letter Graphic" className="invite-letter" />
            <button 
              className="discord-modal-close" 
              aria-label="Close Button" 
              onClick={() => setDiscordModalShowing(false)}
            >
              X
            </button>
            <h2 className="discord-modal-title font-upheaval">You're invited to the treehouse club!</h2>
            <p className="discord-modal-body font-upheaval">
              Owning one or more coin plants grants you access to the exclusive treehouse 
              club discord. Join now & verify your coin plant NFT.
            </p>
            <a 
              href="https://discord.gg/WF7e8MMH4x" 
              target="_blank" 
              rel="noreferrer noopener" 
              className="discord-modal-cta font-early"
            >
              Accept Invite
            </a>
          </article>
        </div>
        : null
      }
    </div>
  );
};

export default Mint;
