import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from '../redux/configureStore';
import Myprofile from '../components/Myprofile';

it('Myprofile component snapshot testing', () => {
  const myprofile = renderer
    .create(
      <Provider store={store}>
        <BrowserRouter>
          <Myprofile />
        </BrowserRouter>
      </Provider>,
    )
    .toJSON();
  expect(myprofile).toMatchSnapshot();
});
