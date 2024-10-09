import { ConnectButton } from "@rainbow-me/rainbowkit";
import { hardhatAddresses } from "@starter-repo/contracts";
import {
  findBaseToken,
  mainnetAppConfig,
} from "@delvtech/hyperdrive-appconfig";
import { useTvl } from "src/ui/hyperdrive/useTvl";
import { fixed } from "@delvtech/fixed-point-wasm";
import { useTokenFiatPrice } from "src/ui/tokens/useTokenFiatPrice";

export function HomeView() {
  // AppConfig provides a strongly-typed object containing all static hyperdrive
  // data, including token names, decimals, icons, and the list of hyperdrives.
  const { hyperdrives } = mainnetAppConfig;

  // For example, you can use AppConfig to extract the unique chains
  const uniqueChains = new Set(
    hyperdrives.map(
      (hyperdrive) => mainnetAppConfig.chains[hyperdrive.chainId].name,
    ),
  );

  // Use selectors from the appConfig package to easily retrieve the base token
  // for any hyperdrive.
  const baseToken = findBaseToken({
    appConfig: mainnetAppConfig,
    hyperdriveAddress: hyperdrives[0].address,
    hyperdriveChainId: hyperdrives[0].chainId,
  });

  // To access real-time information on a hyperdrive instance, you can use
  // custom useQuery hooks to call Hyperdrive SDK methods
  const { tvl } = useTvl({
    hyperdriveAddress: hyperdrives[0].address,
    chainId: hyperdrives[0].chainId,
  });

  // Use useTokenFiatPrice hook to get the fiat price of the base token
  const { fiatPrice } = useTokenFiatPrice({
    tokenAddress: baseToken.address,
    chainId: baseToken.chainId,
  });

  // the @delvtech/fixed-point-wasm package provides a convenient way to do math
  // and format bigints
  const formattedTvl = tvl
    ? fixed(tvl).format({
        decimals: baseToken.places,
      })
    : "-";

  const formattedTvlFiat =
    tvl && fiatPrice ? fixed(tvl).mul(fiatPrice).formatCurrency() : "-";

  return (
    <div className="flex w-full min-h-[100vh] bg-gradient-to-r from-blue-200 to-cyan-200 flex-col">
      <div className="daisy-navbar bg-gradient-to-r from-blue-200 to-cyan-200 ">
        <div className="flex-1">
          <img src="/hyperdrive-wordmark.svg" />
        </div>
        <div className="flex-none">
          <ConnectButton />
        </div>
      </div>
      <div className="w-full flex-col mt-40 flex gap-12 items-center text-xl">
        <h1 className="text-5xl font-bold">Hyperdrive Example App</h1>
        <div className="flex flex-col gap-2 daisy-card">
          <div>
            There are{" "}
            <span className="text-2xl font-bold">{hyperdrives.length}</span>{" "}
            hyperdrive pools deployed across{" "}
            <span className="text-2xl font-bold">{uniqueChains.size}</span>{" "}
            different chains, including{" "}
            <span className="text-2xl font-bold">
              {Array.from(uniqueChains).join(", ")}
            </span>
            .
          </div>
          <div>
            The first pool is:{" "}
            <span className="text-2xl font-bold">{hyperdrives[0].name}</span>,
            which lives on{" "}
            <span className="text-2xl font-bold">
              {mainnetAppConfig.chains[hyperdrives[0].chainId].name}
            </span>
            .
          </div>
          <div className="flex gap-2">
            It currently holds{" "}
            <span className="text-2xl flex items-center gap-1 font-bold">
              <img
                src={baseToken.iconUrl}
                className="w-6 rounded-full inline"
              />{" "}
              {formattedTvl} {baseToken.symbol} ({formattedTvlFiat})
            </span>{" "}
            worth of assets.
          </div>
          <div className="text-center mt-8 space-y-8">
            This is just some of what's available to you via the{" "}
            <span className="font-bold">Hyperdrive SDK</span> and the{" "}
            <span className="font-bold">Hyperdrive AppConfig</span> packages.
            <div>We're excited to see what you build! 🎉</div>
          </div>
        </div>
        <div className="text-gray-600 text-sm">
          Building a smart contract? The <span>HelloWorld</span> contract found
          in this repo was deployed to Hardhat @{" "}
          <span className="font-bold">{hardhatAddresses.HelloWorld}</span> and
          can be called using standard Wagmi hooks.
        </div>
      </div>
    </div>
  );
}
