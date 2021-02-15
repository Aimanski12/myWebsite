
export const MessageModalAnim = (function (){

  // stagger child in message modal
 const _staggerMessage = {
   initial: {
     y: 50,
     opacity: 0
   },
   animate: {
     y: 0,
     opacity: 1,
     transition: {
       ease: 'easeInOut'
     }
   }
 }

  // opens the message modal
  const _openMessage = {
    initial: {
      y: -120,
      opacity: 0
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        ease: 'easeInOut',
        staggerChildren: 0.1
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

  return {
    openMessage: _openMessage,
    staggerMessage: _staggerMessage
  }
})()
