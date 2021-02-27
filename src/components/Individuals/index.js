import React, {useEffect} from 'react';
import {Anim} from '../../utils/animations'
import Overview from './Components/Overview'
import Platform from './Components/Platform'
import Technology from './Components/Technology'
import Parallax from './Components/Parallax'
import Api from './Components/Api'
import Sketch from './Components/Sketch'
import Designs from './Components/Designs'
import Screens from './Components/Screens'
import Links from './Components/Links'
import NextPrev from './Components/NexPrev'

export default function Details({data}) {

  useEffect(() => {
    Anim.Helpers.tiltImage('.proj-img', 8)
  })
  
  return (
    <>
      <article className='project-details content-center'>
        <Overview data={data.overview}/>
        <Platform data={data.platforms}/>
        <Technology data={data.technologies}/>
        <Parallax data={data.parallax}/>
        <Api data={data.api}/>
        <Sketch data={data.sketch}/>
        <Designs data={data.designs}/>
        <Screens data={data.screens}/>
        <Links data={data.links} />
      </article>
      <hr/>
      <NextPrev data={data.nextPrev}/>
    </>
  );
}
