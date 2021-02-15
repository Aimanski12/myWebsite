
export const Helpers = (function (){
  
  // function to remove the foreground slider when page loads
  const _removeintroslider = () => {
    const slider = document.querySelector('.front-slider')
    slider.style.display = 'none'
  }
  
  // function to set the body hidden or auto
  // then animation is clicked
  const _hidshowbody = (val) => {
    const body = document.querySelector('body')
    body.style.overflow = val
  }

  // function to remove the 
  // const _removepreloader = () => {
  //   const preloader = document.querySelector('.pre-loader')
  //   preloader.style.display = 'none'
  // }

  // function to toggle a class active to the menu button
  // will trigger animation of the svg
  const _toggleBurgerToActive = () => {
    const svg = document.querySelector('.menu-burger')
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
    removeintroslider(){
      return _removeintroslider()
    },
    hidshowbody(val){
      return _hidshowbody(val)
    },
    removepreloader(){
      return _removepreloader()
    },
    toggleBurgerToActive () {
      return _toggleBurgerToActive()
    },
    zoomFigureImage (e) {
      return _zoomFigureImage(e)
    }
  }
})()

