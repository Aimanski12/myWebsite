import React, {useState} from 'react';
import {motion, AnimatePresence} from 'framer-motion'
import Svg from '../../Svgs'
import { wrap } from 'popmotion';
import {img, images} from './sample'

export default function Modal() {

 
const [[page, direction], setPage] = useState([0, 0]);

const swipeConfidenceThreshold = 10000;

const swipePower = (offset, velocity) => {
  return Math.abs(offset) * velocity;
};

const paginate = (newDirection) => {
  setPage([page + newDirection, newDirection]);
};


const imageIndex = wrap(0, images.length, page);



  return (
    <div className="modal-container">
      <div className="modal-background content-center">

      <div className="example-container">

        <AnimatePresence initial={false} custom={direction}>
        <motion.img
          key={page}
          src={images[imageIndex].link}
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
          />
      </AnimatePresence>
      <div className="next" onClick={() => paginate(1)}>
        {"‣"}
      </div>
      <div className="prev" onClick={() => paginate(-1)}>
        {"‣"}
      </div>
    </div>

        {/* <figure 
          onMouseMove={(e)=>mouseMove(e)}
          className="modal-image content-center"
          style={{
            backgroundImage: `url(${img.link})`}}>
          <img src={img.link} alt="project_banner"/>
        </figure>

        <div className="image-caption content-center">
          <h4 className='font-1'>{img.name}</h4>
          <span className='font-2'>{img.description}</span>
        </div>

        <div className="modal-svg-wrapper">
          <button className='content-center'>
            <Svg svg='close'/>     
          </button>
        </div> */}

      </div>
    </div>
  );
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
      x: direction > 0 ? '100vw' : '-100vw',
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
      x: direction < 0 ? '100vw' : '-100vw',
      opacity: 0
    };
  }
};