import Head from 'next/head'
import Link from 'next/link'

export default function NotFound() {

  return (
    <div className="container">
      <Head>
        <title>Aiman Adlawan | Not Found</title>
        <link rel="icon" href="/images/brand-icon-logo.ico" />
      </Head>

      <main>
        <h1 className="title">This page is not found.</h1>
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

