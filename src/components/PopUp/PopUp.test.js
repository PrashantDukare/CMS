import React from 'react';
import { shallow } from 'enzyme';
import PopUp from './PopUp';

describe('<Header />', () => {

  it('Should not render PopUp if data is not passed', () => {
    const wrapper = shallow(<PopUp />);
    expect( wrapper.find('.popup').length ).toBe(0);
    expect( wrapper.find('.popup-actions').length ).toBe(0);
    expect( wrapper.find('.popup-body').length ).toBe(0);
    expect( wrapper.find('fieldset').length ).toBe(0);
  });

  it('Should render PopUp with section schema with 2 fields', () => {
    const data = [
      {
        label: 'Heading',
        field: 'heading',
        type: 'text',
        value: 'Header'
      },
      {
        label: 'Content',
        field: 'text',
        type: 'textarea',
        value: 'Section content'
      }
    ];
    const wrapper = shallow(<PopUp schema={data}/>);

    expect( wrapper.find('.popup').length ).toBe(1);
    expect( wrapper.find('.popup-actions').length ).toBe(1);
    expect( wrapper.find('.popup-body').length ).toBe(1);
    expect( wrapper.find('fieldset').length ).toBe(2);
  });

  it('Should render PopUp with Figure schema with 4 fields', () => {
    const data = [
      {
        label: 'Image src',
        field: 'src',
        type: 'text',
        value: 'http://dummy.png'
      },
      {
        label: 'Alt text',
        field: 'alt',
        type: 'text',
        value: 'alt text'
      },
      {
        label: 'Width',
        field: 'width',
        type: 'text',
        value: '100px'
      },
      {
        label: 'Height',
        field: 'height',
        type: 'text',
        value: '100px'
      }
    ];
    const wrapper = shallow(<PopUp schema={data}/>);

    expect( wrapper.find('.popup').length ).toBe(1);
    expect( wrapper.find('.popup-actions').length ).toBe(1);
    expect( wrapper.find('.popup-body').length ).toBe(1);
    expect( wrapper.find('fieldset').length ).toBe(4);
  });
});
