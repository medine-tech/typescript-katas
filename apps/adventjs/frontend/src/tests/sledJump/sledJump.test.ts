import {describe, expect, test} from "vitest"
import {sledJump} from '../../sledJump/sledJump';

describe("Testing sledJump.ts", () => {
    test("it should valid case one", () => {

        const heights = [1, 2, 3, 2, 1]

        expect(sledJump(heights)).toBe(true)

    })

    test("it should valid case two", () => {

        const heights = [0, 3, 2, 1]

        expect(sledJump(heights)).toBe(true)

    })

    test("it should valid case four", () => {

        const heights = [2, 4, 4, 6, 2]

        expect(sledJump(heights)).toBe(false)

    })

    test("it should valid case five", () => {

        const heights = [1, 2, 3]

        expect(sledJump(heights)).toBe(false)

    })
})
