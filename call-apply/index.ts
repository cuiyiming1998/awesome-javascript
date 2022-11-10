import { getRandomString } from "../shared/random"

// 因为内部要使用this 所以不能使用箭头函数
export const myCall = function (context: Record<string, any>, ...args) {
	// 1. 确定要执行的this指向
	// 如果context是false 则指向window
	const self = context

	// 将方法作为属性绑定给self 用symbol是为了防止冲突
	let prop = getRandomString()
	//
	self[prop] = this
	const res = self[prop](...args)

	return res
}
