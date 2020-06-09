import anime from 'animejs'

// scroll down when the btn arrow down is clicked
export function scrollDown(dom, e) {
  const d = dom.querySelector('html')
  const b = dom.querySelector('body')

  
  console.log(window.pageYOffset, "+=" + window.innerHeight)
  anime({
    targets: [d, b],
    duration: 900,
    easing: 'easeInOutSine',
    scrollTop: [window.pageYOffset, "+=" + window.innerHeight]
  })
}

export const im = [ 'work page header', 'work page header', 'work page header', 'work page header', 'desktop', 'mobile', 'tablet', 'design repeat background', 'design coachme', 'design coachme', 'design coachme', 'design coachme', 'camera', 'camera', 'camera', 'camera', 'camera', 'camera', 'camera', 'camera', 'behance', 'dribbble', 'goodreads', 'linkedin', 'twitter','bible','book','food','hand','heart','laptop','run','sleep', 'the world as I see it', 'reluctant genius', 'tesla man out of time','the boy who invented the television', 'decoration'
]

// function to generate Public Url Links
export function img(b){
  return process.env.PUBLIC_URL + `/assets/images/${im[b]}.png`
}






// function for sorting radius
export function radius(x1, y1) {
  let x2, y2, inW, inH;
  inW = window.innerWidth
  inH = window.innerHeight

  // check to see if the screen is on mobile or on wide screen
  // by using innerWith. Update this later when needed
  if (inW < 768 && inH < 768) {
    x2 = 720
    y2 = 720
  } else {
    x2 = window.innerWidth
    y2 = window.innerHeight
  }

  let r1 = Math.sqrt((x1 * x1) + (y1 * y1))
  let r2 = Math.sqrt(((x2 - x1) * (x2 - x1)) + (y1 * y1))
  let r3 = Math.sqrt((x1 * x1) + ((y2 - y1) * (y2 - y1)))
  let r4 = Math.sqrt(((x2 - x1) * (x2 - x1)) + ((y2 - y1) * (y2 - y1)))

  let r = [r1, r2, r3, r4]

  let a = r.sort((a, i) => {
    return a - i
  })
  return a[3]
}