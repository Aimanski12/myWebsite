import React, {useState, createContext} from 'react'
import about from '../mockdata/pages/about'
import artwork from '../mockdata/pages/artwork'
import contact from '../mockdata/pages/contact'
import home from '../mockdata/pages/home'
import knowmore from '../mockdata/pages/knowmore'
import notfound from '../mockdata/pages/notfound'
import webdev from '../mockdata/pages/webdev'
import {projects} from '../mockdata/pages/projects'

export const AppData = createContext()

export function AppDataContext (props) {
  
  const [pagedata, setdata] = useState({
    theme: true,
    isSet: false,
    page: ""
  })

  
  const setpagedata = (data) => {
    // let data = getpagedata(page)
    if(!pagedata.isSet){
      setdata({
        ...pagedata,
        isSet: true,
        ...data
      })
    } else if (pagedata.page != page){
      console.log(pagedata.page, page)
      setdata({
        ...pagedata,
        ...data
      })
    } 
  }

  return (
    <AppData.Provider value={{
      pagedata,
      setpagedata
    }}>
      {props.children}
    </AppData.Provider>
  )
}

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