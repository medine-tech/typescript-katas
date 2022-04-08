import { describe, expect, test } from "vitest"
import validateLetter from "../../grinchLetter/validateLetter"

describe("Testing validateLetter", () => {
  test("it should return true with the letter one", () => {
    const letter = "bici coche (balón) bici coche peluche"
    const validLetter = validateLetter(letter)

    expect(validLetter).toBe(true)
  })

  test("it should return true with the letter two", () => {
    const letter = "(muñeca) consola bici"
    const validLetter = validateLetter(letter)

    expect(validLetter).toBe(true)
  })

  test("it should return false with the letter three", () => {
    const letter = "bici coche (balón bici coche"
    const validLetter = validateLetter(letter)

    expect(validLetter).toBe(false)
  })
  //
  // test("it should return false with the letter four", () => {
  //   const letter = "peluche (bici [coche) bici coche balón"
  //   const validLetter = validateLetter(letter)
  //
  //   expect(validLetter).toBe(true)
  // })
  //
  // test("it should return true with the letter five", () => {
  //   const letter = "(peluche {) bici"
  //   const validLetter = validateLetter(letter)
  //
  //   expect(validLetter).toBe(false)
  // })
  //
  // test("it should return true with the letter six", () => {
  //   const letter = "() bici"
  //   const validLetter = validateLetter(letter)
  //
  //   expect(validLetter).toBe(true)
  // })
})
