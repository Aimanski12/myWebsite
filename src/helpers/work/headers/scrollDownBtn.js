import anime from 'animejs'

// scroll down when the btn arrow down is clicked
export function scrollDown(dom, e) {
  const d = dom.querySelector('html')
  const b = dom.querySelector('body')

  // check if window width is less than 768 for mobile
  let h;
  if (window.innerWidth < 896){
    if(window.innerWidth > window.innerHeight) {
      h = 720 - window.pageYOffset
    } else {
      h = window.innerHeight - window.pageYOffset
    }
  } else {
    h = window.innerHeight - window.pageYOffset
  }
  
  anime({
    targets: [d, b],
    duration: 900,
    easing: 'easeInOutSine',
    scrollTop: [window.pageYOffset, "+=" + h]
  })
}