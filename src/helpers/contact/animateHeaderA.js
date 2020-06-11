import anime from 'animejs'
import {headerEl} from '../common/elementSorter'
import {animateLogo} from '../work/headers/topNav'

// start function for animating hero
export function animateHeaderPage() {
  const el = headerEl()
  const show = [el.imgcont, el.nav, el.arwsvg]
  el.thead.innerHTML =
    el.thead.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

  el.cont.style.overflow = 'hidden'

  const text1 = document.querySelectorAll('.text-intro-header .letter')
  
  let tl = anime.timeline({});

  tl
    .add({
      easing: 'linear',
      opacity: 1,
      targets: el.paths,
      duration: 300
    })
    .add({
      targets: el.textHeader,
      opacity: 1,
      duration: 10
    })
    .add({
      targets: [text1],
      translateY: ["1.5em", 0],
      translateZ: 0,
      duration: 380,
      opacity: 1,
      delay: (el, i) => 75 * i
    })
    .add({
      easing: 'linear',
      targets: show,
      opacity: 1,
      duration: 320,
      complete: function (anim) {
        el.cont.style.overflow = 'visible'
        animateLogo()
      }
    })
}
