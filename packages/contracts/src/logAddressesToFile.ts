import { HelloWorldContract } from "src/types";
import { promises as fs } from "fs";
import path from "path";

export async function logAddressesToFile(
  helloWorld: HelloWorldContract,
  chainId: number
) {
  const addressFileContent = `
    export const HelloWorld = "${helloWorld.address}";
  `;

  const addressesFilePath = path.join(
    __dirname,
    "/../src/generated/",
    `${chainId}.addresses.ts`
  );
  await fs.writeFile(addressesFilePath, addressFileContent);

  console.log(`Addresses written to ${addressesFilePath}`);
}
