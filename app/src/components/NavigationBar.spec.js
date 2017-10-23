import React from 'react'
import { mount, shallow, render } from 'enzyme'
import NavigationBar from './NavigationBar'
import { Route, Link, MemoryRouter } from 'react-router-dom'

describe('NavigationBar', () => {
  it('Should display the passed in title', () => {
    const title = 'some title';
    const wrapper = mount(<MemoryRouter><NavigationBar title={title} /></MemoryRouter>);
    expect(wrapper.contains(title)).toEqual(true);
  });
})
