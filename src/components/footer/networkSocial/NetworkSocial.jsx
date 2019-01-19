import React from 'react';
import PropTypes from 'prop-types';
import 'evil-icons/assets/evil-icons.js';

import './../footer.scss';

const NetworkSocial = props => (
	<li className="yta_Footer-socialNetwork-item">
		<a href={props.url}>
			<span data-icon={`ei-sc-${props.name}`} data-size="m"></span>
			<span className="yta_u-onlyRead">{props.name}</span>
		</a>
	</li>
)

export default NetworkSocial;

NetworkSocial.propTypes = {
	url: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
};