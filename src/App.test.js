import React from "react"
import {mount} from "enzyme"
import App from "./App"
import Home from "./components/Home"

describe("App", () => {
  const wrapper = mount(<App />)

  test("renders text", () => {
    expect(wrapper.text()).toContain("GitHub Repositories")
  })

  test("renders Home", () => {
    expect(wrapper.find(Home).exists()).toBeTruthy()
  })
})
