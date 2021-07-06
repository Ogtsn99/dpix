// @ts-ignore
import { ethers } from "hardhat";
import { Signer } from "ethers";
import { assert, expect } from "chai";
import {BigNumber} from '@ethersproject/bignumber';

describe("DPix", function () {
	let deployer:Signer, author:Signer, author2: Signer, tipper: Signer;
	let deployerAddress, authorAddress, tipperAddress;
	let dpix;
	let dpixToken;
	
	before(async() => {
		[deployer, author, author2, tipper] = await ethers.getSigners();
		deployerAddress = await deployer.getAddress();
		authorAddress = await author.getAddress();
		tipperAddress = await tipper.getAddress();
		
		const DPixToken = await ethers.getContractFactory("DPixToken", deployer);
		dpixToken = await DPixToken.deploy("DPixToken", "DPXT", "10000000000000000000000");
		const DPix = await ethers.getContractFactory("DPix", deployer);
		console.log("Token address ", dpixToken.address)
		dpix = await DPix.deploy(dpixToken.address);
		await dpixToken.connect(deployer).transfer(tipperAddress, "1000");
	})
	
	describe('development', async() => {
		it('deploys successfully', async ()=> {
			const address = dpix.address;
			assert.notEqual(address, "0x0");
			assert.notEqual(address, '');
			assert.notEqual(address, null);
			assert.notEqual(address, undefined);
		});
		
		it("has a name", async ()=> {
			assert.equal(await dpix.name(), "DPix");
		});
		
		it('initially pictureCount is 0', async () => {
			let pictureCount = await dpix.pictureCount();
			assert.equal(pictureCount.toNumber(), 0);
		})
		
		it('initially the tipper has 1000 DPXT', async () => {
			assert.equal((await dpixToken.balanceOf(tipperAddress)).toString(), "1000");
		})
	})
	
	describe('pictures', async()=> {
		const hash = "hash123";
		const title = "this is title";
		
		it('can add new picture', async () => {
			let pictureCount = await dpix.pictureCount();
			assert.equal(pictureCount.toNumber(), 0);
			await dpix.connect(author).addPicture(hash, title, {gasPrice: 0});
			pictureCount = await dpix.pictureCount();
			assert.equal(pictureCount.toNumber(), 1);
			let addedPicture = await dpix.pictures(0);
			assert.equal(addedPicture.id.toNumber(), 0);
			assert.equal(addedPicture.hash, hash);
			assert.equal(addedPicture.title, title);
			assert.equal(addedPicture.author, authorAddress);
		})
		
		it("should throw when a user try uploading a picture whose hash already exists", async ()=> {
			let error = null;
			
			try {
				await dpix.connect(author2).addPicture(hash, title, {gasPrice: 0});
			} catch (err) {
				error = err;
			}
			
			assert.isNotNull(error, "You're uploading file already exists");
			expect(error).to.be.an(`Error`);
		})
		
		it('allows users to tip pictures', async ()=> {
			let oldAuthorBalance: BigNumber = await author.getBalance();
			let oldTipperBalance: BigNumber = await tipper.getBalance();
			
			await dpix.connect(tipper).tipPictureOwner(0, {value: ethers.utils.parseEther("1"), gasPrice: 0});
			
			let newAuthorBalance: BigNumber = await author.getBalance();
			let newTipperBalance: BigNumber = await tipper.getBalance();
			
			assert.equal(newAuthorBalance.toString(), oldAuthorBalance.add(ethers.utils.parseEther("1")).toString());
			assert.equal(newTipperBalance.toString(), oldTipperBalance.sub(ethers.utils.parseEther("1")).toString());
		})
		
		it('should throw when users tip to a picture not exist', async ()=> {
			let nonexistentId = 114514;
			let error = null;
			try {
				await dpix.connect(tipper).tipPictureOwner(nonexistentId, {value: ethers.utils.parseEther("1")});
			} catch (err) {
				error = err;
			}
			assert.isNotNull(error, "You're tipping to a picture not exist");
			expect(error).to.be.an(`Error`);
		})
		
		it('allows users to tip pictures by DPXT', async ()=> {
			let oldAuthorBalance: BigNumber = await dpixToken.balanceOf(authorAddress);
			let oldTipperBalance: BigNumber = await dpixToken.balanceOf(tipperAddress);
			
			await dpixToken.connect(tipper).approve(dpix.address, "893", {gasPrice: 0});
			assert.equal((await dpixToken.allowance(tipperAddress, dpix.address)), "893");
			await dpix.connect(tipper).tipPictureOwnerByDPixToken(0, "893", {gasPrice: 0});
			
			let newAuthorBalance: BigNumber = await dpixToken.balanceOf(authorAddress);
			let newTipperBalance: BigNumber = await dpixToken.balanceOf(tipperAddress);
			
			assert.equal(newAuthorBalance.toString(), oldAuthorBalance.add("893").toString());
			assert.equal(newTipperBalance.toString(), oldTipperBalance.sub("893").toString());
		})
	})
	
});
