require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config()

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  localhost: "hardhat",
  solidity: "0.8.17",
  networks:{
    goerli:{
      url:process.env.ALCHEMY_KEY,
      accounts:[process.env.PRIVATE_KEY],
    }
  },
  etherscan: {
    apiKey:process.env.ETHERSCA_API_KEY,
  }
};
