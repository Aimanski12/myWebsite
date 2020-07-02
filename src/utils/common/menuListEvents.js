import anime from 'animejs'


export function mouseEnter (e) {
  let el = e.target.parentElement
  let active = el.classList.contains('active')

  if(!active){
    let b = el.nextElementSibling.firstElementChild
    animateFonts(e.target, '#C6C4AF', 5)
    animateFonts(b, '#2C6664', 20)
  }
}


export function mouseOut(e) {
  let el = e.target.parentElement
  let active = el.classList.contains('active')

  if (!active) {
    let b = el.nextElementSibling.firstElementChild
    animateFonts(e.target, '#2C6664', 0)
    animateFonts(b, '#0C5D5A', 0)
  }
}


function animateFonts(el, color, y){
  anime({
    targets: el,
    duration: 200,
    color: color,
    translateY: `${-y}px`,
    easing: 'easeInQuad'
  })
}

