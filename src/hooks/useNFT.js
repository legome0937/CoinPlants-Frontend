import { useMoralisWeb3Api } from "react-moralis";
import { useState, useEffect } from "react";
import { BigNumber } from "ethers";

export const useNFT = (account) => {
  const Web3Api = useMoralisWeb3Api();

  const [nfts, setNfts] = useState([]);

  useEffect(() => {
    // Get all user NFTs from contract
    console.log("moralis repeat");
    const fetchNFTsForContract = async () => {
      const options = {
        chain: "rinkeby",
        address: account,
        token_address: "0x349c16883746Fe80c0bAe92479635037263075EA",
      };
      const plantNFTs = await Web3Api.account.getNFTsForContract(options);
      setNfts(plantNFTs.result);
      console.log("plant", plantNFTs.result);
    };

    account && fetchNFTsForContract();
  }, []);

  return nfts;
};

export const getCoinPlantsData = (stakedIds) => {
  let coinPlantsData = [];
  // const unstakedNFTs = useNFT();

  // unstakedNFTs.forEach((element) => {
  //   let nftId = element.token_id;
  //   const nftItem = {
  //     id: nftId,
  //     name: "Coin Plant #" + nftId,
  //     img:
  //       "https://ipfs.io/ipfs/QmSwL8qPPHsx8XN3sSjfo5tyd6kdxPmGjTCf6UJxrHXeZG/" +
  //       nftId +
  //       ".png",
  //     staked: false,
  //   };

  //   coinPlantsData.push(nftItem);
  // });

  stakedIds.forEach((element) => {
    let nftId = element / BigNumber.from("1") + "";
    const nftItem = {
      id: nftId,
      name: "Coin Plant #" + nftId,
      img:
        "https://ipfs.io/ipfs/QmSwL8qPPHsx8XN3sSjfo5tyd6kdxPmGjTCf6UJxrHXeZG/" +
        nftId +
        ".png",
      staked: true,
    };

    coinPlantsData.push(nftItem);
  });

  return coinPlantsData;
};
