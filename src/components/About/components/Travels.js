import React, {useContext} from 'react';
import {AppData} from '../../../context'
import {motion} from 'framer-motion'
import Fade from 'react-reveal/Fade'

export default function Travels({data}) {
  const {SetAppState} = useContext(AppData)

  return (
    <section className='profile-travels'>
      <div className="profile-travels-wrapper">
        <Fade bottom>
          <h2 className='font-1 s3a'>{data.title}</h2>
        </Fade>
        <div className="travels-img">
          { data.images.map((img, i) => {
              return (
                <Fade bottom key={i}>
                  <div className='travels-img-wrapper'>
                    <motion.img 
                      whileHover={{ 
                        scale: 1.3, opacity: 0.7,
                        transition: { duration: .25 } }}
                      onClick={()=> {
                        SetAppState.setImageModalState({
                          isOpen: true, isSingle: false,
                          current: i, images: data.images })
                        }}
                        src={img.link} alt={img.alt}/>
                  </div>
                </Fade>
              )
            })
          }
        </div>
      </div>
    </section>
  );
}
