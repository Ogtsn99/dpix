// @ts-ignore
import { ethers } from "hardhat";
import { Signer } from "ethers";
import { assert, expect } from "chai";
import {BigNumber} from '@ethersproject/bignumber';
import {DPixNFT} from "../frontend/src/hardhat/typechain/DPixNFT";

describe("DPix", function () {
	let deployer:Signer, author:Signer, author2: Signer, tipper: Signer, buyer: Signer;
	let deployerAddress, authorAddress, tipperAddress, buyerAddress;
	let dpix;
	let dpixToken;
	let dpixNFT;
	
	before(async() => {
		[deployer, author, author2, tipper, buyer] = await ethers.getSigners();
		deployerAddress = await deployer.getAddress();
		authorAddress = await author.getAddress();
		tipperAddress = await tipper.getAddress();
		buyerAddress = await buyer.getAddress();
		
		const DPixToken = await ethers.getContractFactory("DPixToken", deployer);
		dpixToken = await DPixToken.deploy("DPixToken", "DPXT", "10000000000000000000000", false);
		const DPixNFT = await ethers.getContractFactory("DPixNFT", deployer);
		dpixNFT = await DPixNFT.deploy("DPixNFT", "DPXT");
		const DPix = await ethers.getContractFactory("DPix", deployer);
		dpix = await DPix.deploy(dpixToken.address, dpixNFT.address);
		
		await dpixToken.connect(deployer).transfer(tipperAddress, "1000");
		await dpixToken.connect(deployer).transfer(buyerAddress, "1000");
		dpixNFT.connect(author).mint(authorAddress, "abc");
	})
	
	describe('development', async() => {
		it('deploys successfully', async ()=> {
			const address = dpix.address;
			assert.notEqual(address, "0x0");
			assert.notEqual(address, '');
			assert.notEqual(address, null);
			assert.notEqual(address, undefined);
		});
		
		it('initially the tipper has 1000 DPXT', async () => {
			assert.equal((await dpixToken.balanceOf(tipperAddress)).toString(), "1000");
		})
	})
	
	it("can get uri", async() => {
		assert.equal("https://ipfs.io/ipfs/abc", await dpixNFT.tokenURI(0));
	})
	
	describe('tipping', async() => {
		it('allows users to tip pictures by DPXT', async ()=> {
			let oldAuthorBalance: BigNumber = await dpixToken.balanceOf(authorAddress);
			let oldTipperBalance: BigNumber = await dpixToken.balanceOf(tipperAddress);
			
			await dpixToken.connect(tipper).transfer(await dpixNFT.creatorOf(0), 893, {gasPrice: 0});
			
			let newAuthorBalance: BigNumber = await dpixToken.balanceOf(authorAddress);
			let newTipperBalance: BigNumber = await dpixToken.balanceOf(tipperAddress);
			
			assert.equal(newAuthorBalance.toString(), oldAuthorBalance.add(893).toString());
			assert.equal(newTipperBalance.toString(), oldTipperBalance.sub(893).toString());
		})
		
		it('should throw when users try to tip by DPXT more than they really have', async()=> {
			let error = null;
			let oldTipperBalance: BigNumber = await dpixToken.balanceOf(tipperAddress);
			let oldAuthorBalance: BigNumber = await dpixToken.balanceOf(authorAddress);
			await dpixToken.connect(tipper).approve(dpix.address, "114514", {gasPrice: 0});
			try {
				await dpix.connect(tipper).tipPictureOwnerByDPixToken(0, "114514", {gasPrice: 0});
			} catch (err) {
				error = err;
			}
			let newTipperBalance: BigNumber = await dpixToken.balanceOf(tipperAddress);
			let newAuthorBalance: BigNumber = await dpixToken.balanceOf(authorAddress);
			assert.equal(oldTipperBalance.toString(), newTipperBalance.toString());
			assert.equal(oldAuthorBalance.toString(), newAuthorBalance.toString());
			expect(error).to.be.an(`Error`);
		})
		
	})
	
	describe('NFT', async()=> {
		it('should allow only NFT owner to set price', async() => {
			await dpix.connect(author).setPrice(0, 1);
			assert.equal((await dpix.price(0)).toString(), "1");
			await dpixNFT.connect(author).approve(dpix.address, 0);
			let error = null;
			try {
				await dpix.connect(tipper).setPrice(0, 2);
			} catch (err) {
				error = err;
			}
			assert.equal((await dpix.price(0)).toString(), "1");
			expect(error).to.be.an(`Error`);
		})
		
		it('should allow user to buy NFT', async()=> {
			let oldBuyerBalance = await dpixToken.balanceOf(buyerAddress);
			await dpixToken.connect(buyer).approve(dpix.address, "1", {gasPrice: 0});
			await dpix.connect(buyer).buyNFT(0, {gasPrice: 0});
			let newBuyerBalance = await dpixToken.balanceOf(buyerAddress);
			assert.equal(oldBuyerBalance.sub("1").toString(), newBuyerBalance.toString());
			assert.equal(await dpix.price(0), "0");
		})
	})
});
