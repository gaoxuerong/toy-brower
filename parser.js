const EOF = Symbol('EOF')// end of file
function data (c) {
  if(c === '<') {
    return tagOpen
  } else if (c=== EOF) {
    return ;
  } else {
    return data
  }
}
function tagOpen(c) {
  if (c === '/') {
    return endTagName
  } else if (c.match(/^[a-zA-Z]$/)) {
    return tagName
  } else if (c==='>') {
    return data
  } else {
    return tagName
  }
}
function tagName(c) {

}
module.exports.parseHTML = function parseHTML(html){
  let state = data
  for(let c of html) {
    state = state(c)
  }
  state = state(EOF)
}