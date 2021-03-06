import React, { useContext, useEffect, useState } from 'react';
import { DPixContext, DPixTokenContext, CurrentAddressContext, DPixNFTContext } from "../hardhat/SymfoniContext";
import ipfsClient from 'ipfs-http-client';
import { BigNumber, ethers } from "ethers";
import { Navbar } from "./Navbar";
import { Card } from "./Card";

interface Props {
}

const ipfs = ipfsClient.create({host: 'ipfs.infura.io', port: 5001, protocol: 'https'})
const exifremove = require('exifremove');
const arrayBufferToBuffer = require('arraybuffer-to-buffer');

export const DPix: React.FC<Props> = () => {
	const dpix = useContext(DPixContext);
	const dpixToken = useContext(DPixTokenContext);
	const dpixNFT = useContext(DPixNFTContext);
	const [balance, setBalance] = useState("0");
	const [buffer, setBuffer] = useState<string | ArrayBuffer | null>(null);
	const [title, setTitle] = useState("");
	const [pictures, setPictures] = useState<any>([]);
	const [currentAddress] = useContext(CurrentAddressContext);
	
	useEffect(() => {
		const doAsync = async () => {
			if (!dpix.instance || !dpixToken.instance) {
				return;
			}
			setBalance((await getBalance())!);
			
			let pictureCount = (await dpixNFT.instance?.tokenCount()!).toNumber();
			console.log("pictureCount=", pictureCount);
			console.log(await dpixToken.instance.balanceOf(currentAddress));
			setPictures(await getPictures(0, pictureCount))
		};
		doAsync();
	}, [])
	
	const faucet = async () => {
		await dpixToken.instance?.faucet();
	}
	
	const captureFile = (event: any) => {
		event.preventDefault();
		if (!event.target.files) return;
		const file = event.target.files[0];
		const reader = new window.FileReader();
		reader.readAsArrayBuffer(file);
		
		reader.onloadend = () => {
			let buffer = reader.result;
			try { // remove Exif
				buffer = exifremove.remove(arrayBufferToBuffer(reader.result));
			} catch(e){}
			finally {
				setBuffer(buffer);
			}
		}
	}
	
	const uploadImage = () => {
		if(!buffer) {
			window.alert('Buffer is empty');
			return ;
		}
		let hash = "";
		ipfs.add(buffer).then((result) => {
			hash = result.path;
			let uri = {name: title, description: "", image: "https://ipfs.io/ipfs/" + hash};
			let json = JSON.stringify(uri);
			return ipfs.add(json);
		}).then((result) => {
			console.log(result.path);
			dpixNFT.instance?.mint(currentAddress, result.path);
		}).catch(error => {
			console.error(error);
		})
	}
	
	const getBalance = async () => {
		let balanceBN: BigNumber = ethers.utils.parseEther("0");
		
		if(currentAddress)
		balanceBN = await dpixToken.instance?.balanceOf(currentAddress)!;
		
		if(balanceBN)
		return ethers.utils.formatUnits(balanceBN, 18).toString();
	}
	
	const getPictures = async (from: number, to: number) => {
		let array = [];
		for (let i = from; i < to; i++) {
			let uri = (await dpixNFT.instance?.tokenURI(i)!).toString();
			console.log(uri);
			let data = await (await fetch(uri)).json();
			data.id = i;
			data.owner = await dpixNFT.instance?.ownerOf(i);
			data.creator = await dpixNFT.instance?.creatorOf(i);
			console.log(data);
			array.push(data);
		}
		console.log("number of picture = ", array.length)
		return array;
	}
	
	const sliceByNumber = (array: [], num: number) => {
		const length = Math.ceil(array.length / num)
		return new Array(length).fill(0).map((_, i) =>
			array.slice(i * num, (i + 1) * num)
		)
	}
	
	return (
		<div>
			<Navbar address={currentAddress}/>
			<div className="container">
				<h5 className="mt-1 text-right">You have {balance} DPXT</h5>
				<button className="float-right" onClick={faucet}>faucet</button>
				<form onSubmit={(event) => {
					event.preventDefault()
					captureFile(event)
					uploadImage()
				}}>
					<h4>Upload your picture!!</h4>
					<div className="form-group">
						<input type='file' accept=".jpg, .jpeg, .png, .bmp, .gif" onChange={captureFile} required/>
					</div>
					<div className="form-group">
						<input
							className="form-control"
							id="title"
							type="text"
							placeholder="input title here..."
							name="title"
							onChange={e => setTitle(e.target.value)}
							required/>
					</div>
					<button type="submit" className="btn btn-primary ">Upload!</button>
				</form>
				<br/>
				
				{
					sliceByNumber(pictures, 3).map((slicedPictureArray:any) => {
						while(slicedPictureArray.length < 3) slicedPictureArray.push(null);
						return (
							<div className="row" style={{width: "100%"}} >
								{
									slicedPictureArray.map((pic: any) => {
										if(pic == null) return (<div className={"col"}/>)
										else return <Card picture={pic} balance={balance}/>
									})
								}
								<br/>
							</div>
						)
					})
				}
			</div>
		</div>
	)
}