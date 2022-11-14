import { getRandomString } from '../shared/random'

// 因为内部要使用this 所以不能使用箭头函数
export const myCall = function (context: Recordable<any>, ...args) {
  // 1. 确定要执行的this指向
	// 如果context是false 则指向window
	const self = context
	// 2. 将方法作为属性绑定给self 用symbol是为了防止冲突
	// this就是前面调用call的function
	let prop = getRandomString()
	self[prop] = this
	// 3. 执行function获取结果
	const res = self[prop](...args)
	// 4. 返回
	return res
}
