import {describe, expect, test} from "vitest";
import learn from "../../Learn/learn";

describe('learn', ()=>{
    test('Debe devolver arreglo con los indices de dos cursos', ()=>{
        const courses = learn(10, [2, 3, 8, 1, 4])!

        expect(Array.isArray(courses)).toBe(true)
        expect(courses.length).toBe(2)
        expect(courses).toEqual([ 0, 2 ])
    })

    test('Debe devolver null', ()=>{
        const courses = learn(5, [5, 5, 5])

        expect(courses).toBe(null)
    })
})