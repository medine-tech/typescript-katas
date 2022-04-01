import { describe, expect, test } from "vitest"
import renderTree from "../../christmasTree/renderTree"

describe("Testing renderTree", () => {
  test("it should render case one", () => {
    const renderedTree = renderTree(5)
    expect(renderedTree).toBe(
      "____*____\n" +
        "___***___\n" +
        "__*****__\n" +
        "_*******_\n" +
        "*********\n" +
        "____#____\n" +
        "____#____"
    )
  })

  test("it should render case one", () => {
    const renderedTree = renderTree(3)
    expect(renderedTree).toBe(
      "__*__\n" + "_***_\n" + "*****\n" + "__#__\n" + "__#__"
    )
  })
})
