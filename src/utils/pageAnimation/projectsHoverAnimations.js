import {hoverProjectEl} from '../common/elementSorter'
import anime from 'animejs'


// function to run when mouse enters the project element
export function mouseEnter(e, color) {
  e.stopPropagation()
  const el = hoverProjectEl(e.target)
  if(window.innerWidth > 868) {
    anime({
      targets: el.img,
      scale: 1.05,
      duration: 300,
      easing: 'easeOutSine'
    });
    anime({
      targets: el.img_backer,
      opacity: 0,
      duration: 300,
      easing: 'easeOutSine'
    });
    anime({
      targets: [el.title, el.desc],
      opacity: 0,
      translateY: '30%',
      duration: 300,
      easing: 'easeOutSine'
    });
    anime({
      targets: el.button,
      opacity: 1,
      background: color,
      duration: 300,
      easing: 'easeOutSine'
    });
  }
  
}

// function to run then mouse leaves the project element
export function mouseOut(e) {
  e.stopPropagation()
  const el = hoverProjectEl(e.target)

  if(window.innerWidth > 868) {
    anime({
      targets: el.img,
      scale: 1,
      duration: 300,
      easing: 'easeOutSine'
    });
    anime({
      targets: el.img_backer,
      opacity: 0.8,
      duration: 300,
      easing: 'easeOutSine'
    });
    anime({
      targets: [el.title, el.desc],
      opacity: 1,
      translateY: '0%',
      duration: 300,
      easing: 'easeOutSine'
    });
    anime({
      targets: el.button,
      opacity: 0,
      duration: 300,
      easing: 'easeOutSine'
    });
  }
}

// function to run when the screen is resize less than or greater than 868
// this will put the opacity or scaling back to its original size
export function resizeEls () {
  const p = document.querySelectorAll('.projects-wrapper')
  if(window.innerWidth <= 868){
    for (let x = 0; x < 3; x++){
      let el = hoverProjectEl(p[x])
      el.img_backer.style.opacity = 0
      el.img.style.scale = 1
      el.button.style.opacity = 1
      el.button.style.background = 'none'
    }
  } else {
    const p = document.querySelectorAll('.projects-wrapper')
    for (let x = 0; x < 3; x++) {
      let el = hoverProjectEl(p[x])
      el.img_backer.style.opacity = 0.7
      el.img.style.scale = 1
      el.button.style.opacity = 0
    }
  }
}