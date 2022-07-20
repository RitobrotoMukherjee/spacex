import React from 'react';
import renderer from 'react-test-renderer';
import RocketsDisplay from '../components/rocketsComponents/RocketsDisplay';

describe('Testing the RocketsDisplay', () => {
  it('RocketsDisplay is rendered', () => {
    const rocketsDisplay = renderer
      .create(<RocketsDisplay />)
      .toJSON();
    expect(rocketsDisplay).toMatchSnapshot();
  });
});
