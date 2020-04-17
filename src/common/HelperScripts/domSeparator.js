import {closeMenuFrame, openMenuFrame} from './menuFrameAnimation'
import {introOverlay, removeOverlay} from './introOverLay'
import {introLogoInimation, menuLogoAnimation} from './logoAnimation'

export const domSeparator = (x, y, event, color) => {

  // home
  const home = document.querySelector('.homepage')
  // overlay
  const overLay = document.querySelector('.overlay')
  const overDiv = document.querySelector('.overlay-container')
  // menu
  const menu = document.querySelector('.menu')
  // 
  const svg = document.querySelectorAll('.svgMenu')
  const svgPaths = document.querySelectorAll('.svgMenu path')
  // title
  const title = document.querySelector('.menu-header-text span')
  // menu-list
  const lists = document.querySelectorAll('.menu-item')
  // menu close btn
  const btn = document.querySelector('.menu-close')
  // introAnimation
  const introAnim = document.querySelector('.introAnimations')
  // intro page
  const introPage = document.querySelector('.introPage')

  if (event === 'closeMenu'){
    const els = { home, overLay, overDiv, menu, svg, title, lists, btn }
    closeMenuFrame(x, y, els, color)

  } else if(event === 'openMenu') {
    const els = { home, overLay, overDiv, menu, svg, svgPaths, title, lists, btn }
    openMenuFrame(x, y, els, color)

  } else if(event === 'closeIntro') {
    const els = { overLay, overDiv }
    // run overlay
    introOverlay(x, y, els, color)
    // dont display animation
    setTimeout(() => {
      introAnim.style.display = 'none'
    }, 1250)
    // remove overlay
    setTimeout(() => {
      removeOverlay(x, y, els, color)
    }, 1400)
    // remove intro page
    setTimeout(() => {
      introPage.style.display = 'none'
    }, 1600)
  }
}


export const animDomSeparator = (color, event) => {
  const svgPath = document.querySelectorAll('.introSvgContainer .path');
  const bigText = document.querySelectorAll('.introSvgContainer .bigText');
  const smallText = document.querySelectorAll('.introSvgContainer .smallText');
  const intro = document.querySelector('.intro-write-name')
  const bigNavText = document.querySelectorAll('.nav-logo-container .bigText');
  const smallNavText = document.querySelectorAll('.nav-logo-container .smallText');

  
  if (event === 'intro') {
    const el = { svgPath, bigText, smallText, intro}
    introLogoInimation(color, el)
  } 
  if (event === 'menu') {
    const el = {bigNavText, smallNavText}
    menuLogoAnimation(color, el)
  }


}