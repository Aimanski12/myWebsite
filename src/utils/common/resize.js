import {resizeEl, hEl} from './elementSorter'

// this function is called on every page to resize the 
// side nav every resizing event
export function resize(page) {
  const el = resizeEl()
  // if the width is less than 768 leftnav and right nav is null
  if (el.leftnav !== null || el.rightnav !== null) {
    if (window.innerWidth >= 1600) {
      el.leftnav.style.width = '160px'
      el.rightnav.style.width = '160px'
    } else {
      el.leftnav.style.width = `${window.innerWidth * .1}px`
      el.rightnav.style.width = `${window.innerWidth * .1}px`
    }
  }
  setNavWidth(page)
}

// this function is called upon page load 
// to set the navbar, faceAnim, and background to its right size
export function setNavWidth(page) {
  if (window.innerWidth > 1600) {
    sz('1600px', page)
  } else {
    sz('100%', page)
  }
}

function sz(s, page) {
  const el = hEl()
  el.n.style.width = s
  el.f.style.width = s
  if(page) {
    el.b.style.width = s
  }
}