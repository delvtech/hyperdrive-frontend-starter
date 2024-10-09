import { defineConfig } from "@wagmi/cli";
import { hardhat } from "@wagmi/cli/plugins";

export default defineConfig({
  out: "src/generated/abis.ts",
  plugins: [hardhat({ project: "./" })],
});
