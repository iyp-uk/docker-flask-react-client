import React from 'react';
import { shallow } from 'enzyme'
import About from './About'

describe('About', () => {
  it('Should contains a title', () => {
    const wrapper = shallow(<About />);
    const title = <h1>About</h1>;
    expect(wrapper.contains(title)).toEqual(true);
  });
})
