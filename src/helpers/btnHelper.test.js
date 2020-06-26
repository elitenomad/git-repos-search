import {buttonText} from "./btnHelper"

describe("buttonText", () => {
  test("renders Searching for true", () => {
    expect(buttonText(true)).toEqual("Searching...")
  })

  test("renders Search for false", () => {
    expect(buttonText(false)).toEqual("Search")
  })
})
