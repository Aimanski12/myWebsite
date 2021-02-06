
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
    const preloader = document.querySelector('.preloader')
    preloader.style.display = 'none'
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
    }
  }
})()

