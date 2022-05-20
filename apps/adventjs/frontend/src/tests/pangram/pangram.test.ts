import {describe, expect, test} from "vitest";
import {pangram} from "../../pangram/pangram";

describe("Validate if you have all the letters of the alphabet.", () => {

    test("Should have all the letters of the alphabet", () => {
        const result1 = pangram('Extraño pan de col y kiwi se quemó bajo fugaz vaho') // true
        const result2 = pangram('Jovencillo emponzoñado y con walkman: ¡qué figurota exhibes!') // true

        expect(result1).toBe(true);
        expect(result2).toBe(true);
    })

    test("it should not have all the letters of the alphabet", () => {
        const result1 = pangram('Esto es una frase larga pero no tiene todas las letras del abecedario') // false
        const result2 = pangram('De la a a la z, nos faltan letras') // false

        expect(result1).toBe(false)
        expect(result2).toBe(false)
    })
})
