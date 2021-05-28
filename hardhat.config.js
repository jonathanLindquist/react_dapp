require("@nomiclabs/hardhat-waffle");
require("dotenv").config();

module.exports = {
	defaultNetwork: "hardhat",
	solidity: "0.8.3",
	paths: {
		artifacts: "./src/artifacts",
	},
	networks: {
		hardhat: {
			// chainId: 1337,
		},
		ropsten: {
			url: "https://ropsten.infura.io/v3/3c268f7b779f4cd7827a22d429797dba",
			accounts: [`0x${process.env.GREETING_PK}`],
		},
	},
};
