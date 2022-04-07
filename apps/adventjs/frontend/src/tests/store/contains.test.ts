import { describe, expect, test } from "vitest"
import { contains } from "../../store/contains"

describe("test0", () => {
    const almacen = {
        'estanteria1': {
          'cajon1': {
            'producto1': 'coca-cola',
            'producto2': 'fanta',
            'producto3': 'sprite'
          }
        },
        'estanteria2': {
          'cajon1': 'vacio',
          'cajon2': {
            'producto1': 'pantalones',
            'producto2': 'camiseta' // <- ¡Está aquí!
          }
        }
      }



    test("it should", () => {
        const exitProduct = contains(almacen, 'camiseta');

        console.log('here',exitProduct)
    })
})