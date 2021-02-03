import React, {useContext, useEffect} from 'react'
import {useRouter} from 'next/router'
import {AppData} from '../../../context/appData'
import {Helpers} from '../../../mockdata/pages/helpers'

import Head from 'next/head'
import Link from 'next/link'



export default function Projects({name}) {
  const {pagedata, setpagedata} = useContext(AppData)
  const router = useRouter()
  useEffect(()=>{
    if(!name){
      router.replace('/404', window.location.pathname)
    } else {
      setpagedata(name)
      console.log(pagedata)
    }
  })
  
  return (
    <div className='container'>
      <Head>
        <title>Aiman Adlawan | My Projects</title>
        <link rel="icon" type="image/x-icon" href="/images/aiman-small-logo.ico" />
      </Head>

      <div className='container'>
        <h1>{pagedata.data.index}</h1>
        <Link href='/'>
          <a>Home</a>
        </Link>
        <Link href='/projects/artwork'>
          <a>Artwork</a>
        </Link>
        <Link href='/projects/webdev'>
          <a>Webdev</a>
        </Link>
        <Link href='/about'>
          <a>About</a>
        </Link>
        <Link href='/contact'>
          <a>Contact</a>
        </Link>
        <Link href='/know-more'>
          <a>Know More</a>
        </Link>
        <Link href='/projects/webdev/book-worm'>
          <a>Book worm</a>
        </Link>
        <Link href='/projects/webdev/movie-box'>
          <a>Movie Box</a>
        </Link>
        <Link href='/projects/webdev/foto-pics'>
          <a>Foto Pics</a>
        </Link>
        <Link href='/projects/webdev/news-box'>
          <a>News Box</a>
        </Link>
        <Link href='/projects/webdev/radio-live'>
          <a>Radio Live</a>
        </Link>

      </div>

    </div>
  )
}

Projects.getInitialProps = (ctx) => {
  const {query}  = ctx
  // check of the query is a valid name
  // based on the project names list
  return {name: Helpers.findname(query.projects)}
}