import React from "react";
import { useMoralisWeb3Api } from "react-moralis";
import { useState, useEffect } from "react";

export const useNFT = () => {
  const Web3Api = useMoralisWeb3Api();

  const [nfts, setNfts] = useState([]);

  useEffect(() => {
    console.log("moralis");
    const fetchNFTsForContract = async () => {
      const options = {
        chain: "polygon",
        address: "0x75e3e9c92162e62000425c98769965a76c2e387a",
        token_address: "0x2953399124F0cBB46d2CbACD8A89cF0599974963",
      };
      const polygonNFTs = await Web3Api.account.getNFTsForContract(options);
      console.log("polygon", polygonNFTs);
    };

    fetchNFTsForContract();
  }, []);
};
