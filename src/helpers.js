import anime from 'animejs'


export  const run = () =>{





const textWrapper1 = document.querySelector('.text-intro-header .letters')
const textWrapper2 = document.querySelector('.text-intro-subheader')

const img_container = document.querySelector('.img-container')
const container = document.querySelector('.container')
const navigation = document.querySelector('.navigation')
const slide_down_svg = document.querySelector('.slide-down-svg')




// separate each text so that we can manipulate each text easily
textWrapper1.innerHTML = textWrapper1.textContent.replace(/\S/g, "<span class='letter'>$&</span>");



const text1 = document.querySelectorAll('.text-intro-header .letter')

// assign color for the header text
for (let x = 0; x < text1.length; x++) {
  if (x >= 9 && x <= 13) {
    text1[x].classList.add('green')
  }
}






const p1 = document.querySelectorAll('.path-one')
const p2 = document.querySelectorAll('.path-two')
const p3 = document.querySelectorAll('.path-three')
const p4 = document.querySelectorAll('.path-four')
const p5 = document.querySelectorAll('.path-five')
const p6 = document.querySelectorAll('.path-six')
const p7 = document.querySelectorAll('.path-seven')
const p8 = document.querySelectorAll('.path-eight')
const p9 = document.querySelectorAll('.path-nine')
const p10 = document.querySelectorAll('.path-ten')
const p11 = document.querySelectorAll('.path-eleven')
const p12 = document.querySelectorAll('.path-twelve')
const paths = document.querySelectorAll('.svg-face path')
// const face_svg = document.querySelectorAll('.svg-face')



function animation2() {
  anime({
    duration: 600,
    easing: 'linear',
    opacity: 0,
    targets: [paths, text1, textWrapper2]
  });
  setTimeout(() => {
    animatedFace()
  }, 1100)
}


function animatedFace() {

  let tl = anime.timeline({
    duration: 1000,
    loop: true
  });

  tl
    .add({
      easing: 'linear',
      opacity: 1,
      targets: p12,
    })
    .add({
      easing: 'linear',
      opacity: 1,
      targets: p7,
    })
    .add({
      easing: 'linear',
      opacity: 1,
      targets: p6,
    })
    .add({
      easing: 'linear',
      opacity: 1,
      targets: p9,
    })
    .add({
      easing: 'linear',
      opacity: 1,
      targets: p11,
    })
    .add({
      easing: 'linear',
      opacity: 1,
      targets: p10,
    })
    .add({
      easing: 'linear',
      opacity: 1,
      targets: p5,
    })
    .add({
      easing: 'linear',
      opacity: 1,
      targets: p4,
    })
    .add({
      easing: 'linear',
      opacity: 1,
      targets: p3,
    })
    .add({
      easing: 'linear',
      opacity: 1,
      targets: p2,
    })
    .add({
      easing: 'linear',
      opacity: 1,
      targets: p8,
    })
    .add({
      easing: 'linear',
      opacity: 1,
      targets: p1,
    })
    .add({
      targets: text1,
      translateY: ["1.5em", 0],
      translateZ: 0,
      duration: 420,
      opacity: 1,
      delay: (el, i) => 75 * i
    })
    .add({
      targets: textWrapper2,
      opacity: 1,
      easing: 'easeInOutSine',
      duration: 1300,
    })
    .add({
      duration: 60000,
    })
    .add({
      duration: 2000,
      easing: 'linear',
      opacity: 0,
      targets: [paths, text1, textWrapper2]
    })

}


const show = [img_container, navigation, slide_down_svg]


function start() {
  let tl = anime.timeline({});

  tl
    .add({
      easing: 'linear',
      opacity: 1,
      targets: paths,
      duration: 2000
    })
    .add({
      targets: text1,
      translateY: ["1.5em", 0],
      translateZ: 0,
      duration: 420,
      opacity: 1,
      delay: (el, i) => 75 * i
    })
    .add({
      targets: textWrapper2,
      opacity: 1,
      easing: 'easeInOutSine',
      duration: 1300,
    })
    .add({
      targets: show,
      opacity: 1,
      duration: 3000,
    })

  setTimeout(() => {
    container.style.overflow = 'visible'
  }, 6000)
  setTimeout(() => {
    animation2()
  }, 70000)
}

start()






















































const btn_menu = document.querySelector('.btn-menu-burger')
const slide_navbar = document.querySelector('.slide-navbar')
const menu_layover = document.querySelector('.slide-menu-background')
const slide_menu_layover = document.querySelector('.slide-menu-layover')
const svg_frame = document.querySelectorAll('.svg-frame')
const menu_text = document.querySelectorAll('.slide-text')
const cont = document.querySelector('.container')
const slide_menu_header = document.querySelector('.slide-menu-header span')
// const slide_menu_items = document.querySelectorAll('.slide-menu-item')
// const menu_close = document.querySelectorAll('.menu-close')


let topY, left;

btn_menu.addEventListener('click', (e) => {
  left = e.clientX
  topY = e.clientY
  let r = radius(left, topY)
  cont.style.overflow = 'hidden'
  cont.style.overflowX = 'hidden'
  slide_navbar.style.display = 'flex'
  let tl = anime.timeline({});
  // Add children
  tl
    .add({
      duration: 750,
      targets: menu_layover,
      top: `${(r - topY) * -1}px`,
      left: `${(r - left) * -1}px`,
      width: `${(r * 2) + 100}px`,
      height: `${(r * 2) + 100}px`,
      easing: 'easeInOutQuad'
    })
    .add({
      targets: svg_frame,
      opacity: 1,
      strokeDashoffset: [anime.setDashoffset, 0],
      easing: 'easeInOutSine',
      duration: 550,
      delay: (el, i) => {
        return i * 5
      }
    })
    .add({
      targets: menu_text,
      opacity: 1,
      easing: 'easeInOutSine',
      duration: 200,
      delay: (el, i) => {
        return i * 150
      }
    })

  setTimeout(() => {
    slide_menu_layover.style.background = '#D8D6B8';
  }, 2000)

})

slide_menu_header.addEventListener('click', (e) => {

  let r = radius(left, topY)

  menu_layover.style.width = `${(r * 2) + 10}px`
  menu_layover.style.height = `${(r * 2) + 10}px`

  slide_menu_layover.style.background = 'none';

  let tl = anime.timeline({});
  // Add children
  tl
    .add({
      targets: menu_text,
      opacity: 0,
      easing: 'easeInOutSine',
      duration: 200,
    })
    .add({
      targets: svg_frame,
      opacity: 0,
      easing: 'easeInOutSine',
      duration: 500,
    })
    .add({
      duration: 450,
      targets: menu_layover,
      top: `${topY}px`,
      left: `${left}px`,
      width: `0px`,
      height: `0px`,
      easing: 'easeInOutQuad'
    })


  setTimeout(() => {
    slide_navbar.style.display = 'none'
    cont.style.overflow = 'visible'
  }, 1100)
})






// function for sorting radius
const radius = (x1, y1) => {
  const x2 = window.innerWidth
  const y2 = window.innerHeight

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
















































































// function for resizing the side navs
const leftnav = document.querySelector('.left-sidenav')
const rightnav = document.querySelector('.right-sidenav')
window.onload = rez()

function rez() {
  if (window.innerWidth >= 1400) {
    leftnav.style.width = '140px'
    rightnav.style.width = '140px'
  } else {
    leftnav.style.width = `${window.innerWidth * .1}px`
    rightnav.style.width = `${window.innerWidth * .1}px`
  }
}
// resize function ends



// function for hiding the side menu bar
const lists = document.querySelectorAll('.list-menu li')
const ulList = document.querySelectorAll('.list-menu ul')
const sidelogo = document.querySelector('.side-nav-logo a')

let scroll = false
let time = null

let a = []
for (let x = 0; x < 4; x++) {
  a.push(lists[x])
}
a.reverse()

window.onscroll = function (e) {
  if (window.innerWidth > 768) {
    let isScrolling = this.oldScroll > this.scrollY
    if (isScrolling) {
      if (this.scrollY < 250 && scroll) {
        removeItem()
        return
      }
      showItem(scroll)

      if (time !== null) {
        clearTimeout(time)
      }
      time = setTimeout(() => {
        scroll = false
        removeItem()
      }, 3000)

    } else {
      if (scroll) removeItem()
      scroll = false
    }
    this.oldScroll = this.scrollY
  }
}

function showItem(x) {
  if (scroll === false) {
    ulList[0].style.display = 'flex'
    anime({
      opacity: 1,
      targets: a,
      easing: 'easeInOutSine',
      duration: 300,
      delay: function (el, i) {
        return i * 100
      },
    });
    anime({
      opacity: 1,
      targets: sidelogo,
      easing: 'easeInOutSine',
      duration: 300,
    });
  }
  scroll = true
}

function removeItem(x) {
  anime({
    opacity: 0,
    easing: 'easeInOutSine',
    targets: a,
    duration: 400,
  });
  anime({
    opacity: 0,
    targets: sidelogo,
    easing: 'easeInOutSine',
    duration: 400,
  });
}
// function ends for hiding the side menu bar







// create shadow for the main logo when hovered
const shadow = document.querySelectorAll('.shadow')
const logo = document.querySelector('.logo')

let isAnimating = false

logo.addEventListener('mouseenter', () => {
  if (!isAnimating) {
    anime({
      opacity: 1,
      strokeWidth: 6,
      targets: shadow,
      strokeDashoffset: [anime.setDashoffset, 0],
      easing: 'easeInOutSine',
      duration: 700,
      delay: function (el, i) {
        return i * 30
      },
    });
  }
  isAnimating = true
})


logo.addEventListener('mouseleave', () => {
  if (isAnimating) {
    anime({
      targets: shadow,
      opacity: 0,
      strokeDashoffset: [anime.setDashoffset, 0],
      easing: 'easeInOutSine',
      strokeWidth: 6,
      duration: 800,
      delay: function (el, i) {
        return i * 15
      },
    });
  }
  isAnimating = false
})


// function to run for the logo to animate in 5sec
setInterval(() => {
  for (let x = 0; x < shadow.length; x++) {
    shadow[x].style.opacity = 1
  }
  if (!isAnimating) {
    anime({
      targets: shadow,
      opacity: 0,
      strokeDashoffset: [anime.setDashoffset, 0],
      easing: 'easeInOutSine',
      strokeWidth: 6,
      duration: 800,
      delay: function (el, i) {
        return i * 40
      },
    });
  }
}, 5000)


















}




