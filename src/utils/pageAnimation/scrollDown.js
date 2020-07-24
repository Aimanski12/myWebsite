import anime from 'animejs'

export function scrollDown () {
  const html = document.querySelector('html') 
  const body = document.querySelector('body')

  const moveTo = window.innerHeight

  // we need the html and the body to make the animation more smoother
  anime({
    targets: [html, body],
    scrollTop: moveTo,
    duration: 2000,
    easing: 'easeInOutQuad'
  })

}