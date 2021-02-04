import {useEffect, useState} from 'react'

// this function is used to get the 
// width and the height of the screen
export default function useWindowSize (){

  // function to return width and height
  function getSize () {
    return {
      width: window.innerWidth,
      height: window.innerHeight
    }
  }

  // STATE
  const [windowSize, setWindowSize] = useState(getSize)

  useEffect(()=>{
    function handleResize() {
      setWindowSize(getSize())
    }
    // event listener when the screen resizes
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return windowSize
}