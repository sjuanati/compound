require("dotenv").config();
const HDWalletProvider = require("@truffle/hdwallet-provider");
const INFURA_APP_KEY = process.env.INFURA_APP_KEY;
const PRIVATE_KEY = process.env.PRIVATE_KEY;
const ETHERSCAN_KEY = process.env.ETHERSCAN_KEY;

module.exports = {

  networks: {
    development: {
      host: "127.0.0.1",     // Localhost (default: none)
      port: 7545,            // Standard Ethereum port (default: none)
      network_id: "5777",    // Any network (default: none)
    },
    ropsten: {
      provider: () => new HDWalletProvider(PRIVATE_KEY, `https://ropsten.infura.io/v3/${INFURA_APP_KEY}`),
      network_id: 3, 
      gas: 5500000,
      confirmations: 0,
      timeoutBlocks: 200,
      skipDryRun: false,
    },
  },

  // Contract verification
  plugins: [
    'truffle-plugin-verify'
  ],
  api_keys: {
    etherscan: ETHERSCAN_KEY
  },

  // Configure your compilers
  compilers: {
    solc: {
      version: "0.7.3",    // Fetch exact version from solc-bin (default: truffle's version)
      // docker: true,        // Use "0.5.1" you've installed locally with docker (default: false)
      settings: {          // See the solidity docs for advice about optimization and evmVersion
        optimizer: {
          enabled: true,
          runs: 200
        },
        evmVersion: "byzantium"
      }
    }
  }
};
