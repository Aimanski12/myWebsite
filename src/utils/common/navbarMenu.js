import {navHoverElements} from './elementSorter'
import anime from 'animejs'


export function mouseEnter () {
  const el = navHoverElements()
  
  anime({
    targets: el.front,
    color: '#0C5E5A',
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
    background: '#EBE9CD',
    duration: 200,
    width: '90%',
    height: '90%',
    easing: 'easeOutSine'
  })
}

export function mouseOut () {
  const el = navHoverElements()
  anime({
    targets: el.front,
    color: '#EBE9CD',
    duration: 200,
    easing: 'easeInQuad'
  })
  anime({
    targets: el.middle,
    background: '#313D43',
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