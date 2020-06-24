
// intro svg elements
export function introLogoElements() {
  return {
    strokes: q('.border', 'a'),
    font: q('.text-logo'),
    shadow: q('.inner-shadow', 'a'),
    top: q('.logo-intro-box-top'),
    bottom: q('.logo-intro-box-bottom'),
    intro: q('.intro-logo'),
  }
}

// header elements
export function headerEl() {
  return {
    thead: q('.text-intro-header .letters'),
    imgcont: q('.img-container'),
    cont: q('.container'),
    nav: q('.navigation'),
    arwsvg: q('.slide-down-svg'),
    paths: q('.svg-face path', 'a'),
    text2: q('.text-intro-subheader'),
    textHeader: q('.text-intro-header'),
    figure: q('.article-2 figure'),
    mywork: q('.my-work'),
  }
}

// side nav elements
export function sideNavsEl() {
  return {
    lists: q('.list-menu li', 'a'),
    ulList: q('.list-menu ul', 'a'),
    sidelogo: q('.side-nav-logo a'),
    
  }
}

// nav logo elements
export function topNavLogoShadow() {
  return q('.shadow', 'a')
}

// slide navigation elements
export function burgerNavEl() {
  return {
    btn_menu: q('.btn-menu-burger'),
    slide_navbar: q('.slide-navbar'),
    menu_layover: q('.slide-menu-background'),
    slide_menu_layover: q('.slide-menu-layover'),
    svg_frame: q('.svg-frame', 'a'),
    menu_text: q('.slide-text', 'a'),
    cont: q('.container'),
    slide_menu_header: q('.slide-menu-header span'),
    figure: q('.article-2 figure'),
    mywork: q('.my-work'),
  }
}

// side navs parent elements
export function resizeEl() {
  return {
    leftnav: q('.left-sidenav'),
    rightnav: q('.right-sidenav')
  }
}

// bubble elements
export function bubblEl() {
  return {
    svg: q('.svg-bubble'),
    b1: q('.b1'),
    b2: q('.b2'),
    b3: q('.b3'),
    b4: q('.b4'),
    b5: q('.b5'),
    b6: q('.b6'),
    b7: q('.b7'),
    b8: q('.b8'),
    b9: q('.b9'),
    b10: q('.b10'),
    b11: q('.b11'),
    b12: q('.b12'),
    all: q('.svg-bubble circle', 'a')
  }
}

// slide image elements
export function slideImage() {
  return {
    desktop: q('.img-desktop'),
    celphone: q('.img-mobile'),
    tablet: q('.img-tablet')
  }
}

// cards element
export function designCardsEl() {
  return {
    btn : q('.card-cards .card-overlay', 'a'),
  }
}

// nav headers
export function hEl () {
  return {
    n : q('.navbar'),
    f : q('.faceAnim'),
    b : q('.background'),
    sNav: q('.side-navigation'),
    hCont: q('.header-content')
  }
}

// function that return the queried element
function q(el, a) {
  if (a) {
    return document.querySelectorAll(el)
  } else {
    return document.querySelector(el)
  }
}
