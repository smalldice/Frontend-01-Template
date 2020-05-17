const EOF = Symbol('EOF') // EOF end of file

let currentToken = null
let currentAttribute = null
let currentTextNode = null

let stack = [{ type: 'document', children: []}]

function emit (token) {
  let top = stack[stack.length - 1]

  if (token.type === 'startTag') {
    let element = {
      type: 'element',
      children: [],
      attributes: []
    }

    element.tagName = token.tagName

    for (let p in token) {
      if (p !== 'type' && p !== 'tagName') {
        element.attributes.push({
          name: p,
          value: token[p]
        })
      }
    }

    top.children.push(element)
    element.parent = top.type

    if (!token.isSelfClosing) {
      stack.push(element)
    }

    currentTextNode = null

  } else if (token.type === 'endTag') {
    if (top.tagName !== token.tagName) {
      throw new Error("Tag start end doesn't match!")
    } else {
      stack.pop()
    }

    currentTextNode = null
  } else if(token.type === 'text') {
    if (currentTextNode === null) {
      currentTextNode = {
        type: 'text',
        content: ''
      }
      top.children.push(currentTextNode)
    }
    currentTextNode.content += token.content
  }
}

function data (c) {
  if (c === '<') { // <
    return tagOpen
  } else if (c === EOF) {
    emit({
      type: 'EOF'
    })
    return
  } else { // 
    emit({
      type: 'text',
      content: c
    })
    return data
  }
}

function tagOpen (c) {
  if (c === '/') { // </
    return endTagOpen
  } else if (c.match(/^[a-zA-Z]$/)) { // <html
    currentToken = {
      type: 'startTag',
      tagName: ''
    }
    return tagName(c)
  } else {
    return 
  }
}

function endTagOpen (c) {
  if (c.match(/^[a-zA-Z]$/)) { // <html/
    currentToken = {
      type: 'endTag',
      tagName: ''
    }
    return tagName(c)
  } else if (c === '>') { // <>

  } else if (c === EOF) {

  } else {

  }
}

function tagName (c) {
  if (c.match(/^[\t\n\f ]$/)) {// <html 
    return beforeAttributeName;
  } else if (c === '/') {  // <html/
    return selfClosingStartTag
  } else if (c.match(/^[a-zA-Z]$/)) { // <h <ht ...
    currentToken.tagName += c.toLowerCase()
    return tagName
  } else if (c === '>') { // <html/>
    emit(currentToken)
    return data
  } else {
    return tagName
  }
}

function beforeAttributeName (c) {
  if (c.match(/^[\t\n\f ]$/)) { // <html    
    return beforeAttributeName
  } else if (c === '/' || c === '>' || c === EOF) { // <html   /
    return afterAttributeName(c)
  } else if (c === '=') { // <html =
    return
  } else { // <html m
    currentAttribute = {
      name: '',
      value: ''
    }

    return attributeName(c)
  }
}

function attributeName (c) {
  if (c.match(/^[\t\n\f ]$/) || c === '/' || c === '>' || c === EOF) { // <html m 
    return afterAttributeName(c)
  } else if (c === '=') { // <html m =
    return beforeAttributeValue
  } else if (c === '\u0000') {
    
  } else if (c ==='"' || c === '\'' || c === '<' ) { // <html m"

  } else {
    currentAttribute.name += c
    return attributeName
  }
}

function beforeAttributeValue (c) {
  if (c.match(/^[\t\n\f ]$/) || c === '/' || c === '>' || c === EOF) {
    return beforeAttributeValue
  } else if (c === '"') { // <html m="
    return doubleQuotedAttributeValue
  } else if (c === '\'') {// <html m='
    return singleQuotedAttributeValue
  } else if (c === '>') {// // <html m=>

  } else {
    return UnquotedAttributeValue(c)
  }
}

function UnquotedAttributeValue (c) {
  if (c.match(/^[\t\n\f ]$/)) { // <html maaa=a
    currentToken[currentAttribute.name] = currentAttribute.value
    return beforeAttributeName
  } else if (c === '/') { // <html maaa=a/
    currentToken[currentAttribute.name] = currentAttribute.value
    return selfClosingStartTag
  } else if (c === '>') { // <html maaa=a>
    console.log('tag end')
    currentAttribute[currentAttribute.name] = currentAttribute.value
    emit(currentToken)
    return data
  } else if (c === '\u0000') {
    
  } else if (c === '"' || c === '\'' || c === '<' || c === '=' || c === '`') { 

  } else if (c === 'EOF') {

  } else {
    currentAttribute.value += c
    return UnquotedAttributeValue
  }
}

function doubleQuotedAttributeValue (c) {
  if (c === '"') {
    currentToken[currentAttribute.name] = currentAttribute.value
    return afterDoubleQuotedAttributeName
  } else if (c === '\u0000') {
    
  } else if (c === 'EOF') {

  } else {
    currentAttribute.value += c;
    return doubleQuotedAttributeValue
  }
}

function singleQuotedAttributeValue (c) {
  if (c === '\'') {
    currentToken[currentAttribute.name] = currentAttribute.value
    return afterSingleQuotedAttributeName
  } else if (c === '\u0000') {
    
  } else if (c === 'EOF') {

  } else {
    currentAttribute.value += c;
    return singleQuotedAttributeValue
  }
}

function afterDoubleQuotedAttributeName (c) {
  if (c.match(/^[\t\n\f ]$/)) {
    return beforeAttributeName
  } else if (c === '/') {
    return selfClosingStartTag
  } else if (c === '>') {
    currentToken[currentAttribute.name] = currentAttribute.value
    emit(currentToken)
    return data
  } else if (c === EOF) {
    return data
  } else {
    currentAttribute.value += c
    return doubleQuotedAttributeValue
  }
}

function afterSingleQuotedAttributeName (c) {
  if (c.match(/^[\t\n\f ]$/)) {
    return beforeAttributeName
  } else if (c === '/') {
    return selfClosingStartTag
  } else if (c === '>') {
    currentToken[currentAttribute.name] = currentAttribute.value
    emit(currentToken)
    return data
  } else if (c === EOF) {

  } else {
    currentAttribute.value += c
    return singleQuotedAttributeValue
  }
}

function afterAttributeName (c) {
  if (c.match(/^[\t\n\f ]$/)) {
    return afterAttributeName
  } else if (c === '>') {
    emit(currentToken)
    return data
  } else {
    return data
  }
}

function selfClosingStartTag (c) {
  if (c === '>') {
    currentToken.isSelfClosing = true
    return data
  } else if (c === 'EOF') {

  } else {

  }
}

const html = `
<html maaa=a >
  <head>
    <style>
    body div #myid {
      width: 100px;
      background-color: #ff5000;
    }
    </style>
  </head>
  <body>
    <div>
      <img id="myid"/>
      <img />
    </div>
  </body>
</html>
`

function parseHTML (html) {
  let state = data

  for (let c of html) {
    state = state(c)
  }

  state = state(EOF)
  return stack[0]
}

module.exports.parseHTML = parseHTML
