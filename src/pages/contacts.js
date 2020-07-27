import Head from 'next/head'
import {findData} from '../utils/data/index'
import Link from 'next/link'

export default function Contacts({pageData}) {
  console.log(pageData)
  return (
    <div className="container">
      <Head>
        <title>Aiman Adlawan | Contacts Page</title>
        <link rel="icon" href="/images/brand-icon-logo.ico" />
      </Head>

      <main>
        <h1 className="title">Welcome to contacts page.</h1>
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

Contacts.getInitialProps = () => {
  const pageData = findData('contacts')
  return { pageData }
}