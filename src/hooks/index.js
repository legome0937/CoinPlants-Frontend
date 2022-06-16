import { ethers } from "ethers";
import { Contract } from "@ethersproject/contracts";
import { useCall, useContractFunction } from "@usedapp/core";

import CoinPlantNurseryContractABI from "../ABI/CoinPlantNursery.json";
import PollenContractABI from "../ABI/Pollen.json";
import {
  PollenContractAddress,
  CoinPlantNurseryContractAddress,
} from "../contracts";

// Staking Contract
const CoinPlantNurseryContractInterface = new ethers.utils.Interface(
  CoinPlantNurseryContractABI
);
const CoinPlantNurseryContract = new Contract(
  CoinPlantNurseryContractAddress,
  CoinPlantNurseryContractInterface
);

// Pollen Contract
const PollenContractInterface = new ethers.utils.Interface(PollenContractABI);
const PollenContract = new Contract(
  PollenContractAddress,
  PollenContractInterface
);

// Get spendable pollen tokens from staking contract
export const useGetSpendable = (address) => {
  const { value, error } =
    useCall(
      CoinPlantNurseryContractAddress && {
        contract: CoinPlantNurseryContract,
        method: "getSpendable",
        args: [address],
      }
    ) ?? {};
  if (error) {
    console.error("error.message");
    return undefined;
  }
  let amount = value?.[0] === undefined ? 0 : value?.[0];
  let spendableAmount = ethers.utils.formatUnits(amount, 0);
  return { spendableAmount };
};

// Get pollen balance in users wallet
export const useBalanceOf = (address) => {
  const { value, error } =
    useCall(
      PollenContractAddress && {
        contract: PollenContract,
        method: "balanceOf",
        args: [address],
      }
    ) ?? {};
  if (error) {
    console.error("error.message");
    return undefined;
  }

  let amount = value?.[0] === undefined ? 0 : value?.[0];
  let balanceAmount = ethers.utils.formatEther(amount) / 1;
  return { balanceAmount };
};

// Get all owned NFTs from staking contract
export const useGetAllOwned = (address) => {
  const { value, error } =
    useCall(
      CoinPlantNurseryContractAddress && {
        contract: CoinPlantNurseryContract,
        method: "getAllOwned",
        args: [address],
      }
    ) ?? {};
  if (error) {
    console.error("error.message");
    return undefined;
  }
  let stakedNftIds = value?.[0] === undefined ? [] : value?.[0];
  return stakedNftIds;
};
