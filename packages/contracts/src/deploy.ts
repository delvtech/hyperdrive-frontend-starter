import hre from "hardhat";
import { WalletClient } from "viem";
import { HelloWorldContract } from "src/types";
import { DeployContractConfig } from "@nomicfoundation/hardhat-viem/types";
export async function deployContracts(wallet?: WalletClient): Promise<{
  helloWorld: HelloWorldContract;
  owner: WalletClient;
}> {
  const [owner] = await hre.viem.getWalletClients();
  console.log("Deploying Contracts...");

  // Get the deploy config.  If a wallet is provided, use it.  Otherwise,
  // we'll pass undefined for the client, which will use the default signer.
  const deployConfig: DeployContractConfig | undefined = wallet
    ? ({ client: { wallet: wallet as WalletClient } } as DeployContractConfig)
    : undefined;

  // Deploy the TokenURI contract and get the contract instance.
  console.log("Deploying HelloWorld...");
  const helloWorld = (await hre.viem.deployContract(
    "HelloWorld",
    [],
    deployConfig
  )) as unknown as HelloWorldContract;

  return {
    owner,
    helloWorld,
  };
}
