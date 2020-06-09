import anime from 'animejs'
import {burgerNavEl} from '../../common/elementSorter'
import {radius} from '../../common/common'

// funtion for the slideNav to open
export function burgerNavOpen (e, page) {
  let x, y;
  const el = burgerNavEl()
  x = e.clientX
  y = e.clientY
  let r = radius(x, y)

  if(page === 'Work'){
    el.figure.style.display = 'none'
    el.mywork.style.display = 'none'
  }


  el.cont.style.overflow = 'hidden'
  el.slide_navbar.style.display = 'flex'
  let tl = anime.timeline({});
  // Add children
  tl
    .add({
      duration: 850,
      targets: el.menu_layover,
      top: `${(r - y) * -1}px`,
      left: `${(r - x) * -1}px`,
      width: `${(r * 2) + 20}px`,
      height: `${(r * 2) + 20}px`,
      easing: 'easeInOutQuad'
    })
    .add({
      targets: el.svg_frame,
      opacity: 1,
      strokeDashoffset: [anime.setDashoffset, 0],
      easing: 'easeInOutSine',
      duration: 450,
      delay: (el, i) => {
        return i * 5
      }
    })
    .add({
      targets: el.menu_text,
      opacity: 1,
      easing: 'easeInOutSine',
      duration: 200,
      delay: (el, i) => {
        return i * 130
      },
      complete: function (anim) {
        el.slide_menu_layover.style.background = '#D8D6B8';
      }
    })
}

// function to call for closing the slide navs
export function burgerNavClose(btn, page, click) {
   const el = burgerNavEl()
   let x, y;
    x = 5
    y = 5
   let r = radius(x, y)
   el.menu_layover.style.top = `${(r - y) * -1}px`
   el.menu_layover.style.left = `${(r - x) * -1}px`
   el.menu_layover.style.width = `${(r * 2) + 20}px`
   el.menu_layover.style.height = `${(r * 2) + 20}px`
   el.slide_menu_layover.style.background = 'none';
  
  let tl = anime.timeline({});
  // Add children
  tl
    .add({
      targets: el.menu_text,
      opacity: 0,
      easing: 'easeInOutSine',
      duration: 200,
    })
    .add({
      targets: el.svg_frame,
      opacity: 0,
      easing: 'easeInOutSine',
      duration: 300,
    })
    .add({
      duration: 500,
      targets: el.menu_layover,
      top: `${y}px`,
      left: `${x}px`,
      width: `0px`,
      height: `0px`,
      easing: 'easeInOutQuad',
      complete: function (anim) {
        el.slide_navbar.style.display = 'none'
        el.cont.style.overflow = 'visible'
        routLoc(btn, page, click, el)
      }
    }
  )
}
      

const routLoc = (btn, page, click, el) => {
  if (btn === 'route') {
    if (click === 'Work') {
      if (page === 'Work') {
        showFigs(el.figure, el.mywork)
      } else {
        location('')
      }
    } else {
      if (page === 'Work') {
        showFigs(el.figure, el.mywork)
        location(click)
      } else {
        location(click)
      }
    }

  } else if (btn === 'main') {
    page === 'Work' ? showFigs(el.figure, el.mywork) : location('')
  } else if (btn === 'back') {
    if (page === 'Work') {
      showFigs(el.figure, el.mywork)
    }
  }
}


const showFigs = (f, m) => {
  f.style.display = 'flex'
  m.style.display = 'flex'
}

const location = (path) => {
  window.location.pathname = `/${path}`
}