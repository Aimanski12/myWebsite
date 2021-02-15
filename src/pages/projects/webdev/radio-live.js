import React, {useContext, useEffect} from 'react'
import {AppData} from '../../../context'
import Head from 'next/head'
import Navigation from '../../../containers/Navigation/Navigation'
import Body from '../../../containers/Body'

export default function RadioLive() {
  const {AppState, SetAppState} = useContext(AppData)
  
  useEffect(() => {
    SetAppState.setPageData('radio-live')
    AppState.menuTransitions.isTransitioning ? (
      setTimeout(()=>{
        window.scrollTo(0, 0)
        SetAppState.setMenuTransitions({isTransitioning: false})
      }, AppState.menuTransitions.delay)
    ) : null
  })

  return (
    <div className='main'>
      <Head>
        <title>Aiman Adlawan | Radio-Live Project</title>
        <link rel="icon" type="image/x-icon" href="/images/aiman-small-logo.ico" />
      </Head>
      <Navigation />
      <Body page='indvproj'/>
    </div>
  )
}
