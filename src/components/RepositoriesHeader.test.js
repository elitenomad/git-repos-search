import React from "react"
import renderer from "react-test-renderer"
import RepositoriesHeader from "./RepositoriesHeader"

describe("RepositoriesHeader", () => {
  const props = {
    repoCount: 25,
  }

  test("for given props matches snapshot", () => {
    const tree = renderer.create(<RepositoriesHeader {...props} />).toJSON()

    expect(tree).toMatchSnapshot()
  })
})
