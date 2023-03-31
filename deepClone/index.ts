import { isObj } from './../shared/is/index'
export function deepClone(obj: Recordable<any>): Recordable<any>
export function deepClone(obj: any[]): any[]
export function deepClone(
  obj: Recordable<any> | any[],
): Recordable<any> | any[] {
  const res = Array.isArray(obj) ? [] : {}

  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      const isObject: boolean = isObj(obj[key]) && obj[key] !== null
      res[key] = isObject ? deepClone(obj[key]) : obj[key]
    }
  }

  return res
}
