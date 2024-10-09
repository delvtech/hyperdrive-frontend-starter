import "@rainbow-me/rainbowkit/styles.css";

import "src/ui/index.css";

import { QueryClientProvider } from "@tanstack/react-query";
import React from "react";
import ReactDOM from "react-dom/client";
import { queryClient } from "src/network/queryClient";
import { WagmiProvider } from "wagmi";
import { wagmiConfig } from "src/network/wagmi";
import { RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { App } from "src/ui/App";

import * as fixedPoint from "@delvtech/fixed-point-wasm";
fixedPoint.initSync(fixedPoint.wasmBuffer);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <WagmiProvider config={wagmiConfig}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider>
          <App />
        </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  </React.StrictMode>,
);
