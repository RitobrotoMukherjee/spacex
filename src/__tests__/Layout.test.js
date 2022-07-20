import React from 'react';
import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';
import Layout from '../components/Layout/Layout';

describe('Testing the Layout', () => {
  it('Layout is rendered', () => {
    const layout = renderer
      .create(<BrowserRouter><Layout /></BrowserRouter>)
      .toJSON();
    expect(layout).toMatchSnapshot();
  });
});
