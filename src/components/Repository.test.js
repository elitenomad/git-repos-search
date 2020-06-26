import React from "react"
import renderer from "react-test-renderer"
import Repository from "./Repository"

describe("Repository", () => {
  const props = {
    repo: {
      id: "test",
      name: "test",
      description: "testing desc",
      watchers_count: 25,
    },
  }

  test("for given props matches snapshot", () => {
    const tree = renderer.create(<Repository {...props} />).toJSON()

    expect(tree).toMatchSnapshot()
  })
})
