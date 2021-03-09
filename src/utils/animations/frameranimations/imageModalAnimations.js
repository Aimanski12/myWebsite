
export const ImageModalAnim = (function (){

  // slide the modal in and out
  const _openModal = {
    initial: {
      opacity: 0,
      y: -120,
    },
    animate: {
      opacity: 1,
      transition: {
        ease: 'easeInOut'
      },
      y: 0,
    }, 
    exit: {
      opacity: 0,
      transition: {
        duration: .4,
        ease: 'easeInOut'
      },
      y: -120,
    }
  }

  // multiple image variants to slide left and right
  const _modalSliderVariants = {
    enter: (direction) => {
      return {
        opacity: 0,
        x: direction > 0 ? 500 : -500,
      };
    },
    center: {
      opacity: 1,
      x: 0,
      zIndex: 1,
    },
    exit: (direction) => {
      return {
        opacity: 0,
        transition: {
          duration: .1
        },
        x: direction < 0 ? 500 : -500,
        zIndex: 0,
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

  const _expandBtn = {
    scale: 1.15,
    transition: {
      duration: .05,
      ease: 'easeInOut'
    }
  }

  // moves the arros left 
  const _hoverLeft = {
    scale: 1.3,
    transition: {duration: .2},
    x: -8,
  }

  // moves the arrow right
  const _hoverRight = {
    scale: 1.3,
    transition: {duration: .2},
    x: 8,
  }

  return {
    expandBtn: _expandBtn,
    hoverLeft: _hoverLeft,
    hoverRight: _hoverRight,
    modalSliderVariants: _modalSliderVariants,
    openModal: _openModal,
    rotateBtn: _rotateBtn,
  }
})()
