import { describe, expect, test } from "vitest"
import countDecorations from "../../countDecorations/countDecorations"

describe("Testing countDecorations", () => {
  test("it should return tree result", () => {
    const tree = {
      value: 1, // el nodo raíz siempre es uno, porque es la estrella ⭐
      left: {
        value: 2, // el nodo izquierdo necesita dos decoraciones
        left: null, // no tiene más ramas
        right: null, // no tiene más ramas
      },
      right: {
        value: 3, // el nodo de la derecha necesita tres decoraciones
        left: null, // no tiene más ramas
        right: null, // no tiene más ramas
      },
    }

    const countDecoration = countDecorations(tree)
    expect(countDecoration).toBe(6)
  })

  test("it should return bigTree result", () => {
    const bigTree = {
      value: 1,
      left: {
        value: 5,
        left: {
          value: 7,
          left: {
            value: 3,
            left: null,
            right: null,
          },
          right: null,
        },
        right: null,
      },
      right: {
        value: 6,
        left: {
          value: 5,
          left: null,
          right: null,
        },
        right: {
          value: 1,
          left: null,
          right: null,
        },
      },
    }

    const countDecoration = countDecorations(bigTree)
    expect(countDecoration).toBe(28)
  })
})
