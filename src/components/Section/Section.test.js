import React from 'react';
import { shallow } from 'enzyme';
import Section from './Section';

describe('<Section />', () => {

  it('Should not render Section if data is not passed', () => {
    const wrapper = shallow(<Section />);
    expect( wrapper.find('section').length ).toBe(0);
    expect( wrapper.find('p').length ).toBe(0);
    expect( wrapper.find('h1').length ).toBe(0);
    expect( wrapper.find('.icons-container').length ).toBe(0);
  });

  it('Should render Section without Icons', () => {
    const data = {
      type: 'Section',
      key: 'Section12',
      value: {
        heading: 'Section Heading',
        text: 'Section Content'
      }
    };
    const wrapper = shallow(<Section />);
    wrapper.setProps({data});

    expect( wrapper.find('section').length ).toBe(1);
    expect( wrapper.find('p').length ).toBe(1);
    expect( wrapper.find('h1').length ).toBe(1);
    expect( wrapper.find('.icons-container').length ).toBe(0);
  });

  it('Should render Section with Icons', () => {
    const data = {
      type: 'Section',
      key: 'Section12',
      value: {
        heading: 'Section Heading',
        text: 'Section Content'
      }
    };

    const wrapper = shallow(<Section />);
    wrapper.setProps({data, mode: 'edit'});

    expect( wrapper.find('section').length ).toBe(1);
    expect( wrapper.find('p').length ).toBe(1);
    expect( wrapper.find('h1').length ).toBe(1);
    expect( wrapper.find('.icons-container').length ).toBe(1);
    expect( wrapper.find('i').length ).toBe(2);
  })
});
