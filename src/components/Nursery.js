import React, { useState, useEffect } from "react";
import { useEthers } from "@usedapp/core";
import coinFront from "../assets/coin-front.png";
import CoinPlantItem from "./CoinPlantItem";
import { useSelector, useDispatch } from "react-redux";

import { useGetSpendable, useBalanceOf } from "../hooks";
import { useNFT } from "../hooks/useNFT";

import { useMoralisWeb3Api } from "react-moralis";

const coinPlantsStarterData = [
  {
    id: "34",
    name: "Coin Plant #34",
    img: "coinplant-34.png",
    staked: false,
  },
  {
    id: "39",
    name: "Coin Plant #39",
    img: "coinplant-39.png",
    staked: false,
  },
  {
    id: "41",
    name: "Coin Plant #41",
    img: "coinplant-41.png",
    staked: true,
  },
  {
    id: "46",
    name: "Coin Plant #46",
    img: "coinplant-46.png",
    staked: true,
  },
  {
    id: "36",
    name: "Coin Plant #36",
    img: "coinplant-36.png",
    staked: true,
  },
];

const Nursery = () => {
  const provider = useSelector((state) => state.user.provider);
  const address = useSelector((state) => state.user.userAddress);

  const [dailyYield, setDailyYield] = useState(10);
  const [availableFunds, setAvailableFunds] = useState([]);
  const [tokenWallet, setTokenWallet] = useState([]);
  // const { spendableAmount: availableFunds } = useGetSpendable(address);
  // const { balanceAmount: tokenWallet } = useBalanceOf(address);

  const [coinPlants, setCoinPlants] = useState([]);
  const [unstakedCoinPlants, setUnstakedCoinPlants] = useState([]);
  const [stakedCoinPlants, setStakedCoinPlants] = useState([]);
  const [unstakedSelected, setUnstakedSelected] = useState([]);
  const [stakedSelected, setStakedSelected] = useState([]);

  //let amountClaim = useOwnerOf();
  const { spendableAmount: availableFundsData } = useGetSpendable(address);
  const { balanceAmount: tokenWalletData } = useBalanceOf(address);

  // const Web3Api = useMoralisWeb3Api();
  // const fetchNativeBalance = async () => {
  //   console.log("sss");
  //   // get mainnet native balance for the current user
  //   const balance = await Web3Api.account.getNativeBalance();
  //   console.log(balance);
  //   // get BSC native balance for a given address
  //   const options = {
  //     chain: "bsc",
  //     address: "0x3d6c0e79a1239df0039ec16Cc80f7A343b6C530e",
  //     to_block: "1234",
  //   };
  //   const bscBalance = await Web3Api.account.getNativeBalance(options);
  //   console.log(bscBalance);
  // };

  useNFT();
  // useEffect(() => {
  //   console.log(tokenWallet, " _______");
  //   if (provider) {
  //     console.log(address);
  //   }
  // }, [availableFunds]);

  useEffect(() => {
    if (address) {
      // Change to get data from blockchain – replace starter data with blockchain data
      setCoinPlants(coinPlantsStarterData);
      // Also set values for token wallet, daily yield, and available funds here
      setDailyYield(10);
      setAvailableFunds(availableFundsData);
      setTokenWallet(tokenWalletData);

      console.log("Wallet Connected", availableFundsData);

      // fetchNativeBalance();
    } else {
      setCoinPlants([]);

      setDailyYield(0);
      setAvailableFunds(availableFundsData);
      setTokenWallet(tokenWalletData);
      console.log("Connect Wallet", availableFundsData);
    }
  }, [address]);

  // Update wallet token ballence & reward token ballence
  useEffect(() => {
    setAvailableFunds(availableFundsData);
    setTokenWallet(tokenWalletData);
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
          <button className="cta cta-nursery" disabled={availableFunds === 0}>
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
