import React from 'react';
import Fade from 'react-reveal/Fade'

import ButtonLink from '../../GlobalComponents/ButtonLink'

export default function SeeProj({data}) {

  return (
    <>
       <section className='see-proj'>
        <div className="see-proj-wrapper">
          <div className="see-proj-header content-center">
            <Fade bottom>
              <h2 className='font-1 s3a'>{data.title}</h2>
              <p className='font-2 s4b'>{data.caption}</p>
            </Fade>
          </div>
          <div className="see-proj-work content-center">
            { data.links.map((link, i) => {
              return (
                <div 
                  className="proj-work-wrapper content-center" 
                  key={i}>
                  <Fade bottom>
                    <div>
                      <img 
                        alt={link.image.alt}
                        src={link.image.link} />
                    </div>
                    <span className='font-2 s4b prj-title'>{link.title}</span>
                    <div className="proj-work-btn-wrapper">
                      <ButtonLink data={link.buttonLink}/>
                    </div>
                  </Fade>
                </div>
              )
            })
            }
          </div>
        </div>
      </section>

      <hr/>
    </>
  );
}
