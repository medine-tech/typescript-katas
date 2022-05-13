import {describe, expect, test} from "vitest"
import decodeNumber from "../../decodeNumber/decodeNumber";

describe("Testing decodeNumber", () => {

    test("it should return a number", () => {
        const symbols = '..,!';
        const number = decodeNumber(symbols);

        expect(number).toBe(95)
    })

    test("it should return a NaN", () => {
        const symbols = ';.W';
        const number = decodeNumber(symbols);

        expect(number).toBe(NaN)
    })
})