import React from 'react';
import { shallow } from 'enzyme';
import Page from './Page';

describe('<Page />', () => {

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
    wrapper = shallow(<Page match={{params :{ id: '1'}}} />);
  });

  it("Should render Page", () => {
    expect( wrapper.find('.page').length ).toBe(1);
  });

  it("Should delete a blog section entry", () => {
    wrapper.instance().deleteBlogComponent('Section1');
    const pages = JSON.parse(sessionStorage.getItem('pages'));
    expect(pages[0].content.length).toBe(2);
  });

  it("Should add a page blog section entry", () => {
    wrapper.instance().addBlogComponent({target: {value: 'Section'}});
    const pages = JSON.parse(sessionStorage.getItem('pages'));
    expect(pages[0].content.length).toBe(4);
  })
});
