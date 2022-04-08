import { describe, expect, test } from "vitest"
import { filterSheep } from "../sheep/countSheep"

describe("countSheep test", () => {
  const sheep = [
    { name: "Noa", color: "azul" },
    { name: "Euge", color: "rojo" },
    { name: "Navidad", color: "rojo" },
    { name: "Ki Na Ma", color: "rojo" },
    { name: "AAAAAaaaaa", color: "rojo" },
    { name: "Nnnnnnnn", color: "rojo" },
  ]

  const expectedSheep = [
    { name: "Navidad", color: "rojo" },
    { name: "Ki Na Ma", color: "rojo" },
  ]

  test("it should return a valid value", () => {
    const filteredSheep = filterSheep(sheep)

    expect(filteredSheep).toEqual(expectedSheep)
  })

  test("it should return null", () => {
    const sheep = [{ name: "ee", color: "yellow" }]
    const filteredSheep = filterSheep(sheep)

    expect(filteredSheep).toEqual([])
  })
})
