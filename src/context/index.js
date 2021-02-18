import React, {useState, createContext} from 'react'
import about from '../mockdata/pages/about'
import artwork from '../mockdata/pages/artwork'
import contact from '../mockdata/pages/contact'
import home from '../mockdata/pages/home'
import knowmore from '../mockdata/pages/knowmore'
import notfound from '../mockdata/pages/notfound'
import webdev from '../mockdata/pages/webdev'
import {projects} from '../mockdata/pages/projects'

// create context data
export const AppData = createContext()

export function AppDataContext (props) {
  const [appState, setAppState] = useState({
    pageData: {
      theme: false,
      isSet: false,
      data: {}
    },
    menuTransitions: {
      isOpen: false,
      isTransitioning: false,
      delay: 800,
    }, 
    sessionData: {
      isChecked: false,
      isFirstTime: false,
      isDoneAnimating: false
    },
    buttonMenu: {
      isHovered: false,
      isOpened: false
    },
    modal: {
      isOpen: false,
      isSingle: false,
      current: 0,
      images: {}
    },
    message: {
      isOpen: false,
      sender: ''
    }
  })
  
  // assigns value to every page data 
  // this is called when every page is opened
  const _setPageData = (page) => {
    let data = getPageData(page)
    if(!appState.pageData.isSet){
      setState({
        pageData: { ...appState.pageData, isSet: true, data: {...data} }
      })
    } else if (appState.pageData.data.index != data.index){
      setState({ 
        pageData: { ...appState.pageData, data: { ...data} }
      })
    } 
  }

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

  const _transitionToNextPage = (newState) => {
    setState({
      menuTransitions: {
        ...appState.menuTransitions,
        ...newState
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
      setMenuAndButtonState(button, transition) {
        return _setMenuAndButtonState(button, transition)
      },
      setImageModalState (val){
        return _setImageModalState(val)
      },
      setMessageModalState (val){
        return _setMessageModalState(val)
      },
      transitionToNextPage(val) {
        return _transitionToNextPage(val)
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

// check the value and return the 
// repective data
const getPageData = (page) => {
  let data = page === "about" ? about : 
    page === "artwork" ? artwork :
    page === "contact" ? contact :
    page === "home" ? home :
    page === "knowmore" ? knowmore :
    page === "notfound" ? notfound :
    page === "webdev" ? webdev :
    projects(page)
  return data
}