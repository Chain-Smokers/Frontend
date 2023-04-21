import ElectoralContract from "./resources/contracts/ElectoralContract.json";
import Web3 from "web3";

const url = process.env.REACT_APP_HOST_ADDRESS;

export const web3 = new Web3(url);

export const contract = new web3.eth.Contract(
  ElectoralContract.abi,
  process.env.REACT_APP_CONTRACT_ADDRESS
);
