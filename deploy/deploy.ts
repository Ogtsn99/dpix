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
	
	let result = await deploy("DPixToken", {
		from: deployer,
		args: ["DPixToken", "DPXT", "10000000000000000000000", true]
	});
	const dpixTokenAddress = result.address;
	
	result = await deploy("DPixNFT", {
		from: deployer,
		args: ["DPixNFT", "DPXT"]
	});
	const dpixNftAddress = result.address;
	
	result = await deploy("DPix", {
		from: deployer,
		args: [dpixTokenAddress, dpixNftAddress]
	});
	const dpixAddress = result.address;
	
	console.log("DPix Address:", dpixAddress);
	console.log("DPixToken Address:", dpixTokenAddress);
	console.log("DPixNFT Address:", dpixNftAddress);
};
