import React from 'react'
import { shallow } from 'enzyme'
import LoginRegister from './LoginRegister'

describe('LoginRegister', () => {
  const formTypes = ['Register', 'Login', null]
  const fakeProps = {
    formData: {
      username: 'test',
      email: 'test@test.com',
      password: 'test'
    },
    handleUserFormSubmit: jest.fn()
  }

  for (let formType of formTypes) {
    const wrapper = shallow(<LoginRegister formType={formType}
                                           formData={fakeProps.formData}
                                           handleUserFormSubmit={fakeProps.handleUserFormSubmit} />)

    it('displays title', () => {
      const title = <h1>{formType}</h1>
      expect(wrapper).toContainReact(title);
    })

    it('contains a submit button', () => {
      expect(wrapper.find('[type="submit"]').length).toEqual(1)
    })

    it('contains a required email field', () => {
      expect(wrapper.find('[type="email"]').length).toEqual(1)
      expect(wrapper.find('[type="email"]').prop('required'))
    })

    it('contains a required password field', () => {
      expect(wrapper.find('[type="password"]').length).toEqual(1)
      expect(wrapper.find('[type="password"]').prop('required'))
    })

    it('has an onSubmit property on form', () => {
      expect(wrapper.find('form')).toHaveProp('onSubmit')
    })

    it('can submit form', () => {
      wrapper.find('form').simulate('submit')
      expect(fakeProps.handleUserFormSubmit).toHaveBeenCalledTimes(1)
      fakeProps.handleUserFormSubmit.mockClear()
    })

    if (formType === 'Register') {
      it('contains a required username field on registration', () => {
        expect(wrapper.find('[type="text"]').length).toEqual(1)
        expect(wrapper.find('[type="text"]').prop('required'))
      })

      it('contains 4 input fields', () => {
        expect(wrapper.find('input').length).toEqual(4)
      })
    }
    else {
      it('does not contain a username field', () => {
        expect(wrapper.find('[type="text"]').length).toEqual(0)
      })

      it('contains 3 input fields', () => {
        expect(wrapper.find('input').length).toEqual(3)
      })
    }
  }

})
