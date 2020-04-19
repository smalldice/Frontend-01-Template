function UTF8_Encoding(string) {
  try {
    const back = []
    let byteSize = 0

    string.split('').forEach(char => {
      const code = char.charCodeAt(0)
      // 借鉴代码 原理还在捋清ing
      if (code >= 0x00 && code <= 0x7f) {
        byteSize += 1
        back.push(code)
      } else if(code > 0x7f && code <= 0x7ff) {
        byteSize += 2
        back.push((192 | (31 & (code >> 6))))
        back.push((128 | (63 & code)))
      } else if ((code > 0x7ff && code <= 0xd7ff) || (0xe000 <= code && code <= 0xffff)) {
        byteSize += 3;
        back.push((224 | (15 & (code >> 12))))
        back.push((128 | (63 & (code >> 6))))
        back.push((128 | (63 & code)))
      }
    })

    back.forEach(code => {
      code &= 0xff
    })
    
    if (byteSize <= 0xff) {
      return [0, byteSize].concat(back);
    } else {
      return [byteSize >> 8, byteSize & 0xff].concat(back);
    }
  } catch(e) {
    throw new Error('string must is A string')
  }
}

const string = '中'

console.log(UTF8_Encoding(string))