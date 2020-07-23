import anime, { set } from 'animejs'

// function that will debounce the scroll event to every
// 70ms so to avoid performance issue
function debounce (func, wait = 70, immediate = true){
  let timeout;
  return function() {
    let context = this, args = arguments;
    let later = function () {
      timeout = null;
      if(!immediate) func.apply(context, args)
    }
    let callNow = immediate && timeout
    clearTimeout(timeout);
    timeout = setTimeout(later, wait)
    if(callNow) func.apply(context, args)
  }
}

// function for slide animation
function slideInAnimation(){
  let els = document.querySelectorAll('.show')

  els.forEach(el => {
    const slideInAt = (window.scrollY + window.innerHeight) - (el.clientHeight/2)
    const clientHeight = el.getBoundingClientRect().top + window.scrollY

    const isPassed = slideInAt > clientHeight
    const elIsNotDone = !el.classList.contains('done')
    const elChildren = el.children
    const isProjectImage = el.classList.contains('project-image')
    const isMessageCont = el.classList.contains('message-container')
    
      if(isPassed && elIsNotDone) {
        removeOverlay(el)
        if(elChildren.length === 2){
          showSlider(elChildren)

        } else if (elChildren.length === 1) {

          // check if this element has a class of project-image
          if(isProjectImage) setTimer(showOpacity, elChildren[0], el)

          // check if this class has a message-container
          if(isMessageCont) {
            el.classList.add('done')
            showOpacity(elChildren[0])
          }

          // check if the element does not contain both the class names
          if(!isProjectImage && !isMessageCont) {
            setTimer(slideUp, elChildren[0], el)
          }
          
        }
      }

  })  
}  

function setTimer(func, child, el) {
  setTimeout(()=>{
    func(child)
    el.classList.add('done')
  }, 700)
}



function removeOverlay (el){
  const hasHeaderClass = el.classList.contains('header-social-container')
  const hasScrollClass = el.classList.contains('scroll-cover')
  if(hasHeaderClass || hasScrollClass){
    setTimeout(()=>{
      el.style.overflow = 'visible'
    }, 1200)
  }
  
}

// animation that will run the slider and we are using the 
// timeline animation make a smooth effect
function showSlider (el) {
  let tl = anime.timeline({})
  const parent = el[1].closest('.show')
  parent.classList.add('done')
  
  tl.add({
    targets: el[1],
    width: '100%',
    easing:  'easeInSine',
    duration: 300,
  })
  .add({
    targets: el[1],
    duration: 400,
    complete: function (anim) {
      el[1].style.right = 0
    }
  })
  .add({
    targets: el[1],
    width: '0%',
    easing:  'easeInSine',
    duration: 300,
    begin: function (anim) {
      slideUp(el[0])
    }
  })

}

// function that will make the image opacity from 
// 0 to 1 to make the image visible
function showOpacity(el) {
  el.style.opacity = 0

  anime({
    targets: el,
    opacity: 1,
    easing: 'easeInSine',
    duration: 500
  })
}

// this will make the text or paragraphs visible
// this slide up the text
function slideUp (el) {
  let tl = anime.timeline({})
  el.style.transform = 'translateY(105%)'

  tl.add({
    targets: el,
    translateY: 0,
    // easing: 'easeOutQuart',
    easing: 'easeOutElastic(5, 2)',
    duration: 500
  })
}

export function loadSlideElements() {
  // we are setting a 200 ms interval to load all 
  // the elements before we are getting all the data
  setTimeout(() => {
    slideInAnimation()
  }, 200)
}

// call the animation function when we are scrolling the page
export function slideInElementsOnScroll() {
  debounce(slideInAnimation())
}
