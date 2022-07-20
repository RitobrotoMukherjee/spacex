import React from 'react';
import renderer from 'react-test-renderer';
import MissionData from '../components/Mission-components/MissionData';

describe('Testing the MissionData', () => {
  it('MissionData is rendered', () => {
    const missionData = renderer
      .create(<MissionData />)
      .toJSON();
    expect(missionData).toMatchSnapshot();
  });
});
