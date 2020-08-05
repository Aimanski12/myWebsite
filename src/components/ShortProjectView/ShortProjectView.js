import React, {useContext} from 'react'
import Projects from './projects/Projects'
import {PageData} from '../../utils/context/pageContext'

function ShortProjectView () {
  const {listofprojects} = useContext(PageData)
  
  let projects = <Projects projects={listofprojects} />
  
  return (
    <section className="section-container short-project-container">
      {projects}
    </section>      
  )

}

export default ShortProjectView