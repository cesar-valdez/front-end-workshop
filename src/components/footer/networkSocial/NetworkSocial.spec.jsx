import React from 'react';
import { shallow } from 'enzyme';

import NetworkSocial from './NetworkSocial';

describe('NetworkSocial', () => {
	const networkSocial = shallow(<NetworkSocial url="www.facebok.com" name="facebook"/>);

	it('should render NetworkSocial component', () => {
		expect(networkSocial).toMatchSnapshot();
	});
});