import { describe, expect, test } from "vitest"
import wrapGifts from "../../wrapGifts/wrapGifts"

describe("Testing wrapGifts", () => {

    test("it should return an empty array", () => {
        const wrappingGift  = wrapGifts([]);
        expect(wrappingGift).toEqual([])
    })

    test("it should return two gifts", () => {
        const wrappingGift  = wrapGifts(["📷", "⚽️"]);
        expect(wrappingGift).toEqual([
            '****',
            '*📷*',
            '*⚽️*',
            '****'
        ])

    })

    test("it should return two wrapped gifts", () => {
        const wrappingGift  = wrapGifts(["🏈🎸", "🎮🧸"]);
        expect(wrappingGift).toEqual([
            '******',
            '*🏈🎸*',
            '*🎮🧸*',
            '******'
        ])

    })

    test("it should return one gift", () => {
        const wrappingGift  = wrapGifts(["📷"]);
        expect(wrappingGift).toEqual([
            '****',
            '*📷*',
            '****'
        ])


        test("it should return two wrapped gifts", () => {
            const wrappingGift  = wrapGifts(["🏈🎸📷", "🎮🧸📷"]);
            expect(wrappingGift).toEqual([
                '*******',
                '*🏈🎸📷*',
                '*🎮🧸📷*',
                '*******'
            ])

        })

    })
})