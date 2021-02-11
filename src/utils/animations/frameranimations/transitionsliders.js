

export const TransitionSliders = (function (){
  const easing = [0.6, -0.05, 0.01, 0.99];
  
  // const _showmenu = {
  //   initial: {
  //     width: 0,
  //   },
  //   animate: {
  //     width: '100%',
  //     transition: {
  //       duration: .8,
  //       ease: easing
  //     }
  //   },
  //   exit: {
  //     width: '0%',
  //     transition: {
  //       duration: .8,
  //       ease: easing
  //     }
  //   }
  // }
  
  const _frontslider = (isFirstTime, isDoneAnimating) => {
    let timing;
    if(isFirstTime) {
      if(isDoneAnimating) {
        timing = 0
      } else {
        timing = 5.75
      }
    } else {
      timing = 0
    }

    // isVisited argument comes from the sessionData state
    // if session has storoge or has not expired
    // will return true to add delay for the transition
    return {
      initial: {
        width: '100vw'
      },
      animate: {
        width: 0,
        transition: {
          // add a delay of 5.75ms to wait for the
          // preloader to finish animating
          delay: timing,
          duration: 1,
          ease: easing
        }
      }
    }
  }

  const _slidetoexit = (delay) => {
    return {
      initial: {
        opacity: 1
      },
      exit: {
        x: '100%',
        transition: {
          delay: delay === 1600 ? .8 : 0,
          duration: .8,
          ease: easing
        }
      }
    }
  }


  return {
    // showMenu:_showmenu, 
    frontslider(isFirstTime, isDoneAnimating){
      return _frontslider(isFirstTime, isDoneAnimating)
    }, 
    slidetoexit(delay){
      return _slidetoexit(delay)
    }
  }
})()

