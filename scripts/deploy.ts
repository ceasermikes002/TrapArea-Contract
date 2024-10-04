import { ethers } from "hardhat";

async function main() {
    const [deployer] = await ethers.getSigners();

    console.log("Deploying contract with the account:", deployer.address);

    const TrapeziumArea = await ethers.getContractFactory("TrapeziumArea");
    const trapeziumArea = await TrapeziumArea.deploy();

    await trapeziumArea.waitForDeployment();

    console.log("TrapeziumArea contract deployed at:", trapeziumArea.target);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
