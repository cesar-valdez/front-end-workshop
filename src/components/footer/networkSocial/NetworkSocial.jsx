import React from 'react';
import PropTypes from 'prop-types';
import 'evil-icons/assets/evil-icons';

import '../footer.scss';

const NetworkSocial = ({ url, name }) => (
  <li className="yta_Footer-socialNetwork-item">
    <a href={url}>
      <span data-icon={`ei-sc-${name}`} data-size="m" />
      <span className="yta_u-onlyRead">{name}</span>
    </a>
  </li>
);

export default NetworkSocial;

NetworkSocial.propTypes = {
  url: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};
