import React, {useEffect} from 'react';
import {Anim} from '../../../utils/animations'
import Svg from '../../Svgs'

export default function ArtWorkSingle({data}) {
  useEffect(()=>{
    Anim.Helpers.tiltImage(".featured-artwork figure", 35)
  })

  return (
    <section className="featured-artwork content-center"
      style={{background: data.background}}>
        <figure>
          <img src={data.image} alt={data.alt}/>
        </figure>
        <div className="art-link-caption font-1 s7a">
          <a href={data.link} 
            target='_blank' rel="noreferrer noopener"
            className='content-center'>
            <span>View artwork on:</span>
            <Svg svg='coloredinsta'/>
          </a>
        </div>  
    </section>
  )
}
