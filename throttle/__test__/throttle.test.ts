import { throttle } from './../index'
import { describe, expect, it, vi } from 'vitest'

describe('throttle', () => {
  it('happy path', () => {
    let count = 0
    const increaseCount = () => {
      count += 1
    }
    let callCount = 0
    const throttled = throttle(increaseCount, 100)
    vi.useFakeTimers()
    const timer = setInterval(() => {
      callCount += 1
      throttled()
      if (10 === callCount) {
        clearTimeout(timer)
      }
    }, 10)
    vi.runAllTimers()

    expect(count).toBe(1)
  })
})
