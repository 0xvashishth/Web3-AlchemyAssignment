# Smart Contract Winner
Week 4 Alchemy University exercise involving the creation and deployment of contracts in hardhat.

## Instructions
### Ready to be a winner?
You'll need to prove your smart contract skills to us. Don't worry, you totally got this! 

 Your Goal: Emit the Winner event
Your goal is simple! Emit the winner event on this smart contract on the Goerli testnet: https://goerli.etherscan.io/address/0xcF469d3BEB3Fc24cEe979eFf83BE33ed50988502#code

If you take a look at the Code tab in Etherscan, you'll see that the source code for this contract looks like this:

```solidity
// SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

contract Contract {
    event Winner(address);

    function attempt() external {
        require(msg.sender != tx.origin, "msg.sender is equal to tx.origin");
        emit Winner(msg.sender);
    }
}
```
How do we possibly make it so the tx.origin (the EOA who originated the transaction) is not equal to the msg.sender? 

## Creating the project
Create a Node project:
        
    npm init -y

Install dependencies:

    npm install --save-dev hardhat
    npm install @nomiclabs/hardhat-waffle ethereum-waffle chai @nomiclabs/hardhat-ethers ethers dotenv

Create a Hardhat empty project

    npx hardhat
    > Create an empty hardhat.config.js

Create contract, test and .env files

    touch .env
    mkdir contracts
    touch contracts/Winner.sol
    mkdir test
    touch test/winner.test.js

## Deploy the project
    
    npx hardhat run scripts/deploy.js

Result: "Winner address: 0xd5A07197eB1fc60cE2eC2b3C996a257a2701A9a9"

## Create the winner event

    npx hardhat run scripts/createEvent.js

## Final result: 
Transaction: [0xb1622774814b26cb16f65db52acde1c5cf3a58660994e692585d46e4d033c325](
https://goerli.etherscan.io/tx/0xb1622774814b26cb16f65db52acde1c5cf3a58660994e692585d46e4d033c325)
