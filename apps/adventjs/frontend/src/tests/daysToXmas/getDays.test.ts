import { describe, expect, test } from "vitest"
import getDays from "../../daysToXmas/getDays"

describe("Testing getDays", () => {
  test("it should return a number", () => {
    const remainingDays = getDays(new Date())
    expect(typeof remainingDays).toBe("number")
  })

  test("it should return a positive number", () => {
    const remainingDays = getDays(new Date("Dec 01, 2022"))
    expect(remainingDays > 0).toBe(true)
  })

  test("it should return a negative number", () => {
    const remainingDays = getDays(new Date("Dec 26, 2022"))
    expect(remainingDays < 0).toBe(true)
  })

  test("it should return a zero", () => {
    const remainingDays = getDays(new Date("Dec 25, 2022"))
    expect(remainingDays).toBe(0)
  })
})
