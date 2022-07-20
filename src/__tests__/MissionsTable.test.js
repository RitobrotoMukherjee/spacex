import React from 'react';
import renderer from 'react-test-renderer';
import MissionsTable from '../components/Mission-components/MissionsTable';

describe('Testing the MissionsTable', () => {
  it('MissionsTable is rendered', () => {
    const missionsTable = renderer
      .create(<MissionsTable />)
      .toJSON();
    expect(missionsTable).toMatchSnapshot();
  });
});
