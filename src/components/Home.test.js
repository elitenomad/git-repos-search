import React from "react"
import {mount} from "enzyme"
import Home from "./Home"
import SearchBar from "./SearchBar"
import Repositories from "./Repositories"

describe("Home", () => {
  const wrapper = () => mount(<Home />)

  test("renders SearchBar", () => {
    expect(wrapper().find(SearchBar).exists()).toBeTruthy()
  })

  test("renders Repositories", () => {
    expect(wrapper().find(Repositories).exists()).toBeTruthy()
  })
})
