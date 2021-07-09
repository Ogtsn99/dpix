import React, {FC} from 'react';

type Props = {address: string};

export const Navbar: React.FC<Props> = (props) => {
	return (
		<nav className="navbar navbar-dark bg-primary">
			<a className="navbar-brand" href="#">DPix</a>
			<span className="navbar-text">{props.address}</span>
		</nav>
	)
}