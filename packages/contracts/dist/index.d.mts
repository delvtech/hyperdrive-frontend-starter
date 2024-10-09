declare const helloWorldABI: readonly [{
    readonly stateMutability: "pure";
    readonly type: "function";
    readonly inputs: readonly [];
    readonly name: "sayHello";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "string";
        readonly type: "string";
    }];
}];

declare const HelloWorld = "0x3ca5269b5c54d4c807ca0df7eeb2cb7a5327e77d";

declare const _31337_addresses_HelloWorld: typeof HelloWorld;
declare namespace _31337_addresses {
  export { _31337_addresses_HelloWorld as HelloWorld };
}

export { _31337_addresses as hardhatAddresses, helloWorldABI };
