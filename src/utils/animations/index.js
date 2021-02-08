import {Preloader} from './frameranimations/preloader'
import {MenuButton} from './frameranimations/menubutton'
import {TransitionSliders} from './frameranimations/transitionsliders'
import {Helpers} from "./animationhelper"

export const Anim = (function () {

  return {
    Preloader: Preloader,
    MenuButton: MenuButton,
    Helpers: Helpers,
    TransitionSliders: TransitionSliders
  }
})()
