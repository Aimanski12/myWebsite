import React, {Component, createContext} from 'react'
import {setTransitionState} from '../pageanimations/motion/common'

// global state context route
export const StateContext = createContext()

// state provder
export class StateProvider extends Component {
  
  // initial
  state = {
    activeRoute: 'home',
    menuIsOpen: false,
    menuIsAnimating: false,
    isTransitioning: 'initial',
    exitMode: false,
    animation: 'initial',
  }

  // function that will set update the state
  setApplicationState = (newState) => {
    this.setState({
      ...this.state,
      ...newState
    })
  }

  // this function will update the state based from 
  // where the button is clicked
  setTransitionState = (from) => {
    if(from === 'top'){
      this.setState({
        menuIsOpen: !this.state.menuIsOpen,
        exitMode: mode(from),
        isTransitioning: setTransitionState(this.state.isTransitioning),
        animation: animmode(from)
      })
    }
    if(from === 'bottom') {
      this.setState({
        exitMode: mode(from),
        isTransitioning: setTransitionState(this.state.isTransitioning),
        animation: animmode(from)
      })
    }
  }

  // function to get the current route
  setActiveRoute = (route) => {
    // if the current route does not match to the old route
    // then update the active route state
    if(route != this.state.activeRoute){
      this.setApplicationState({ activeRoute: route })
    }
  }

  render(){

    return(
      <StateContext.Provider value={{
        state: this.state,
        setState: this.setApplicationState,
        setActiveRoute: this.setActiveRoute,
        setTransitionState: this.setTransitionState
      }}>
        {this.props.children}
      </StateContext.Provider>
    )
  }
}

// this function checks if the menu button is click
// and will return a string that will animate from the top
const mode = (from) => {
  return from === 'top' ? 'topExit' : 'bottomExit'
}

// this function checks if any of the button links 
// in the bottom is click that will run the transition
const animmode = (from) => {
  return from === 'bottom' ? 'topAnimation' : 'bottomAnimation'
}