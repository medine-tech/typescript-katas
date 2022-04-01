import { describe, expect, test } from "vitest"
import { filterSheeps } from "../Sheeps/countSheeps"

describe("countSheeps test", () => {
  const sheeps = [
    { name: "Noa", color: "azul" },
    { name: "Euge", color: "rojo" },
    { name: "Navidad", color: "rojo" },
    { name: "Ki Na Ma", color: "rojo" },
    { name: "AAAAAaaaaa", color: "rojo" },
    { name: "Nnnnnnnn", color: "rojo" },
  ]

  const expectedSheeps = [
    { name: "Navidad", color: "rojo" },
    { name: "Ki Na Ma", color: "rojo" },
  ]

  test("it should return a valid value", () => {
    const filteredSheeps = filterSheeps(sheeps)

    expect(filteredSheeps).toEqual(expectedSheeps)
  })

  test("it should return null", () => {
    const sheeps = [{ name: "ee", color: "yellow" }]
    const filteredSheeps = filterSheeps(sheeps)

    expect(filteredSheeps).toEqual([])
  })
})
