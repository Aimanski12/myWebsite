import anime from 'animejs'

export function fadeNavbar () {
  const n = document.querySelector('.navbar-container')
      
  let tl = anime.timeline({
    easing: 'easeInQuad',
    duration: 200,
  })
  tl.add({
    targets: n,
    opacity: 0,
  })
  .add({
    duration: 200,
  })
  .add({
    targets: n,
    opacity: 1,
  })
}