import anime from 'animejs'

export function mouseEnter (e, event) {
  let parent = e.target.closest('.menu-list-container')
  let backer = parent.querySelector('.menu-list-backer')

  let elementParent = e.target.closest('.list-front')
  
  if(!elementParent.classList.contains('active')){
    if(event === 'hoverIn'){
      animateFonts(backer, '#267572', -20)
      animateFonts(e.target.parentElement, '#C6C4AF', -7)
      animateFonts(e.target, '#C6C4AF', -7)
    } else {
      animateFonts(e.target, '#2C6664', -5)
      animateFonts(backer, '#0C5D5A', -20)
    }
  }
}

export function mouseOut(e) {
  let elementParent = e.target.closest('.list-front')
  let parent = e.target.closest('.menu-list-container')
  let backer = parent.querySelector('.menu-list-backer')
  

  if(!elementParent.classList.contains('active')){
    // let b = el.nextElementSibling.firstElementChild 
    animateFonts(e.target.parentElement, '#267572', 0)
    animateFonts(e.target, '#267572', 0)
    animateFonts(backer, '#0C5D5A', 0)
  }
}

function animateFonts(el, color, y) {
  anime({
    targets: el,
    duration: 200,
    color: color,
    translateY: `${y}px`,
    easing: 'easeInQuad'
  })
}
