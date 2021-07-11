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
		dpixToken = await DPixToken.deploy("DPixToken", "DPXT", "10000000000000000000000");
		const DPixNFT = await ethers.getContractFactory("DPixNFT", deployer);
		dpixNFT = await DPixNFT.deploy("DPixNFT", "DPXT");
		const DPix = await ethers.getContractFactory("DPix", deployer);
		dpix = await DPix.deploy(dpixToken.address, dpixNFT.address);
		await dpixNFT.connect(deployer).transferOwnership(dpix.address);
		await dpixToken.connect(deployer).transfer(tipperAddress, "1000");
		await dpixToken.connect(deployer).transfer(buyerAddress, "1000");
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
		const uri = "ipfs:thisIsURI";
		
		it('should allow to add new picture', async () => {
			let pictureCount = await dpix.pictureCount();
			assert.equal(pictureCount.toNumber(), 0);
			await dpix.connect(author).addPicture(hash, title, uri, {gasPrice: 0});
			pictureCount = await dpix.pictureCount();
			assert.equal(pictureCount.toNumber(), 1);
			let addedPicture = await dpix.pictures(0);
			assert.equal(addedPicture.id.toNumber(), 0);
			assert.equal(addedPicture.hash, hash);
			assert.equal(addedPicture.title, title);
			assert.equal(addedPicture.author, authorAddress);
		})
		
		it('should have minted NFT when the user add a picture', async ()=> {
			assert.equal(await dpixNFT.ownerOf(0), authorAddress);
			assert.equal((await dpixNFT.balanceOf(authorAddress)).toString(), "1");
		})
		
		it("should throw when a user try uploading a picture whose hash already exists", async ()=> {
			let error = null;
			
			try {
				await dpix.connect(author2).addPicture(hash, title, {gasPrice: 0});
			} catch (err) {
				error = err;
			}
			
			assert.equal((await dpix.pictureCount()).toString(), "1");
			assert.isNotNull(error, "You're uploading file already exists");
			expect(error).to.be.an(`Error`);
		})
	})
	
	/* should refactor... */
	describe('tipping', async ()=> {
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
			let oldTipperBalance: BigNumber = await tipper.getBalance();
			let oldAuthorBalance: BigNumber = await author.getBalance();
			try {
				await dpix.connect(tipper).tipPictureOwner(nonexistentId, {value: ethers.utils.parseEther("1"), gasPrice: 0});
			} catch (err) {
				error = err;
			}
			let newTipperBalance: BigNumber = await tipper.getBalance();
			let newAuthorBalance: BigNumber = await author.getBalance();
			assert.equal(oldTipperBalance.toString(), newTipperBalance.toString());
			assert.equal(oldAuthorBalance.toString(), newAuthorBalance.toString());
			expect(error).to.be.an(`Error`);
		});
		
		it('should throw when users try to tip more than they really have', async()=> {
			let error = null;
			let oldTipperBalance: BigNumber = await tipper.getBalance();
			let oldAuthorBalance: BigNumber = await author.getBalance();
			try {
				await dpix.connect(tipper).tipPictureOwner(0, {value: ethers.utils.parseEther("9999999999"), gasPrice: 0});
			} catch (err) {
				error = err;
			}
			let newTipperBalance: BigNumber = await tipper.getBalance();
			let newAuthorBalance: BigNumber = await author.getBalance();
			assert.equal(oldTipperBalance.toString(), newTipperBalance.toString());
			assert.equal(oldAuthorBalance.toString(), newAuthorBalance.toString());
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
		
		it('should throw when users tip by DPXT to a picture not exist', async ()=> {
			let nonexistentId = 114514;
			let error = null;
			let oldTipperBalance: BigNumber = await dpixToken.balanceOf(tipperAddress);
			let oldAuthorBalance: BigNumber = await dpixToken.balanceOf(authorAddress);
			await dpixToken.connect(tipper).approve(dpix.address, "1", {gasPrice: 0});
			try {
				await dpix.connect(tipper).tipPictureOwnerByDPixToken(nonexistentId, "1", {gasPrice: 0});
			} catch (err) {
				error = err;
			}
			let newTipperBalance: BigNumber = await dpixToken.balanceOf(tipperAddress);
			let newAuthorBalance: BigNumber = await dpixToken.balanceOf(authorAddress);
			assert.equal(oldTipperBalance.toString(), newTipperBalance.toString());
			assert.equal(oldAuthorBalance.toString(), newAuthorBalance.toString());
			expect(error).to.be.an(`Error`);
		});
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
		})
		
		
		it('should throw when nft not approved', async()=> {
			let oldBuyerBalance = await dpixToken.balanceOf(buyerAddress);
			let error = null;
			dpix.connect(author).addPicture("aaa", "bbb", "ccc");
			assert((await dpix.pictureCount()).toString(), "2");
			await dpix.connect(author).setPrice(1, 1);
			await dpixToken.connect(buyer).approve(dpix.address, "1", {gasPrice: 0});
			try {
				await dpix.connect(buyer).buyNFT(1, {gasPrice: 0});
			} catch (err) {
				error = err;
			}
			expect(error).to.be.an(`Error`);
			let newBuyerBalance = await dpixToken.balanceOf(buyerAddress);
			assert.equal(oldBuyerBalance.toString(), newBuyerBalance.toString());
		})
	})
});
