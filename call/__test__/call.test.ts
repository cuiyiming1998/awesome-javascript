import { describe, expect, it } from 'vitest'
import { myCall } from '../index'

describe('Promise', () => {
  it('happy path', () => {
    let str = 'test'
    function test(a, b) {
      str = this.name
      return a + b
    }
    Function.prototype.call = myCall

    const res = test.call({ name: 'test1' }, 1, 2)
    expect(res).toBe(3)
    expect(str).toBe('test1')
  })
})
