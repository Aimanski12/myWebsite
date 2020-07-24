import anime from 'animejs'
import {openTopLayer} from '../common/topLayerAnim'
// import {topLayoverElements} from '../common/elementSorter'

export function pageTransition () {
  const main = document.querySelector('.main')
  const nav = document.querySelector('.navbar-container')
  const tl = anime.timeline({})

  tl.add({
    targets: [main, nav],
    opacity: 0,
    duration: 1100,
    easing: 'linear',
    begin: function (anim) {
      // main.style.display = 'none'
      // openTopLayer after the opacity is set
      setTimeout(()=>{
        openTopLayer()

      }, 500)
    },
    complete: function (anim) {
      main.style.display = 'none'
      // openTopLayer after the opacity is set
      // openTopLayer()
    }
  })
  
  
}

