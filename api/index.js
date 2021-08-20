const StellarSDK = require("stellar-sdk")


const server = new StellarSDK.Server('https://horizon-testnet.stellar.org')

export { server };