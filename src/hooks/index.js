import { ethers } from "ethers";
import { Contract } from "@ethersproject/contracts";
import { useCall, useEthers, useContractFunction } from "@usedapp/core";

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
export const useGetSpendable = () => {
  const { account } = useEthers();
  const { value, error } =
    useCall(
      account && {
        contract: CoinPlantNurseryContract,
        method: "getSpendable",
        args: [account],
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
export const useBalanceOf = () => {
  const { account } = useEthers();
  const { value, error } =
    useCall(
      account &&
        PollenContractAddress && {
          contract: PollenContract,
          method: "balanceOf",
          args: [account],
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

// Withdraw pollen from staking contract
export const useWithdraw = () => {
  const { state, send, event } = useContractFunction(
    CoinPlantNurseryContract,
    "withdraw",
    {}
  );
  return { state, send, event };
};
// Withdraw pollen from staking contract
export const useStake = (stakedItems) => {
  const { state, send, event } = useContractFunction(
    CoinPlantNurseryContract,
    "stake",
    {}
  );
  return { state, send, event };
};
// Withdraw pollen from staking contract
export const useUnstake = (unstakedItems) => {
  const { state, send, event } = useContractFunction(
    CoinPlantNurseryContract,
    "unstake",
    {}
  );
  return { state, send, event };
};

// Get all owned NFTs from staking contract
export const useGetAllOwned = (account) => {
  const { value, error } =
    useCall(
      account && {
        contract: CoinPlantNurseryContract,
        method: "getAllOwned",
        args: [account],
      }
    ) ?? {};
  // if (error) {
  //   console.error("error.message");
  //   return undefined;
  // }
  return value?.[0];
};
