import anime from 'animejs'
import {introLogoElements, hEl} from '../common/elementSorter'

// logo intro animation function
export function logoIntroAnimation() {
  const el = introLogoElements()
  var tl = anime.timeline({
    easing: 'easeOutExpo',
    duration: 200
  });

  tl
    .add({
      targets: el.strokes,
      strokeWidth: 2,
      strokeDashoffset: [anime.setDashoffset, 0],
      easing: 'easeInOutSine',
      duration: 800,
      delay: (el, i) => { return i * 80 }
    })
    .add({
      targets: el.font,
      opacity: 1,
      duration: 1000,
      easing: 'easeInOutSine',
    })
    .add({
      targets: el.shadow,
      opacity: 1,
      stroke: '#73ADAA',
      easing: 'easeInOutSine',
      duration: 750,
    })
    .add({
      duration: 600
    })
    .add({
      targets: el.top,
      translateY: 450,
      easing: 'easeInOutSine',
      duration: 1400,
      begin: function(anim){
        anime({
          targets: el.bottom,
          translateY: -450,
          easing: 'easeInOutSine',
          duration: 1400,
        })
      }
    })
    .add({
      targets: el.intro,
      height: 0,
      opacity: 0,
      duration: 10,
      complete: function(anim){
        el.intro.style.display = 'none'
      }
    })
}

export function setNavWidth(){
  if(window.innerWidth > 1600){
    sz('1600px')
  } else {
    sz('100%')
  }
}

function sz(s){
  const el = hEl()
  el.n.style.maxWidth = s
  el.f.style.maxWidth = s
  el.b.style.maxWidth = s
}