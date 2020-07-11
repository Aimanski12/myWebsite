import {topLayoverElements} from './elementSorter'
import anime from 'animejs'

// function for intro animation
export function introAnim (hasSession) {
  const el = topLayoverElements()

  // if it has a session no animation to run
  if(hasSession === true){
    el.top.style.display = 'none'
  } 

  // if it has no session then we will run the animation
  if(hasSession === false) {
    el.top.style.display = 'block'
    el.container.style.overflow = 'hidden'
    el.svg.style.opacity = 0
    el.text.style.opacity = 0
    el.top.style.display = 'block'
    el.runner.style.height = '100vh'
    el.runner.style.width = '100%'
    runTopAnimation(el)
  }
}

// function to run if the browser has no sessions
function runTopAnimation (el) {
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
    targets: [el.runner],
    height: 0,
    easing: 'easeInSine',
    duration: 500,
  })
  .add({
    duration: 100,
    complete: function (anim) {
      el.top.style.display = 'none'
      el.runner.style.height = '100vh'
      el.runner.style.width = '0'
      el.container.style.overflow = 'visible'
    }
  })

}


// function to open and run the top layer animation
export function openTopLayer () {
  const el = topLayoverElements()

  el.top.style.display = 'block'
  el.container.style.overflow = 'hidden'
  el.runner.style.height = '100vh'
  el.runner.style.width = '0'
  el.svg.style.width = '70%'

  let tl = anime.timeline({easing: 'easeInSine'})
  tl
  .add({
    targets: el.runner,
    duration: 500,
    width: '100%',
    complete: function (anim) {
      anime({
        targets: el.svg,
        opacity: 1,
        duration: 500,
      })
    } 
  })
  .add({
    duration: 500,
    begin: function (anim) {
      el.runner.style.right = 0
      el.runner.style.float = 'right'
    }
  })
}


// function for closing the top layer
export function closeTopLayer () {
  const el = topLayoverElements()
  el.top.style.display = 'block'
  el.container.style.overflow = 'hidden'
  el.runner.style.height = '100vh'
  el.runner.style.width = '100%'
  el.runner.style.right = 0
  el.runner.style.float = 'right'
  el.svg.style.width = '70%'

let tl = anime.timeline({easing: 'easeInSine'})
  tl
  .add({
    duration: 400,
  })
  .add({
    targets: el.runner,
    duration: 400,
    width: '0%',
    begin: function (anim) {
      el.svg.style.opacity = 0
    } 
  })
  .add({
    duration: 40,
    complete: function (anim) {
      el.top.style.display = 'none'
      el.container.style.overflow = 'visible'
      el.runner.style.height = '100vh'
      el.runner.style.width = '100%'
      el.runner.style.left = 0
      el.runner.style.float = 'left'
    }
  })
}