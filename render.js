const images = require('images')

function render(viewport, element) {
  if (element.style) {
    let img = images(element.style.width, element.style.height)

    if (element.style.backgroundColor) {
      let color = element.style.backgroundColor || 'rgb(0, 0, 0)'
      color.replace(/\s+/g, '').match(/rgb\((\d+),(\d+),(\d+)\)/)
      img.fill(Number(RegExp.$1), Number(RegExp.$2), Number(RegExp.$3), 1)
      console.log(img, element.style.left || 0, element.style.top || 0)
      viewport.draw(img, element.style.left || 0, element.style.top || 0)
    }
  }

  if (element.children) {
    for (let child of element.children) {
      render(viewport, child)
    }
  }
}

module.exports = render