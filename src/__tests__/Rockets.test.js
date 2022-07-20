import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from '../redux/configureStore';
import Rockets from '../components/Rockets';

it('Rockets component snapshot testing', () => {
  const rockets = renderer
    .create(
      <Provider store={store}>
        <BrowserRouter>
          <Rockets />
        </BrowserRouter>
      </Provider>,
    )
    .toJSON();
  expect(rockets).toMatchSnapshot();
});
