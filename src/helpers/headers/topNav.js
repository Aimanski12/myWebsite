import anime from  'animejs'
import {topNavLogoShadow} from  '../common/elementSorter'

let isAnimating = false
// function to run for the logo to animate in 5sec
export function animateLogo (dom) {
  const el = topNavLogoShadow(dom)
  setInterval(() => {
    if (!isAnimating) {
      for (let x = 0; x < el.length; x++) {
        el[x].style.opacity = 1
      }
      anime({
        targets: el,
        opacity: 0,
        strokeDashoffset: [anime.setDashoffset, 0],
        easing: 'easeInOutSine',
        strokeWidth: 5,
        duration: 800,
        delay: function (el, i) {
          return i * 40
        },
      });
    }
  }, 6000)
}

// function to animate when logo is hovered
export function hoverInAnimate(dom) {
  const el = topNavLogoShadow(dom)
  if(!isAnimating){
    anime({
      opacity: 1,
      strokeWidth: 2,
      targets: el,
      strokeDashoffset: [anime.setDashoffset, 0],
      easing: 'easeInOutSine',
      duration: 150,
      delay: function(el, i) { return i * 30 },
    });
  }
  isAnimating = true
}


// function to run when mouse hoves out logo
export function hoverOutAnimate (dom) { 
  const el = topNavLogoShadow(dom)
  if (isAnimating) {
    anime({
      opacity: 0,
      strokeWidth: 5,
      targets: el,
      strokeDashoffset: [anime.setDashoffset, 0],
      easing: 'easeInOutSine',
      duration: 700,
      delay: function (el, i) { return i * 30 },
    });
  }
  isAnimating = false
}
