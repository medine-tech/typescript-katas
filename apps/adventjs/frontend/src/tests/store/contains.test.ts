import { describe, expect, test } from "vitest"
import { contains } from "../../store/contains"

describe("Testing validate contains", () => {
  const almacen = {
    estanteria1: {
      cajon1: {
        producto1: "coca-cola",
        producto2: "fanta",
        producto3: "sprite",
      },
    },
    estanteria2: {
      cajon1: "vacio",
      cajon2: {
        producto1: "pantalones",
        producto2: "camiseta", // <- ¡Está aquí!
      },
    },
  }

  const otroAlmacen = {
    baul: {
      fondo: {
        objeto: "cd-rom",
        "otro-objeto": "disquette",
        "otra-cosa": "mando",
      },
    },
  }

  test("it should the product exist", () => {
    const existProduct = contains(almacen, "camiseta")

    expect(existProduct).toBe(true)
  })

  test("it should the product not exist", () => {
    const existProduct = contains(otroAlmacen, "gameboy")

    expect(existProduct).toBe(false)
  })
})
