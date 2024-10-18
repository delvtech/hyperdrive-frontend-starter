# Hyperdrive Starter Monorepo

This is a starter monorepo for building frontends or TypeScript packages that interact with the Hyperdrive protocol.

## Using this repo

Run the following command:

```sh
yarn
```

## Frontend Installation

Copy the `.env.sample` to `.env` and add your API keys.

Run the frontend locally:
```sh
yarn workspace hyperdrive-ui run dev
```

Build for production:
```sh
yarn workspace hyperdrive-ui run build 
```

## Core pacakge Installation
Build for production:
```sh
yarn workspace @starter-repo/core run build 
```

## What's inside?

This repo includes the following packages and apps:

### Apps and Packages

- `frontend`: a ViteJS app using React + DaisyUI + Tailwind + RainbowKit + TanStack Router
- `core`: An empty TypeScript package to use a starting point for a custom hyperdrive packages
- `eslint-config`: shared `eslint` configurations
- `prettier-config`: shared `prettier` configurations
- `tsconfig`: `tsconfig.json`s used throughout the monorepo

Each package and app is 100% [TypeScript](https://www.typescriptlang.org/).

### Useful resources
- Hyperdrive Solidity Starter repo: https://github.com/delvtech/hyperdrive-solidity-starter
- The official DELV Hyperdrive Monorepo: https://github.com/delvtech/hyperdrive-frontend
- Hyperdrive artifacts (Contract ABIs): https://www.npmjs.com/package/@delvtech/hyperdrive-artifacts
- The Hyperdrive AppConfig package: https://www.npmjs.com/package/@delvtech/hyperdrive-appconfig 
- Fixed Point Math library: https://www.npmjs.com/package/@delvtech/fixed-point-wasm
- Hyperdrive SDK Viem Bindings: https://www.npmjs.com/package/@delvtech/hyperdrive-viem
- Hyperdrive SDK: https://www.npmjs.com/package/@delvtech/hyperdrive-js-core