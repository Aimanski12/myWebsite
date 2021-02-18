import React, {useContext} from 'react'
import {AppData} from '../../../context'
import Header from '../../../components/Headers'
import ArtWork from '../../../components/Artwork'
import WebDev from '../../../components/WebDev'
import WebLinks from '../../../components/WebLinks'


import Body from '../../sample'

export default function Home() {
  const {AppState} = useContext(AppData)
   const data = AppState.pageData.data


  return (
    <>
      <Header type='dark'/>
      <ArtWork i={0} type='single'/>
      <WebDev />
      {data.seeMore != undefined ? 
        <WebLinks data={data.seeMore} /> : null }
      <ArtWork i={1} type='single'/>








      <Body page='Home Page'/>
    </>
  )
}

