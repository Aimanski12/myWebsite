import {resizeElements } from './elementSorter'


// function that will generate a path for the image
export function imageUrl (img, ext) {
  return process.env.PUBLIC_URL + `/images/${img}.${ext}`
}


// function to run for resizing or when page loads
export function resize(){
  const el = resizeElements()
  let w = window.innerWidth
  if(w-20 <= 1600){
    el.main_container.style.width = '100%'
    el.navbar_container.style.width = '100%'
    el.menu_container.style.width = '100%'
    el.menu_wrapper.style.width = '100%'
    el.menu_runner.style.width = '100%'
    el.top_container.style.width = '100%'
  } else {
    el.main_container.style.width = `1600px`
    el.navbar_container.style.width = `1600px`
    el.menu_container.style.width = '1600px'
    el.menu_wrapper.style.width = '1600px'
    el.menu_runner.style.width = '1600px'
    el.top_container.style.width = '1600px'
  }
}

