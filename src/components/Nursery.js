import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { useEthers } from "@usedapp/core";
import coinFront from "../assets/coin-front.png";
import CoinPlantItem from "./CoinPlantItem";

import {
  useGetSpendable,
  useBalanceOf,
  useWithdraw,
  useStake,
  useUnstake,
  useGetAllOwned,
} from "../hooks";
import { getCoinPlantsData } from "../hooks/useNFT";

const Nursery = () => {
  const { account } = useEthers();

  const [dailyYield, setDailyYield] = useState(10);
  const [availableFunds, setAvailableFunds] = useState([0]);
  const [tokenWallet, setTokenWallet] = useState([]);

  const [coinPlants, setCoinPlants] = useState([]);
  const [unstakedCoinPlants, setUnstakedCoinPlants] = useState([]);
  const [stakedCoinPlants, setStakedCoinPlants] = useState([]);
  const [unstakedSelected, setUnstakedSelected] = useState([]);
  const [stakedSelected, setStakedSelected] = useState([]);

  const { spendableAmount: availableFundsData } = useGetSpendable();
  const { balanceAmount: tokenWalletData } = useBalanceOf();

  //const unstakedNFTs = useNFT();

  const stakedNftIds = useGetAllOwned();
  const coinPlantsData = getCoinPlantsData(stakedNftIds);

  //console.log(stakedNftIds);

  const { state: withDrawState, send: withDraw } = useWithdraw();

  const { state: stakeState, send: stake } = useStake();

  const { state: unstakeState, send: unstake } = useUnstake();

  const handleClaim = () => {
    account && withDraw();
  };
  const handleStake = () => {
    account && stake(unstakedCoinPlants);
  };
  const handleUnstake = () => {
    console.log(stakedCoinPlants);
    //account && unstake(unstakedSelected);
  };

  // const Web3Api = useMoralisWeb3Api();

  // const fetchNFTsForContract = async () => {
  //   const options = {
  //     chain: "rinkeby",
  //     address: account,
  //     token_address: "0x349c16883746Fe80c0bAe92479635037263075EA",
  //   };
  //   const plantNFTs = await Web3Api.account.getNFTsForContract(options);

  //   console.log("plant", plantNFTs.result);

  //   return plantNFTs.result;
  // };

  //Withdraw state
  useEffect(() => {
    withDrawState.status === "Exception" &&
      toast.error(withDrawState.errorMessage);

    withDrawState.status === "Success" && toast.info("Claim Success");
  }, [withDrawState]);

  useEffect(() => {
    console.log("here");
    if (account) {
      // Change to get data from blockchain – replace starter data with blockchain data

      // console.log("coinPlansData", coinPlantsData);
      console.log("stakedNftIds", stakedNftIds);
      setCoinPlants(coinPlantsData);
      // Also set values for token wallet, daily yield, and available funds here
      setDailyYield(10);
      setAvailableFunds(availableFundsData);
      setTokenWallet(tokenWalletData);

      //console.log("Wallet Connected", coinPlantsData);

      // fetchNativeBalance();
    } /*  else {
      // setCoinPlants([]);

      setDailyYield(0);
      setAvailableFunds(0);
      setTokenWallet(0);
    } */
  }, [stakedNftIds]);

  // Update wallet token ballence & reward token ballence
  useEffect(() => {
    if (account) {
      setAvailableFunds(availableFundsData);
      setTokenWallet(tokenWalletData);
    }
  }, [tokenWalletData, availableFundsData]);

  useEffect(() => {
    if (coinPlants) {
      // Coin plants are split into staked and unstaked based on placeholder object structure
      // Change this to suit new object structure
      // Object should have a staked key of some sort – the user selection depends on it
      const unstaked = coinPlants.filter(
        (coinPlant) => coinPlant.staked === false
      );
      const staked = coinPlants.filter(
        (cointPlant) => cointPlant.staked === true
      );

      setUnstakedCoinPlants(unstaked);
      setStakedCoinPlants(staked);
    }
  }, [coinPlants]);

  const handleCoinPlantItemSelection = (e) => {
    e.target.classList.toggle("selected-coin-plant-item");
    const staked = e.target.classList.contains("staked-cp");
    // Assuming ID of NFT object is a string
    // Change to Number(e.target.dataset.id) if its a number
    const id = e.target.dataset.id;
    // The staked/unstaked selected arrays store the ID's of the NFT's
    // This can be changed to any other data that needs to be stored
    if (staked) {
      const isSelected = stakedSelected.some((cpId) => cpId === id);
      if (isSelected) {
        const newSelected = stakedSelected.filter((cpId) => cpId !== id);
        setStakedSelected(newSelected);
      } else {
        setStakedSelected((prev) => [...prev, id]);
      }
    } else {
      const isSelected = unstakedSelected.some((cpId) => cpId === id);
      if (isSelected) {
        const newSelected = unstakedSelected.filter((cpId) => cpId !== id);
        setUnstakedSelected(newSelected);
      } else {
        setUnstakedSelected((prev) => [...prev, id]);
      }
    }
  };

  const mapCoinPlants = (arr) => {
    return arr.map((coinPlant) => (
      <CoinPlantItem
        key={coinPlant.id}
        coinPlant={coinPlant}
        handleSelection={handleCoinPlantItemSelection}
      />
    ));
  };

  const UnstakedCoinPlantsList = mapCoinPlants(unstakedCoinPlants);

  const StakedCoinPlantsList = mapCoinPlants(stakedCoinPlants);

  return (
    <section className="staking-section w-full nursery flex flex-col items-start justify-start">
      <h1>Your Nursery </h1>
      <section className="funds">
        <article className="funds-element">
          <img src={coinFront} alt="$POLLEN" className="funds-coin" />
          <div className="flex flex-col items-start justify-start">
            <h2 className="funds-heading">Token Wallet</h2>
            <p className="funds-amount">
              <span className="funds-value">{tokenWallet}</span>
              <span className="funds-dollar">$</span>
              Pollen
            </p>
          </div>
        </article>

        <article className="funds-element">
          <img src={coinFront} alt="$POLLEN" className="funds-coin" />
          <div className="flex flex-col items-start justify-start">
            <h2 className="funds-heading">Daily Yield</h2>
            <p className="funds-amount">
              <span className="funds-value">{dailyYield}</span>
              <span className="funds-dollar">$</span>
              Pollen
            </p>
          </div>
        </article>

        <article className="funds-element available-funds">
          <div className="flex items-center justify-start">
            <img src={coinFront} alt="$POLLEN" className="funds-coin" />
            <div className="flex flex-col items-start justify-start">
              <h2 className="funds-heading">Available Now</h2>
              <p className="funds-amount">
                <span className="funds-value">{availableFunds}</span>
                <span className="funds-dollar">$</span>
                Pollen
              </p>
            </div>
          </div>
          <button
            className="cta cta-nursery"
            disabled={availableFunds === 0}
            onClick={(e) => handleClaim()}
          >
            Claim
          </button>
        </article>
      </section>

      <section className="nursery-coin-plants">
        <section className="nursery-staking-section flex flex-col items-start justify-start">
          <div className="nursery-staking-header">
            <h2 className="nursery-staking-heading">Unstaked Coin Plants</h2>
            <button
              className="cta cta-nursery"
              disabled={unstakedSelected.length === 0}
              onClick={(e) => handleStake()}
            >
              Stake Selected
            </button>
          </div>
          <div className="coin-plant-items">{UnstakedCoinPlantsList}</div>
        </section>

        <section className="nursery-staking-section flex flex-col items-start justify-start">
          <div className="nursery-staking-header">
            <h2 className="nursery-staking-heading">Staked Coin Plants</h2>
            <button
              className="cta cta-nursery"
              disabled={stakedSelected.length === 0}
              onClick={(e) => handleUnstake()}
            >
              Unstake Selected
            </button>
          </div>
          <div className="coin-plant-items">{StakedCoinPlantsList}</div>
        </section>
      </section>
    </section>
  );
};

export default Nursery;
