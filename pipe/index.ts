export const pipe = (...funcs) => {
  function callback(input, func) {
    return func(input)
  }

  return function (param) {
    return funcs.reduce(callback, param)
  }
}
