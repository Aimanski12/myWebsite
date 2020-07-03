import {topLayoverElements} from './elementSorter'
import anime from 'animejs'

// function for intro animation
export function introAnim (isSeen) {
  const el = topLayoverElements()
  if(!isSeen){
    el.svg.style.opacity = 0
    el.text.style.opacity = 0

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
      duration: 100,
    })
    .add({
      targets: [el.text],
      opacity: 1,
      duration: 800,
    })
    .add({
      duration: 700,
    })
    .add({
      targets: [el.text],
      opacity: 0,
      duration: 100,
    })
    .add({
      targets: [el.text],
      opacity: 1,
      duration: 800,
    })
    .add({
      duration: 700,
    })
    .add({
      targets: [el.text],
      opacity: 0,
      duration: 100,
    })
    .add({
      targets: [el.text],
      opacity: 1,
      duration: 800,
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
      targets: [el.runner],
      height: 0,
      easing: 'easeInCirc',
      duration: 600,
      complete: function (anim) {
        el.top.style.display = 'none'
      }
    })




    
  }
}


export function routeBtnClicked (route) {
  console.log(route)
}