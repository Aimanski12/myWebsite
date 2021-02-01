import React, {useContext} from 'react'
import Link from 'next/link'
import {AppData} from '../context/appData'



import Head from 'next/head'
import Svgs from '../components/Svgs/index'
import homed from '../mockdata/pages/home'


export default function Home({homed}) {
  const {pagedata, setpagedata} = useContext(AppData)
  setpagedata(homed)
  console.log(pagedata)
  
  return (
    <div className='smaple'>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>this freaking app is now working</h1>
      <Svgs svg='coloredinsta' />
      <span>
        <Svgs svg='instagram' />
      </span>
      <span>
        <Svgs svg='behance' />
      </span>
      <span>
        <Svgs svg='dribbble' />
      </span>
      <span>
        <Svgs svg='linkedin' />
      </span>
      <span>
        <Svgs svg='twitter' />
      </span>
        <Svgs svg='pentel' />

        <Svgs svg='bracket' />

        <Svgs svg='webdesign' />
      <Link href="/artwork">
        <a>go to artwork</a>
      </Link>
    </div>
  )
}

Home.getInitialProps = () => {
  return {homed}
}