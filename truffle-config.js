// const HDWalletProvider = require('truffle-hdwallet-provider');

// const mnemonic = 'behind ceiling file east true top pioneer honey media can plate able'

module.exports = {
  networks: {
    development: {      
      host: 'localhost',
      port: 7545,
      network_id: '*',
      gas: 5000000
    }
    // ropsten: {
    //   provider: () => new HDWalletProvider(mnemonic, "https://ropsten.infura.io/v3/5a6e9eae38d24e889a675a5464e87df8"),
    //   network_id: 3
    // },
    // rinkeby: {
    //   provider: () => new HDWalletProvider(mnemonic, "https://rinkeby.infura.io/v3/5a6e9eae38d24e889a675a5464e87df8"),
    //   network_id: 4
    // }
  }
}