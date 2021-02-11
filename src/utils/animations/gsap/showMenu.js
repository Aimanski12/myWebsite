
// import gsap from 'gsap'

// export const ShowMenu = (function(){
//   const _show = (val) => {
//     val === 'hidden' ? _open() : _close()
//   }
  
//   return {
//     show(val){
//       return _show(val)
//     }
//   }
// })()

// const _open = () => {
//   const container = document.querySelectorAll('.menu-list-container')
//   container[0].style.width = '100%'

//   gsap.set('.sliders', {width: 0})
//   // gsap.set('#menu-item', {opacity: 0, y: 65})
//   // gsap.set('.menu-socials > a', {opacity: 0, y: 65})
//   // gsap.set('.menu-copyright-wrapper', {opacity: 0})
//   gsap.to('.sliders', {
//     width: '100%',
//     stagger: 0.1,
//     duration: 0.42,
//     ease: "power2out",
//   })
//   // gsap.to('#menu-item', {
//   //   y: 0,
//   //   delay: -0.3,
//   //   opacity: 1,
//   //   stagger: 0.1,
//   //   duration: .8,
//   //   ease: "Bounce.easeIn"
//   // })
//   // gsap.to('.menu-socials > a', {
//   //   y: 0,
//   //   delay: .6,
//   //   opacity: 1,
//   //   stagger: 0.1,
//   //   duration: .4,
//   //   ease: "Bounce.easeIn"
//   // })
//   // gsap.to('.menu-copyright-wrapper', {
//   //   delay: 1,
//   //   opacity: 1,
//   //   duration: 0.6,
//   //   onComplete: ()=> {
//   //     console.log('finished')
//   //   }
//   // })
// }


// const _close = () => {
//   const container = document.querySelectorAll('.menu-list-container')
  
//   // gsap.to('#menu-item', {
//   //   opacity: 0,
//   //   duration: .15,
//   // })
//   // gsap.to('.menu-socials > a', {
//   //   delay: .15,
//   //   opacity: 0,
//   //   duration: .15,
//   // })
//   // gsap.to('.menu-copyright-wrapper', {
//   //   delay: .30,
//   //   opacity: 0,
//   //   duration: 0.2
//   // })
//   gsap.to('.sliders', {
//     width: '0%',
//     delay: .25,
//     stagger: 0.1,
//     duration: 0.42,
//     ease: "power2out",
//     onComplete: () => {
//       container[0].style.width = '0%'
//     }
//   })
// }