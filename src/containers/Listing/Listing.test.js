import React from 'react';
import { shallow } from 'enzyme';
import Listing from './Listing';
import Table from '../../components/Table/Table';

describe('<Listing />', () => {

  let wrapper;

  beforeEach(() => {
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
    sessionStorage.setItem('pages', JSON.stringify(data));
    wrapper = shallow(<Listing />);
  });

  it("Should render Table", () => {
    expect( wrapper.find(Table).length ).toBe(1);
  });

  it("Should delete a page entry", () => {
    // Number of pages before deleting
    expect(JSON.parse(sessionStorage.getItem('pages')).length).toBe(2);
    wrapper.instance().deleteBlog('1');
    // Number of pages after deleting
    expect(JSON.parse(sessionStorage.getItem('pages')).length).toBe(1);
  });

  it("Should add a page entry", () => {
    // Number of pages before deleting
    expect(JSON.parse(sessionStorage.getItem('pages')).length).toBe(2);
    wrapper.instance().addPage();
    // Number of pages after deleting
    expect(JSON.parse(sessionStorage.getItem('pages')).length).toBe(3);
  })
});
