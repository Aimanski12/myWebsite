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
  // application data 
  const [pagedata, setdata] = useState({
    theme: true,
    isSet: false,
  })

  // set the page data according to 
  const setpagedata = (page) => {
    let data = getpagedata(page)
    if(!pagedata.isSet){
      setdata({
        ...pagedata,
        isSet: true,
        data: data
      })
    } else if (pagedata.data.index != data.index){
      setdata({
        ...pagedata,
        data: data
      })
    } 
  }

  const [menutransitions, setmenutransitions] = useState({
    isOpen: false,
    isTransitioning: false,
    delay: 800
  })

  const setmenutransition = (val) => {
    setmenutransitions({
      ...menutransitions,
      ...val
    })
  }

  return (
    <AppData.Provider value={{
      pagedata,
      setpagedata,
      menutransitions,
      setmenutransition
    }}>
      {props.children}
    </AppData.Provider>
  )
}

// check the value and return the 
// repective data
const getpagedata = (page) => {
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