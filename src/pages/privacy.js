import Head from 'next/head'
import Link from 'next/link'
import {findData} from '../utils/data/index'

export default function Privacy({pageData}) {
  console.log(pageData)
  return (
    <div className="container">
      <Head>
        <title>Aiman Adlawan | Privacy Page</title>
        <link rel="icon" href="/images/brand-icon-logo.ico" />
      </Head>

      <main>
        <h1 className="title">Welcome to Privacy page.</h1>
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

Privacy.getInitialProps = () => {
  const pageData = findData('privacy')
  return { pageData }
}