/**
 * @remarks:
 * 函数柯里化
 * 每一次递归, 都要检查当前层级是否到达了嵌套的上限
 * 一旦触碰到边界, 就执行边界逻辑 => 回调函数
 * 柯里化的过程，是层层“记忆”每个参数的过程。每一层嵌套函数，都有它需要去“记住”的参数。
 * 如果我们递归到某一层，发现此时已经没有“待记忆”的参数了，那么就可以认为，当前已经触碰到了递归边界。
 *
 * @param Function[]
 * @return Function
 *
 */
export function curry(func) {
  // 存储需要柯里化的函数的参数数量
  const arity = func.length
  // 创建嵌套函数
  function generateCurried(prevArgs) {
    // 必定返回一层嵌套
    return function curried(nextArg) {
      // args为目前 已记忆的 + 未记忆的参数
      const args = [...prevArgs, nextArg]
      if (args.length >= arity) {
        // 参数数量 >= 应有参数数量
        // 认为已经触碰了边界, 则执行回调
        return func(...args)
      }
      else {
        // 没有触碰边界的话, 再创造一层新的嵌套
        return generateCurried(args)
      }
    }
  }

  // 返回初始化状态, 表示还没有记住任何参数
  return generateCurried([])
}
