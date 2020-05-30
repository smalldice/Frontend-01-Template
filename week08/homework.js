function match(selector, element) {
  const elementId = element.getAttribute('id')
  if (!elementId) return false
  return !!selector.match(`#${elementId}`)
}

function createElement() {
  const element = document.createElement('div')
  element.setAttribute('id', 'id')
  return element
}
// 用例
console.log(match('div #id.class', createElement())) // true
