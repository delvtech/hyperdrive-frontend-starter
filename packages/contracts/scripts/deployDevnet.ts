import { deployContracts } from "src/deploy";
import { logAddressesToFile } from "src/logAddressesToFile";

async function main() {
  const { owner, helloWorld } = await deployContracts();

  const chainId = await owner.getChainId();

  // Display the addresses.
  console.log("HelloWorld deployed at:", helloWorld.address);

  await logAddressesToFile(helloWorld, chainId);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });
