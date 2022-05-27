import { describe, expect, test } from "vitest"
import {shouldBuyFidelity} from "../../loyaltyCard/shouldBuyFidelity";

describe("Testing shouldBuyFidelity", () => {

    test("when to buy the loyalty card", () => {
        expect(shouldBuyFidelity(50)).toBe(true)
    })

    test("when not to buy the loyalty card", () => {
        expect(shouldBuyFidelity(10)).toBe(false)
    })
})
