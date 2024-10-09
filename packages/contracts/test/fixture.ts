import { helloWorldABI } from "src/generated/abis";
import {
  PublicClient,
  WalletClient,
} from "@nomicfoundation/hardhat-viem/types";
import { getContract, parseEther } from "viem";
import hre from "hardhat";
import { HelloWorldContract } from "src/types";

interface FixtureReturnValue {
  helloWorld: HelloWorldContract;
  getHelloWorldContract: (
    walletClient: WalletClient
  ) => Promise<HelloWorldContract>;
  owner: WalletClient;
  signers: WalletClient[];
  publicClient: PublicClient;
}

export async function helloWorldFixture(): Promise<FixtureReturnValue> {
  const signers: WalletClient[] = await hre.viem.getWalletClients();
  const [owner] = signers;
  const publicClient = await hre.viem.getPublicClient();

  // First, deploy the HelloWorld contract.
  const { address: helloWorldAddress } = await hre.viem.deployContract(
    "HelloWorld",
    []
  );

  // Gets the contract instance connected to the walletClient. Useful in tests
  // that need multiple signers to interact with the contracts.
  async function getHelloWorldContract(walletClient: WalletClient) {
    return getContract({
      address: helloWorldAddress,
      abi: helloWorldABI,
      client: { public: publicClient, wallet: walletClient },
    });
  }

  const helloWorld = await getHelloWorldContract(owner);

  return {
    helloWorld,
    getHelloWorldContract,
    owner,
    signers,
    publicClient,
  };
}
