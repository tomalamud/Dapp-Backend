const { ethers } = require("hardhat");

const deploy = async () => {
    const [deployer] = await ethers.getSigners();

    console.log("Deploying from account: ", deployer.address)

    const PlatziPunks = await ethers.getContractFactory("PlatziPunks");
    const deployed = await PlatziPunks.deploy(10000);

    console.log("deployed contract: ", deployed.address);
}

deploy()
    .then(() => process.exit(0))
    .catch((err) => {
        console.log(err);
        process.exit(1);
    })