import {describe, expect, test} from "vitest";
import countPackages from "../../deliverPackages/countPackages";

describe('Count packages', () => {
    test('It should return 9', () => {
        const carriers = [
            ['dapelu', 5, ['midu', 'jelowing']],
            ['midu', 2, []],
            ['jelowing', 2, []]
        ]
        const result = countPackages(carriers, 'dapelu')

        expect(result).toBe(9)
    })

    test('It should return 9', () => {
        const carriers = [
            ['lolivier', 8, ['camila', 'jesuspoleo']],
            ['camila', 5, ['sergiomartinez', 'conchaasensio']],
            ['jesuspoleo', 4, []],
            ['sergiomartinez', 4, []],
            ['conchaasensio', 3, ['facundocapua', 'faviola']],
            ['facundocapua', 2, []],
            ['faviola', 1, []]
        ]
        const result = countPackages(carriers, 'camila')

        expect(result).toBe(15)
    })

    test('It should return 0', () => {
        const carriers = []
        const result = countPackages(carriers, 'camila')

        expect(result).toBe(0)
    })
})