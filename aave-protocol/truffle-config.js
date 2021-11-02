// module.exports = {
//   networks: {
//     development: {
//       host: "localhost",
//       port: 8545,
//       network_id: "*",
//       gas: 12000000,
//     },
//   },
//   compilers: {
//     solc: {
//       version: "0.5.14",
//       settings: {
//         optimizer: {
//           enabled: true,
//           runs: 200,
//         },
//         evmVersion: 'istanbul',
//         metadata: {
//           useLiteralContent: true,
//         },
//       },
//     },
//   },
// };

module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "*"
    }
  }
};
