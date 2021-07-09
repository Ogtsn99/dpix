import React, { FC } from 'react';
import { ModalForTipping } from "./ModalForTipping";
type Props = { picture: any };

export const Card: React.FC<Props> = (props) => {
	const [modalShow, setModalShow] = React.useState(false);
	
	return (
		<div className={"card col"}>
			<a href={"https://ipfs.io/ipfs/" + props.picture.hash} target="_blank" rel="noopener noreferrer">
				<img src={"https://ipfs.io/ipfs/" + props.picture.hash} className="card-img-top"
				     style={{width: "100%", height: "15vw", objectFit: "cover"}} alt="..."/>
			</a>
			<div className="card-body">
				<h5 className="card-title">{props.picture.title}</h5>
				<small className="text-muted" style={{whiteSpace: 'nowrap'}}>{props.picture.author.toLowerCase()}</small>
				<a href="#" className="btn btn-primary" onClick={(event) => { event.preventDefault(); setModalShow(true)}} >Send a tip</a>
				<ModalForTipping
					picture={props.picture}
					show={modalShow}
					onHide={() => setModalShow(false)}/>
			</div>
		</div>
	)
}