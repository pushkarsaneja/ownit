
require("dotenv").config();
require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-ethers");

const fs = require("fs");
const ALCHEMY_KEY = "https://eth-goerli.g.alchemy.com/v2/CfvJ_9i-PfVoKFogX9oSeKOJtUZWu9cJ";
const PRIVATE_KEY = "0dff8a1fae546213c2e79dac28c115c630a68d1960907cfe5be56517fb18fc5a";



task("accounts","Prints the list of acounts", async (taskArgs,hre)=>{
  try {
    const accounts = await hre.ethers.getSigners();
  
    for(const account of accounts){
      console.log(account.address);
    }
    
  } catch (error) {
    console.log(error)
  }
});

module.exports = {
  defaultNetwork:"goerli",
  networks:{
    hardhat:{},
    goerli:{
      url:ALCHEMY_KEY,
      accounts: [`0x${PRIVATE_KEY}`],
    }
  },
  solidity:{
    version:"0.8.4",
    settings:{
      optimizer:{
        enabled:true,
        runs:200
      }
    }
  }
}