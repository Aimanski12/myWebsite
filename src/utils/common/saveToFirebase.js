import axios from 'axios'

import {CheckFunction} from './checker'

// firebase url
const furl = 'Secret Firebase URL'

export const SaveToFirebase = (function(){

  const _saveDataToFirebase = async (extUrl, message) => {
    // get time formats
    const t = CheckFunction.getTime('url')
    // get user information
    const user = CheckFunction.getUser()
    // get user device information
    const userLoc = await CheckFunction.getIP()
    // get current time by locale string
    const time = CheckFunction.getTime('timeOfVisit')
    // set url for the database
    const url = `/${t.y}/${t.m}/${t.dy}_${t.de}`
    // save data to firebase
    return await saveDataToFirebase(url, extUrl, message, {
      user: user,
      location: userLoc,
      time,
      info: message
    })
  }

  return {
    saveDataToFirebase(extUrl, message){
      return _saveDataToFirebase(extUrl, message)
    }
  }
})()

const saveDataToFirebase = async (link, extUrl, message, data) => {
  const url = `${furl}${extUrl}${link}.json`
  const req = await axios.post(url, data)
  if(!message) {
    return req.data.name
  } else {
    return req.status
  }
}
