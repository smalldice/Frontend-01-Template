// 匹配一段字符的数字
const reg = /((0(x|o|b){1})[1-9]{1,8})|\d?\.\d+|\d+/g

const a = 'a44b123123c1.234b0x1212214'

console.log(a.match(reg))
