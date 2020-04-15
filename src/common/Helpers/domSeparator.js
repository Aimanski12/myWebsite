import {closeMenuFrame, openMenuFrame} from './menuFrameAnimation'
import {introOverlay, removeOverlay} from './introOverLay'

export const domSeparator = (x, y, el) => {

  // home
  const home = el.home

  // overlay
  const overLay = el.overLay
  const overDiv = el.overLay.children[0]

  // menu elements
  const menu = el.menu
  const svg = el.menu.children[0].children[0].children[0]
  const svgPaths = el.menu.children[0].children[0].children[0].children
  const title = el.menu.children[0].children[1].children[0].children[0].children[0]
  const lists = el.menu.children[0].children[1].children[0].children[1].children[0].children
  const btn = el.menu.children[0].children[1].children[0].children[2].children[0]


  if (el.event === 'closeMenu'){
    const els = { home, overLay, overDiv, menu, svg, title, lists, btn }
    closeMenuFrame(x, y, els)

  } else if(el.event === 'openMenu') {
    const els = { home, overLay, overDiv, menu, svg, svgPaths, title, lists, btn }
    openMenuFrame(x, y, els)

  } else if(el.event === 'closeIntro') {
    const els = { overLay, overDiv }
    introOverlay(x, y, els)
    setTimeout(() => {
      const introAnim = document.querySelector('.introAnimations')
      introAnim.style.display = 'none'
    }, 1350)
    setTimeout(() => {
      removeOverlay(x, y, els)
    }, 1600)
    setTimeout(() => {
      const introPage = document.querySelector('.introPage')
      introPage.style.display = 'none'
      // removeOverlay(x, y, els)
    }, 1900)

  }




  // introOverlay(x, y, props.themeColor[0])
  // const overLay = document.querySelector('.overlay')
  // const cover = document.querySelector('.overlay-container')
  // const faceSvg = document.querySelectorAll('.photo')





  // // pass props state after 1100



  // const menu = document.querySelector('.menu')
  // const overlay = document.querySelector('.overlay')
  // const overDiv = document.querySelector('.overlay-container')
  // const menu_title = document.querySelector('.menu-header-text span')
  // const menu_item = document.querySelectorAll('.menu-item')
  // const menu_bottom = document.querySelector('.menu-close')
  // const homepage = document.querySelector('.homepage')
  // const svgBig = document.querySelectorAll('.svgMenu path')
  // const svgPATHS = document.querySelectorAll('.svgMenu')


  

}
