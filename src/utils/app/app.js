// import axios from 'axios'
// import {mn, dt} from '../contact/formsData'
// import {UAParser} from 'ua-parser-js'

// // check if the storage has session
// export function ckStor () {
//   let hsStor;
//   let store = JSON.parse(localStorage.getItem('websession'))
  
//   if (store === null) {
//     hsStor = false
//   } else {
//     let time = new Date().getTime()
//     let exp = (time - store.time) / 1000
//     if(exp > 3600) {
//       hsStor = false
//     } else {
//       stStor()
//       hsStor = true
//     }
//   }
//   return hsStor
// }

// // when the app is refreshed, check if the route maatches 
// // the active nav bar.
// export function ckPath (navs) {
//   let path = window.location.pathname.slice(1, 20)
//   let p = path === '' ? 'home' : path 
//   let a = null
//   for (let b=0; b < 4; b++){
//     if(navs.nav[b] === p) a = navs.nav[b]
//   }
//   return a
// }

// // set localstorage
// export function stStor () {
//   let data = {
//     intro: true,
//     time: new Date().getTime()
//   }
//   localStorage.setItem('websession', JSON.stringify(data))
// }

// // get user device data
// export const getIP = async () => {
//   let userIp

//   await axios.get('https://ipapi.co/json/')
//     .then(res => {
//       if(res.status === 200) {
//         if(res.data) {
//           let data = res.data
//           userIp = {
//             cap: data.country_capital,
//             city: data.city,
//             country: data.country_name,
//             ip: data.ip,
//             lat: data.latitude,
//             long: data.longitude,
//             timeZ: data.timezone,
//             region: data.region,
//             postC: data.postal,
//             internet: data.org,
//           }
//         }
//       }
//     })
//     .catch(err =>{
//       if(err) {
//         userIp = {
//           blocked: 'User blocked this data.'
//         }
//       }
//     })
//   return await userIp
// }

// // firebase url to query
// export const fUrl = 'https://aimanadlawansite.firebaseio.com'

// // parse user device data
// export const getParser = () => {
//   let parser = new UAParser()
//   return parser.getResult()
// }

// // post data on the server when visitor opens the site
// export const visitor = async () => {
//   let _id = false
//   let userIp = await getIP()
//   let user = getParser()
//   let d = getTime(true)
//   let time = getTime(false)

//   await axios.post(`${fUrl}/visitor/${d.y}/${d.m}/${d.dy}_${d.de}.json`, 
//     {userIp, user, time})
//   .then(res => {
//     if(res.data)
//     _id = res.data.name
//   })
//   .catch(err=>{
//     if(err) new Promise.reject(err)
//   })
//   return await _id
// }

// // function to get time
// export const getTime = (url) => {
//   const date = new Date()
//   let d = date.getDate()
//   let month = date.getMonth()
//   if(url){
//     return {
//       y: date.getFullYear(),
//       m: `${n(month+1)}_${mn[date.getMonth()]}`,
//       dy: n(d),
//       de: dt[date.getDay()],
//     }
//   } else {
//     return {
//       time: `${date.getHours()}: ${date.getMinutes()}: ${date.getSeconds()}`
//     }
//   }
// }

// // filter number if data is single digit
// const n = (d) => {
//   return d < 10 ? `0${d}` : d
// }


