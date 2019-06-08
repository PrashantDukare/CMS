import React from 'react';
import { shallow } from 'enzyme';
import Header from './Header';

describe('<Header />', () => {

  it('Should not render Header if data is not passed', () => {
    const wrapper = shallow(<Header />);
    expect( wrapper.find('header').length ).toBe(0);
    expect( wrapper.find('h1').length ).toBe(0);
    expect( wrapper.find('.icons-container').length ).toBe(0);
  });

  it('Should render Header without Icons', () => {
    const data = {
      type: 'Header',
      key: 'Header1234',
      value: {
        text: 'Heading'
      }
    };
    const wrapper = shallow(<Header />);
    wrapper.setProps({data});

    expect( wrapper.find('header').length ).toBe(1);
    expect( wrapper.find('h1').length ).toBe(1);
    expect( wrapper.find('.icons-container').length ).toBe(0);
  });

  it('Should render Header with only edit icon', () => {
    const data = {
      type: 'Header',
      key: 'Header1234',
      value: {
        text: 'Heading'
      }
    };

    const wrapper = shallow(<Header />);
    wrapper.setProps({data, mode: 'edit'});

    expect( wrapper.find('header').length ).toBe(1);
    expect( wrapper.find('h1').length ).toBe(1);
    expect( wrapper.find('.icons-container').length ).toBe(1);
    expect( wrapper.find('i').length ).toBe(1);
  })
});
