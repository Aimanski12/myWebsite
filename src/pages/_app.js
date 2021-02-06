// global css
import '../../styles/globals.css'

// css fonts
import '../../styles/fonts/fonts.css'

// preloader element
import '../../styles/preloader/preloader.css'






import {AppDataContext} from '../context/appData'
import {AnimatePresence} from 'framer-motion'

function MyApp({ Component, pageProps, router }) {
  return(
    <AppDataContext>
      <AnimatePresence exitBeforeEnter exit={{transition: {delay: 15}}}>
        <Component {...pageProps} key={router.route}/>
      </AnimatePresence>
    </AppDataContext>
  ) 
}

export default MyApp
