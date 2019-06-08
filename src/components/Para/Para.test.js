import React from 'react';
import { shallow } from 'enzyme';
import Para from './Para';

describe('<Para />', () => {

  it('Should not render Para if data is not passed', () => {
    const wrapper = shallow(<Para />);
    expect( wrapper.find('.para').length ).toBe(0);
    expect( wrapper.find('p').length ).toBe(0);
    expect( wrapper.find('.icons-container').length ).toBe(0);
  });

  it('Should render Para without Icons', () => {
    const data = {
      type: 'Para',
      key: 'Para67576',
      value: {
        text: 'Para text'
      }
    };
    const wrapper = shallow(<Para />);
    wrapper.setProps({data});

    expect( wrapper.find('.para').length ).toBe(1);
    expect( wrapper.find('p').length ).toBe(1);
    expect( wrapper.find('.icons-container').length ).toBe(0);
  });

  it('Should render Para with Icons', () => {
    const data = {
      type: 'Para',
      key: 'Para67576',
      value: {
        text: 'Para text'
      }
    };

    const wrapper = shallow(<Para />);
    wrapper.setProps({data, mode: 'edit'});

    expect( wrapper.find('.para').length ).toBe(1);
    expect( wrapper.find('p').length ).toBe(1);
    expect( wrapper.find('.icons-container').length ).toBe(1);
    expect( wrapper.find('i').length ).toBe(2);
  })
});
