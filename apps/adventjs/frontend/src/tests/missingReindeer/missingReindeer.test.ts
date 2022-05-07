import { describe, expect, test } from "vitest"
import missingReindeer from "../../missingReindeer/missingReindeer"

describe("Testing in exercise 16", () => {
  test("should return 1", () => {
    const data = [0, 2, 3]

    const response = missingReindeer(data)

    expect(response).toBe(1)
  })

  test("should return 4", () => {
    const data = [5, 6, 1, 2, 3, 7, 0]

    const response = missingReindeer(data)

    expect(response).toBe(4)
  })

  test("should return 2", () => {
    const data = [0, 1]

    const response = missingReindeer(data)

    expect(response).toBe(2)
  })

  test("should return 2", () => {
    const data = [3, 0, 1]

    const response = missingReindeer(data)

    expect(response).toBe(2)
  })

  test("should return 8", () => {
    const data = [9, 2, 3, 5, 6, 4, 7, 0, 1]

    const response = missingReindeer(data)

    expect(response).toBe(8)
  })

  test("should return 1", () => {
    const data = [0]

    const response = missingReindeer(data)

    expect(response).toBe(1)
  })

  test("missing value 0", () => {
    const data = [1, 2, 3]

    const response = missingReindeer(data)

    expect(response).toBe(0)
  })
})
