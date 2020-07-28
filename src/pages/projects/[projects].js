import Head from 'next/head'
import {useEffect} from 'react'
import Router, {useRouter} from 'next/router'

function Projects() {

  const router = useRouter()
  const params = router.query.projects
  if(params === 'apple'){
    Router.replace('/404')
  }
  console.log(router)

  // useEffect(() => {
  // })

  return (
     <div className="container">
        <Head>
          <title>Aiman Adlawan | Projects</title>
          <link rel="icon" href="/images/brand-icon-logo.ico" />
        </Head>

        <div className="container">
          {/* <TopLayover/> */}
          <div className="main-container">
            asdfadsf
            {/* <PageDataContext pagesets={'contacts'}>
              <Navbar />       
              <Menu />
              <main className='main'>
                <Header/>
                <Message />
                <Footer />
              </main>
            </PageDataContext> */}
          </div>
        </div>
      </div>
  )
}

export default Projects