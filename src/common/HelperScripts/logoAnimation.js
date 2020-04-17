import anime from 'animejs'

export const menuLogoAnimation = (themeColor, el) => {
  anime({
    targets: el.smallNavText,
    loop: true,
    direction: 'alternate',
    strokeDashoffset: [anime.setDashoffset, 0],
    easing: 'easeInOutSine',
    duration: 200,
    delay: (el, i) => {
      return i * 150
    }
  })

  for (let x = 0; x < el.bigNavText.length; x++) {
    el.bigNavText[x].setAttribute('stroke', `#133736`)
    el.bigNavText[x].setAttribute('stroke-width', '30px')
  }
  for (let x = 0; x < el.smallNavText.length; x++) {
    el.smallNavText[x].setAttribute('stroke-width', '5px')
    el.smallNavText[x].setAttribute('stroke', `#89E7E3`)
  }
  
  // ['3cb6b1', '65908e', '575f5e', '2d504d', 'green', '3B5F5C'],

}


export const introLogoInimation = (themeColor, el) => {
   el.intro.style.backgroundColor = `#${themeColor}`
  //  change size for each paths
  anime({
    targets: el.svgPath,
    loop: false,
    direction: 'alternate',
    strokeDashoffset: [anime.setDashoffset, 0],
    easing: 'easeInOutSine',
    duration: 100,
    delay: (el, i) => {
       return i * 50
      }
    })
    
   setTimeout(function () {
     el.intro.classList.add('intro-write-name-close')
   }, 3900)
   
   for (let x = 0; x < el.bigText.length; x++) {
     el.bigText[x].setAttribute('stroke', '#133736')
   }
   for (let x = 0; x < el.smallText.length; x++) {
     el.smallText[x].setAttribute('stroke', `#${themeColor}`)
   }
}