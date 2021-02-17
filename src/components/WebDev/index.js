import React, {useContext} from 'react';
import {AppData} from '../../context'
import Title from './Title'
import Projects from './Projects'

export default function WebDev() {
  const {AppState} = useContext(AppData)
  const data = AppState.pageData.data.featured

  return (
    <section className="webdev-wrapper">
      { data != undefined ? 
        <>
          <Title data={data} />
          <Projects projects={data.projects}/>
        </> : null}
    </section>
  );
}
