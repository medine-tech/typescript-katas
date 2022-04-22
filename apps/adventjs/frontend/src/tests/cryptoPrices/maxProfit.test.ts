import { describe, expect, test } from "vitest"
import { maxProfit } from "../../cryptoPrices/maxProfit"

describe("Calculate max profit from array of prices", () => {
  const pricesBtc = [39, 18, 29, 25, 34, 32, 5]
  const pricesDoge = [18, 15, 12, 11, 9, 7]
  const pricesAda = [3, 3, 3, 3, 3]

  test("Should get max profit", () => {
    expect(maxProfit(pricesBtc)).toBe(16)
  })

  test("Should return -1 for no profit", () => {
    expect(maxProfit(pricesDoge)).toBe(-1)
  })

  test("Should return -1 for no profit", () => {
    expect(maxProfit(pricesAda)).toBe(-1)
  })
})
