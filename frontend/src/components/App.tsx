import React from 'react';
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
