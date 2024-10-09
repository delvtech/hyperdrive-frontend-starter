import { parseFixed } from "@delvtech/fixed-point-wasm";
import { isMainnetChain } from "@delvtech/hyperdrive-appconfig";
import { useQuery } from "@tanstack/react-query";
import { ETH_MAGIC_NUMBER } from "src/base/constants";
import { Address } from "viem";
import { base, gnosis, linea, mainnet } from "wagmi/chains";

export function useTokenFiatPrice({
  tokenAddress,
  chainId,
}: {
  tokenAddress: Address | undefined;
  chainId: number;
}): {
  fiatPrice: bigint | undefined;
} {
  const queryEnabled = isMainnetChain(chainId) && !!tokenAddress;

  const { data } = useQuery({
    queryKey: ["tokenFiatPrice", { chainId, tokenAddress }],
    enabled: queryEnabled,
    queryFn: queryEnabled
      ? async () =>
          getTokenFiatPrice({
            tokenAddress,
            chainId,
          })
      : undefined,
  });
  return { fiatPrice: data };
}

async function getTokenFiatPrice({
  tokenAddress,
  chainId,
}: {
  tokenAddress: string;
  chainId: number;
}): Promise<bigint | undefined> {
  // Always use mainnet ETH as the reference for native ETH price, regardless of
  // the chain.
  let defiLlamaTokenId = `${defiLlamaChainNameIdentifier[chainId]}:${tokenAddress}`;
  if (tokenAddress === ETH_MAGIC_NUMBER) {
    defiLlamaTokenId = `ethereum:${ETH_MAGIC_NUMBER}`;
  }

  const response = await fetch(
    `https://coins.llama.fi/prices/current/${defiLlamaTokenId}`,
  );
  const data = await response.json();
  const { price } = data.coins[defiLlamaTokenId];

  // returns an 18-decimal fiat value
  return parseFixed(price).bigint;
}

// NOTE: DefiLlama chain name identifier must be lower case.
const defiLlamaChainNameIdentifier: Record<number, string> = {
  [mainnet.id]: "ethereum",
  [gnosis.id]: "gnosis",
  [linea.id]: "linea",
  [base.id]: "base",
};
