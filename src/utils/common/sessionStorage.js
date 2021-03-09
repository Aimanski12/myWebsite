import {CheckFunction} from './checker'
import {SaveToFirebase} from './saveToFirebase'

export const SessionStorage = (function(){

  // check if the browser has session data
  const _checkSessionStorage = async () => {
    const session = sessionStorage.getItem('mywebsite')
    
    if(session){
      // check if the session is present
      let data = JSON.parse(session)
      // if there is check if expired
      if(CheckFunction.checkIfExp(data._timestamp)) {
        // const _id = await SaveToFirebase.saveDataToFirebase('visitor', false)
        // saveSession(_id)
        // // return true to say that the browser has not been visited
        return false
      } else {
        // we will return false to say that the site has
        // been seen already
        return false
      }
    } else {
      // save a new session
      // const _id = await SaveToFirebase.saveDataToFirebase('visitor', false)
      // saveSession(_id)
      // return true to say that the browser has not been visited
      return false
    }
  }

  return {
    checkSessionStorage(){
      return _checkSessionStorage()
    }
  }
})()

// save session data to the browser
const saveSession = (_id) => {
  // create new set of data
  let data = {
    _token: _id,
    _timestamp: SessionHelpers.gettime('now'),
    _appname: 'aimanski'
  }
  // save to session storage
  sessionStorage.setItem('mywebsite', JSON.stringify(data))
}