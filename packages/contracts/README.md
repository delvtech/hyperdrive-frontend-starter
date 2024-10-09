# Hyperdrive Example Contracts

This package contains smart contracts for interacting with the Hyperdrive protocol.

## Development

This package allows you to write smart contracts and deploy them to a local
hardhat node. Once deployed, the addresses and abis are available as imports in
any other apps and packages in the monorepo.

```shell
# Compile the smart contracts
yarn workspace @starter-repo/contracts run build:contracts

# Start the hardhat node
yarn workspace @starter-repo/contracts run start

# Deploy the contracts to the local hardhat node
yarn workspace @starter-repo/contracts run deploy:local

# Package up the abis and addresses for use in other apps and packages
yarn workspace @starter-repo/contracts run build:package
```

## Testing

Run the tests

```shell
yarn workspace @starter-repo/contracts run test
```