import anime from 'animejs'

// function to animate face
export function animateFace(photo, themeColor){


  const svgPath = photo

  // const s = document.querySelectorAll('svg')
  // s[6].addEventListener('mouseenter', function () {
  //   let tl = anime.timeline({
  //     targets: svgPath,
  //     delay: function (el, i) {
  //       return i * 25
  //     },
  //     duration: 50, // Can be inherited
  //     easing: 'easeOutExpo', // Can be inherited
  //   });

  //   tl
  //     .add({
  //       scale: 1.08,
  //       easing: 'spring',
  //     })
  // })

  // s[6].addEventListener('mouseout', function () {
  //   let tl = anime.timeline({
  //     targets: svgPath,
  //     delay: function (el, i) {
  //       return i * 25
  //     },
  //     duration: 50, // Can be inherited
  //     easing: 'easeOutExpo', // Can be inherited
  //   });

  //   tl
  //     .add({
  //       scale: 1,
  //       easing: 'spring',
  //     })
  // })


  let tl = anime.timeline({
    targets: svgPath,
    delay: function (el, i) {
      return i * 80
    },
    duration: 200, // Can be inherited
    easing: 'easeOutExpo', // Can be inherited
  });

  tl
    .add({
      opacity: .5,
      scale: 1.25,
      easing: 'spring',
    })
    .add({
      translateX: 150,
      scale: 0.7,
    })
    .add({
      opacity: .7,
      scale: 0.3,
      translateX: -150,
    })
    .add({
      translateX: 150,
      scale: 1.3,
    })
    .add({
      opacity: 1,
      translateX: 0,
      scale: 1,
      easing: 'spring'
    })

  function run() {
    for (let x = 0; x < svgPath.length; x++) {
      let el = svgPath[x].firstElementChild.children
      for (let y = 0; y < el.length; y++) {
        if (x === 0) {
          // not a significant layer
        }
        if (x === 1) {
          // not a significant layer
        }
        if (x === 2) {
          el[y].setAttribute('fill', `#${themeColor[3]}`)
        }
        if (x === 3) {
          // not a significant layer
          el[y].setAttribute('fill', `#${themeColor[2]}`)
        }
        if (x === 4) {
          el[y].setAttribute('fill', `#${themeColor[1]}`)
        }
        if (x === 5) {
          // 
        }
        if (x === 6) {
          el[y].setAttribute('fill', '#b5b5b5')
        }
      }
    }
  }
  run()

  const textWrapper1 = document.querySelector('.text_intro_header .letters')
  const textWrapper2 = document.querySelector('.text_intro_subheader .letters')

  // separate each text so that we can manipulate each text easily
  textWrapper1.innerHTML = textWrapper1.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
  textWrapper2.innerHTML = textWrapper2.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

  const topText = document.querySelectorAll('.text_intro_header .letter')

  // assign color for the header text
  for (let x = 0; x < topText.length; x++) {
    if (x >= 9 && x <= 13) {
      topText[x].classList.add(themeColor[4])
    }
  }

  const botmTxt = document.querySelectorAll('.text_intro_subheader .letter')

  // assign color for the header text
  for (let x = 0; x < botmTxt.length; x++) {
    if ((x >= 4 && x <= 8) || (x >= 18 && x <= 24)) {
      botmTxt[x].classList.add(themeColor[4])
    }
    if ((x >= 9 && x <= 16) || (x >= 25 && x <= 33)) {
      botmTxt[x].classList.add('dark_gray')
    }
  }

  // capitalize all text on the button
  let buttonText = document.querySelector('.button_intro button')
  let text = buttonText.textContent.toUpperCase()
  buttonText.textContent = text

  setTimeout(function () {
    anime.timeline({})
      .add({
        opacity: 1,
        targets: '.text_intro_header .letter',
        translateY: ["1.1em", 0],
        translateZ: 0,
        duration: 500,
        delay: (el, i) => 50 * i
      })
      .add({
        targets: '.text_intro_subheader .letter',
        translateY: ["1.1em", 0],
        opacity: 1,
        translateZ: 0,
        duration: 500,
        delay: (el, i) => 50 * i
      })
      .add({
        targets: '.button_intro',
        duration: 1200,
        opacity: 1,
        easing: 'easeInOutSine'
      })
  }, 6000) 
}
