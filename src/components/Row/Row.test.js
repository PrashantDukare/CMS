import React from 'react';
import { shallow } from 'enzyme';
import Row from './Row';
import { Link } from 'react-router-dom';

describe('<Row />', () => {

  it("Should render Row with Link", () => {
    const data = {
      id: '1',
      content: [
        {
          type: 'Header',
          key: 'Header1234',
          value: {
            text: 'Heading'
          }
        },
        {
          type: 'Section',
          key: 'Section12',
          value: {
            heading: 'Section Heading',
            text: 'Section Content'
          }
        },
        {
          type: 'Figure',
          key: 'Figure12343',
          value: {
            src: 'https://assets.flightright.net/public/assets/images/website/photos/about_us/about-us-title-2@xs.jpg',
            alt: 'image 123',
            width: '80%',
            height: '400px'
          }
        }
      ]
    };

    const wrapper = shallow( <Row rowData={data}/>);

    expect( wrapper.find(Link).length ).toBe(2);
    expect( wrapper.find('td').length ).toBe(2);
  })
});
