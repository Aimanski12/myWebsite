import React from 'react';
import Fade from 'react-reveal/Fade'
import {motion} from 'framer-motion'

import ButtonLink from '../../GlobalComponents/ButtonLink'

export default function Links({data}) {

  const links = data.buttonLink.map((link, i) => {
    return (
      <Fade bottom key={i}>
        <div className="project-btn">
          <ButtonLink data={link}/>
        </div> 
      </Fade>
      )
    })

  return (
    <div className="project-detail-wrapper sketch">
      <Fade bottom>
        <h3 className='font-2 s2b'>{data.title}</h3>
        <p className='font-2 s4b'>{data.caption}</p>
      </Fade>

      <div className="project-links-qr">
        <div className="project-links-qrwrapper content-center">
          <Fade botom>
            <a 
              href={data.qrcode.link} 
              rel="noreferrer noopener"
              target='_blank' >
              <motion.img 
                alt={data.qrcode.alt}
                src={data.qrcode.image} 
                whileHover={{
                  scale: 1.05, opacity: 0.85, transition: { duration: .25 }
                }} />
            </a>
          </Fade>
          <Fade bottom>
            <span className="font-2 sb5">scan or tap to open app</span>
          </Fade>
        </div>
      </div>


      <div className="project-links">
        <div className="project-links-wrapper">
          <Fade bottom>
            <div className="other-links content-center">
              <span className="font-2 sb5">or view project source code and design</span>
            </div>
          </Fade>
          <div className="project-btn-wrapper content-center">
            {links}
          </div>
        </div>
      </div>
    </div>
  );
}
