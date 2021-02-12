import React, {useContext, useEffect, useState, useRef} from 'react'
import {AppData} from '../context/appData'

import Head from 'next/head'
import Link from 'next/link'

import Navigation from '../containers/Navigation/Navigation'

import {motion, AnimatePresence} from 'framer-motion'
import {Anim} from '../utils/animations'

export default function Home() {

  const {AppState, SetAppState} = useContext(AppData)

  useEffect(() => {
    SetAppState.setPageData('home')
    AppState.menuTransitions.isTransitioning ? (
      setTimeout(()=>{
        window.scrollTo(0, 0)
        SetAppState.setMenuTransitions({isTransitioning: false})
      }, AppState.menuTransitions.delay)
    ) : null
  })



 // ////////////////////////////////////////////////////////

  // STATE
  const [windowSize, setWindowSize] = useState({
    width: 320,
    height: 568
  })

  useEffect(() => {
    // let a = useWin

    setWindowSize(getSize())

    function getSize() {
      return {
        width: window.innerWidth,
        height: window.innerHeight
      }
    }


    function handleResize() {
      setWindowSize(getSize())
    }

    // event listener when the screen resizes
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])


  // Ref for parent div and scrolling div
  const app = useRef();
  const scrollContainer = useRef();

  // Configs
  const data = {
    ease: 0.1,
    current: 0,
    previous: 0,
    rounded: 0
  };


  // Run scrollrender once page is loaded.
  useEffect(() => {
    requestAnimationFrame(() => skewScrolling());
  }, []);

  //set the height of the body.
  useEffect(() => {
    // setBodyHeight();
    document.body.style.height = `${
      scrollContainer.current.getBoundingClientRect().height}px`;
  }, [windowSize.height]);

  //   //Set the height of the body to the height of the scrolling div
  // const setBodyHeight = () => {
  // };


  // Scrolling
  const skewScrolling = () => {
    //Set Current to the scroll position amount
    data.current = window.scrollY;
    // console.log(window.scrollY)
    // Set Previous to the scroll previous position
    data.previous += (data.current - data.previous) * data.ease;
    // Set rounded to
    data.rounded = Math.round(data.previous * 100) / 100;

    // Difference between
    const difference = data.current - data.rounded;
    const acceleration = difference / windowSize.width;
    const velocity = +acceleration;
    const skew = velocity * 5;

    //Assign skew and smooth scrolling to the scroll container
    if (scrollContainer.current != undefined) {
      scrollContainer.current.style.transform = `translate3d(0, -${data.rounded}px, 0) skewY(${skew}deg)`;
    }
    //loop vai raf

    requestAnimationFrame(() => skewScrolling());
  };

  // ////////////////////////////////////////////////////////

  return (
    <div className='main'>
      
      <Head>
        <title>Aiman Adlawan | Official Website</title>
        <link rel="icon" type="image/x-icon" href="/images/aiman-small-logo.ico" />
      </Head>

      <Navigation />


       {/* <AnimatePresence>
        { AppState.menuTransitions.isOpen && (
          <motion.div 
            variants={Anim.TransitionSliders.showMenu}
            initial='initial'
            animate='animate'
            exit='exit'
            className="menu-wrapper">
            <div className="menuwrap">
              <Link href="/about" scroll={false}>
                <a onClick={()=> {
                  Anim.Helpers.hidshowbody('hidden')
                  SetAppState.setMenuTransitions({
                    isOpen: false,
                    isTransitioning: true,
                    delay: 1600
                  })
                }}
                >Home</a>
              </Link>
            </div>
          </motion.div> )}
      </AnimatePresence> */} 

      


      
      { AppState.sessionData.isChecked ? 
        
      <div className="slider">
        <motion.div 
          variants={
            Anim.TransitionSliders.frontslider(
              AppState.sessionData.isFirstTime, 
              AppState.sessionData.isDoneAnimating)} 
            initial="initial" 
            animate="animate" 
            onAnimationStart={()=>Anim.Helpers.hidshowbody('auto')}
            onAnimationComplete={()=>Anim.Helpers.removeintroslider()}
            className="slider-wrapper">
          <div className="imgwrapper">
            <span>aiman adlawan</span>
          </div>  
        </motion.div>
      </div> : null

        }


      <div 
        className="backer">
        <div className="backer-wrapper">
          <div className="backer-imgwrapper">
            <span>aiman adlawan</span>
          </div>  
        </div>
      </div>

    <motion.div 
      variants={
        Anim.TransitionSliders.slidetoexit(AppState.menuTransitions.delay)}
      initial="initial"
      animate={{opacity: 1}}
      exit="exit" 
      className="body-wrapper">

      <div ref={app} className="samp">
        <div
          ref={scrollContainer} 
          className="maindivs">
          <div className="one1 container">
            <h1>Home Page</h1>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora iure doloribus itaque, veniam amet minima recusandae libero mollitia quo reiciendis?</p>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe in optio, dicta quis sint doloremque.</p>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro, praesentium!</p>
            <Link href='/about' scroll={false}>
              <a onClick={()=>{
                Anim.Helpers.hidshowbody('hidden')
                SetAppState.setMenuTransitions({
                  isTransitioning: true,
                  delay: 800
                })
              }}> Go to one</a>
            </Link>
          </div>
          <div className="two container">
            <Link href='/about' scroll={false}>
              <a onClick={()=>{
                Anim.Helpers.hidshowbody('hidden')
                SetAppState.setMenuTransitions({
                  isTransitioning: true,
                  delay: 800
                })
              }}> Go to one</a>
            </Link>
            <span className="font-1 s1a">Lorem, ip1sum dolor.</span>
            <span className="font-1 s2a">Lorem, ip1sum dolor.</span>
            <span className="font-1 s3a">Lorem, ip1sum dolor.</span>
            <span className="font-1 s4a">Lorem, ip1sum dolor.</span>
            <span className="font-1 s5a">Lorem, ip1sum dolor.</span>
            <br/>
            <span className="font-1 s1b">Lorem, ip1sum dolor.</span>
            <span className="font-1 s2b">Lorem, ip1sum dolor.</span>
            <span className="font-1 s3b">Lorem, ip1sum dolor.</span>
            <span className="font-1 s4b">Lorem, ip1sum dolor.</span>
            <span className="font-1 s5b">Lorem, ip1sum dolor.</span>
            <span className="font-1 s6b">Lorem, ip1sum dolor.</span>
          </div>
          <div className="two two2 container">
            <Link href='/about' scroll={false}>
              <a onClick={()=>{
                Anim.Helpers.hidshowbody('hidden')
                SetAppState.setMenuTransitions({
                  isTransitioning: true,
                  delay: 800
                })
              }}> Go to one</a>
            </Link>
          </div>
          <div className="three container">
            <h1>Home Page</h1>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora iure doloribus itaque, veniam amet minima recusandae libero mollitia quo reiciendis?</p>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe in optio, dicta quis sint doloremque.</p>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro, praesentium!</p>
          </div>
        </div>
      </div>
      </motion.div>

    </div>
  )
}

