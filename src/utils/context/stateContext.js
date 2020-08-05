import React, {Component, createContext} from 'react'

// global state context route
export const StateContext = createContext()

// state provder
export class StateProvider extends Component {
  
  // initial
  state= {
    activeRoute: 'home',
    menuIsOpen: false,
    menuIsAnimating: false,
    isTransitioning: 'initial',
    exitMode: false,
    animation: 'initial'
  }

  // function that will set update the state
  setApplicationState = (newState) => {
    this.setState({
      ...this.state,
      ...newState
    })
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
        setActiveRoute: this.setActiveRoute
      }}>
        {this.props.children}
      </StateContext.Provider>
    )
  }
}
