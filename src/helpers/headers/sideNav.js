import anime from 'animejs'
import {sideNavsEl, resizeEl} from  '../common/elementSorter'

let scroll = false
let time = null

export function detectIfScrolledUp(dom, e) {
  const el = sideNavsEl(dom)
  let scrollY = window.pageYOffset

  if(window.innerWidth > 768){
    if(scrollY > 350){
      showSideNavs(el)
      // showRight(el)
      if (time !== null) {
        clearTimeout(time)
      }
      time = setTimeout(() => {
        scroll = false
        hideSideNav(el)
      }, 2000)
    } else {
      hideSideNav(el)
    }
  }
}

function showSideNavs(el){
  // reverse the order of the list
  if (scroll === false) {
    anime({
      opacity: 1,
      targets: [...el.lists, el.sidelogo],
      easing: 'easeInOutSine',
      duration: 200,
    })
  }
}

// function to hide sidenavs
function hideSideNav(el){
  anime({
    opacity: 0,
    easing: 'easeInOutSine',
    targets: el.lists,
    duration: 400,
    begin: function (anim) {
      anime({
        opacity: 0,
        targets: el.sidelogo,
        easing: 'easeInOutSine',
        duration: 300,
      });
    }
  });
}

// function for resizing the side navs
export function resize(dom) {
  const el = resizeEl(dom)
  if (window.innerWidth >= 1600) {
    el.leftnav.style.width = '160px'
    el.rightnav.style.width = '160px'
  } else {
    el.leftnav.style.width = `${window.innerWidth * .1}px`
    el.rightnav.style.width = `${window.innerWidth * .1}px`
  }
}