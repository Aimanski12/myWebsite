import anime from 'animejs'

// function to animate face
export function animateFace(svgPath, themeColor){

  let tl = anime.timeline({
    targets: svgPath,
    delay: function (el, i) {
      return i * 60
    },
    duration: 130, // Can be inherited
    easing: 'easeOutExpo', // Can be inherited
  });

  tl
    .add({
      opacity: .5,
      scale: 1.25,
      easing: 'spring',
    })
    .add({
      translateX: findX(1),
      translateY: findY(1),
      scale: 0.4,
    })
    .add({
      opacity: .7,
      scale: 0.4,
      translateX: findX(1),
      translateY: findY(2),
    })
    .add({
      opacity: .7,
      scale: 0.4,
      translateX: findX(3),
      translateY: findY(2),
    })
    .add({
      opacity: .7,
      scale: 0.4,
      translateX: findX(3),
      translateY: findY(1),
    })
    .add({
      opacity: 1,
      translateX: 0,
      translateY: 0,
      scale: 1,
      easing: 'spring'
    })

  // find x coordinate
  function findX (n) {
    const x = window.innerWidth
    let number;
    if(n === 1){
      number = ((x * .1) * 6) * (-1)
    }
    if(n === 2){
      number = ((x / 2) - (x * .1))
    }
    if(n === 3){
      number = (x * .9)
    }
    return number
  }
  
  // find y coordinate
  function findY(n) {
    const y = window.innerHeight
    let number;
    if (n === 1) {
      number = ((y * .1) * 4) * (-1)
    }
    if(n === 2) {
      number = ((y * .9))
    }
    return number
  }



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
        duration: 420,
        delay: (el, i) => 50 * i
      })
      .add({
        targets: '.text_intro_subheader .letter',
        translateY: ["1.1em", 0],
        opacity: 1,
        translateZ: 0,
        duration: 420,
        delay: (el, i) => 50 * i
      })
      .add({
        targets: '.button_intro',
        duration: 420,
        opacity: 1,
        easing: 'easeInOutSine'
      })
  }, 5000) 
}

