import React from 'react'
import Header from '../../../components/Headers'
import ArtWork from '../../../components/Artwork'
import WebDev from '../../../components/WebDev'


import Body from '../../sample'

export default function Home() {

  return (
    <>
      <Header type='dark'/>
      <ArtWork i={0} type='single'/>
      <WebDev />





      <ArtWork i={1} type='single'/>


      <Body page='Home Page'/>
    </>
  )
}

