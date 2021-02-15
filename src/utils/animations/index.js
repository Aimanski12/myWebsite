
// framer motion animations
import {Preloader} from './frameranimations/preloader'
import {MenuButton} from './frameranimations/menuSlider'
import {TransitionSliders} from './frameranimations/transitionsliders'
import {ImageModalAnim} from './frameranimations/imageModalAnimations'
import {MessageModalAnim} from './frameranimations/messageModalAnimation'

// gsap animations
import {ShowMenu} from './gsap/showMenu'

// function helpers
import {Helpers} from "./animationhelper"

// skew animation
import {Skew} from './skewAnimations/skewAnimations'

export const Anim = (function () {

  return {
    Preloader: Preloader,
    MenuButton: MenuButton,
    Helpers: Helpers,
    TransitionSliders: TransitionSliders,
    ShowMenu: ShowMenu,
    ImageModalAnim: ImageModalAnim,
    MessageModalAnim: MessageModalAnim,
    Skew: Skew
  }
})()
