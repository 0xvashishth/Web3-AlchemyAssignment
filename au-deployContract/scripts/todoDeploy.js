const ethers = require('ethers');
require('dotenv').config();
const hre = require("hardhat");

async function main() {

  const url = process.env.ALCHEMY_TESTNET_RPC_URL;

  let artifacts = await hre.artifacts.readArtifact("TodoList");

  const provider = new ethers.providers.JsonRpcProvider(url);

  let privateKey = process.env.TEST_PRIVATE_KEY;

  let wallet = new ethers.Wallet(privateKey, provider);

  let factory = new ethers.ContractFactory(artifacts.abi, artifacts.bytecode, wallet);

  let todo = await factory.deploy();
    
  console.log("TodoList address:", todo.address);

  await todo.deployed();
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
});