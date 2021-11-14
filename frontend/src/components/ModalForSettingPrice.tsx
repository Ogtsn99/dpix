import React, { Dispatch, FC, SetStateAction, useContext, useEffect } from 'react';
import { Button, Modal } from "react-bootstrap";
import { DPixContext, DPixNFTContext, DPixTokenContext } from "../hardhat/SymfoniContext";
import { ethers } from "ethers";

type Props = {picture:any, price:string, isOnSale: boolean, onHide: ()=>void, show: boolean};

export const ModalForSettingPrice:React.FC<Props> = (props)=> {
	const oldPrice = props.price;
	const [newPrice, setNewPrice] = React.useState(props.price);
	const dpix = useContext(DPixContext);
	const dpixNFT = useContext(DPixNFTContext);
	
	const sendNewPrice = async () => {
		console.log("address", dpix.instance?.address, "id", props.picture.id);
		await dpixNFT.instance?.approve(dpix.instance?.address!, props.picture.id);
		await dpix.instance?.setPrice(props.picture.id, ethers.utils.parseEther(newPrice));
		props.onHide();
	}
	
	const toNotForSale = async () => {
		if(!props.isOnSale) {
			alert("This is already not for sale");
			return ;
		}
		
		await dpix.instance?.setPrice(props.picture.id, 0);
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
					set price for {props.picture.title}
				</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				{ props.isOnSale ? <p>Current Price is {oldPrice} DPXT</p>: <p>This is not for sale now</p> }
				<form onSubmit={(e)=>{e.preventDefault(); sendNewPrice();}}>
					<div className="form-group">
						<label className="mr-1">new Price(DPXT):</label>
						<input type="number" step="0.0001" max={10000} className="" required
						       onChange={(event)=>{setNewPrice(event.target.value)}}/>
					</div>
					<button type="submit" className="btn btn-primary mr-1">set price</button>
					<button type="button" className="btn btn-secondary" onClick={toNotForSale} disabled={!props.isOnSale}>make it not for sale</button>
				</form>
			</Modal.Body>
			<Modal.Footer>
				<Button onClick={props.onHide}>Close</Button>
			</Modal.Footer>
		</Modal>
	);
}