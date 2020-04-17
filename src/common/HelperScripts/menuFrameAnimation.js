import anime from 'animejs'

// this function run when the user clicks the close 
// button in the menu or clicks anywhere outside the 
// menu area
export const closeMenuFrame = (x, y, el, color) => {
  let r = radius(x, y)
  el.overDiv.style.top = `${(r - y) * (-1)}px`
  el.overDiv.style.left = `${(r - x) * (-1)}px`
  el.overDiv.style.width = `${r*2}px`
  el.overDiv.style.height = `${r*2}px`
  el.overDiv.style.background = `#${color[5]}`

  // Create a timeline with default parameters
  var tl = anime.timeline({
    duration: 300,
  });
  // Add children
  tl
    .add({
      duration: 400,
      targets: el.btn,
      opacity: 0,
      easing: 'linear'
    })
    .add({
      duration: 300,
      targets: el.lists,
      opacity: 0,
      translateX: -15,
      easing: 'easeInOutSine'
    })
    .add({
      duration: 300,
      targets: el.title,
      opacity: 0,
      easing: 'linear'
    })
    .add({
      targets: el.svg,
      duration: 300,
      opacity: 0,
      easing: 'easeInOutSine'
    })
    .add({
      targets: el.overDiv,
      duration: 300,
      width: 0,
      height: 0,
      top: `${y}px`,
      left: `${x}px`,
      easing: 'linear'
    })

  setTimeout(() => {
    el.menu.style.display = 'none'
    el.overLay.style.display = 'none'
    el.home.style.overflow = 'visible'
  }, 1650)
}

// this function will run when the 
// use clicks the menu btn
export const openMenuFrame = (x, y, el, color) => {
  el.home.style.overflow = 'hidden'
  el.overLay.style.display = 'block'
  el.menu.style.display = 'flex'
  el.overDiv.style.top = `${y}px`
  el.overDiv.style.left = `${x}px`
  el.overDiv.style.background = `#${color[5]}`
  
   let r = radius(x, y)
   
   setTimeout(()=>{
     
    var tl = anime.timeline({
      duration: 300,
    });
    // Add children
    tl
    .add({
      duration: 450,
      targets: el.overDiv,
      top: `${(r - y) * -1}px`,
      left: `${(r - x) * -1}px`,
      width: `${(r * 2) + 10}px`,
      height: `${(r * 2) + 10}px`,
      easing: 'easeInOutQuad'
    })
    .add({
      targets: el.svg,
      opacity: 1,
      duration: 10,
      easing: 'easeInOutSine',
    })
    .add({
      targets: el.svgPaths,
      loop: false,
      direction: 'alternate',
      strokeDashoffset: [anime.setDashoffset, 0],
      easing: 'easeInOutSine',
      duration: 200,
      delay: (el, i) => {
        return i * 150
      }
    })
    .add({
      duration: 200,
      targets: el.title,
      opacity: 1,
      easing: 'linear'
    })
    .add({
      duration: 200,
      targets: el.lists,
      opacity: 1,
      translateX: 5,
      delay: function (el, i) {
        return i * 120
      },
      easing: 'easeInOutSine'
    })
    .add({
      duration: 200,
      targets: el.btn,
      opacity: 1,
      easing: 'spring'
    })
  }, 10)
}


// this function is for calculating the 
// longest distance from the clicked point
// to each of the four sides of the screen
export const radius = (x1, y1) => {
  const x2 = window.innerWidth
  const y2 = window.innerHeight
  // top left corner
  let r1 = Math.sqrt((x1 * x1) + (y1 * y1))
  // top right corner
  let r2 = Math.sqrt(((x2 - x1) * (x2 - x1)) + (y1 * y1))
  // botton left corner
  let r3 = Math.sqrt((x1 * x1) + ((y2 - y1) * (y2 - y1)))
  // bottom right corner
  let r4 = Math.sqrt(((x2 - x1) * (x2 - x1)) + ((y2 - y1) * (y2 - y1)))

  // place all functions in a array
  let r = [r1, r2, r3, r4]
  // sort all numbers
  let a = r.sort((a, i) => {
    return a - i
  })
  return a[3]
}

// this function will animate the background layer
// of the menu button
export const navHover = () => {
  const el = document.querySelector('.nav-backgroundTwo')
  let tl = anime.timeline({
    duration: 300,
  });
  // Add children
  tl
  .add({
    duration: 300,
    targets: el,
    width: '100%',
    height: '100%',
    opacity: 1,
    top: 0,
    left: 0,
    easing: 'easeInOutCirc'
  })
}  

// this function will animate backgroung layer
// of the menu button after mouseout
export const navHoverOut = () => {
  const elOne = document.querySelector('.nav-backgroundOne')
  const elTwo = document.querySelector('.nav-backgroundTwo')
  var tl = anime.timeline({
    duration: 300,
  });
  // Add children
  tl
  .add({
    duration: 300,
    targets: elOne,
    width: '100%',
    height: '100%',
    top: 0,
    left: 0,
    easing: 'easeInOutCirc'
  })
  .add({
    duration: 150,
    targets: elTwo,
    opacity: 0,
    easing: 'easeInOutCirc'
  })
  .add({
    duration: 160,
    targets: elTwo,
    width: 0,
    height: 0,
    top: '50%',
    left: '50%',
    easing: 'easeInOutCirc'
  })
  .add({
    duration: 100,
    targets: elOne,
    width: 0,
    height: 0,
    top: '50%',
    left: '50%',
    easing: 'easeInOutCirc'
  })
}