let Web3 = require("web3");
const path = require("path");
let solc = require("solc");

let fs = require("fs");

let web3 = new Web3("HTTP://127.0.0.1:7545");

const filePath = path.resolve(__dirname, "ownerManagment.sol");
let fileContent = fs.readFileSync(filePath, "UTF-8").toString();

let input = {
  language: "Solidity",
  sources: {
    "ownerManagment.sol": {
      content: fileContent,
    },
  },

  settings: {
    outputSelection: {
      "*": {
        "*": ["*"],
      },
    },
  },
};

let output = JSON.parse(solc.compile(JSON.stringify(input)));

let ABI = output.contracts["ownerManagment.sol"]["OwnerManagment"].abi;

let byteCode =
  output.contracts["ownerManagment.sol"]["OwnerManagment"].evm.bytecode.object;
console.log(ABI);

let contract = new web3.eth.Contract(ABI);

web3.eth.defaultAccount = web3.eth.coinbase;

module.exports = contract;
