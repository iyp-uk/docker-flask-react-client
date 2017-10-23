import React from 'react'
import { shallow } from 'enzyme'
import AddUser from './AddUser'

describe('Add user', () => {
  const fakeState = {
    username: 'test',
    email: 'test@test.com',
    password: 'test',
    addUser: jest.fn()
  }
  const wrapper = shallow(<AddUser {...fakeState} />)

  it('contains a submit button', () => {
    expect(wrapper.find('[type="submit"]').length).toEqual(1)
  })

  it('contains a required username field', () => {
    expect(wrapper.find('[type="text"]').length).toEqual(1)
    expect(wrapper.find('[type="text"]').prop('required'))
  })

  it('contains a required email field', () => {
    expect(wrapper.find('[type="email"]').length).toEqual(1)
    expect(wrapper.find('[type="email"]').prop('required'))
  })

  it('has an onSubmit property on form', () => {
    expect(wrapper.find('form')).toHaveProp('onSubmit')
  })

  it('can submit form', () => {
    wrapper.find('form').simulate('submit')
    expect(fakeState.addUser).toHaveBeenCalledTimes(1)
    fakeState.addUser.mockClear()
  })

})
