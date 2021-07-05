import React, { useContext, useEffect, useState } from 'react';
import { DPixContext } from "../hardhat/SymfoniContext";
import ipfsClient from 'ipfs-http-client';
import { ethers } from "ethers";
interface Props { }
const ipfs = ipfsClient.create({host: 'ipfs.infura.io', port: 5001, protocol: 'https'})

export const DPix: React.FC<Props> = () => {
	const dpix = useContext(DPixContext)
	const [name, setName] = useState("");
	const [buffer, setBuffer] = useState<string | ArrayBuffer | null>(null);
	const [title, setTitle] = useState("");
	const [pictures, setPictures] = useState<any>([]);
	
	const captureFile = (event: any) => {
		event.preventDefault();
		if(!event.target.files) return ;
		const file = event.target.files[0];
		const reader = new window.FileReader();
		reader.readAsArrayBuffer(file);
		reader.onloadend = () => {
			setBuffer(reader.result);
		}
	}
	
	const uploadImage = () => {
		if(buffer) {
			console.log("Submitting file to ipfs")
			ipfs.add(buffer).then((result) => {
				console.log(result.cid)
				console.log(ipfs.get(result.path)[Symbol.asyncIterator]())
				dpix.instance?.addPicture(result.path, title);
			}).catch(error=>{
				console.error(error);
			})
		} else {
			console.log("file is not selected")
		}
	}
	
	const tip = (author: string) => {
		dpix.instance?.tipPictureOwner(author, {value: ethers.utils.parseEther("1")});
	}
	
	useEffect(() => {
		const doAsync = async () => {
			if (!dpix.instance) return
			console.log("DPix is deployed at ", dpix.instance.address)
			console.log(await dpix.instance.name())
			setName(await dpix.instance.name())
			let pictureCount = (await dpix.instance.pictureCount()).toNumber();
			let array = [];
			for (let i = 0; i < pictureCount; i++) {
				const picture = await dpix.instance.pictures(i);
				array.push(picture);
			}
			setPictures(array)
			console.log(pictureCount, pictures)
		};
		doAsync();
	}, [dpix])
	
	return (
		<div>
			<p>{name}</p>
			<form onSubmit={(event) => {
				event.preventDefault()
				captureFile(event)
				uploadImage()
			}} >
				<input type='file' accept=".jpg, .jpeg, .png, .bmp, .gif" onChange={captureFile} required />
				<button type="submit" className="btn btn-primary btn-block btn-lg">Upload!</button>
				<br/>
				<label htmlFor="title">タイトル</label>
				<input id="title"
				       type="text"
				       name="title"
				       onChange={e => setTitle(e.target.value)}
				       required />
			</form>
			{pictures.map( (picture:any) => {
				return <div>
					<p>タイトル: {picture.title}</p>
					<p>ハッシュ: {picture.hash}</p>
					<img src={"https://ipfs.io/ipfs/" + picture.hash} alt={picture.title}/>
					<button onClick={() => tip(picture.id)}>Send a tip</button>
				</div>
			})}
		</div>
	)
}