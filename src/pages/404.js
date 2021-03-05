import React, {useContext, useEffect} from 'react'
import {AppData} from '../context'
import {Anim} from '../utils/animations'
import Link from 'next/link'
import {motion} from 'framer-motion'
import Head from '../components/Head/'
import Navigation from '../components/Navigation'
import page from '../mockdata/pages/notfound'

export default function NotFound() {
  const {AppState, SetAppState} = useContext(AppData)

  useEffect(() => {
    AppState.menuTransitions.isTransitioning ? (
      setTimeout(()=>{
        window.scrollTo(0, 0)
        SetAppState.setMenuTransitions({isTransitioning: false})
      }, AppState.menuTransitions.delay)
    ) : null
  })

  return (
    <div className='main'>
      <Head data={page.metadata}/>
      <Navigation data={page}/>
      <motion.div 
        variants={Anim.TransitionSliders.slidetoexit(
          AppState.menuTransitions.delay)}
        initial="initial" 
        animate={{opacity: 1}} 
        exit="exit" 
        id='body-wrapper'
        className="body-wrapper">
        <div className="scroll-body">

          <div className="notfound-wrapper"
            style={{background: `url(${page.background})`,
            backgroundPosition: 'center', backgroundSize: 'cover'}}>
            <div className="notfound-backer content-center">
              <h1 className='font-1 s1a'>{page.title}</h1>
              <p className='font-2 s4b'>{page.caption}</p>
              <Link href={page.buttonLink.link} scroll={false}>
                <motion.a 
                  whileHover={Anim.ImageModalAnim.expandBtn}
                  className='font-1 s7a'
                  onClick={()=>SetAppState.setToTransition()}>
                  <span>{page.buttonLink.text}</span>
                </motion.a>
              </Link>
            </div>
          </div>

        </div>
      </motion.div>
      
    </div>
  )
}

