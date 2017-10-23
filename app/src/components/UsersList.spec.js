import React from 'react'
import { shallow } from 'enzyme'
import UsersList from '../components/UsersList'

describe('UsersList', () => {
  const mockUsers = [
    {active: true, created_at: "Sat, 07 Oct 2017 15:12:43 GMT", email: "hello@world.com", id: 1, username: "hello"},
    {active: true, created_at: "Sat, 07 Oct 2017 15:12:43 GMT", email: "hello@world.com", id: 2, username: "user"}
  ]
  const wrapper = shallow(<UsersList users={mockUsers} />)

  it('should displays title on all users', () => {
    const title = <h1>All Users</h1>;
    expect(wrapper).toContainReact(title);
  });

  it('Should list users', () => {
    expect(wrapper.find('h4').length).toEqual(mockUsers.length)
  })
})
