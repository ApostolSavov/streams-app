import React from 'react';
import { Link } from 'react-router-dom';
import GoogleAuth from './GoogleAuth.js';

function Header(props) {
	return (
		<div className="ui secondary pointing menu">
			<Link to="/" className="item">
				Streamy
			</Link>
			<div className="right menu">
				<Link to="/" className="item">
					All streams
				</Link>
				<GoogleAuth></GoogleAuth>
			</div>
		</div>
	);
}

export default Header;
