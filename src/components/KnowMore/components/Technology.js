import React from 'react';
import Fade from 'react-reveal'

import {motion} from 'framer-motion'

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
              <Fade bottom key={i}>
                <li>
                  <div className="tool-icon content-center">
                    <motion.img 
                      alt={tool.alt}
                      src={tool.image} 
                      variants={animImg}
                      whileHover={tool.anim} />
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
      duration: 1.7,
      ease: 'easeIn',
      repeat: Infinity,
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
    rotate: -640,
    transition: {
      duration: 3,
      ease: 'easeIn',
    },
    x: [0, -20, 0],
    y: [0, 120,0],
  },
  dive: {
    y: [0, -40, 150, 0],
    x: [0, 30],
    rotate: [0, -360, -360],
    opacity: [1,1,1,0,0],
    transition: {
      duration: 1.5,
      ease: [0.6, -0.05, 0.01, 0.99],
      repeat: Infinity,
    }
  },
  zoom: {
    transition: {
      duration: 2.5,
      ease: 'easeIn',
      repeat: Infinity,
    },
    rotate: [0, 180, 180, 360, 360],
    scale: [1, 1.5, 1.5, 1, 1],
  }

}