function sleep(time) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve()
    }, time)
  })
}

var a = (async function* foo() {
  var i = 0
  while (true) {
    console.log(i)
    yield i++
    await sleep(1000)
  }
})()
;(async function () {
  for await (p of a) {
  }
})()
