import React from 'react';
import { shallow } from 'enzyme';
import TableHeader from "./TableHeader";

describe('<TableHeader />', () => {
  it("Should render tableHeader", () => {
    const wrapper = shallow(<TableHeader />);

    expect( wrapper.find('.action-container button').length ).toBe(1);
    expect( wrapper.find('th').length ).toBe(2);
  });
});
