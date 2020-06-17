import anime from 'animejs'
import {sideNavsEl} from  '../../common/elementSorter'

let scroll = false
let time = null

export function detectIfScrolledUp(dom, e) {

  let scrollY = window.pageYOffset
  
  // find if the bottom is closer to the footer
  let btmH = findTotalHieght(dom, scrollY)

  const el = sideNavsEl(dom)

  if(window.innerWidth > 768){
    if(scrollY > 390 && btmH > 500){
      showSideNavs(el)
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


function findTotalHieght(dom, y) {
  let total = dom.body.scrollHeight - (y + window.innerHeight)
  return total
}