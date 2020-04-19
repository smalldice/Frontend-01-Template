
function checkoutBasicChars () {
  printChars(0, 128, 'basic', true)
}

function checkoutCJKChars () { 
  printChars(0x4E00, 0x9FFF, 'cjk')
}

function printChars (start, end, eleId, needBr) {
  let str = ''
  for (let i = start; i < end; i++) {
    const char = String.fromCharCode(i)
    str += `${i}<span style="background:lightgreen">${char}</span>${needBr ? '<br/>' : '\t'}`
  }

  document.getElementById(eleId).innerHTML = str
}

checkoutBasicChars()
checkoutCJKChars()
