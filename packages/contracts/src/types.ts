import { helloWorldABI } from "src/generated/abis";
import { GetContractReturnType } from "@nomicfoundation/hardhat-viem/types";

export type HelloWorldContract = GetContractReturnType<typeof helloWorldABI>;
