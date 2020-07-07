import * as actionType from './actionTypes'
import {checkRoute} from '../../utils/storeUtils/common'
import {findColorModes} from '../../utils/data/navbarColorModes'

// function to check the current page route
export const checkPageLocation = () => dispatch => {
  let location = checkRoute(window.location.pathname)
  dispatch({
    type: actionType.ACTIVEROUTE,
    payload: {
      activeRoute: location,
      colorModes: findColorModes(location)
    }
  })
}


export const setPageLocation = (val) => dispatch => {
  dispatch({
    type: actionType.SETACTIVEROUTE,
    payload: {
      activeRoute: val
    }
  })
}

// function for setting the animation is still running
export const setAnimating = (val) => dispatch => {
  dispatch({
    type: actionType.SETANIMATING,
    payload: {
      isAnimating: val
    }
  })
}

// function to set the menu open
export const menuIsOpen = (val) => dispatch => {
  dispatch({
    type: actionType.MENUISOPEN,
    payload: {
      isOpen: val,
      
    }
  })
}

// function to see if there is a session stored
export const checkBrowserSession = (val) => dispatch => {
  dispatch({
    type: actionType.HASBROWSERSESSION,
    payload: {
      hasSession: val,
    }
  })
}

export const setTopClicked = (val) => dispatch => {
  dispatch({
    type: actionType.ISCLICKED,
    payload: {
      topOverLayIsRunning: val
    }
  })
}


export const setRedirect = (istrue, path) => dispatch => {
  dispatch({
    type: actionType.SETREDIRECT,
    payload: {
      isTrue: istrue,
      pathname: path  
    }
  })
}