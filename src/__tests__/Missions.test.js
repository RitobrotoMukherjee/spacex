import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from '../redux/configureStore';
import Missions from '../components/Missions';

it('Missions component snapshot testing', () => {
  const missions = renderer
    .create(
      <Provider store={store}>
        <BrowserRouter>
          <Missions />
        </BrowserRouter>
      </Provider>,
    )
    .toJSON();
  expect(missions).toMatchSnapshot();
});
