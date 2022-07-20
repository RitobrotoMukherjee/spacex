import React from 'react';
import renderer from 'react-test-renderer';
import ProfileTables from '../components/Profile-components/ProfileTables';

describe('Testing the ProfileTables', () => {
  it('ProfileTables is rendered', () => {
    const profileTables = renderer
      .create(<ProfileTables />)
      .toJSON();
    expect(profileTables).toMatchSnapshot();
  });
});
