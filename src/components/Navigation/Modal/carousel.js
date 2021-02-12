import * as React from "react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Svg from '../../Svgs'
import { wrap } from "popmotion";
import {img, images } from "./sample";

const swipeConfidenceThreshold = 10000;
const swipePower = (offset, velocity) => {
  return Math.abs(offset) * velocity;
};

export default function Modal () {
  const [[page, direction], setPage] = useState([0, 0]);

  const imageIndex = wrap(0, images.length, page);

  const paginate = (newDirection) => {
    setPage([page + newDirection, newDirection]);
  };

  return (
    <div className="modal-container">
      <div className="modal-background content-center">

        

       


        <motion.div 
          key={page}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.2 }
          }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={1}
          onDragEnd={(e, { offset, velocity }) => {
            const swipe = swipePower(offset.x, velocity.x);
            
            if (swipe < -swipeConfidenceThreshold) {
              paginate(1);
            } else if (swipe > swipeConfidenceThreshold) {
              paginate(-1);
            }
          }}
          className="modal-image-wrapper content-center">
          <figure 
            onMouseMove={(e)=>mouseMove(e)}
            className="modal-image content-center"
            style={{
              backgroundImage: `url(${images[imageIndex].link})`}}>
            <img src={images[imageIndex].link} alt={images[imageIndex].alt}/>
          </figure>

          <div className="image-caption content-center">
            <h4 className='font-1 s4a'>{images[imageIndex].name}</h4>
            <span className='font-2 s4b'>{images[imageIndex].description}</span>
          </div>

          <div className="modal-svg-wrapper">
            <motion.button  
              whileHover={rotatebtn}
             className='content-center'>
              <Svg svg='close'/>     
            </motion.button>
          </div> 

        </motion.div>

      
        <div className="swipe-wrapper content-center font-2 s5b">
          <motion.span 
            animate={{ x: -35, opacity: 0 }}
            transition={{ repeat: Infinity, duration: 2 }}
            className='swipe-left'>←</motion.span>
          <span>Swipe</span>
          <motion.span 
            animate={{ x: 35, opacity: 0 }}
            transition={{ repeat: Infinity, duration: 2 }}
            className='swipe-right'>→</motion.span>
        </div>


      <motion.div 
        whileHover={hoverright}
        whileTap={{ scale: 0.9 }}
        className="modal-next-btn" onClick={() => paginate(1)}>
        <Svg svg='chevright'/>
      </motion.div>
      <motion.div 
        whileHover={hoverleft}
        whileTap={{ scale: 0.9 }}
        className="modal-prev-btn" onClick={() => paginate(-1)}>
        <Svg svg='chevleft'/>
      </motion.div>
    </div>
    </div>
  );
};


const rotatebtn = {
  rotate: 180,
  scale: 1.2,
  transition: {
    duration: .2,
    ease: 'easeInOut'
  }
}

const hoverleft = {
  scale: 1.3,
  x: -8,
  transition: {duration: .2}
}
const hoverright = {
  scale: 1.3,
  x: 8,
  transition: {duration: .2}
}

const mouseMove = (e) => {
  const image = e.currentTarget;
  let x = e.nativeEvent.offsetX / image.offsetWidth * 100
  let y = e.nativeEvent.offsetY / image.offsetHeight * 100

  image.style.backgroundPosition = x + '% ' + y + '%';
}


const variants = {
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
  exit: (direction, number) => {
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
