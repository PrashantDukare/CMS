import React from 'react';
import { shallow } from 'enzyme';
import Figure from './Figure';

describe('<Figure />', () => {

  it('Should not render Figure if data is not passed', () => {
    const wrapper = shallow(<Figure />);
    expect( wrapper.find('figure').length ).toBe(0);
    expect( wrapper.find('img').length ).toBe(0);
    expect( wrapper.find('.icons-container').length ).toBe(0);
  });

  it('Should render Figure without Icons', () => {
    const data = {
      type: 'Figure',
      key: 'Figure12343',
      value: {
        src: 'https://assets.flightright.net/public/assets/images/website/photos/about_us/about-us-title-2@xs.jpg',
        alt: 'image 123',
        width: '80%',
        height: '400px'
      }
    };
    const wrapper = shallow(<Figure />);
    wrapper.setProps({data});

    expect( wrapper.find('figure').length ).toBe(1);
    expect( wrapper.find('img').length ).toBe(1);
    expect( wrapper.find('.icons-container').length ).toBe(0);
  });

  it('Should render Figure with Icons', () => {
    const data = {
      type: 'Figure',
      key: 'Figure12343',
      value: {
        src: 'https://assets.flightright.net/public/assets/images/website/photos/about_us/about-us-title-2@xs.jpg',
        alt: 'image 123',
        width: '80%',
        height: '400px'
      }
    };

    const wrapper = shallow(<Figure />);
    wrapper.setProps({data, mode: 'edit'});

    expect( wrapper.find('figure').length ).toBe(1);
    expect( wrapper.find('img').length ).toBe(1);
    expect( wrapper.find('.icons-container').length ).toBe(1);
    expect( wrapper.find('i').length ).toBe(2);
  })
});
