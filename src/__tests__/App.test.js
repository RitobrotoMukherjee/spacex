import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from '../redux/configureStore';
import App from '../components/App';

describe('Testing the App', () => {
  it('App is rendered', () => {
    const tree = renderer
      .create(<Provider store={store}><BrowserRouter><App /></BrowserRouter></Provider>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
