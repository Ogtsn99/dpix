// @ts-ignore
import { ethers } from "hardhat";
import { Signer } from "ethers";
import { assert, expect } from "chai";
import {BigNumber} from '@ethersproject/bignumber';
//import type {DPix} from "../frontend/src/hardhat/typechain";
import { SignerWithAddress } from "hardhat-deploy-ethers/dist/src/signers";

describe("DPix", function () {
	let deployer:Signer, author:Signer, tipper: Signer;
	let deployerAddress, authorAddress, tipperAddress;
	let dpix;
	
	before(async() => {
		[deployer, author, tipper] = await ethers.getSigners();
		deployerAddress = await deployer.getAddress();
		authorAddress = await author.getAddress();
		tipperAddress = await tipper.getAddress();
		
		const DPix = await ethers.getContractFactory("DPix", deployer);
		
		dpix = await DPix.deploy();
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
	})
	
	describe('pictures', async()=> {
		
		const hash = "hash123";
		const title = "this is title";
		
		it('can add new picture', async () => {
			await dpix.connect(author).addPicture(hash, title, {gasPrice: 0});
			let pictureCount = await dpix.pictureCount();
			assert.equal(pictureCount.toNumber(), 1);
			let addedPicture = await dpix.pictures(0);
			assert.equal(addedPicture.id.toNumber(), 0);
			assert.equal(addedPicture.hash, hash);
			assert.equal(addedPicture.title, title);
			assert.equal(addedPicture.author, authorAddress);
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
	})
	
});
