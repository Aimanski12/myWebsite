import React, { createContext } from 'react'
import {findData} from '../data/index'

// export PageData for contextapi access
export const PageData = createContext()

// the props is received and has a value that references
// the page data sets and returns data for that page
export function PageDataContext (props){
  return (
    <PageData.Provider value={findData(props.pagesets)}>
      {props.children}
    </PageData.Provider>
  )
}

