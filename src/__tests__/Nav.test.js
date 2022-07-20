import React from 'react';
import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';
import Nav from '../components/Layout/Nav';

describe('Testing the Nav', () => {
  it('Nav is rendered', () => {
    const nav = renderer
      .create(<BrowserRouter><Nav /></BrowserRouter>)
      .toJSON();
    expect(nav).toMatchSnapshot();
  });
});
