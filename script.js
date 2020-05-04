const strokes = document.querySelectorAll('.stroke')
const font = document.querySelectorAll('.font')
const shadow = document.querySelectorAll('.shadow')
const toprect = document.querySelector('.top')
const bottom = document.querySelector('.bottom')

// Create a timeline with default parameters
var tl = anime.timeline({
  easing: 'easeOutExpo',
  duration: 200
});

// Add children
tl
  .add({
    targets: [strokes],
    loop: true,
    direction: 'alternate',
    strokeWidth: 2,
    strokeDashoffset: [anime.setDashoffset, 0],
    easing: 'easeInOutSine',
    duration: 800,
    delay: (el, i) => {
      return i * 100
    }
  })
  .add({
    targets: font,
      loop: true,
      direction: 'alternate',
      opacity: 1,
      duration: 1000,
      easing: 'easeInOutSine',
  })


  setTimeout(()=>{
    anime({
      targets: shadow,
      opacity: 1,
      strokeWidth: 1,
      strokeDashoffset: [anime.setDashoffset, 0],
      easing: 'easeInOutSine',
      duration: 450,
      delay: (el, i) => {
        return i * 70
      }
    })
  }, 2300)


  
  setTimeout(() => {
    anime({
      targets: toprect,
      translateY: -180,
      easing: 'easeInOutSine',
      duration: 3000,
    })
  }, 5900)

  
  setTimeout(() => {
    anime({
      targets: bottom,
      translateY: 180,
      easing: 'easeInOutSine',
      duration: 3000,
    })
  }, 5900)