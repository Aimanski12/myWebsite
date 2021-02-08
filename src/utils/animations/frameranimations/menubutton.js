

export const MenuButton = (function () {
  
  const _buttonAnim = {
    initial: {
      opacity: 0
    },
    animate: {
      opacity: 1,
      transition: {
        delay: 0.1,
        duration: 0.3,
        ease: 'easeInOut'
      }
    },
    exit: {
      opacity: 0,
      transition: {
        duration: 0.2,
        ease: 'easeInOut'
      }
    }
  }

  return {
    buttonAnim: _buttonAnim
  }

})()