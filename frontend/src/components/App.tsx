import React from 'react';
import logo from '../logo.svg';
import '../App.css';
import { Symfoni } from "../hardhat/SymfoniContext";
import { DPix } from "./DPix";

function App() {
	
	return (
		<div>
			<Symfoni autoInit={true}>
				<DPix/>
			</Symfoni>
		</div>
	);
}

export default App;
