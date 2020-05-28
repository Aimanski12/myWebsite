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

// function to generate Public Url Links
export function findBackground(b ) {

  const one = process.env.PUBLIC_URL + '/assets/common/header-background.png'
  const desktop = process.env.PUBLIC_URL + '/assets/work/whatican/desktop.png'
  const tablet = process.env.PUBLIC_URL + '/assets/work/whatican/tablet.png'
  const mobile = process.env.PUBLIC_URL + '/assets/work/whatican/mobile.png'
  const designone = process.env.PUBLIC_URL + '/assets/work/mydesign/01.png'
  const designtwo = process.env.PUBLIC_URL + '/assets/work/mydesign/02.png'
  const designthree = process.env.PUBLIC_URL + '/assets/work/mydesign/03.jpg'
  const designfour = process.env.PUBLIC_URL + '/assets/work/mydesign/04.png'
  const mywork = process.env.PUBLIC_URL + '/assets/work/mydesign/background.png'

  const cam = process.env.PUBLIC_URL + '/assets/work/projects/camera.svg'
  const car = process.env.PUBLIC_URL + '/assets/work/projects/car.svg'
  const clock = process.env.PUBLIC_URL + '/assets/work/projects/clock.svg'
  const gif = process.env.PUBLIC_URL + '/assets/work/projects/giff.svg'

  const beh = process.env.PUBLIC_URL + '/assets/work/footer/behance.png'
  const dri = process.env.PUBLIC_URL + '/assets/work/footer/dribbble.png'
  const goo = process.env.PUBLIC_URL + '/assets/work/footer/goodreads.png'
  const lin = process.env.PUBLIC_URL + '/assets/work/footer/linkedin.png'
  const twi = process.env.PUBLIC_URL + '/assets/work/footer/twitter.png'



  if (b === 'one') return one
  if (b === 'desktop') return desktop
  if (b === 'tablet') return tablet
  if (b === 'mobile') return mobile
  if (b === 'design1') return designone
  if (b === 'design2') return designtwo
  if (b === 'design3') return designthree
  if (b === 'design4') return designfour
  if (b === 'mywork') return mywork
  if (b === 'cam') return cam
  if (b === 'car') return car
  if (b === 'clock') return clock
  if (b === 'gif') return gif
  if (b === 'beh') return beh
  if (b === 'dri') return dri
  if (b === 'goo') return goo
  if (b === 'lin') return lin
  if (b === 'twi') return twi
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