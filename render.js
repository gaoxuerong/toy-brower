const images = require('images')

function render(viewport, element) {
  if (element && element.style) {
    const img = images(element.style.width, element.style.height)
    if (element.style["backgroundColor"]) {
      let color = element.style["backgroundColor"] || "rgb(0,0,0)"
      color.replace(/\s+/g, '').match(/rgb\((\d+),(\d+),(\d+)\)/)
      img.fill(Number(RegExp.$1), Number(RegExp.$2), Number(RegExp.$3), 1)
      viewport.draw(img, element.style.left || 0, element.style.top || 0)
    }
  }
  // 递归
  if (element && element.children) {
    for (let child of element.children) {
      // console.log('child', child)
      render(viewport, child)
    }
  }
}

module.exports = render