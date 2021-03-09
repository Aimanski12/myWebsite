
// framer motion animations
import {ImageModalAnim} from './frameranimations/imageModalAnimations'
import {MenuButton} from './frameranimations/menuSlider'
import {MessageModalAnim} from './frameranimations/messageModalAnimation'
import {Preloader} from './frameranimations/preloader'
import {TransitionSliders} from './frameranimations/transitionsliders'

// function helpers
import {Helpers} from "./animationhelper"

// skew animation
import {Skew} from './skewAnimations/skewAnimations'

export const Anim = (function () {

  return {
    Helpers: Helpers,
    ImageModalAnim: ImageModalAnim,
    MenuButton: MenuButton,
    MessageModalAnim: MessageModalAnim,
    Preloader: Preloader,
    Skew: Skew,
    TransitionSliders: TransitionSliders,
  }
})()
