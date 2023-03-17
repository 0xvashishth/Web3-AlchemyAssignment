async function main() {

  // Creating the wallet
  const provider = new ethers.providers.JsonRpcProvider(process.env.GOERLI_URL);
  let privateKey = process.env.PRIVATE_KEY;
  let wallet = new ethers.Wallet(privateKey, provider);

  const winnerAbi = [{ "inputs": [{ "internalType": "address", "name": "cont", "type": "address" }], "name": "winAttempt", "outputs": [], "stateMutability": "nonpayable", "type": "function" }]

  // Create the contract
  const winnerAddress = "0xd5A07197eB1fc60cE2eC2b3C996a257a2701A9a9";
  const winnerContract = new ethers.Contract(winnerAddress, winnerAbi, wallet);

  const contractAddress = "0xcF469d3BEB3Fc24cEe979eFf83BE33ed50988502";
  const res = await winnerContract.winAttempt(contractAddress)// // const tx = await winnerContract.functions.winAttempt(contractContractAddress);
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
});