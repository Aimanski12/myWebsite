import {Preloader} from './frameranimations/preloader'
import {TransitionSliders} from './frameranimations/transitionsliders'
import {Helpers} from "./animationhelper"

export const Anim = (function () {

  return {
    Preloader: Preloader,
    Helpers: Helpers,
    TransitionSliders: TransitionSliders
  }
})()
