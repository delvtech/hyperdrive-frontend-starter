import { QueryStatus, useQuery } from "@tanstack/react-query";
import { useReadHyperdrive } from "src/ui/hyperdrive/useReadHyperdrive";
import { Address } from "viem";

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
  const readHyperdrive = useReadHyperdrive({
    chainId,
    address: hyperdriveAddress,
  });
  const queryEnabled = !!readHyperdrive;
  const { data, status } = useQuery({
    queryKey: ["tvl", { chainId, hyperdriveAddress }],
    queryFn: queryEnabled ? () => readHyperdrive.getPresentValue() : undefined,
    enabled: queryEnabled,
  });

  return {
    tvl: data,
    tvlStatus: status,
  };
}
