function sleep(val) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve()
    }, val)
  })
}

var a = (async function* foo() {
  var i = 0
  while (true) {
    console.log(i)
    yield i++
    await sleep(i + 1000)
  }
})()

a.next()

a.next()

a.next()

a.next()

a.next()

a.next()

a.next()

a.next()

a.next()

a.next()

a.next()

a.next()

a.next()

a.next()

a.next()
