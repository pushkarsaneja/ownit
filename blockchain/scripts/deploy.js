const {ethers} = require("hardhat");
const hre =  require("hardhat");

const fs = require("fs");

async function main(){
  const [deployer] = await ethers.getSigners();
  const balance = await deployer.getBalance();
  const OwnerNFT = await hre.ethers.getContractFactory("OwnerNFT");
  const ownerNFT = await OwnerNFT.deploy();

  await ownerNFT.deployed();

  const data = {
    address:ownerNFT.address,
    abi: JSON.parse(ownerNFT.interface.format('json'))
  }

  fs.writeFileSync('../frontend/src/OwnerNFT.json',JSON.stringify(data));
}

main().then(()=>process.exit(0))
.catch((err)=>{
  console.error(err);
  process.exit(1);
});