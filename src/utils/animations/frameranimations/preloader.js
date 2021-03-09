

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
      opacity: 0,
      scale: 1.1,
      y: 15,
    },
    animate: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1,
        ease: 'easeInOut'
      },
      y: 0,
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
      opacity: 0,
      scale: 2,
      y: 15,
    },
    animate: {
      letterSpacing: '10px',
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1,
        ease: 'easeInOut'
      },
      y: 0,
    }
  }

  // animates the loader
  const _loader = {
    initial: {
      width: '0px'
    }, 
    animate: {
      transition: {
        duration: 4,
        type: "tween",
      },
      width: '120px',
    }
  }

  return {
    animatelogo: _animatelogo,
    closeintro: _closeintro,
    loader: _loader,
    removeloader: _removeloader,
    textanimate: _textanimate,
  }
})()
