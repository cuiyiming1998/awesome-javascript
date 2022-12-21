import { describe, it, expect } from "vitest"
import { pipe } from ".."

describe('deepClone', () => {
  it('happy path', () => {
    const add4 = num => num +4
    const mutiply3 = num => num * 3
    const divide2 = num => num / 2

    const computed = pipe(add4, mutiply3, divide2)
    const res = computed(10)
    expect(res).toBe(21)
  })
})