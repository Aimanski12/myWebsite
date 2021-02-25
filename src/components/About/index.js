import React, {useContext} from 'react';
import {AppData} from '../../context'
import {motion} from 'framer-motion'

export default function About({data}) {
  const {SetAppState} = useContext(AppData)

  console.log(data)
  return (
    <>
      <section className='profile-img-parallax'>
        <div className="profile-img" 
          style={{backgroundImage: `url(${data.parallax1.link})`}}></div>
      </section>


      
      <article className='profile-facts'>
        <div className="profile-facts-wrapper content-center">
          <img src={data.facts.image.link} alt={data.facts.image.alt}/>
          <div className="profile-facts-desc">
            <h2 className='font-1 s3a'>{data.facts.title}</h2>
            <p className='font-2 s4b'>{data.facts.caption}</p>
          </div>
        </div>
      </article>

      

      <section className='profile-img-parallax'>
        <div className="profile-img" 
          style={{backgroundImage: `url(${data.parallax2.link})`}}></div>
      </section>



      <article className='profile-facts'>
        <div className="profile-facts-wrapper content-center rev">
          <img src={data.howIBecame.image.link} alt={data.howIBecame.image.alt}/>
          <div className="profile-facts-desc">
            <h2 className='font-1 s3a'>{data.howIBecame.title}</h2>
            <p className='font-2 s4b'>{data.howIBecame.caption}</p>
          </div>
        </div>
      </article>



      <section className='profile-img-parallax'>
        <div className="profile-img" 
          style={{backgroundImage: `url(${data.parallax3.link})`}}></div>
      </section>


      <section className='profile-travels'>
        <div className="profile-travels-wrapper">
          <h2 className='font-1 s3a'>{data.travels.title}</h2>
          <div className="travels-img">
            { data.travels.images.map((img, i) => {
                return (
                  <div className='travels-img-wrapper' key={i}>
                    <motion.img 
                      whileHover={{
                        scale: 1.3,
                        opacity: 0.7,
                        transition: { duration: .25 },
                      }}
                      onClick={()=> {
                        SetAppState.setImageModalState({
                          isOpen: true, isSingle: false,
                          current: i, images: data.travels.images })
                      }}
                      src={img.link} alt={img.alt}/>
                  </div>
                )
              })
            }
          </div>
        </div>
      </section>


    </>
  );
}
