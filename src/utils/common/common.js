import {resizeElements } from './elementSorter'

// function to run for resizing or when page loads
export function resize(){
  resizeEl()
  window.addEventListener('resize', resizeEl)
  return ()=> { 
    window.removeEventListener('resize', resizeEl)
  }
}

// function that will resize elements
function resizeEl () {
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


let routes = [
  'home', 'about', 'projects', 'contacts', 'privacy', 'credentials', 'projects/projects/music-app', 'projects/reservation-app', 'projects/electric-bill', 'projects/music-player3', 'projects/music-player4', 'projects/music-player5'
]

// this function will generate a return the current route
// for the state
export const checkRoute = (route) => {
  let r = route.slice(1, 50)
  let url = r === '' ? 'home' : r
  let b;
  let a = routes.filter(route => {
    return route === url
  })

  if (a[0] === undefined) {
    b = 'notFound'
  } else {
    b = a[0]
  }

  return b
}