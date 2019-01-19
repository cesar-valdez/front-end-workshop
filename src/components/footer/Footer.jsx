import React from 'react';
import NetworkSocial from './networkSocial/NetworkSocial';

import './footer.scss';

const Footer = () => (
	<footer className="yta_Footer">
		<nav>
			<h2 className="yta_u-onlyRead">Redes sociales</h2>
			<ul className="yta_Footer-socialNetwork">
				<NetworkSocial url="www.facebook.com" name="facebook"/>
				<NetworkSocial url="www.twitter.com" name="twitter"/>
				<NetworkSocial url="www.instagram.com" name="instagram"/>
				<NetworkSocial url="www.youtube.com" name="youtube"/>
			</ul>
		</nav>
		<p className="yta_Footer-copyright">Copyright © 2018 Yo te adopto.</p>
	</footer>
);

export default Footer;