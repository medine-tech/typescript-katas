import { describe, expect, test } from "vitest"
import fixFiles from "../../fix-files/fixFiles"

describe("Testin fixFiles.ts", () => {
  test("it should 1", () => {
    const files = ["photo", "postcard", "photo", "photo", "video"]

    expect(fixFiles(files)).toEqual([
      "photo",
      "postcard",
      "photo(1)",
      "photo(2)",
      "video",
    ])
  })

  // test("it should 2", () => {
  //   const files2 = ["file", "file", "file", "game", "game"]
  //
  //   expect(fixFiles(files2)).toEqual([
  //     "file",
  //     "file(1)",
  //     "file(2)",
  //     "game",
  //     "game(1)",
  //   ])
  // })
  //
  // test("it should 3", () => {
  //   const files3 = ["file", "file(1)", "icon", "icon(1)", "icon(1)"]
  //
  //   expect(fixFiles(files3)).toEqual([
  //     "file",
  //     "file(1)",
  //     "icon",
  //     "icon(1)",
  //     "icon(1)(1)",
  //   ])
  // })
})
