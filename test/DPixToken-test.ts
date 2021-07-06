// @ts-ignore
import { ethers } from "hardhat";
import { Signer } from "ethers";
import { assert, expect } from "chai";
import { BigNumber } from '@ethersproject/bignumber';

describe("DPixToken", function () {
	let deployer: Signer, receiver: Signer;
	let deployerAddress, receiverAddress;
	let dpixToken;
	
	before(async () => {
		[deployer, receiver] = await ethers.getSigners();
		deployerAddress = await deployer.getAddress();
		receiverAddress = await receiver.getAddress();
		
		const DPixToken = await ethers.getContractFactory("DPixToken", deployer);
		
		dpixToken = await DPixToken.deploy("DPixToken", "DPXT", "10000000000000000000000");
	})
	
	describe('deployment', async () => {
		it('has a name', async () => {
			assert.equal(await dpixToken.name(), "DPixToken");
		});
		
		it('has a symbol', async () => {
			assert.equal(await dpixToken.symbol(), "DPXT");
		});
		
		it('deployer has all of initialSupply', async () => {
			assert((await dpixToken.balanceOf(deployerAddress)).toString(), "10000000000000000000000");
		})
	})
	
	it('can send token', async () => {
		dpixToken.connect(deployer).transfer(receiverAddress, BigNumber.from(100));
		assert.equal((await dpixToken.balanceOf(receiverAddress)).toString(), "100");
	})
});
