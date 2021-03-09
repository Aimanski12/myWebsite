import tilt from 'vanilla-tilt'
import $ from 'jquery'

export const Helpers = (function (){
  
  // function to set the body hidden or auto
  // then animation is clicked
  const _hidshowbody = (val) => {
    const body = $('body')[0]
    const a = $('.body-wrapper')[0]
    a.style.overflow = val
    body.style.overflow = val
  }

  // function to remove the foreground slider when page loads
  const _removeintroslider = () => {
    const slider = $('.front-slider')[0]
    slider.style.display = 'none'
  }
  

  // function to remove the 
  const _removepreloader = () => {
    const preloader = $('.pre-loader')[0]
    preloader.style.display = 'none'
  }
  
  // this function will tilt the image when hovered
  const _tiltImage = (el, deg) => {
    if(window.innerWidth > 768) {
      tilt.init(document.querySelectorAll(el), 
        { max: deg, speed: 800, scale: 1.02 });
    }
  }

  // function to toggle a class active to the menu button
  // will trigger animation of the svg
  const _toggleBurgerToActive = () => {
    const svg = $('.menu-burger')[0]
    svg.classList.toggle('active')
  }

  // this will zoom the figure inside the image
  const _zoomFigureImage = (e) => {
    const image = e.currentTarget;
    let x = e.nativeEvent.offsetX / image.offsetWidth * 100
    let y = e.nativeEvent.offsetY / image.offsetHeight * 100
    image.style.backgroundPosition = x + '% ' + y + '%';
  }

  // dont forget to remove the preloader function
  return {
    hidshowbody(val){
      return _hidshowbody(val)
    },
    removeintroslider(){
      return _removeintroslider()
    },
    removepreloader(){
      return _removepreloader()
    },
    tiltImage(el, deg){
      return _tiltImage(el, deg)
    },
    toggleBurgerToActive () {
      return _toggleBurgerToActive()
    },
    zoomFigureImage (e) {
      return _zoomFigureImage(e)
    }, 
  }
})()

