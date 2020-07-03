
import React, {useState} from 'react'
import './Navbar.css'
import NavbarLogo from './NavbarLogo/NavbarLogo'
import NavbarMenu from './NavbarMenu/NavbarMenu'
import {mouseOut, mouseEnter} from '../../utils/common/menuHoverEvents'
import {findColorModes} from '../../utils/data/navbarColorModes'
import {openMenu, closeMenu} from '../../utils/common/menuClickEvents'
import anime from 'animejs'

function Navbar(props) {
  
  const [isOpen, setMenu] = useState(false)
  const [isAnimating, setAnimating] = useState(false)
  
  // find color modes
  const colorModes = findColorModes(props.activeRoute)

  // click event 
  const clicked = async () => {
    if(!isAnimating) {
      setAnimate(true)
      if(!isOpen) {
        openMenuBtn()
      } else {
        closeMenuBtn()
      }
    }
  }

  // close menu function
  const closeMenuBtn = () => {
    // call function to close animation
    closeMenu()

    // set is animating to block multiple click events
    setAnimate(false)

    const n = document.querySelector('.navbar-container')
    // console.log(n)
    let tl = anime.timeline({
      easing: 'easeInQuad',
      duration: 200,
    })
    tl.add({
        targets: n,
        opacity: 0,
      })
      .add({
        duration: 10,
        complete: function (anim) {
          setMenu(!isOpen)
        }
      })
      .add({
        targets: n,
        opacity: 1,
      })
    }

  // open menu function
  const openMenuBtn = () => {
    // call function to open menu animtion
    openMenu()

    // set is animating to block multiple click events
    setAnimate(false)
    const n = document.querySelector('.navbar-container')
    // console.log(n)
    let tl = anime.timeline({
      easing: 'easeInQuad',
      duration: 200,
    })
    tl.add({
      targets: n,
      opacity: 0,
    })
    .add ({
      duration: 10,
      complete: function (anim) {
        setMenu(!isOpen)
      }
    })
    .add({
      targets: n,
      opacity: 1,
    })
  }

  // function to set isanimating state
  const setAnimate = (isAnim) => {
    isAnim ? setAnimating(isAnim) : 
    setTimeout(()=>{
      setAnimating(false)
    }, 1700)
  }

  // hover in functions and to set specific assigned colors
  const hoverIn = (isOpen) => {
    isOpen ? mouseEnter(colorModes.open, 'open') :
     mouseEnter(colorModes.close, 'close')
  }

  // hover out functions and to set specific assigned colors
  const hoverOut = (isOpen) => {
    isOpen ? mouseOut(colorModes.open, 'open') :
      mouseOut(colorModes.close, 'close')
  }

  return (
    <div className="navbar-container">
      <NavbarLogo 
        colorMode={isOpen ? colorModes.open.main : colorModes.close.main}/>
      <NavbarMenu 
        open={isOpen}
        clicked={clicked}
        mouseEnter={(isOpen)=>{hoverIn(isOpen)}}
        mouseOut={(isOpen)=>{hoverOut(isOpen)}}/>
    </div>
  )
}

export default Navbar
