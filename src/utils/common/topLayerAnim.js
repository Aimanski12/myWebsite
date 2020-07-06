import {topLayoverElements} from './elementSorter'
import anime from 'animejs'

// function for intro animation
export function introAnim () {
  const el = topLayoverElements()
  el.container.style.overflow = 'hidden'
  el.svg.style.opacity = 0
  el.text.style.opacity = 0

  let tl = anime.timeline({easing: 'easeInSine'})

  tl.add({
    targets: [el.svg, el.text],
    opacity: 1,
    duration: 1700,
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
    duration: 800,
  })
  .add({
    duration: 100,
    complete: function (anim) {
      el.top.style.display = 'none'
      el.runner.style.height = '100%'
      el.runner.style.width = '0'
      el.container.style.overflow = 'visible'
    }
  })
}

export function routeBtnClicked (path) {
  const el = topLayoverElements()

  el.top.style.display = 'block'
  el.container.style.overflow = 'hidden'
  el.svg.style.opacity = 0

  let tl = anime.timeline({easing: 'easeInSine'})
  tl
  .add({
    targets: el.runner,
    duration: 700,
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
    duration: 800,
    begin: function (anim) {
      el.runner.style.right = 0
      el.runner.style.float = 'right'
    },
    complete: function (anim) {
      anime({
        targets: el.svg,
        opacity: 0,
        duration: 300,
      })
    }
  })
  .add({
    targets: el.runner,
    duration: 500,
    width: '0%',
  })
  .add({
    duration: 40,
    complete: function (anim) {
      el.top.style.display = 'none'
      el.runner.style.left = '0'
      el.runner.style.float = 'left'
      el.container.style.overflow = 'visible'
    }
  })

}
