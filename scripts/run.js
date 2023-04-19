const hre = require("hardhat");

async function main() {
    const HoroscopeNFT = await hre.ethers.getContractFactory("HoroscopeNFT");
    const HRSP = await HoroscopeNFT.deploy();

    await HRSP.deployed();

    console.log("Your Horoscope NFT is deploy to address -", HRSP.address);
}

main().then(() => process.exit(0)).catch((error) => {
    console.log(error);
    process.exit(1);
});