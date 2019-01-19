import PropTypes from 'prop-types';

const NETWORKS = PropTypes.shape({
	id: PropTypes.string.isRequired,
	url: PropTypes.string.isRequired,
	icon: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
});

export default NETWORKS;