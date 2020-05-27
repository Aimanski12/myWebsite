import anime from 'animejs'
import {introLogoElements} from '../common/elementSorter'

// logo intro animation function
export function logoIntroAnimation(dom) {
  const el = introLogoElements(dom)
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
      duration: 1200,
      easing: 'easeInOutSine',
    })
    .add({
      targets: el.shadow,
      opacity: 1,
      stroke: '#73ADAA',
      easing: 'easeInOutSine',
      duration: 850,
    })
    .add({
      duration: 800
    })
    .add({
      targets: el.top,
      translateY: 450,
      easing: 'easeInOutSine',
      duration: 1600,
      begin: function(anim){
        anime({
          targets: el.bottom,
          translateY: -450,
          easing: 'easeInOutSine',
          duration: 1600,
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



