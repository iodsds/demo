// 数组求和
export function sum(arr) {
	return arr.reduce((prev, next) => prev + next, 0)
}
// 数据类型判断
export function typeOf(obj) {
	return Object.prototype.toString.call(obj).slice(8, -1)
}
// 判断数据类型
export function isType(type) {
	return function(obj) {
		return Object.prototype.toString.call(obj) === `[object ${type}]`
	}
}

log = console.log.bind(console)

log(111)
