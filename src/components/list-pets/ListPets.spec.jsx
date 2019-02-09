import React from 'react';
import { shallow } from 'enzyme';

import Pets from '../../__mocks__/Pets';
import ListPets from './ListPets';

describe('ListPets', () => {
  const listPets = shallow(<ListPets pets={Pets} />);

  it('should render LisPets compnente', () => {
    expect(listPets).toMatchSnapshot();
  });
});
