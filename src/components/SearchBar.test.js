import React from "react"
import {mount} from "enzyme"
import SearchBar from "./SearchBar"
import Button from "react-bootstrap/Button"

let searchText
const onSearchTextInput = jest.fn()
const onSubmit = jest.fn()

let props = () => ({
  searchText,
  onSearchTextInput,
  onSubmit,
})

describe("SearchBar", () => {
  const wrapper = () => mount(<SearchBar {...props()} />)

  describe("when search text is empty", () => {
    test("form submit button must be disabled", () => {
      expect(wrapper().find(Button).props().disabled).toBeTruthy()
    })
  })

  describe("when you fill the input", () => {
    wrapper()
      .find("input")
      .simulate("change", {target: {value: "test"}})
      .update()

    test("onSearchTextInput should have been called", () => {
      expect(onSearchTextInput).toHaveBeenCalled()
    })
  })

  describe("when you fill the input and submit", () => {
    const renderedWrapper = wrapper()

    renderedWrapper.find("input").simulate("change", {target: {value: "testing"}})

    renderedWrapper.find("form").simulate("submit")

    test("onSubmit should have been called", () => {
      expect(onSubmit).toHaveBeenCalled()
    })
  })
})
