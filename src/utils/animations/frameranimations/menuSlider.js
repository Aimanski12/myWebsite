

export const MenuButton = (function () {
  let easing = [0.6, -0.05, 0.01, 0.99]

  // button animation for hovering in and out 
  // on the menu button
  const buttonAnim = {
    initial: {
      opacity: 0
    },
    animate: {
      opacity: 1,
      transition: {
        duration: 0.5
      }
    },
    exit: {
      opacity: 0,
      transition: {
        duration: 0.35,
      }
    }
  }

  // framer animation for the copyright
  const showCopyRight = {
    initial: {
      opacity: 0
    },
    animate: {
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: easing,
      }
    },
    exit: {
      opacity: 0,
      transition: {
        ease: easing,
        duration: 0.3
      }
    }
  }

  // framer animation for the menu items
  const slideMenuItems = {
    initial: {
      y: 65,
      opacity: 0
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        damping: 8,
        duration: 0.4,
        ease: easing,
        mass: 0.4,
        stiffness: 90,
        type: 'spring',
      }
    },
    exit: {
      opacity: 0,
      transition: {
        ease: easing,
        duration: 0.3
      },
      y: 65,
    }
  }

  // framer animation for the menu span sliders
  const animateSliders = {
    initial: {
      width: 0
    },
    animate: {
      width: '100%',
      transition: {
        duration: 1,
        ease: easing,
      }
    },
    exit: {
      width: 0,
      transition: {
        delay: 0.3,
        duration: 0.3,
        ease: 'easeInOut',
      }
    }
  }
    
  // framer animation for social icons
  const slideIcons = {
    initial: {
      y: 46
    },
    animate: {
      transition: {
        damping: 8,
        duration: 0.4,
        ease:'easeInOut',
        mass: 0.4,
        stiffness: 65,
        type: 'spring',
      },
      y: 0,
    }, 
    exit: {
      opacity: 0,
      transition: {
        duration: 0.3,
        type: 'easeInOut',
      }
    }
  }
  
  // framer animation for the parent div in the show menu
  const showMenu = {
    initial:{
      opacity: 1
    }, 
    animate: {
      opacity: 1,
      transition: {
        duration: 0.1,
        staggerChildren: 0.1
      }
    },
    exit: {
      transition: {
        delay: .7,
      }
    }
  }


  return {
    showMenu,
    slideMenuItems,
    slideIcons,
    buttonAnim,
    animateSliders,
    showCopyRight
  }

})()