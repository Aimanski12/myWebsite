import anime from 'animejs'

export default function logointro(strokes, font, shadow, top, bottom, intro) {
var tl = anime.timeline({
  easing: 'easeOutExpo',
  duration: 200
});

tl
  .add({
    targets: strokes,
    strokeWidth: 2,
    strokeDashoffset: [anime.setDashoffset, 0],
    easing: 'easeInOutSine',
    duration: 1200,
    delay: (el, i) => {
      return i * 150
    }
  })
  .add({
    targets: font,
    opacity: 1,
    duration: 1800,
    easing: 'easeInOutSine',
  })
  .add({
    targets: shadow,
    opacity: 1,
    stroke: '#73ADAA',
    easing: 'easeInOutSine',
    duration: 1300,
  })
  .add({
    duration: 1000
  })
  .add({
    targets: top,
    translateY: 680,
    easing: 'easeInOutSine',
    duration: 3000,
    begin: function(anim){
      anime({
        targets: bottom,
        translateY: -650,
        easing: 'easeInOutSine',
        duration: 3000,
      })
    }
  })
  .add({
    targets: intro,
    height: 0,
    opacity: 0,
    duration: 10,
    complete: function(anim){
      intro.style.display = 'none'
      // call the next function for the animation of the face 
    }
  })
}



