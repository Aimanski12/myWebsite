import React, {useContext, useEffect, useState} from "react";
import { motion} from "framer-motion";
import { wrap } from "popmotion";

import { Anim } from '../../../../utils/animations'
import { AppData } from '../../../../context'

import Arrows from './component/Arrows'
import CloseButton from './component/CloseButton'
import Figure from './component/Figure'
import Swipe from './component/Swipe'

const swipeConfidenceThreshold = 10000;

// speed velocity of the swipe
const swipePower = (offset, velocity) => { return Math.abs(offset) * velocity };

export default function Modal () {
  const {AppState, SetAppState} = useContext(AppData)

  const [[page, direction], setPage] = useState([AppState.modal.current, 0]);

  // find the index of the image
  const imageIndex = wrap(0, AppState.modal.images.length, page);

  // set page state
  const paginate = (newDirection) => {
    setPage([page + newDirection, newDirection]);
  };
  
  useEffect(()=>{
    // event listener when the key is pressed
    window.addEventListener('keydown', (e)=>closeModal(e))
    return () => window.removeEventListener('keydown', closeModal)
  }, [])

  // close modal whenever esc key is pressed down
  function closeModal(e) {
    if(e.key === 'Escape') {
      Anim.Helpers.hidshowbody('auto')
      SetAppState.setImageModalState({ isOpen: false, current: 0, images: {} })
    }
  }

  // the the modal is opened and we press esc to close the modal
  // the state will be updated from an array of object to an empty 
  // array. we we need to filter the props passed to the child <Figure>
  // so to avoid errors
  const findImage = () => {
    // check if the modal.images state is not an empty object
    if(Object.keys(AppState.modal.images).length > 0) {
      return AppState.modal.images[imageIndex]
    } else {
      return {}
    }
  }

  return (
    <>
      <motion.div key={page}
        animate="center"
        className="modal-image-wrapper content-center"
        custom={direction}
        drag="x"
        dragConstraints={{ left: 0, right: 0 }}
        dragElastic={1}
        exit="exit"
        initial="enter"
        onDragEnd={(e, { offset, velocity }) => {
          const swipe = swipePower(offset.x, velocity.x);
          if (swipe < -swipeConfidenceThreshold) {
            paginate(1);
          } else if (swipe > swipeConfidenceThreshold) {
            paginate(-1);
          }
        }} 
        transition={{
          opacity: { duration: 0.2 },
          x: { 
            damping: 30,
            stiffness: 300, 
            type: "spring", 
          },
        }}
        variants={Anim.ImageModalAnim.modalSliderVariants} >
        <Figure img={findImage()} />
        <CloseButton btn='image'/>
      </motion.div>
      <Swipe />
      <Arrows 
        left={()=>paginate(-1)}
        right={()=>paginate(1)} />
    </>
  );
};