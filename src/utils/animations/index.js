
// framer motion animations
import {Preloader} from './frameranimations/preloader'
import {MenuButton} from './frameranimations/menuSlider'
import {TransitionSliders} from './frameranimations/transitionsliders'
import {ModalAnimation} from './frameranimations/modalAnimations'

// gsap animations
import {ShowMenu} from './gsap/showMenu'

// function helpers
import {Helpers} from "./animationhelper"

export const Anim = (function () {

  return {
    Preloader: Preloader,
    MenuButton: MenuButton,
    Helpers: Helpers,
    TransitionSliders: TransitionSliders,
    ShowMenu: ShowMenu,
    ModalAnimation: ModalAnimation
  }
})()
