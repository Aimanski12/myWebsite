import Head from 'next/head'
import Link from 'next/link'
import {findData} from '../../utils/data/index'

export default function Projects({pageData, projectLists}) {
  console.log(pageData, projectLists)

  return (
    <div className="container">
      <Head>
        <title>Aiman Adlawan | Projects Page</title>
        <link rel="icon" href="/images/brand-icon-logo.ico" />
      </Head>

      <main>
        <h1 className="title">Welcome to project page aqui tiene.</h1>
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

Projects.getInitialProps = () => {
  const pageData = findData('projects')
  const projectLists = findData('projectlists')
  return { pageData, projectLists }
}