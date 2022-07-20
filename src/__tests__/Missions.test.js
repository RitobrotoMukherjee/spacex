import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from '../redux/configureStore';
import Missions from '../components/Missions';

describe('Testing the Missions', () => {
  it('Missions is rendered', () => {
    const missions = renderer
      .create(<Provider store={store}><BrowserRouter><Missions /></BrowserRouter></Provider>)
      .toJSON();
    expect(missions).toMatchSnapshot();
  });
});
