/*
 * @Author: xiaoning.li@inossem.com
 * @Date: 2022-07-27 16:55:50
 * @LastEditors: xiaoning.li@inossem.com
 * @LastEditTime: 2022-07-28 14:43:14
 * @Description: 数据类型检查
 */

export const isArray = (v) => Object.prototype.toString.call(v) === '[object Array]'

export const isObject = (v) => Object.prototype.toString.call(v) === '[object Object]'

export const isString = (v) => Object.prototype.toString.call(v) === '[object String]'

export const isNumber = (v) => Object.prototype.toString.call(v) === '[object Number]'

export const isBoolean = (v) => Object.prototype.toString.call(v) === '[object Boolean]'

export const isNull = (v) => Object.prototype.toString.call(v) === '[object Null]'

export const isUndefined = (v) => Object.prototype.toString.call(v) === '[object Undefined]'

export const isFunction = (v) => Object.prototype.toString.call(v) === '[object Function]'
