import React from 'react';
import {motion} from 'framer-motion'
import Fade from 'react-reveal'

export default function Technology({data}) {

  return (
    <div className="tools-main">
      <div className="tools-spread content-center">
        <div className="tool-name">
          <Fade bottom>
            <span className='font-2 s3b'>{data.title}</span>
          </Fade>
        </div>
        <ul>
          {data.tools.map((tool, i) => {
            return(
              <Fade bottom>
                <li key={i}>
                  <div className="tool-icon content-center">
                    <motion.img 
                      whileHover={tool.anim}
                      variants={animImg}
                      src={tool.image} alt={tool.alt}/>
                    <span className='font-1 s5b'>{tool.name}</span>
                  </div>
                </li> 
              </Fade> )
            })
          }
        </ul>
      </div>
    </div>

  );
}




const animImg = {
  clock: {
    rotate: [0, -65, 65, 0],
    transition: {
        repeat: Infinity,
        duration: 1.7,
        ease: 'easeIn',
    }
  },
  fall: {
    originX: -1,
    originY: 1,
    rotate: 45,
    transition: {
      duration: .3,
      ease: 'easeIn',
    }
  },
  down: {
    y: [0, 120,0],
    x: [0, -20, 0],
    rotate: -640,
    transition: {
      duration: 3,
      ease: 'easeIn',
    }
  },
  dive: {
    y: [0, -40, 150, 0],
    x: [0, 30],
    rotate: [0, -360, -360],
    opacity: [1,1,1,0,0],
    transition: {
      repeat: Infinity,
      duration: 1.5,
      ease: [0.6, -0.05, 0.01, 0.99]
    }
  },
  zoom: {
    rotate: [0, 180, 180, 360, 360],
    scale: [1, 1.5, 1.5, 1, 1],
    transition: {
      repeat: Infinity,
      duration: 2.5,
      ease: 'easeIn',
    }
  }

}