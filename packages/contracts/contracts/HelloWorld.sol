// SPDX-License-Identifier: Apache-2.0
pragma solidity ^0.8.22;

contract HelloWorld {
    function sayHello() external pure returns (string memory) {
        return "Hello, World!";
    }
}