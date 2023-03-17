const { expect } = require("chai");

describe("TestWinnerContract", function () {
  it("should emit the winner event", async function () {
    const Winner = await ethers.getContractFactory("Winner");
    const Contract = await ethers.getContractFactory("Contract");
    const [owner, addr1, addr2] = await ethers.getSigners();

    // we then use the ContractFactory object to deploy an instance of the contract
    const winnerContract = await Winner.deploy();
    const contractContract = await Contract.deploy();

    // wait for contract to be deployed and validated!
    await Promise.all([winnerContract, contractContract].map(c => c.deployed()));
    expect(contractContract.filters.Winner().address).equal(contractContract.address);

    // make the atempt and verify that a winner event with the winnerContract address was emited
    await expect(await winnerContract.winAttempt(contractContract.address)).to.emit(contractContract, "Winner").withArgs(winnerContract.address);
  });
});