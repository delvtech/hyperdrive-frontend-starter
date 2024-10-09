import { getDefaultConfig } from "@rainbow-me/rainbowkit";
import { http } from "wagmi";
import { mainnet, hardhat } from "wagmi/chains";

export const metadata = {
  name: "Hyperdrive",
  description: "Example Hyperdrive App",
  url: "https://hyperdrive.box",
};

export const wagmiConfig = getDefaultConfig({
  appName: "Hyperdrive",
  projectId: import.meta.env.VITE_WALLET_CONNECT_PROJECT_ID,
  chains: [mainnet, hardhat],
  transports: {
    [mainnet.id]: http(import.meta.env.VITE_MAINNET_RPC_URL),
    [hardhat.id]: http("http://127.0.0.1:8545"),
  },
});
