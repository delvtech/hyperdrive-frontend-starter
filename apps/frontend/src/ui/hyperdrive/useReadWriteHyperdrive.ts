import { appConfig } from "@delvtech/hyperdrive-appconfig";
import { ReadWriteHyperdrive } from "@delvtech/hyperdrive-viem";
import { useQuery } from "@tanstack/react-query";
import { getReadWriteHyperdrive } from "src/sdk/getReadWriteHyperdrive";
import { Address } from "viem";
import { usePublicClient, useWalletClient } from "wagmi";

export function useReadWriteHyperdrive({
  address,
  chainId,
}: {
  address: Address | undefined;
  chainId: number;
}): ReadWriteHyperdrive | undefined {
  const publicClient = usePublicClient({ chainId });
  const { data: walletClient } = useWalletClient({ chainId });

  const enabled = !!address && !!publicClient && !!walletClient;

  const { data } = useQuery({
    queryKey: [
      "getReadWriteHyperdrive",
      {
        chainId,
        address,
      },
    ],
    enabled,
    queryFn: enabled
      ? () =>
          getReadWriteHyperdrive({
            hyperdriveAddress: address,
            publicClient,
            walletClient,
            appConfig,
          })
      : undefined,
  });

  return data;
}
