import React from 'react';
import ReactDOM from 'react-dom';
import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router';
import Listing from './containers/Listing/Listing';
import Page from './containers/Page/Page';
import App from './App';

describe('<App />', () => {
  it('Should test for initial route', () => {
    const component = mount(
        <MemoryRouter initialEntries={[ '/' ]} initialIndex={0}>
          <App />
        </MemoryRouter>);

    expect( component.find(Listing).length ).toBe(1);
  });

  it('Should test for home route', () => {
    const component = mount(
        <MemoryRouter initialEntries={[ '/home' ]} initialIndex={0}>
          <App />
        </MemoryRouter>);

    expect( component.find(Listing).length ).toBe(1);
  });

  it('Should test for page edit route', () => {
    const component = mount(
        <MemoryRouter initialEntries={[ '/page/edit/1' ]} initialIndex={0}>
          <App />
        </MemoryRouter>);

    expect( component.find(Page).length ).toBe(1);
  });

  it('Should test for page view route', () => {
    const component = mount(
        <MemoryRouter initialEntries={[ '/page/1' ]} initialIndex={0}>
          <App />
        </MemoryRouter>);

    expect( component.find(Page).length ).toBe(1);
  });
});
