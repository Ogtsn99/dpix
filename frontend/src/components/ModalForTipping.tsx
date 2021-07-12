import React, { FC, useContext } from 'react';
import { Button, Modal } from "react-bootstrap";
import { DPixContext, DPixTokenContext } from "../hardhat/SymfoniContext";
import { ethers } from "ethers";

type Props = {picture:any, onHide: ()=>void, show: boolean};

export const ModalForTipping:React.FC<Props> = (props)=> {
	let currency = "eth";
	let amount = "0";
	const dpix = useContext(DPixContext);
	const dpixToken = useContext(DPixTokenContext);
	
	const sendTip = async (event: any) => {
		event.preventDefault();
		let parsedAmount = ethers.utils.parseEther(amount);
		if(!dpix.instance) return ;
		try{
			if(currency === "eth") {
				await dpix.instance?.tipPictureOwner(props.picture.id, {value: parsedAmount})
			} else { // pay with DPXT
				await dpixToken.instance?.approve(dpix.instance?.address, parsedAmount);
				await dpix.instance?.tipPictureOwnerByDPixToken(props.picture.id, parsedAmount);
			}
		} catch (e) {
			window.alert("You failed sending a tip...");
		}
		
		props.onHide();
	}
	
	const changeCurrency = (event: any) => {
		currency = event.target.value;
		console.log(currency)
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
					send a tip to {props.picture.title}
				</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				<p>author: {props.picture.author}</p>
				<form onSubmit={sendTip}>
					<div className="form-group">
						<label className="mr-1">Amount:</label>
						<input type="number" step="0.0001" className="" required
						       onChange={(event)=>{amount = event.target.value}}/>
					</div>
					<div className="form-group">
						<select className="mr-1" onChange={changeCurrency}>
							<option value="eth">ETH</option>
							<option value="dpxt">DPXT</option>
						</select>
					</div>
					<button type="submit" className="btn btn-success">Tip</button>
				</form>
			</Modal.Body>
			<Modal.Footer>
				<Button onClick={props.onHide}>Close</Button>
			</Modal.Footer>
		</Modal>
	);
}