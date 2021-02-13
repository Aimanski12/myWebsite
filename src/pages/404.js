import React, {useContext, useEffect} from 'react'
import {AppData} from '../context'

import Head from 'next/head'
import Link from 'next/link'



export default function NotFound() {
  const {pagedata, setpagedata} = useContext(AppData)
  useEffect(()=>{
    setpagedata('notfound')
    console.log(pagedata)
  })
  
  return (
    <div className='container'>
      <Head>
        <title>Aiman Adlawan | Error 404</title>
        <link rel="icon" type="image/x-icon" href="/images/aiman-small-logo.ico" />
      </Head>

      <div className='container'>
        <h1>Page is not found</h1>
        <Link href='/'>
          <a>Go Home</a>
        </Link>

      </div>

    </div>
  )
}
