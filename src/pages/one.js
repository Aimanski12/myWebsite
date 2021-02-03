import React, {useContext, useEffect} from 'react'
import {AppData} from '../context/appData'

import Head from 'next/head'
import Link from 'next/link'


import {motion} from 'framer-motion'

let easing = [0.6, -0.05, 0.01, 0.99];

export default function Two() {
  const {pagedata, setpagedata} = useContext(AppData)
  useEffect(() => {
    setpagedata('home')
    console.log(pagedata)
  })


  const putback = () => {
    const slider = document.querySelector('.slider')
    const sliderwrap = document.querySelector('.slider-wrapper')
    slider.style.display = 'none'
    sliderwrap.style.width = '100%'
    const body = document.querySelector('body')
    body.style.overflow = 'auto'
  }

  const setscroller = () => {
    const body = document.querySelector('body')
    body.style.overflow = 'auto'
  }

  
  return (
    <div>
      <Head>
        <title>Aiman Adlawan | Official Website</title>
        <link rel="icon" type="image/x-icon" href="/images/aiman-small-logo.ico" />
      </Head>



      <div className="slider">
        <motion.div 
          variants={slide} 
          initial="initial" 
          animate="animate"
          onAnimationStart={setscroller}
          onAnimationComplete={putback}
          className="slider-wrapper">
          <div className="imgwrapper">
            <img src="/images/sample_logo.svg" alt=""/>
          </div>  
        </motion.div>
      </div>

      <div className="samp">
      <motion.div 
        variants={slidetoexit}
        initial="initial"
        animate={{opacity: 1}}
        exit="exit"
        className="maindivs">
        <div className="one container">
          <h1>Page One</h1>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora iure doloribus itaque, veniam amet minima recusandae libero mollitia quo reiciendis?</p>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe in optio, dicta quis sint doloremque.</p>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro, praesentium!</p>
          <Link href='/'>
            <a onClick={()=>{
              const body = document.querySelector('body')
              body.style.overflow = 'hidden'}}>Go to home</a>
          </Link>
        </div>
        <div className="two container">
          <Link href='/'>
            <a onClick={()=>{
              const body = document.querySelector('body')
              body.style.overflow = 'hidden'}}>Go to home</a>
          </Link>
        </div>
        <div className="three container">
          <h1>Page One</h1>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora iure doloribus itaque, veniam amet minima recusandae libero mollitia quo reiciendis?</p>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe in optio, dicta quis sint doloremque.</p>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro, praesentium!</p>
        </div>
      </motion.div>
      </div>

      <div className="backer">
        <div className="backer-wrapper">
          <div className="backer-imgwrapper">
            <img src="/images/sample_logo.svg" alt=""/>
          </div>  
        </div>
      </div>

    </div>
  )
}

const slidetoexit = {
  initial: {
    opacity: 1
  },
  exit: {
    x: "100%",
    transition: {
      duration: .8,
      ease: easing
    }
  }
}

const slide = {
  initial: {
    width: '100vw'
  },
  animate: {
    width: 0,
    transition: {
      duration: 1,
      ease: easing
    }
  }
}