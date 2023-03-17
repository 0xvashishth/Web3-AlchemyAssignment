const axios = require('axios');

// copy-paste your URL provided in your Alchemy.com dashboard
const ALCHEMY_URL = "Alchemy URL";

axios.post(ALCHEMY_URL, {
  jsonrpc: "2.0",
  id: 1,
  method: "eth_getBalance",
  params: [
    "0xa62d5D83B71419626FE359C2a6b39cC975C9706d", // block 46147
    // "latest"
    // "0x1d610a5" // retrieve the full transaction object in transactions array
  ]
}).then((response) => {
  console.log(response.data.result);
});
