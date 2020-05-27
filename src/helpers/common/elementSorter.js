// intro svg elements
export function introLogoElements(dom) {
  return {
    strokes: dom.querySelectorAll('.border'),
    font: dom.querySelector('.text-logo'),
    shadow: dom.querySelectorAll('.inner-shadow'),
    top: dom.querySelector('.logo-intro-box-top'),
    bottom: dom.querySelector('.logo-intro-box-bottom'),
    intro: dom.querySelector('.intro-logo'),
  }
}

// header elements
export function headerEl(dom) {
  return {
    thead: dom.querySelector('.text-intro-header .letters'),
    imgcont: dom.querySelector('.img-container'),
    cont: dom.querySelector('.container'),
    nav: dom.querySelector('.navigation'),
    arwsvg: dom.querySelector('.slide-down-svg'),
    paths: dom.querySelectorAll('.svg-face path'),
    text2: dom.querySelector('.text-intro-subheader'),
    textHeader: dom.querySelector('.text-intro-header'),
    figure: dom.querySelector('.article-2 figure'),
    mywork: dom.querySelector('.my-work'),

  }
}

// side nav elements
export function sideNavsEl(dom) {
  return {
    lists: dom.querySelectorAll('.list-menu li'),
    ulList: dom.querySelectorAll('.list-menu ul'),
    sidelogo: dom.querySelector('.side-nav-logo a'),
  }
}

// nav logo elements
export function topNavLogoShadow(dom) {
  return dom.querySelectorAll('.shadow')
}


// slide navigation elements
export function burgerNavEl(dom) {
  return {
    btn_menu: dom.querySelector('.btn-menu-burger'),
    slide_navbar: dom.querySelector('.slide-navbar'),
    menu_layover: dom.querySelector('.slide-menu-background'),
    slide_menu_layover: dom.querySelector('.slide-menu-layover'),
    svg_frame: dom.querySelectorAll('.svg-frame'),
    menu_text: dom.querySelectorAll('.slide-text'),
    cont: dom.querySelector('.container'),
    slide_menu_header: dom.querySelector('.slide-menu-header span'),
    figure: dom.querySelector('.article-2 figure'),
    mywork: dom.querySelector('.my-work'),
  }
}

// side navs parent elements
export function resizeEl(dom) {
  return {
    leftnav: dom.querySelector('.left-sidenav'),
    rightnav: dom.querySelector('.right-sidenav')
  }
}

// bubble elements
export function bubblEl(dom) {
  return {
    svg: dom.querySelector('.svg-bubble'),
    b1: dom.querySelector('.b1'),
    b2: dom.querySelector('.b2'),
    b3: dom.querySelector('.b3'),
    b4: dom.querySelector('.b4'),
    b5: dom.querySelector('.b5'),
    b6: dom.querySelector('.b6'),
    b7: dom.querySelector('.b7'),
    b8: dom.querySelector('.b8'),
    b9: dom.querySelector('.b9'),
    b10: dom.querySelector('.b10'),
    b11: dom.querySelector('.b11'),
    b12: dom.querySelector('.b12'),
    all: dom.querySelectorAll('.svg-bubble circle')
  }
}

// slide image elements
export function slideImage(dom) {
  return {
    desktop: dom.querySelector('.img-desktop'),
    celphone: dom.querySelector('.img-mobile'),
    tablet: dom.querySelector('.img-tablet')
  }
}

// cards element
export function designCardsEl(dom) {
  return {
    btn : dom.querySelectorAll('.card-cards .card-overlay'),
  }
}
