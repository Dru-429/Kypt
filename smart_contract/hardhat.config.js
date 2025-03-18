require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.0",
  networks: {
    educhain: {
      url: "https://rpc.open-campus-codex.gelato.digital/",
      accounts: [
        "f58fe5bb6ffa62b174bc05d9def16763ecbfb9c88ea147e6e94fd85eab2cdca5",
      ],
    },
  },
};
