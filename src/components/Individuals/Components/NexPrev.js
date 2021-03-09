import React from 'react';
import {motion} from 'framer-motion'
import Fade from 'react-reveal/Fade'
import ButtonLink from '../../../components/GlobalComponents/ButtonLink'

export default function NextPrev({data}) {

  const link = (d) => {
    return (
      <div className="proj-next-wrapper">
        <Fade bottom>
          <div className="proj-next-img">
            <motion.img 
              src={d.image.link} alt={d.image.alt}
              whileHover={{
                opacity: 0.7, 
                scale: 1.3, 
                transition: { duration: .25 }
              }} />
          </div>
        </Fade>

        <div className="proj-next-link">
          <Fade bottom>
            <span className='font-2 s3b'>{d.subj}</span>
            <h4 className='font-1 s3a'>{d.title}</h4>
            <div className="proj-next-btn">
              <ButtonLink data={d.btnlink}/>
            </div>
          </Fade>
        </div>
      </div>
    )
  }

  return (
      <section className='project-next content-center'>
        { data.prev ? link(data.prev) : null }
        { data.next ? link(data.next) : null }
      </section>
  );
}
