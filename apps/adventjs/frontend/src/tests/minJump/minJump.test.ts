import {describe, expect, test} from 'vitest';
import {getMinJump} from "../../minJump/getMinJump";


describe('Search to jump minimum', () =>{

  test('Jump minimum 1', () => {
    expect(getMinJump([1, 2, 3, 5])).toEqual(4)
  })

  test('Jump minimum 2', () => {
    expect(getMinJump([3, 7, 5])).toEqual(2)
  })

  test('Jump minimum 2', () => {
    expect(getMinJump([9, 5, 1]) ).toEqual(2)
  })

})
