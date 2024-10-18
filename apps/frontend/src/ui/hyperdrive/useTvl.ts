import { appConfig } from "@delvtech/hyperdrive-appconfig";
import { QueryStatus, useQuery } from "@tanstack/react-query";
import { getReadHyperdrive } from "src/sdk/getReadHyperdrive";
import { Address } from "viem";
import { usePublicClient } from "wagmi";

export function useTvl({
  chainId,
  hyperdriveAddress,
}: {
  chainId: number;
  hyperdriveAddress: Address;
}): {
  tvl: bigint | undefined;
  tvlStatus: QueryStatus;
} {
  const publicClient = usePublicClient({ chainId });
  const queryEnabled = !!publicClient;

  const { data, status } = useQuery({
    queryKey: ["tvl", { chainId, hyperdriveAddress }],
    queryFn: queryEnabled
      ? async () => {
          const readHyperdrive = await getReadHyperdrive({
            hyperdriveAddress,
            publicClient,
            appConfig,
          });
          return readHyperdrive.getPresentValue();
        }
      : undefined,
    enabled: queryEnabled,
  });

  return {
    tvl: data,
    tvlStatus: status,
  };
}
