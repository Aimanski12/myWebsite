import React, {useEffect} from 'react';
import Fade from 'react-reveal/Fade'

import {Anim} from '../../../utils/animations'
import Svg from '../../Svgs'

export default function ArtWorkSingle({data}) {
  useEffect(()=>{
    Anim.Helpers.tiltImage(".featured-artwork figure", 35)
  })

  return (
    <section 
      className="featured-artwork content-center"
      style={{background: data.background}}>
        <figure>
          <img src={data.image} alt={data.alt}/>
        </figure>
        <div className="art-link-caption font-1 s7a">
        <Fade bottom>
          <a 
            className='content-center'
            href={data.link} 
            rel="noreferrer noopener"
            target='_blank' >
            <span>View artwork on:</span>
            <Svg svg='coloredinsta'/>
          </a>
        </Fade>
      </div>  
    </section>
  )
}
