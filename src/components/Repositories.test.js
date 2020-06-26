import React from "react"
import {mount} from "enzyme"
import Repositories from "./Repositories"
import Repository from "./Repository"
import RepositoriesHeader from "./RepositoriesHeader"

describe("Repositories", () => {
  let repos
  const wrapper = () => mount(<Repositories repos={repos} />)

  describe("when repos is null", () => {
    test("renders null", () => {
      expect(wrapper().isEmptyRender()).toBeTruthy()
    })
  })

  describe("when repos is empty array", () => {
    beforeEach(() => {
      repos = []
    })

    test("renders only RepositoriesHeader", () => {
      expect(wrapper().find(RepositoriesHeader).exists()).toBeTruthy()
    })

    test("won't render Repository", () => {
      expect(wrapper().find(Repository).exists()).toBeFalsy()
    })
  })

  describe("when repos has values", () => {
    beforeEach(() => {
      repos = [
        {
          id: "test",
          name: "test",
          description: "testing desc",
          watchers_count: 5,
        },
        {
          id: "test-1",
          name: "test-2",
          description: "testing desc - 1",
          watchers_count: 25,
        },
      ]
    })

    test("renders RepositoriesHeader", () => {
      expect(wrapper().find(RepositoriesHeader).exists()).toBeTruthy()
    })

    test("renders Repository two times", () => {
      expect(wrapper().find(Repository)).toHaveLength(2)
    })
  })
})
