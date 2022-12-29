/**
 * description
 * 节流
 *
 * @remarks:
 * 相当于给函数一个阀门, 让函数执行之后 在delay时间内暂时失效
 * 过了delay时间后再次执行
 *
 * @param x
 * @return z
 *
 */
export const throttle = (fn: Fn, delay: number) => {
  let valid = true
  return function () {
    if (!valid) {
      return false
    }
    valid = false
    setTimeout(() => {
      fn()
      valid = true
    }, delay)
  }
}
