import axios from 'axios'
import {getIP, getParser, fUrl, getTime} from '../app/app'

export const savetofirebase = async (vals) => {
  let saved = false
  let subj = vals[2].value
  let userIp = await getIP()
  
  let data = {
    name : vals[0].value,
    email : vals[1].value,
    subj: subj === '' ? 'Hi!' : subj,
    message: vals[3].value,
    user: getParser(),
    userIp
  }
  
  const d = getTime()
  let url = `${fUrl}/messages/${d.y}/${d.m}/${d.dy}_${d.de}.json`
  await axios.post(url, data)
    .then(res => {
      if(res) saved = true
    })
    .catch(err => {
      if(err) new Promise.reject(err)
    })
  return await saved
}
