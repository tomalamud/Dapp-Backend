require("@nomiclabs/hardhat-waffle");
require('dotenv').config()

const privateKey = process.env.DEPLOYER_SIGNER_PRIVATE_KEY;
const projectId = process.env.INFURA_PROJECT_ID;

module.exports = {
  solidity: "0.8.4",
  networks: {
    rinkeby: {
      url: 'https://rinkeby.infura.io/v3/' + projectId,
      accounts: [privateKey]
    }
  }
};
