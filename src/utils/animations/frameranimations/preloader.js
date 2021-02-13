

export const Preloader = (function (){
  
  // close intro
  const _closeintro = {
    initial: {
      height: '100vh'
    }, 
    animate: {
      height: 0,
      transition: {
        delay: 5.2,
        duration: .85,
        ease: [0.6, -0.05, 0.01, 0.99]
      }
    }
  }

  // animates the logo
  const _animatelogo = {
    initial: {
      y: 15,
      scale: 1.1,
      opacity: 0
    },
    animate: {
      y: 0,
      scale: 1,
      opacity: 1,
      transition: {
        duration: 1,
        ease: 'easeInOut'
      }
    }
  }

  // removes the preloader
  const _removeloader = {
    initial: {
      opacity: 1
    },
    animate: {
      opacity: 0,
      transition: {
        delay: 4.3,
        duration: .5,
        ease: 'easeInOut'
      }
    }
  }

  // animates the text
  const _textanimate = {
    initial: {
      letterSpacing: '3px',
      y: 15,
      scale: 2,
      opacity: 0
    },
    animate: {
      letterSpacing: '10px',
      y: 0,
      scale: 1,
      opacity: 1,
      transition: {
        duration: 1,
        ease: 'easeInOut'
      }
    }
  }

  // animates the loader
  const _loader = {
    initial: {
      width: '0px'
    }, 
    animate: {
      width: '120px',
      transition: {
        duration: 4,
        type: "tween",
      }
    }
  }

  return {
    closeintro: _closeintro,
    animatelogo: _animatelogo,
    removeloader: _removeloader,
    textanimate: _textanimate,
    loader: _loader,
  }
})()
