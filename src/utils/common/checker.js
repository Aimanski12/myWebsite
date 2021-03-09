import {UAParser} from 'ua-parser-js'
import axios from 'axios'

export const CheckFunction = (function(){

  // check if the session has expired
  const _checkIfExp = (time) => {
    let now = _gettime('now')
    let runTime = Math.floor(((now - time) / 1000) / 60)
    if (runTime >= 60) {
      return true
    } else {
      return false
    }
  }
  
  // get user device data
  const _getIP = async () => {
    let userIp
    await axios.get('https://ipapi.co/json/')
      .then(res => {
        if (res.status === 200) {
          if (res.data) {
            let data = res.data
            userIp = {
              cap: data.country_capital,
              city: data.city,
              country: data.country_name,
              ip: data.ip,
              lat: data.latitude,
              long: data.longitude,
              timeZ: data.timezone,
              region: data.region,
              postC: data.postal,
              internet: data.org,
            }
          }
        }
      })
      .catch(err => {
        if (err) {
          userIp = {
            blocked: 'User blocked this data.'
          }
        }
      })
    return await userIp
  }

  // function to get time
  const _getTime = (url) => {
    const date = new Date()
    let d = date.getDate()
    let month = date.getMonth()
    
    // get time for url structure query
    if (url === 'url') {
      return {
        y: date.getFullYear(),
        m: `${n(month+1)}_${mn[date.getMonth()]}`,
        dy: n(d),
        de: dt[date.getDay()],
      }
    } else if (url === 'timeOfVisit') {
      // get time for the time of visit
      let m = date.getMinutes()
      let s = date.getSeconds()
      let hr = date.getHours()
      let hour = hr%12 === 0 ? 12 : hr%12
      let mid = hr%12 < 1 ? 'am' : 'pm'
      return `${hour}:${m}:${n(s)}${mid}`
    } else if (url === 'now') {
      // get time for the time of visit
      return date.getTime()
    } else if (url === 'date') {
      return `${mn[month]} ${d}, ${date.getFullYear()}, ${dt[date.getDay()]}`
    }
  }
  
  // function to get user data
  const _getUser = () => {
    let parser = new UAParser()
    return parser.getResult()
  }


  return {
    checkIfExp(time){
      return _checkIfExp(time)
    },
    getIP() {
      return _getIP()
    },
    getTime(time) {
      return _getTime(time)
    },
    getUser() {
      return _getUser()
    }
  }
})()

  // filter number if data is single digit
  const n = (d) => {
    return d < 10 ? `0${d}` : d
  }

  // set the month to the exact number index of the array
  const mn = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

  // set the day to the exact number index of the array
  const dt = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

  