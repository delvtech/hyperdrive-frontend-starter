import { loadFixture } from "@nomicfoundation/hardhat-toolbox-viem/network-helpers";
import { expect } from "chai";
import { helloWorldFixture } from "test/fixture";

describe("HelloWorld", function () {
  // We define a fixture to reuse the same setup in every test.
  // We use loadFixture to run this setup once, snapshot that state,
  // and reset Hardhat Network to that snapshot in every test.
  describe("sayHello", function () {
    it("Should say 'Hello, World!'", async function () {
      const { helloWorld} = await loadFixture(helloWorldFixture);
      const result = await helloWorld.read.sayHello();

      expect(result).to.equal("Hello, World!");
    });
  });
});
