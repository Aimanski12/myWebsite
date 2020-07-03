import {navHoverElements} from './elementSorter'
import anime from 'animejs'

// function to run when mouse enter on menu a
export function mouseEnter (colorModes, event) {
  const el = navHoverElements()

  let front;
  if(event==='close') front = el.front
  if(event === 'open') front = el.close_paths
  anime({
    targets: front,
    color: colorModes.back,
    fill: colorModes.back,
    duration: 200,
    easing: 'easeInQuad',
    begin: function (anim) {
      el.middle.style.width = 0
      el.middle.style.height = 0
      el.middle.style.opacity = 1
    }
  })
  anime({
    targets: el.back,
    background: colorModes.main,
    duration: 150,
    width: '90%',
    height: '90%',
    easing: 'easeOutSine'
  })
}

// function to run when mouse moves out of the menu area
export function mouseOut (colorModes, event) {
  const el = navHoverElements()
  
  let front;
  if (event === 'close') front = el.front
  if (event === 'open') front = el.close_paths
  anime({
    targets: front,
    color: colorModes.main,
    fill: colorModes.main,
    duration: 200,
    easing: 'easeInQuad'
  })
  anime({
    targets: el.middle,
    background: colorModes.back,
    duration: 200,
    width: '100%',
    height: '100%',
    easing: 'easeInQuad',
    complete: function (anim) {
      el.back.style.width = 0
      el.back.style.height = 0
      setTimeout( function (){
        el.middle.style.opacity = 0
      }, 50)
    }
  })
}