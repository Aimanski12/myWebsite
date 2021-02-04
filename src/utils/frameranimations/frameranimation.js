

export const Anim = (function (){
  const easing = [0.6, -0.05, 0.01, 0.99];
  
  const _showmenu = {
    initial: {
      width: 0,
    },
    animate: {
      width: '100%',
      transition: {
        duration: .8,
        ease: easing
      }
    },
    exit: {
      width: '0%',
      transition: {
        duration: .8,
        ease: easing
      }
    }
  }
  
  const _frontslider = {
    initial: {
      width: '100vw'
    },
    animate: {
      width: 0,
      transition: {
        duration: 1,
        ease: easing
      }
    }
  }

  const slidetoexit = (menuopen) => {
    return {
      initial: {
        opacity: 1
      },
      exit: {
        x: '100%',
        transition: {
          delay: menuopen === 1600 ? .8 : 0,
          duration: .8,
          ease: easing
        }
      }
    }
  }


  return {
    showMenu:_showmenu, 
    frontslider(){
      return _frontslider
    }
  }
})()

