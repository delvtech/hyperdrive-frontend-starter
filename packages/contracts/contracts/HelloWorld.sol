// SPDX-License-Identifier: Apache-2.0
pragma solidity ^0.8.22;

// NOTE: Example contract that uses long or short:
// https://hyperdrive.box/build

contract HelloWorld {
    function sayHello() external pure returns (string memory) {
        return "Hello, World!";
    }
}