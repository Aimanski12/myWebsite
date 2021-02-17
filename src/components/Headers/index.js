import React, {useContext} from 'react';
import {AppData} from '../../context'
import About from './About'
import Dark from './Dark'
import Projects from './Project'

export default function Header({type}) {
  const {AppState} = useContext(AppData)
  
  const contents = () => {
    if(AppState.pageData.data.header != undefined) {
      const data = AppState.pageData.data.header
      return type === 'dark' ? <Dark data={data}/> : 
        type === 'about' ? <About data={data}/> :
        type === 'projects' ? <Projects data={data}/> : null
    }
  }
  return (
    <>{contents()}</>
  );
}
