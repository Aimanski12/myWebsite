
const desktop = document.querySelector('.img-desktop')
const celphone = document.querySelector('.img-mobile')
const tablet = document.querySelector('.img-tablet')

let tl = anime.timeline({
  easing: 'easeInOutCirc',
  loop: true
})

tl
  .add({
    targets: desktop,
    duration: 700,
    translateY: -135
  })
  .add({
    duration: 2000,
  })
  .add({
    targets: desktop,
    duration: 700,
    translateY: -260
  })
  .add({
    duration: 100,
  })
  .add({
    targets: celphone,
    duration: 700,
    translateY: -140
  })
  .add({
    duration: 2000
  })
  .add({
    targets: celphone,
    duration: 700,
    translateY: -280
  })
  .add({
    duration: 100,
  })
  .add({
    targets: tablet,
    duration: 700,
    translateY: -135
  })
  .add({
    duration: 2000
  })
  .add({
    targets: tablet,
    duration: 700,
    translateY: -280
  })






































































const svg = document.querySelector('.svg-bubble')
const b1 = document.querySelector('.b1')
const b2 = document.querySelector('.b2')
const b3 = document.querySelector('.b3')
const b4 = document.querySelector('.b4')
const b5 = document.querySelector('.b5')
const b6 = document.querySelector('.b6')
const b7 = document.querySelector('.b7')
const b8 = document.querySelector('.b8')
const b9 = document.querySelector('.b9')
const b10 = document.querySelector('.b10')
const b11 = document.querySelector('.b11')
const b12 = document.querySelector('.b12')



const b = [b1,b2,b3,b4,b5,b6,b7,b8,b9,b10,b11,b12]

function animateBubble(){
  const tl = anime.timeline({
    easing: 'easeInOutCirc',
    loop: true
  })


  tl
    .add({
      targets: svg,
      scale: 0.9,
      rotate: {
        value: 720,
        duration: 1800,
        easing: 'easeInOutQuart'
      },
    })
    .add({
      targets: b1,
      translateY: -100,
      translateX: -60,
      duration: 140
    })
    .add({
      targets: b2,
      translateY: 130,
      translateX: -120,
      duration: 170
    })
    .add({
      targets: b3,
      translateY: -70,
      translateX: 40,
      duration: 120
    })
    .add({
      targets: b4,
      translateY: 60,
      translateX: -115,
      duration: 135
    })
    .add({
      targets: b5,
      translateY: 130,
      translateX: 120,
      duration: 170
    })
    .add({
      targets: b6,
      translateY: -10,
      translateX: -55,
      duration: 150
    })
    .add({
      targets: b7,
      translateY: 130,
      translateX: 45,
      duration: 145
    })
    .add({
      targets: b8,
      translateY: -120,
      translateX: 125,
      duration: 125
    })
    .add({
      targets: b9,
      translateY: 70,
      translateX: -20,
      duration: 115
    })
    .add({
      targets: b10,
      translateY: -20,
      translateX: 120,
      duration: 180
    })
    .add({
      targets: b11,
      translateY: -100,
      translateX: -120,
      duration: 170
    })
    .add({
      targets: b12,
      translateY: 45,
      translateX: 60,
      duration: 160
    })

    .add({
      duration: 7000
    })
    .add({
      targets: b,
      duration: 120,
      translateY: 0,
      translateX: 0,
      delay: function (el, i) {
        return i * 100
      },
    })
    .add({
      targets: svg,
      scale: 1,
      duration: 180
    })

  }


animateBubble()

















  