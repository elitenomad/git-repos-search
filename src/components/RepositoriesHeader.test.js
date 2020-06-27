import React from "react"
import renderer from "react-test-renderer"
import RepositoriesHeader from "./RepositoriesHeader"

describe("RepositoriesHeader", () => {
  test("for given props matches snapshot", () => {
    const props = {
      repoCount: 125,
      handleSubmit: jest.fn()
    }
    const tree = renderer.create(<RepositoriesHeader {...props} />).toJSON()

    expect(tree).toMatchSnapshot()
  })
})
