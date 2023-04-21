const hre = require("hardhat");

async function main() {
    const HoroscopeNFT = await hre.ethers.getContractFactory("HoroscopeNFT");
    const HRSP = await HoroscopeNFT.deploy();

    await HRSP.deployed();

    const myAddress = "0xf9bde4a18933b46640C682aeD897b19f5f1d8293";
    console.log("Your Horoscope NFT is deploy to address -", HRSP.address);

    let txn = await HRSP.mintNFT(myAddress, "virgo");

    await txn.wait();
}

main().then(() => process.exit(0)).catch((error) => {
    console.log(error);
    process.exit(1);
});