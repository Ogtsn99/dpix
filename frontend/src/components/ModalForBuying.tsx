import React, { FC, useContext } from 'react';
import { Button, Modal } from "react-bootstrap";
import { DPixContext, DPixTokenContext } from "../hardhat/SymfoniContext";
import { ethers } from "ethers";

type Props = {picture:any, balance:string, price:string, onHide: ()=>void, show: boolean};

export const ModalForBuying:React.FC<Props> = (props)=> {
	
	const dpix = useContext(DPixContext);
	const dpixToken = useContext(DPixTokenContext);
	
	const purchaseNFT = async()=> {
		if(ethers.utils.parseEther(props.price).gt(ethers.utils.parseEther(props.balance))) {
			window.alert("You don't have enough DPXT!");
			return ;
		}
		await dpixToken.instance?.approve(dpix.instance?.address!, ethers.utils.parseEther(props.price));
		await dpix.instance?.buyNFT(props.picture.id);
		props.onHide();
	}
	
	return (
		<Modal
			{...props}
			size="lg"
			aria-labelledby="contained-modal-title-vcenter"
			centered
		>
			<Modal.Header closeButton>
				<Modal.Title id="contained-modal-title-vcenter">
					buy {props.picture.title} ?
				</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				<h1>{props.price} DPXT</h1>
				<button className="btn btn-success" onClick={purchaseNFT}>Purchase</button>
			</Modal.Body>
			<Modal.Footer>
				<Button onClick={props.onHide}>Close</Button>
			</Modal.Footer>
		</Modal>
	);
}