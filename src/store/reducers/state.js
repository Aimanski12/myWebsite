import * as actionType from '../actions/actionTypes'

import {cream, dark, green} from '../../utils/data/navbarColorModes'

const initialState = {
  menus: ['home', 'about', 'projects', 'contacts'],
  activeRoute: 'home',
  hasSession: '',
  isAnimating: false,
  isOpen: false,
  redirect: {
    isTrue: false,
    pathname: ''
  },
  colorModes: {
    close: {
      main: cream, 
      back: dark
    },
    open: {
      main: cream, 
      back: green
    }
  }
}

const setActiveRoute = (state, data) => {
  return updateObject(state, data)
}

const isSeen = (state, data) => {
  return updateObject(state, data)
}

const isAnimating = (state, data) => {
  return updateObject(state, data)
}

const menuIsOpen = (state, data) => {
  return updateObject(state, data)
}

const isClicked = (state, data) => {
  return updateObject(state, data)
}

const setRedirect = (state, data) => {
  return {
    ...state,
    redirect: {
      isTrue: data.isTrue,
      pathname: data.pathname
    }
  }
}

const initState = (state = initialState, action) => {
  switch(action.type){
    case ( actionType.ACTIVEROUTE ): return setActiveRoute(state, action.payload);
    case ( actionType.SETACTIVEROUTE ): return setActiveRoute(state, action.payload);
    case (actionType.HASBROWSERSESSION): return isSeen(state, action.payload);
    case ( actionType.SETANIMATING ): return isAnimating(state, action.payload);
    case ( actionType.MENUISOPEN ): return menuIsOpen(state, action.payload)
    case ( actionType.ISCLICKED ): return isClicked(state, action.payload);
    case (actionType.SETREDIRECT): return setRedirect(state, action.payload);
    default: return initialState
  }
}

export default initState

// update the payload to the state
const updateObject = (oldState, newState) => {
  return {
    ...oldState,
    ...newState
  }
}