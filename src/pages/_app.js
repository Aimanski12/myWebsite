// global css
import '../../styles/globals.css'
import '../../styles/global/social-icon.css'
import '../../styles/global/copyright.css'

// css fonts
import '../../styles/global/fonts.css'

// cursor 
import '../../styles/global/cursor.css'

// preloader element
import '../../styles/preloader/preloader.css'

// menu buttons
import '../../styles/menu/menubutton.css'
import '../../styles/menu/logo.css'
import '../../styles/menu/menulist.css'
import '../../styles/menu/menu-items.css'
import '../../styles/menu/menu-socials.css'
import '../../styles/menu/menu-copyright.css'

// modals
import '../../styles/modal/imagemodal.css'






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
