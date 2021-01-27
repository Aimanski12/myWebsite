import App from'next/app'
import {AnimatePresence} from 'framer-motion'
import {StateProvider} from '../utils/context/stateContext'

// global css
import '../../styles/global/styleOne.css'


function MyApp ({Component, pageProps, router}){

  return(
    <StateProvider>
      <AnimatePresence exitBeforeEnter>
        <Component {...pageProps} key={router.route}/>
      </AnimatePresence>
    </StateProvider>
  )
}

export default MyApp







