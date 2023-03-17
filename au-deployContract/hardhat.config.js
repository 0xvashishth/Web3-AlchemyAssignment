require("@nomiclabs/hardhat-waffle");
// require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

module.exports = {
  solidity: "0.8.17",
  networks: {
    goerli: {
      url: process.env.ALCHEMY_TESTNET_RPC_URL,
      accounts: [process.env.TEST_PRIVATE_KEY]
    },
  }
};