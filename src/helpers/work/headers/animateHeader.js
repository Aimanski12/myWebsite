import anime from 'animejs'
import {headerEl} from '../../common/elementSorter'
import {animateLogo} from './topNav'

// start function for animating hero
export function animateHeaderPage(dom) {
  const el = headerEl(dom)
  const show = [el.imgcont, el.nav, el.arwsvg]
  el.thead.innerHTML =
    el.thead.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
  el.cont.style.overflow = 'hidden'

  const text1 = document.querySelectorAll('.text-intro-header .letter')
  for (let x = 0; x < text1.length; x++) {
    if (x >= 9 && x <= 13) {
      text1[x].classList.add('green')
    }
  }
  let tl = anime.timeline({});

  tl
    .add({
      easing: 'linear',
      opacity: 1,
      targets: el.paths,
      duration: 1500
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
      duration: 420,
      opacity: 1,
      delay: (el, i) => 75 * i
    })
    .add({
      targets: el.text2,
      opacity: 1,
      easing: 'easeInOutSine',
      duration: 1000,
    })
    .add({
      targets: show,
      opacity: 1,
      duration: 1000,
      complete: function (anim) {
        el.cont.style.overflow = 'visible'
        el.figure.style.display = 'flex'
        el.mywork.style.display = 'flex'
        animateLogo(dom)
      }
    })
}
