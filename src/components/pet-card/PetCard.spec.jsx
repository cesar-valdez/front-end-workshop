import React from 'react';
import { shallow } from 'enzyme';

import PetCard from './PetCard';

describe('PetCard', () => {
  const petCard = shallow(<PetCard />);

  it('should render PetCard componente', () => {
    expect(petCard).toMatchSnapshot();
  });
});
