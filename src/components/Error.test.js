import React from "react"
import { mount } from 'enzyme'
import Error from "./Error"
import Alert from 'react-bootstrap/Alert'

describe("Error", () => {
  const props = {
    error: {
      message: "test",
      contact: "testing desc z@z.com"
    },
  }

  describe('when error is null ', () => {
      const wrapper = mount(<Error />)

      test('renders null', () => {
          expect(wrapper.isEmptyRender()).toBeTruthy()
      })
  })

  describe('when error is not null ', () => {
    const wrapper = mount(<Error {...props}/>)

    test('renders Alert with data', () => {
        expect(wrapper.find(Alert).exists()).toBeTruthy()
        expect(wrapper.find(Alert.Heading).text()).toEqual(props.error.message)
    })
  })

  describe('when error message is null ', () => {
    const wrapper = mount(<Error error={{contact: 'xyz'}}/>)

    test('renders null', () => {
        expect(wrapper.isEmptyRender()).toBeTruthy()
    })
  })
})
