import anime from 'animejs'
import {menuClickElements} from './elementSorter'

// this function is for the dark green menu background
// this will run when the use clicks the menu icon
export function openMenu () {
  const el = menuClickElements()
    
  el.container.style.overflow = 'hidden'
  el.menu_container.style.display  = 'block'
  el.social_navicons.style.transform = 'translateY(100%)'
  el.copyright_runner.style.transform = 'translateY(100%)'
  
  if(el.text_active && el.backer_active){
    el.backer_active.style.transform = 'translateY(-15px)'
    el.text_active.style.color = '#C6C4AF'
    el.backer_active.style.color = '#2C6664'
  }

  for(let x=0; x<4; x++){
    el.menu_list_container[x].style.transform = 'translateY(100%)'
  }

  // run the the dark green background
  anime({
    targets: el.menu_runners,
    duration: 400,
    width: '100%',
    easing: 'easeInOutQuad',
    delay: (el, i) => { return i * 160 },
    complete: function (anim) {
      show(el)
    }
  })
}

// this will show the other element for menu page.
// these elements are the social icons, squaure image, privacy
function show (el) {
  anime({
    targets: el.menu_list_container,
    opacity: 1,
    easing: 'easeOutCubic',
    duration: 450,
    translateY: '0%',
    delay: (el, i) => { return i * 120 }
  })
  anime({
    targets: [el.social_navicons ,el.copyright_runner],
    easing: 'easeOutCubic',
    opacity: 1,
    duration: 450,
    translateY: '0%',
  })
  anime({
    targets: el.square_img,
    easing: 'linear',
    duration: 450,
    opacity: 1,
    complete: function (anim) {
      el.right_icons.style.overflow = 'visible'
      
    }
  })
}

// this function is for the menu item. this will 
// close the menu when the user clicks any of the item
export function closeMenu (closeContainer) {
  const el = menuClickElements()
  el.right_icons.style.overflow = 'hidden'

  let tl = anime.timeline({easing: 'linear'})

  tl.add({
    targets: [el.social_navicons, el.copyright_runner, el.square_img, el.menu_list_container],
    duration: 400,
    opacity: 0,
  })    
  .add({
    targets: el.menu_runners,
    duration: 275,
    width: '0%',
    delay: (el, i) => { return i * 120 },
    complete: function (anim) {
      el.menu_container.style.display = 'none'
      if(closeContainer) {
        el.container.style.overflow = 'visible'
      }

      if (el.text_active && el.backer_active) {
        el.text_active.style.color = '#2C6664'
        el.backer_active.style.color = '#0C5D5A'
      }
    }
  })

}