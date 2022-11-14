// 判断是否是function
export const isFunc = (fn: any): boolean => {
  return 'function' === typeof fn
}

// 判断是否是object
export const isObj = (obj: any): boolean => {
  return 'object' === typeof obj
}