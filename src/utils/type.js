export const getType = v =>
  v === undefined ? 'undefined' : v === null ? 'null' : v.constructor.name.toLowerCase()

export const isEmpty = val => val == null || !(Object.keys(val) || val).length

export const isString = val => typeof val === 'string'

export const isObject = obj => obj === Object(obj)
