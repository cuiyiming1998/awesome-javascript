import { describe, it, expect } from "vitest"
import { deepClone } from ".."

describe('deepClone', () => {
  it('happy path', () => {
    const obj = {
      name: 'test',
      obj2: {
        age: 12
      }
    }

    const copy = deepClone(obj)

    expect(copy).toStrictEqual(obj)
  })
})