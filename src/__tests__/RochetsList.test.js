import React from 'react';
import renderer from 'react-test-renderer';
import RochetsList from '../components/rocketsComponents/RochetsList';

describe('Testing the RochetsList', () => {
  it('RochetsList is rendered', () => {
    const rochetsList = renderer
      .create(<RochetsList />)
      .toJSON();
    expect(rochetsList).toMatchSnapshot();
  });
});
