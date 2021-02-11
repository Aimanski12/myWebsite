
export const Helpers = (function (){
  
  const _removeintroslider = () => {
    const slider = document.querySelector('.slider')
    slider.style.display = 'none'
  }
  
  const _hidshowbody = (val) => {
    const body = document.querySelector('body')
    body.style.overflow = val
  }

  const _removepreloader = () => {
    const preloader = document.querySelector('.pre-loader')
    preloader.style.display = 'none'
  }

  const _toggleBurgerToActive = () => {
    const svg = document.querySelector('.menu-burger')
    svg.classList.toggle('active')
  }

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
    }
  }
})()

