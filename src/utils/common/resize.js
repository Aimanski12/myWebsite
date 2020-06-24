import {resizeEl, hEl} from './elementSorter'

// this function is called on every page to resize the 
// side nav every resizing event
export function resize() {
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
  setNavWidth()
}

// this function is called upon page load 
// to set the navbar, faceAnim, and background to its right size
export function setNavWidth() {
  let w = window.innerWidth
  if (w > 1600) {
    sz('1600px')
    hContent('1280px')
  } else if (w <= 768) {
    sz('100%')
    hContent(`100%`)
  } else if(w <= 1600){
    sz('100%')
    hContent(`${Math.floor(w*.8)}px`)
  } 
  
}

function sz(s) {
  const el = hEl()
  setWidth(el.n, s)
  setWidth(el.sNav, s)

}

function hContent (s) {
  const el = hEl()
  setWidth(el.hCont, s)

}


function setWidth(el, w){
  el.style.width = w
}