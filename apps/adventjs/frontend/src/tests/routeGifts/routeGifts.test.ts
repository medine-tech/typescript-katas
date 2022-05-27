import { describe, expect, test } from "vitest"
import canCarry from "../../routeGifts/canCarry"

describe("Testing router gifts", () => {

  test("it case 1", () => {
    expect(canCarry(3, [[2, 1, 5],[3, 5, 7]])).toBe(true)
  })

  test("it case 2", () => {
    expect(canCarry(4, [[2, 3, 8],[2, 5, 7]])).toBe(true)
  })

  test("it case 3", () => {
    expect(canCarry(1, [[2, 3, 8]])).toBe(false)
  })

  test("it case 4", () => {
    expect(canCarry(2, [[1, 2, 4], [2, 3, 8]])).toBe(false)
  })

})
