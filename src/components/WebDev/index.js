import React, {useContext} from 'react';
import {AppData} from '../../context'
import Projects from './Projects'

export default function WebDev() {
  const {AppState} = useContext(AppData)
  const data = AppState.pageData.data.featured

  return (
    <section className="webdev-wrapper content-center">
      { data != undefined ? 
        <>
          <h2 className="webdev-title font-1 s3a">{data.title}</h2>
          <p className='webdev-caption font-2 s4b'>{data.caption}</p>
          <Projects projects={data.projects}/>
        </> : null}
    </section>
  );
}
