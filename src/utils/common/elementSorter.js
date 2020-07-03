
// function to queryelements
function qEl(el, all){
  if(all){
    return document.querySelectorAll(`.${el}`)
  } else {
    return document.querySelector(`.${el}`)
  }
}

// elements that needs to be resized
export function resizeElements() {
  return {
    main_container: qEl('main-container', 0),
    navbar_container: qEl('navbar-container', 0),
    menu_container: qEl('menu-container', 0),
    menu_wrapper: qEl('menu-wrapper', 0),
    menu_runner: qEl('menu-runner', 0)
  }
}

// elements for the menu items
export function navHoverElements() {
  return {
    middle: qEl('middle-span', 0),
    close_paths: qEl('menu-close path', 0),
    back: qEl('back-span', 0),
    front: qEl('front-text', 0)
  }
}

// logo element animation
export function logoElements() {
  return {
    t: qEl('top-line', 0),
    r: qEl('right-line', 0),
    b: qEl('bottom-line', 0),
    l: qEl('left-line', 0),
    s: qEl('shadow', 1)
  }
}

// menu click animation elements
export function menuClickElements () {
  return {
    container: qEl('container', 0),
    menu_runners: qEl('menu-runners', 1),
    square_img: qEl('square-img', 0),
    right_icons: qEl('right-icons', 0),
    menu_list_container: qEl('menu-list-container', 1),
    copyright_runner: qEl('copyright-runner', 0),
    social_navicons: qEl('social-navicons', 0)
  }
}