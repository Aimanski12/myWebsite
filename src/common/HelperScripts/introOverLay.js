import anime from 'animejs'
import {radius} from './menuFrameAnimation'


// this function runs when the user click the explore me button after intro
export function introOverlay (x, y, el, color) {
  const faceSvg = document.querySelectorAll('.photo')
  // set the overlay div to display block
  el.overLay.style.display = 'block'
  // set the cover div to where the pointer is
  el.overDiv.style.top = `${y}px`
  el.overDiv.style.left = `${x}px`
  // el.coverDiv.style.background = `#${bkgColor}`
  el.overDiv.style.background = `#${color[5]}`

  // find the radius
  let r = radius(x, y)

  let tl = anime.timeline({
    delay: function (el, i) {
      return i * 60
    },
    duration: 100,
  });
  // Add children
  tl
    .add({
      duration: 450,
      targets: el.overDiv,
      top: `${(r - y) * -1}px`,
      left: `${(r - x) * -1}px`,
      width: `${(r * 2) + 10}px`,
      height: `${(r * 2) + 10}px`,
      easing: 'easeInOutQuad'
    })
    .add({
      duration: 100,
      targets: faceSvg,
      scale: 0,
      easing: 'easeInOutQuad'
    })
}


// this function runs after the over runs
// and the the home page displays
export function removeOverlay(x, y, el, color) {
  // set the overlay div to display block
  el.overLay.style.display = 'block'
  
  let tl = anime.timeline({
    delay: function (el, i) {
      return i * 60
    },
    duration: 100,
  });
  // Add children
  tl
  .add({
      duration: 300,
      targets: el.overDiv,
      top: y,
      left: x,
      width: `0px`,
      height: `0px`,
      easing: 'easeInOutQuad'
    })
    setTimeout(()=>{
      const homepage = document.querySelector('.homepage')
      homepage.style.overflow = 'visible'
      el.overLay.style.display ='none'
    },310)
}

