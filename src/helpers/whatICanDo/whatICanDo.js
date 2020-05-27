import anime from 'animejs'
import { bubblEl, slideImage } from '../common/elementSorter'

// slide the images on the section
export function imageSlide(dom) {
  const el = slideImage(dom)

  let tl = anime.timeline({
    easing: 'easeInOutCirc',
    loop: true
  })

  tl
    .add({
      targets: el.desktop,
      duration: 700,
      translateY: -135
    })
    .add({
      duration: 5000,
    })
    .add({
      targets: el.desktop,
      duration: 700,
      translateY: -260
    })
    .add({
      duration: 100,
    })
    .add({
      targets: el.celphone,
      duration: 700,
      translateY: -140
    })
    .add({
      duration: 5000
    })
    .add({
      targets: el.celphone,
      duration: 700,
      translateY: -280
    })
    .add({
      duration: 100,
    })
    .add({
      targets: el.tablet,
      duration: 700,
      translateY: -135
    })
    .add({
      duration: 5000
    })
    .add({
      targets: el.tablet,
      duration: 700,
      translateY: -280
    })
}


// animate bubble
export function animateBubble(dom) {
  const el = bubblEl(dom)

  const tl = anime.timeline({
    easing: 'easeInOutCirc',
    loop: true
  })

  tl
    .add({
      targets: el.svg,
      scale: 0.9,
      rotate: {
        value: 720,
        duration: 1800,
        easing: 'easeInOutQuart'
      },
    })
    .add({
      targets: el.b1,
      translateY: -100,
      translateX: -60,
      duration: 140
    })
    .add({
      targets: el.b2,
      translateY: 130,
      translateX: -120,
      duration: 170
    })
    .add({
      targets: el.b3,
      translateY: -70,
      translateX: 40,
      duration: 120
    })
    .add({
      targets: el.b4,
      translateY: 60,
      translateX: -115,
      duration: 135
    })
    .add({
      targets: el.b5,
      translateY: 130,
      translateX: 120,
      duration: 170
    })
    .add({
      targets: el.b6,
      translateY: -10,
      translateX: -55,
      duration: 150
    })
    .add({
      targets: el.b7,
      translateY: 130,
      translateX: 45,
      duration: 145
    })
    .add({
      targets: el.b8,
      translateY: -120,
      translateX: 125,
      duration: 125
    })
    .add({
      targets: el.b9,
      translateY: 70,
      translateX: -20,
      duration: 115
    })
    .add({
      targets: el.b10,
      translateY: -20,
      translateX: 120,
      duration: 180
    })
    .add({
      targets: el.b11,
      translateY: -100,
      translateX: -120,
      duration: 170
    })
    .add({
      targets: el.b12,
      translateY: 45,
      translateX: 60,
      duration: 160
    })

    .add({
      duration: 7000
    })
    .add({
      targets: el.all,
      duration: 150,
      translateY: 0,
      translateX: 0,
      delay: function (el, i) {
        return i * 100
      },
    })
    .add({
      targets: el.svg,
      scale: 1,
      duration: 180
    })

}
