import anime from 'animejs'
import {headerEl, hEl } from '../common/elementSorter'
import {
  animateLogo
} from '../work/headers/topNav'

// start function for animating hero
export function animatePrivacyPage() {
  const el = headerEl()
  

  el.cont.style.overflow = 'hidden'
  el.cont.style.background = '#F4F4F4' 
  const navs = document.querySelectorAll('.navigation li a')
  navs.forEach(r => {
    r.style.color = '#2F8581'
  })

  let tl = anime.timeline({});
  tl
  .add({
    targets: el.nav,
    opacity: 1,
    duration: 300,
    easing: 'linear',
    complete: function (anim) {
      el.cont.style.overflow = 'visible'
      animateLogo()
    }
  })
}



export function setNavWidth() {
  if (window.innerWidth > 1600) {
    sz('1600px')
  } else {
    sz('100%')
  }
}

function sz(s) {
  const el = hEl()
  el.n.style.maxWidth = s
}