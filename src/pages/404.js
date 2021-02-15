import React, {useContext, useEffect} from 'react'
import {AppData} from '../context'
import Head from 'next/head'
import Navigation from '../containers/Navigation/Navigation'
import Body from '../containers/Body'

export default function NotFound() {
  const {SetAppState} = useContext(AppData)

  useEffect(()=> SetAppState.setPageData('notfound'))
  
  return (
    <div className='main'>
      <Head>
        <title>Aiman Adlawan | Not Found</title>
        <link rel="icon" type="image/x-icon" href="/images/aiman-small-logo.ico" />
      </Head>
      <Navigation />
      <Body page='notfound'/>
    </div>
  )
}
