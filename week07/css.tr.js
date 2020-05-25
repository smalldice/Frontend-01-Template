var list = document.getElementById('container').children

var result = []

for (let li of list) {
  if (li.getAttribute('data-tag').match('css')) {
    result.push({
      stage: li.children[0].innerText,
      name: li.children[1].innerText,
      url: li.children[1].children[0].href
    })
  }
}

console.log(JSON.stringify(result))
