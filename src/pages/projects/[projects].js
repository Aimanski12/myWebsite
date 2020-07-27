import Head from 'next/head'
import {useEffect} from 'react'
import Link from 'next/link'
import Router, {useRouter} from 'next/router'
import { findData } from '../../utils/data'

export default function Indi({pageData}) {
  const router = useRouter()
  const params = router.query.projects

  useEffect(() => {
    if(params === 'apple'){
      Router.push('/404')
    }
    console.log(pageData)
  })

  return (
    <div className="container">
      <Head>
        <title>Aiman Adlawan | Music-App</title>
        <link rel="icon" href="/images/brand-icon-logo.ico" />
      </Head>

      <main>
        <h1 className="title">{`${params} page`}</h1>
        <br/>
        <Link href='/'>
          <a>go to home page</a>
        </Link><br/>
        <Link href='/about'>
          <a>go to about page</a>
        </Link><br/>
        <Link href='/projects'>
          <a>go to projects page</a>
        </Link><br/>
        <Link href='/contacts'>
          <a>go to contacts page</a>
        </Link><br/>
        <Link href='/credentials'>
          <a>go to credentials page</a>
        </Link><br/>
        <Link href='/privacy'>
          <a>go to privacy page</a>
        </Link><br/>
        <Link href='/projects/apple'>
          <a>apple page</a>
        </Link><br/>
        <Link href='/projects/music-app'>
          <a>music app page</a>
        </Link>
      </main>
    </div>
  )
}

Indi.getInitialProps = (ctx) => {
  const {query} = ctx
  const lists = findData('projectlists')

  let pageData =  lists.listofprojects.filter(list => {
    return list.title === query.projects
  })

  return {pageData}
}