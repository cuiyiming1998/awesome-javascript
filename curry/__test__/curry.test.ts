import { describe, expect, it } from 'vitest'
import { curry } from '..'
import { pipe } from '../../pipe'

describe('curry', () => {
  it('happy path', () => {
    const add = (a, b, c, d, e) => {
      return a + b + c + d + e
    }
    const curried = curry(add)
    const res = curried(1)(2)(3)(4)(5)
    expect(res).toBe(15)
  })

  it('pipe + curry', () => {
    function add(a, b) {
      return a + b
    }

    function multiply(a, b, c) {
      return a * b * c
    }

    function addMore(a, b, c, d) {
      return a + b + c + d
    }

    function divide(a, b) {
      return a / b
    }

    // 不可以直接放进pipe, 需要先curry
    const curriedAdd = curry(add)
    const curriedMultiply = curry(multiply)
    const curriedAddMore = curry(addMore)
    const curriedDivide = curry(divide)

    const compute = pipe(
      curriedAdd(1),
      curriedMultiply(2)(3),
      curriedAddMore(1)(2)(3),
      curriedDivide(300),
    )
    const res = compute(3)
    expect(res).toBe(10)
  })
})
