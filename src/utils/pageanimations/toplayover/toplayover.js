import anime from 'animejs'
import {topLayoverElements} from '../../common/elementSorter'
import {scrollAnimation} from '../scrollanimation/scrollanimation'

// function for intro animation
export function introAnim (hasSession, withAnim) {
  const el = topLayoverElements()
  
  // if it has a session no animation to run
  if(hasSession === true){
    el.intro.style.display = 'none'
    if(withAnim){
      setTimeout(()=>{
        scrollAnimation()
      }, 300)
    }
  } 
  
  // if it has no session then we will run the animation
  if(hasSession === false) {
    el.container.style.overflow = 'hidden'
    el.main.style.display = 'none'
    runTopAnimation(el, withAnim)
  }
}

// function to run if the browser has no sessions
function runTopAnimation (el, withAnim) {
  let tl = anime.timeline({easing: 'easeInSine'})
  tl.add({
    targets: [el.svg, el.text],
    opacity: 1,
    duration: 1000,
  })
  .add({
    duration: 500,
  })
  .add({
    targets: [el.text],
    opacity: 0,
    duration: 400,
  })
  .add({
    targets: [el.text],
    opacity: 1,
    duration: 400,
  })
  .add({
    duration: 700,
  })
  .add({
    targets: [el.text],
    opacity: 0,
    duration: 400,
  })
  .add({
    targets: [el.text],
    opacity: 1,
    duration: 400,
  })
  .add({
    duration: 700,
  })
  .add({
    targets: [el.text],
    opacity: 0,
    duration: 400,
  })
  .add({
    targets: [el.text],
    opacity: 1,
    duration: 400,
  })
  .add({
    duration: 700,
  })
  .add({
    targets: [el.text, el.svg],
    opacity: 0,
    duration: 800,
  })
  .add({
    duration: 700,
  })
  .add({
    targets: [el.intro],
    height: 0,
    easing: 'easeInSine',
    duration: 350,
    begin: function (anim) {
      el.main.style.display = 'block'
    },
    complete: function (anim) {
      el.intro.style.display = 'none'
      el.container.style.overflow = 'visible'
      if(withAnim){
        scrollAnimation()
      }
    }
  })
}
