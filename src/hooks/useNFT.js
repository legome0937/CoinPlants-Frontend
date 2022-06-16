import { useMoralisWeb3Api } from "react-moralis";
import { useState, useEffect } from "react";
import { BigNumber } from "ethers";

export const useNFT = () => {
  const Web3Api = useMoralisWeb3Api();

  const [nfts, setNfts] = useState([]);

  useEffect(() => {
    // Get all user NFTs from contract
    const fetchNFTsForContract = async () => {
      const options = {
        chain: "rinkeby",
        address: "0xc0d0688c4c4ef1d6bF58A51797a19E32aA7d7E6b",
        token_address: "0x349c16883746Fe80c0bAe92479635037263075EA",
      };
      const plantNFTs = await Web3Api.account.getNFTsForContract(options);
      setNfts(plantNFTs.result);
      console.log("plant", plantNFTs.result);
    };

    fetchNFTsForContract();
  }, []);

  return [nfts];
};

export const useCoinPlantsData = (stakedIds) => {
  let coinPlantsData = [];
  // const unstakedNFTs = useNFT();

  // unstakedNFTs.forEach((element) => {
  //   const nftItem = {
  //     id: element.id,
  //     name: "Coin Plant #34",
  //     img: "coinplant-34.png",
  //     staked: false,
  //   };

  //   coinPlantsData.push(nftItem);
  // });

  stakedIds.forEach((element) => {
    let one = element / BigNumber.from("1");
    const nftItem = {
      id: one,
      name: "Coin Plant #39",
      img: "coinplant-39.png",
      staked: true,
    };

    coinPlantsData.push(nftItem);
  });

  return coinPlantsData;
};
