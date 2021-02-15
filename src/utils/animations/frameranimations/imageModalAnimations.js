
export const ImageModalAnim = (function (){

  // slide the modal in and out
  const _openModal = {
    initial: {
      y: -120,
      opacity: 0
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        ease: 'easeInOut'
      }
    }, 
    exit: {
      y: -120,
      opacity: 0,
      transition: {
        duration: .4,
        ease: 'easeInOut'
      }
    }
  }

  // multiple image variants to slide left and right
  const _modalSliderVariants = {
    enter: (direction) => {
      return {
        x: direction > 0 ? 500 : -500,
        opacity: 0
      };
    },
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction) => {
      return {
        zIndex: 0,
        x: direction < 0 ? 500 : -500,
        opacity: 0,
        transition: {
          duration: .1
        }
      };
    }
  };

  // rotates the button when hovered
  const _rotateBtn = {
    rotate: 180,
    scale: 1.2,
    transition: {
      duration: .2,
      ease: 'easeInOut'
    }
  }

  // moves the arros left 
  const _hoverLeft = {
    scale: 1.3,
    x: -8,
    transition: {duration: .2}
  }

  // moves the arrow right
  const _hoverRight = {
    scale: 1.3,
    x: 8,
    transition: {duration: .2}
  }

  return {
    openModal: _openModal,
    modalSliderVariants: _modalSliderVariants,
    rotateBtn: _rotateBtn,
    hoverLeft: _hoverLeft,
    hoverRight: _hoverRight
  }
})()
