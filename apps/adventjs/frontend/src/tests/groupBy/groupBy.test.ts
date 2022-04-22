import { describe, expect, test } from "vitest"
import groupBy from "../../groupBy/groupBy"

describe("Testing groupBy.ts", () => {
  test("it should valida case one", () => {
    const value = groupBy<number, (number: number) => number>([6.1, 4.2, 6.3], Math.floor)
    expect(value).toEqual({ 6: [6.1, 6.3], 4: [4.2] })
  })

  test("it should valida case two", () => {
    const value = groupBy(["one", "two", "three"], "length")
    expect(value).toEqual({ 3: ["one", "two"], 5: ["three"] })
  })

  test("it should valida case three", () => {
    const value = groupBy([{ age: 23 }, { age: 24 }], "age")
    expect(value).toEqual({ 23: [{ age: 23 }], 24: [{ age: 24 }] })
  })

  test("it should valida case four", () => {
    const value = groupBy(
      [1397639141184, 1363223700000],
      timestamp => new Date(timestamp).getFullYear()
    )
    expect(value).toEqual({ 2013: [1363223700000], 2014: [1397639141184] })
  })

  test("it should valida case five", () => {
    const value = groupBy([
      { title: "JavaScript: The Good Parts", rating: 8 },
      { title: "Aprendiendo Git", rating: 10 },
      { title: "Clean Code", rating: 9 }
    ], "rating")

    expect(value).toEqual({
      8: [{ title: "JavaScript: The Good Parts", rating: 8 }],
      9: [{ title: "Clean Code", rating: 9 }],
      10: [{ title: "Aprendiendo Git", rating: 10 }]
    })
  })


})
