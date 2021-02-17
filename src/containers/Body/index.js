import React, {useContext, useRef, useEffect, useState} from 'react'
import {AppData} from '../../context'
import {Anim} from '../../utils/animations'
import {motion} from 'framer-motion'
import Home from './Home'
import Artwork from './Artwork'
import Webdev from './Webdev'
import Contact from './Contact'
import About from './About'
import NotFound from './NotFound'
import IndvProjects from './Projects'
import KnowMore from './KnowMore'


export default function Body({page}) {
  const {AppState} = useContext(AppData)

   // Ref for parent div and scrolling div
  const app = useRef();
  const scrollContainer = useRef();

  // Configs
  const data = { ease: 0.1, current: 0, previous: 0, rounded: 0 };
  // STATE
  const [windowSize, setWindowSize] = useState({ width: 320, height: 568 })

  useEffect(() => {
    setWindowSize(getSize())

    function getSize() {
      return { width: window.innerWidth, height: window.innerHeight }
    }

    function handleResize() {
      setWindowSize(getSize())
    }

    requestAnimationFrame(() => skewScrolling());
    document.body.style.height = `${
      scrollContainer.current.getBoundingClientRect().height}px`;

    // event listener when the screen resizes
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [windowSize.height])


  // Scrolling
  const skewScrolling = () => {
    //Set Current to the scroll position amount
    data.current = window.scrollY;
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
    requestAnimationFrame(() => skewScrolling());
  };


  const contents = () => {
    let a = page === 'home' ? <Home/> :
      page === 'artwork' ? <Artwork /> :
      page === 'webdev' ? <Webdev/> :
      page === 'contact' ? <Contact/> :
      page === 'about' ? <About/> :
      page === 'knowmore' ? <KnowMore/> :
      page === 'notfound' ? <NotFound/> :
      page === 'indvproj' ? <IndvProjects/> : null
    return a
  }

  return (
    <motion.div 
      variants={Anim.TransitionSliders.slidetoexit(AppState.menuTransitions.delay)}
      initial="initial" animate={{opacity: 1}} exit="exit" className="body-wrapper">
        <div ref={app} className="scroll-body">
          <div ref={scrollContainer} className="scroll-container">
              {contents()}
          </div>
        </div>
    </motion.div>
  )
}

