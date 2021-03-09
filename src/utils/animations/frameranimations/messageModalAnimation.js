
export const MessageModalAnim = (function (){

  // stagger child in message modal
 const _staggerMessage = {
   initial: {
     opacity: 0,
     y: 50,
   },
   animate: {
     opacity: 1,
     transition: {
       ease: 'easeInOut'
      },
     y: 0,
   }
 }

  // opens the message modal
  const _openMessage = {
    initial: {
      opacity: 0,
      y: -120,
    },
    animate: {
      opacity: 1,
      transition: {
        ease: 'easeInOut',
        staggerChildren: 0.1
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

  return {
    openMessage: _openMessage,
    staggerMessage: _staggerMessage
  }
})()
