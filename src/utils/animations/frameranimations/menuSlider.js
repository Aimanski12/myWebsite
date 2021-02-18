

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
        ease: easing,
        duration: 0.5
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
        type: 'spring',
        stiffness: 90,
        mass: 0.4,
        damping: 8,
        ease: easing,
        duration: 0.4
      }
    },
    exit: {
      y: 65,
      opacity: 0,
      transition: {
        ease: easing,
        duration: 0.3
      }
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
        ease: easing,
        duration: 1
      }
    },
    exit: {
      width: 0,
      transition: {
        delay: 0.3,
        ease: 'easeInOut',
        duration: 0.3
      }
    }
  }
    
  // framer animation for social icons
  const slideIcons = {
    initial: {
      y: 46
    },
    animate: {
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 65,
        mass: 0.4,
        damping: 8,
        ease:'easeInOut',
        duration: 0.4
      }
    }, 
    exit: {
      opacity: 0,
      transition: {
        type: 'easeInOut',
        duration: 0.3
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