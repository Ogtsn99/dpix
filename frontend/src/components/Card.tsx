import React, { FC, useContext, useEffect } from 'react';
import { ModalForTipping } from "./ModalForTipping";
import { ModalForSettingPrice } from "./ModalForSettingPrice";
import { CurrentAddressContext, DPixContext, DPixNFTContext } from "../hardhat/SymfoniContext";
import { ethers } from "ethers";
import { ModalForBuying } from "./ModalForBuying";

type Props = { picture: any, balance: string };

export const Card: React.FC<Props> = (props) => {
	const [modalShow_Tipping, setModalShow_Tipping] = React.useState(false);
	const [modalShow_SetPrice, setModalShow_SetPrice] = React.useState(false);
	const [modalShow_Buying, setModalShow_Buying] = React.useState(false);
	const dpixNFT = useContext(DPixNFTContext);
	const dpix = useContext(DPixContext);
	const [currentAddress] = useContext(CurrentAddressContext);
	const [imageURL, setImageURL] = React.useState("");
	const [price, setPrice] = React.useState("");
	const [isOnSale, setIsOnSale] = React.useState(false);
	
	const showModal = (e:any, setModal: any)=> {
		e.preventDefault();
		setModal(true);
	}
	
	useEffect(() => {
		const doAsync = async () => {
			if (!dpixNFT.instance || !dpix.instance) {
				return
			}
			
			setImageURL("https://ipfs.io/ipfs/" + props.picture.image.split(':')[1])
			let price = (await dpix.instance.price(props.picture.id)).toString();
			
			setIsOnSale(price !== "0");
			
			let priceFormatChanged = ethers.utils.formatUnits(price, 18).toString()
			setPrice(priceFormatChanged);
		};
		doAsync();
	}, [])
	
	return (
		<div className={"card col"}>
			<a href={props.picture.image} target="_blank" rel="noopener noreferrer">
				<img src={imageURL} className="card-img-top"
				     style={{width: "100%", height: "20vw", objectFit: "cover"}} alt="..."/>
			</a>
			<div className="card-body">
				<h5 className="card-title">{props.picture.title}</h5>
				<small className="text-muted">author:</small>
				<small className="text-muted" style={{whiteSpace: 'nowrap'}}>{props.picture.creator}</small>
				<small className="text-muted">owner:</small>
				<small className="text-muted" style={{whiteSpace: 'nowrap'}}>{props.picture.owner}</small>
				
				{isOnSale && props.picture.owner != currentAddress && <button className="btn btn-primary mr-1"
				                                                onClick={e=>showModal(e, setModalShow_Buying)}
				>Buy{/* {price}DPXT */}</button>}
				
				{props.picture.owner == currentAddress && <button className="btn btn-primary mr-1"
				                                    onClick={e=>showModal(e, setModalShow_SetPrice)}
				>set price</button>}
				
				<button className="btn btn-primary" onClick={e=>showModal(e, setModalShow_Tipping)}>Send a tip
				</button>
				
				<ModalForBuying
					picture={props.picture}
					balance={props.balance}
					price={price}
					show={modalShow_Buying}
					onHide={() => setModalShow_Buying(false)}/>
				
				<ModalForTipping
					picture={props.picture}
					balance={props.balance}
					show={modalShow_Tipping}
					onHide={() => setModalShow_Tipping(false)}/>
				
				<ModalForSettingPrice
					picture={props.picture}
					price={price}
					isOnSale={isOnSale}
					onHide={() => setModalShow_SetPrice(false)}
					show={modalShow_SetPrice}
				/>
			</div>
		</div>
	)
}