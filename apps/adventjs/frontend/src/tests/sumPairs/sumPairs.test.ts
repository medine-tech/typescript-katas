import { describe, expect, test } from "vitest"
import sumPairs from "../../sumPairs/sumPairs"

describe("Test in sumPairs", () => {
  test("should return an array two values", () => {
    const data = [3, 5, 7, 2]
    const result = 10

    const response = sumPairs(data, result)

    console.log("test: ", response)

    expect(response).toEqual([3, 7])
    // expect(response?.length).toBe(2)
  })

  test("should return an array two values", () => {
    const data = [0, 2, 2, 3, -1, 1, 5]
    const result = 6

    const response = sumPairs(data, result)

    console.log("test: ", response)

    expect(response).toEqual([1, 5])
  })

  test("should return an array two values", () => {
    const data = [-3, -2, 7, -5]
    const result = 10

    const response = sumPairs(data, result)

    console.log("test: ", response)

    expect(response).toEqual(null)
  })

  test("should return an array two values", () => {
    const data = [2, 2, 3, 1]
    const result = 4

    const response = sumPairs(data, result)

    console.log("test: ", response)

    expect(response).toEqual([2, 2])
  })

  test("should return an array two values", () => {
    const data = [6, 7, 1, 2]
    const result = 8

    const response = sumPairs(data, result)

    console.log("test: ", response)

    expect(response).toEqual([6, 2])
  })
})
