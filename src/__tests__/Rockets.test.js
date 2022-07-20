import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from '../redux/configureStore';
import Rockets from '../components/Rockets';

describe('Testing the Rockets', () => {
  it('Rockets is rendered', () => {
    const rockets = renderer
      .create(<Provider store={store}><BrowserRouter><Rockets /></BrowserRouter></Provider>)
      .toJSON();
    expect(rockets).toMatchSnapshot();
  });
});
