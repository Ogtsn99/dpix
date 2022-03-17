import { HardhatUserConfig, task } from "hardhat/config";
import "@nomiclabs/hardhat-waffle";
import "@nomiclabs/hardhat-ethers";
import "hardhat-deploy-ethers";
import "hardhat-deploy";
import "@symfoni/hardhat-react";
import "hardhat-typechain";
import "@typechain/ethers-v5";
import * as dotenv from "dotenv";

dotenv.config();

task("accounts", "Prints the list of accounts", async (args, hre) => {
  const accounts = await hre.ethers.getSigners();
  for (let i = 0; i < accounts.length; i++) {
    console.log("Account #%d: %s (%s ETH)", i, accounts[i].address, hre.ethers.utils.formatEther(await accounts[i].getBalance()));
  }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

console.log(process.env.ALCHEMY_API_KEY_MUMBAI);

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
const config: HardhatUserConfig = {
  react: {
    providerPriority: ["web3modal", "hardhat"],
  },
  networks: {
    hardhat: {
      inject: false, // optional. If true, it will EXPOSE your mnemonic in your frontend code. Then it would be available as an "in-page browser wallet" / signer which can sign without confirmation.
      accounts: [{privateKey: `${process.env.MAIN_ACCOUNT_PRIVATE_KEY}`, balance: "100000000000000000000000"},
        {privateKey: `${process.env.MAIN_ACCOUNT2_PRIVATE_KEY}`, balance: "100000000000000000000000"}
      ]
    },
    ropsten: {
      url: `https://eth-ropsten.alchemyapi.io/v2/${process.env.ALCHEMY_API_KEY}`,
      accounts: [`0x${process.env.ROPSTEN_PRIVATE_KEY}`]
    },
    rinkeby: {
      url: `https://eth-rinkeby.alchemyapi.io/v2/${process.env.ALCHEMY_API_KEY_RINKEBY}`,
      accounts: [`0x${process.env.RINKEBY_PRIVATE_KEY}`]
    },
    mumbai: {
      chainId: 80001,
      url: `https://polygon-mumbai.g.alchemy.com/v2/${process.env.ALCHEMY_API_KEY_MUMBAI}`,
      accounts: [`0x${process.env.MUMBAI_PRIVATE_KEY}`],
      gas: 2100000,
      gasPrice: 8000000000,
    }
  },
  solidity: {
    compilers: [
      {
        version: "0.8.0",
        settings: {
          optimizer: {
            enabled: true,
            runs: 50,
          },
        },
      },
    ],
  }
};

export default config;
