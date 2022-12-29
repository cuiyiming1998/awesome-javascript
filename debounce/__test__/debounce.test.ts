import { debounce } from './../index'
import { describe, expect, it, vi } from 'vitest'

describe('debounce', () => {
  it('happy path', () => {
    let count = 0
    const increaseCount = () => {
      count += 1
    }
    let callCount = 0
    const debounced = debounce(increaseCount, 100)
    vi.useFakeTimers()
    const timer = setInterval(() => {
      callCount += 1
      debounced()
      if (10 === callCount) {
        clearTimeout(timer)
      }
    }, 10)
    vi.runAllTimers()

    expect(count).toBe(1)
  })
})
