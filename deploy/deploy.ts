// @ts-ignore
import { ethers } from "hardhat";
import { Signer } from "ethers";

module.exports = async ({
	                        getNamedAccounts,
	                        deployments,
	                        getChainId,
	                        getUnnamedAccounts,
                        }) => {
	const { deploy } = deployments;
	const { deployer } = await getNamedAccounts();
	
	// Deployment of DPixToken
	let result = await deploy("DPixToken", {
		from: deployer,
		args: ["DPixToken", "DPXT", "10000000000000000000000"]
	});
	const dpixTokenAddress = result.address;
	
	// Deployment of DPixNFT
	result = await deploy("DPixNFT", {
		from: deployer,
		args: ["DPixNFT", "DPXT"]
	});
	const dpixNftAddress = result.address;
	
	// Deployment of DPix
	result = await deploy("DPix", {
		from: deployer,
		args: [dpixTokenAddress, dpixNftAddress]
	});
	const dpixAddress = result.address;
	
	// Change owner of DPixNFT to DPix contract
	let dpixNFT = await ethers.getContractAt("DPixNFT", dpixNftAddress);
	dpixNFT.connect((await ethers.getSigners())[0]).transferOwnership(dpixAddress);
	
	console.log("DPix Address:", dpixAddress);
	console.log("DPixToken Address:", dpixTokenAddress);
	console.log("DPixNFT Address:", dpixNftAddress);
};
