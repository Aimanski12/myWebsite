import anime from 'animejs'

export function introOverlay (x, y, overLay, cover, bkgColor) {

  // set the overlay div to display block
  overLay.style.display = 'block'

  // set the cover div to where the pointer is
  cover.style.top = `${y}px`
  cover.style.left = `${x}px`
  cover.style.background = `#${bkgColor}`

  let r = radius(x, y)

  // animate the div
  setTimeout(function () {
    anime({
      duration: 450,
      targets: cover,
      top: `${(r - y) * -1}px`,
      left: `${(r - x) * -1}px`,
      width: `${(r * 2) + 10}px`,
      height: `${(r * 2) + 10}px`,
      easing: 'easeInOutQuad'
    });
  }, 50)
}

// calculate the radius
const radius = (x, y) => {
  let r1 = Math.sqrt((x * x) + (y * y))
  let x1 = x - window.innerWidth
  let r2 = Math.sqrt((x1 * x1) + (y * y))
  if (r1 > r2) return r1
  if (r2 > r1) return r2
}