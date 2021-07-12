import React, { FC, useContext, useEffect } from 'react';
import { ModalForTipping } from "./ModalForTipping";
import { ModalForSettingPrice } from "./ModalForSettingPrice";
import { CurrentAddressContext, DPixContext, DPixNFTContext } from "../hardhat/SymfoniContext";
import { ethers } from "ethers";
import { ModalForBuying } from "./ModalForBuying";

type Props = { picture: any };

export const Card: React.FC<Props> = (props) => {
	const [modalShow_Tipping, setModalShow_Tipping] = React.useState(false);
	const [modalShow_SetPrice, setModalShow_SetPrice] = React.useState(false);
	const [modalShow_Buying, setModalShow_Buying] = React.useState(false);
	const dpixNFT = useContext(DPixNFTContext);
	const dpix = useContext(DPixContext);
	const [currentAddress, setCurrentAddress] = useContext(CurrentAddressContext);
	const [owner, setOwner] = React.useState("");
	const [price, setPrice] = React.useState("");
	const maxUINT256 = "115792089237316195423570985008687907853269984665640564039457584007913129639935";
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
			
			setOwner(await dpixNFT.instance.ownerOf(props.picture.id));
			
			let price = (await dpix.instance.price(props.picture.id)).toString();
			
			setIsOnSale(price !== maxUINT256);
			
			let priceFormatChanged = ethers.utils.formatUnits(price, 18).toString()
			setPrice(priceFormatChanged);
		};
		doAsync();
	}, [])
	
	return (
		<div className={"card col"}>
			<a href={"https://ipfs.io/ipfs/" + props.picture.hash} target="_blank" rel="noopener noreferrer">
				<img src={"https://ipfs.io/ipfs/" + props.picture.hash} className="card-img-top"
				     style={{width: "100%", height: "20vw", objectFit: "cover"}} alt="..."/>
			</a>
			<div className="card-body">
				<h5 className="card-title">{props.picture.title}</h5>
				<small className="text-muted">author:</small>
				<small className="text-muted" style={{whiteSpace: 'nowrap'}}>{props.picture.author.toLowerCase()}</small>
				<small className="text-muted">owner:</small>
				<small className="text-muted" style={{whiteSpace: 'nowrap'}}>{owner}</small>
				
				{isOnSale && owner != currentAddress && <button className="btn btn-primary mr-1"
				                                                onClick={e=>showModal(e, setModalShow_Buying)}
				>Buy{/* {price}DPXT */}</button>}
				
				{owner == currentAddress && <button className="btn btn-primary mr-1"
				                                    onClick={e=>showModal(e, setModalShow_SetPrice)}
				>set price</button>}
				
				<button className="btn btn-primary" onClick={e=>showModal(e, setModalShow_Tipping)}>Send a tip
				</button>
				
				<ModalForBuying
					picture={props.picture}
					price={price}
					show={modalShow_Buying}
					onHide={() => setModalShow_Buying(false)}/>
				
				<ModalForTipping
					picture={props.picture}
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