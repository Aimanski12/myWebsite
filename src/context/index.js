import React, {useState, createContext} from 'react'
import {Anim} from '../utils/animations'

// create context data
export const AppData = createContext()

export function AppDataContext (props) {
  const [appState, setAppState] = useState({
    pageData: {
      data: {},
      theme: false,
      isSet: false,
    },
    menuTransitions: {
      delay: 800,
      isOpen: false,
      isTransitioning: false,
    }, 
    sessionData: {
      isChecked: false,
      isDoneAnimating: false,
      isFirstTime: false,
    },
    buttonMenu: {
      isHovered: false,
      isOpened: false
    },
    modal: {
      current: 0,
      images: {},
      isOpen: false,
      isSingle: false,
    },
    message: {
      isOpen: false,
      sender: ''
    }
  })
  

  // function to trigger page slider animation
  // in the menu
  const _setMenuTransitions = (newState) => {
    setState({
      menuTransitions: {
        ...appState.menuTransitions,
        ...newState
      }
    })
  }

  // set the session state to a new value
  const _setSessionState = (newState) => {
    setState({
      sessionData: {
        ...appState.sessionData,
        ...newState
      }
    })
  }

  // set the menu button state
  const _setMenuButtonState = (newState) => {
    setState({
      buttonMenu: {
        ...appState.buttonMenu,
        ...newState
      }
    })
  }

  // this is to set the button menu state
  // and the transition open state. to tigger
  // animation of opening and closing
  const _setMenuAndButtonState = (buttonState, transitionState) => {
    setState({
      buttonMenu: {
        ...appState.buttonMenu,
        ...buttonState
      },
      menuTransitions: {
        ...appState.menuTransitions,
        ...transitionState
      }
    })
  }

  // set modal state
  const _setImageModalState = (newState) => {
    setState({
      modal: {
        ...appState.modal,
        ...newState
      }
    })
  }

  // set modal state
  const _setMessageModalState = (newState) => {
    setState({
      message: {
        ...appState.message,
        ...newState
      }
    })
  }

  // this function is to update any state 
  // related to transitioning
  const _setToTransition = () => {
    Anim.Helpers.hidshowbody('hidden')
    setState({
      menuTransitions: {
        ...appState.menuTransitions,
        // isOpen: false,
        isTransitioning: true,
        delay: 800
      }
    })
  }

  // this function is for updating any state
  // that is related to transiting whenever the menu is opened
  // and transition happens
  const _setToCloseAndTransition = () => {
    Anim.Helpers.hidshowbody('hidden')
    Anim.Helpers.toggleBurgerToActive()
    setState({
      buttonMenu: {
        ...appState.buttonMenu,
        isOpened: !appState.buttonMenu.isOpened
      }, 
      menuTransitions: {
        ...appState.menuTransitions,
        delay: 1600,
        isOpen: false,
        isTransitioning: true,
      }
    })
  }



  // assign new set to data to the state.
  const setState = (newState) => {
    setAppState({ ...appState, ...newState})
  }

  // combine all function so that we can only call
  // one set of function
  const _setState = (function(){
    return {
      setPageData(page){
        return _setPageData(page)
      },
      setMenuTransitions(val){
        return _setMenuTransitions(val)
      },
      setSessionState(val) {
        return _setSessionState(val)
      },
      setMenuButtonState(val) {
        return _setMenuButtonState(val)
      }, 
      setImageModalState (val){
        return _setImageModalState(val)
      },
      setMessageModalState (val){
        return _setMessageModalState(val)
      },
      
      setMenuAndButtonState(button, transition) {
        return _setMenuAndButtonState(button, transition)
      },

      setToTransition() {
        return _setToTransition()
      },
      setToCloseAndTransition() {
        return _setToCloseAndTransition()
      }


    }
  })()


  return (
    <AppData.Provider value={{
      AppState: appState,
      SetAppState: _setState
    }}>
      {props.children}
    </AppData.Provider>
  )
}
