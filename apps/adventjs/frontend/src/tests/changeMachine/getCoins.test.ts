import {describe, expect, test} from "vitest";
import {getCoins} from "../../changeMachine/getCoins";

describe('Testing changeMachine', ()=>{
    test('Debe devolver un arreglo con la cantidad de monedas para cambio de 51', ()=>{

        const result = getCoins(51)

        expect(typeof result).toBe('object')
        expect(result.length).toBe(6)
        expect(result).toEqual([1, 0, 0, 0, 0, 1])
    })

    test('Debe devolver un arreglo con la cantidad de monedas para cambio de 3', ()=>{

        const result = getCoins(3)

        expect(typeof result).toBe('object')
        expect(result.length).toBe(6)
        expect(result).toEqual([1, 1, 0, 0, 0, 0])
    })

    test('Debe devolver un arreglo con la cantidad de monedas para cambio de 5', ()=>{

        const result = getCoins(5)

        expect(typeof result).toBe('object')
        expect(result.length).toBe(6)
        expect(result).toEqual([0, 0, 1, 0, 0, 0])
    })

    test('Debe devolver un arreglo con la cantidad de monedas para cambio de 16', ()=>{

        const result = getCoins(16)

        expect(typeof result).toBe('object')
        expect(result.length).toBe(6)
        expect(result).toEqual([1, 0, 1, 1, 0, 0])
    })

    test('Debe devolver un arreglo con la cantidad de monedas para cambio de 100', ()=>{

        const result = getCoins(100)

        expect(typeof result).toBe('object')
        expect(result.length).toBe(6)
        expect(result).toEqual([0, 0, 0, 0, 0, 2])
    })
})