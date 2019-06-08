import React from 'react';
import { shallow } from 'enzyme';

import Table from './Table';
import Row from "../Row/Row";
import TableHeader from "../TableHeader/TableHeader";

describe('<Table />', () => {
  it("Should render table without Rows", () => {
    const wrapper = shallow(<Table />);

    expect( wrapper.find(TableHeader).length ).toBe(1);
    expect( wrapper.find('tbody').length ).toBe(1);
    expect( wrapper.find(Row).length ).toBe(0);
  });

  it("Should render table with Rows", () => {
    const data = [
      {
        id: '1',
        content: [
          {
            type: 'Header',
            key: 'Header1',
            value: {
              text: 'Header'
            }
          },
          {
            type: 'Section',
            key: 'Section1',
            value: {
              heading: 'Section Heading',
              text: 'Section text'
            }
          },
          {
            type: 'Figure',
            key: 'Figure1',
            value: {
              src: 'https://dummy.jpg',
              alt: 'image 123',
              width: '80%',
              height: '400px'
            }
          }
        ]
      },
      {
        id: '2',
        content: [
          {
            type: 'Header',
            key: 'Header12345',
            value: {
              text: 'Header'
            }
          },
          {
            type: 'Section',
            key: 'Section12345',
            value: {
              heading: 'Section Heading',
              text: 'Section text'
            }
          },
          {
            type: 'Figure',
            key: 'Figure123435',
            value: {
              src: 'https://dummy.jpg',
              alt: 'image 123',
              width: '80%',
              height: '400px'
            }
          }
        ]
      }
    ];

    const wrapper = shallow(<Table />);
    wrapper.setProps({data});

    expect( wrapper.find(TableHeader).length ).toBe(1);
    expect( wrapper.find(Row).length ).toBe(2);
  })
});
