import React from 'react';
import {motion} from 'framer-motion'
import Fade from 'react-reveal/Fade'

export default function Education({data}) {

  const ed = data.courses.map((course, i) => {
          return (
            <article className='course-wrapper content-center' key={i}>
              <div className='course-img'>
                <a target='_blank'
                  rel="noreferrer noopener"
                  href={course.image.url}
                  className="course-img-wrapper">
                    <Fade bottom>
                      <div>
                        <motion.img 
                          whileHover={{scale: 1.05, 
                            opacity: 0.6,
                            transition: {
                              duration: 0.2,
                              ease: 'easeIn'
                            }
                          }}
                          src={course.image.link} alt={course.image.alt}/>
                      </div>
                    </Fade>
                  </a>
                  <Fade bottom>
                    <span className='font-2 sb5'>scan or tap</span>
                  </Fade>
              </div>
              <div className='course-desc'>
                <Fade bottom>
                  <h4 className='font-1 s6a'>{course.course}</h4>
                  <span className='font-2 s4b school'>{course.school}</span>
                  <span className='font-2 s4b year'>thru Coursera 
                    <span className='data'> - {course.year}</span></span>
                </Fade>
              </div>
            </article> )
          }
        )

  return (
    <>
      <hr/>
      <section className="edu-main">
        <div className="edu-wrapper">
          <div className="edu-header content-center">
            <Fade bottom>
              <h2 className='font-1 s3a'>{data.title}</h2>
              <span className='font-2 s4b quote'>{data.caption.quote}</span>
              <span  className='font-2 s4b author'>{data.caption.author}</span>
            </Fade>
          </div>
          {ed}
        </div>
      </section>
      <hr/>
    </>
  );
}
