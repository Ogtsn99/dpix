// @ts-ignore
import { ethers } from "hardhat";
import { Signer } from "ethers";
import { assert } from "chai";
import { DPixNFT } from "../frontend/src/hardhat/typechain/DPixNFT";

describe("DPixNFT", function () {
	let deployer: Signer, receiver: Signer;
	let deployerAddress, receiverAddress;
	let dpixNFT;
	
	before(async () => {
		[deployer, receiver] = await ethers.getSigners();
		deployerAddress = await deployer.getAddress();
		receiverAddress = await receiver.getAddress();
		
		const DPixNFT = await ethers.getContractFactory("DPixNFT", deployer);
		
		dpixNFT = await DPixNFT.deploy("DPixNFT", "DPXT");
	})
	
	describe('deployment', async () => {
		it('has a right name', async () => {
			assert.equal(await dpixNFT.name(), "DPixNFT");
		});
		
		it('has a symbol', async () => {
			assert.equal(await dpixNFT.symbol(), "DPXT");
		});
	})
});
