/**
 * description
 * 防抖
 * @remarks:
 * 第一次触发事件时, 不立即执行函数, 等delay后执行
 * 如果期间再次执行了, 那么清除定时器 重新赋值
 *
 * @param x
 * @return z
 *
 */
export const debounce = (fn: Fn, delay: number) => {
	let timer: NodeJS.Timeout | null = null
	return function () {
		if (timer) {
			clearTimeout(timer)
		}
		timer = setTimeout(fn, delay)
	}
}
