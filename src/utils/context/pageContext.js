import React, { createContext } from 'react'
import {findData} from '../data/index'

// export PageData for contextapi access
export const PageData = createContext()

// the props is received and has a value that references
// the page data sets and returns data for that page
export function PageDataContext (props) {
  let data = sortProps(props)
  return (
    <PageData.Provider value={data}>
      {props.children}
    </PageData.Provider>
  )
}

// this function will sort the data provided in the props
// it will return a set of data from the data page
function sortProps (props) {
  if(props.pagesets) {
    return findData(props.pagesets)
  } else if(props.projectsets){
    let data = findData('projectlists').listofprojects.filter(proj => {
      return proj.title === props.projectsets
    })
    return {...data[0], ...findData('socials')}
  }
}