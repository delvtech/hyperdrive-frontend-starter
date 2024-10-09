import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox-viem";
import "@nomicfoundation/hardhat-viem";
import "@nomicfoundation/hardhat-ethers";
import "tsconfig-paths/register";

import { config as dotEnvConfig } from "dotenv";

dotEnvConfig({ path: __dirname + "/.env" });

const config: HardhatUserConfig = {
  solidity: {
    compilers: [
      {
        version: "0.8.22",
        settings: {
          optimizer: {
            enabled: process.env.HARDHAT_OPTIMIZER_ENABLED === "true",
            runs: 200,
          },
        },
      },
    ],
  },
  networks: {
    fork: {
      url: `https://eth-mainnet.g.alchemy.com/v2/${process.env.ALCHEMY_API_KEY}`,
    },
    hardhat: {
      forking: {
        url: `https://eth-mainnet.g.alchemy.com/v2/${process.env.ALCHEMY_API_KEY}`,
        enabled: true,
      },
    },
  },
};

export default config;
