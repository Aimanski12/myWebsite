import anime from 'animejs'


export function hover (e, event) {

  let parent = e.target.closest('.menu-list-container')
  let backer = parent.querySelector('.menu-list-backer')
  
  if(!e.target.classList.contains('active')){
    if(event === 'hoverIn'){
      animateFonts(backer, '#2C6664', 20)
      animateFonts(e.target, '#C6C4AF', 5)
    } else {
      animateFonts(e.target, '#2C6664', 0)
      animateFonts(backer, '#0C5D5A', 0)
    }
  }
}










// export function mouseOut(e) {
//   let parent = e.target.closest('.menu-list-container')
//   let backer = parent.querySelector('.menu-list-backer')
  

//   if(!e.target.classList.contains('active')){
//     // let b = el.nextElementSibling.firstElementChild
//     animateFonts(e.target, '#2C6664', 0)
//     animateFonts(backer, '#0C5D5A', 0)
//   }
// }


function animateFonts(el, color, y){
  anime({
    targets: el,
    duration: 200,
    color: color,
    translateY: `${-y}px`,
    easing: 'easeInQuad'
  })
}

