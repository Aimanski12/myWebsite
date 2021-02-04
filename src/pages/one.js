import React, {useContext, useEffect} from 'react'
import {AppData} from '../context/appData'

import Head from 'next/head'
import Link from 'next/link'


import {motion, AnimatePresence} from 'framer-motion'
import {Anim} from '../utils/frameranimations/frameranimation'


export default function Home() {

  const easing = [0.6, -0.05, 0.01, 0.99];

  const {pagedata, setpagedata, menutransitions, setmenutransition} = useContext(AppData)

  useEffect(() => {
    setpagedata('home')

    menutransitions.isTransitioning ? (
      setTimeout(()=>{
        window.scrollTo(0, 0)
        setmenutransition({isTransitioning: false})
      }, menutransitions.delay)
    ) : null
      
  })

  const putback = () => {
    const slider = document.querySelector('.slider')
    slider.style.display = 'none'
  }
  
  const setscroller = () => {
    const body = document.querySelector('body')
    body.style.overflow = 'auto'
  }

  const slidetoexit = {
    initial: {
      opacity: 1
    },
    exit: {
      x: '100%',
      transition: {
        delay: menutransitions.delay === 1600 ? .8 : 0,
        duration: .8,
        ease: easing
      }
    }
  }


  const samp = () => {
    const body = document.querySelector('body')
    if (menutransitions.isOpen) {
      body.style.overflow = 'auto'
    } else {
      body.style.overflow = 'hidden'
    }
    setmenutransition({isOpen: !menutransitions.isOpen})
  }
  
  return (
    <div className='parent'>
      
      <Head>
        <title>Aiman Adlawan | Official Website</title>
        <link rel="icon" type="image/x-icon" href="/images/aiman-small-logo.ico" />
      </Head>

      <div className="btn-wrapper">
        <span className="btn-nav"
          onClick={samp}>Menu</span>
      </div>

      <AnimatePresence>
        { menutransitions.isOpen && (
          <motion.div 
            variants={Anim.showMenu}
            initial='initial'
            animate='animate'
            exit='exit'
            className="menu-wrapper">
            <div className="menuwrap">
              <Link href="/" scroll={false}>
                <a onClick={()=> {
                  const body = document.querySelector('body')
                  body.style.overflow = 'hidden'
                  setmenutransition({
                    isOpen: false,
                    isTransitioning: true,
                    delay: 1600
                  })
                }}
                >Go to Home</a>
              </Link>
            </div>
          </motion.div> )}
      </AnimatePresence>


      <div className="slider">
        <motion.div 
          variants={Anim.frontslider()} 
          initial="initial" 
          animate="animate" 
          onAnimationStart={setscroller}
          onAnimationComplete={putback}
          className="slider-wrapper">
          <div className="imgwrapper">
            {/* <img src="/images/sample_logo.svg" alt=""/> */}
          </div>  
        </motion.div>
      </div>
      <div 
        className="backer">
        <div className="backer-wrapper">
          <div className="backer-imgwrapper">
            {/* <img src="/images/sample_logo.svg" alt=""/> */}
          </div>  
        </div>
      </div>

      <div className="samp">
        <motion.div 
          variants={slidetoexit}
          initial="initial"
          animate={{opacity: 1}}
          exit="exit" 
          className="maindivs">
          <div className="one1 container">
            <h1>Home Page</h1>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora iure doloribus itaque, veniam amet minima recusandae libero mollitia quo reiciendis?</p>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe in optio, dicta quis sint doloremque.</p>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro, praesentium!</p>
            <Link href='/' scroll={false}>
              <a onClick={()=>{
                const body = document.querySelector('body')
                body.style.overflow = 'hidden'
                setmenutransition({
                  isTransitioning: true,
                  delay: 800
                })
              }}> Go to Home</a>
            </Link>
          </div>
          <div className="two container">
            <Link href='/' scroll={false}>
              <a onClick={()=>{
                const body = document.querySelector('body')
                body.style.overflow = 'hidden'
                setmenutransition({
                  isTransitioning: true,
                  delay: 800
                })
              }}> Go to Home</a>
            </Link>
          </div>
          <div className="two two2 container">
            <Link href='/' scroll={false}>
              <a onClick={()=>{
                const body = document.querySelector('body')
                body.style.overflow = 'hidden'
                setmenutransition({
                  isTransitioning: true,
                  delay: 800
                })
              }}> Go to Home</a>
            </Link>
          </div>
          <div className="three container">
            <h1>Home Page</h1>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora iure doloribus itaque, veniam amet minima recusandae libero mollitia quo reiciendis?</p>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe in optio, dicta quis sint doloremque.</p>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro, praesentium!</p>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
