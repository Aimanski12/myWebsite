// global css
import '../../styles/globals.css'


import '../../styles/global/global.css'


import '../../styles/global/social-icon.css'
import '../../styles/global/copyright.css'
import '../../styles/global/margins.css'
import '../../styles/global/buttonLink.css'

// css fonts
import '../../styles/global/fonts.css'

// cursor 
import '../../styles/global/cursor.css'

// preloader element
import '../../styles/preloader/preloader.css'

// sliders
import '../../styles/global/sliders.css'

// menu buttons
import '../../styles/menu/menubutton.css'
import '../../styles/menu/logo.css'
import '../../styles/menu/menulist.css'
import '../../styles/menu/menu-items.css'
import '../../styles/menu/menu-socials.css'
import '../../styles/menu/menu-copyright.css'

// modals
import '../../styles/modal/imagemodal.css'
import '../../styles/modal/messagemodal.css'

// notfound
import '../../styles/notfound/notfound.css'

// headers
import '../../styles/headers/dark.css'
import '../../styles/headers/headerSocials.css'
import '../../styles/headers/scrollDown.css'
import '../../styles/headers/about.css'
import '../../styles/headers/projects.css'

// artwork 
import '../../styles/artwork/featured.css'
import '../../styles/artwork/multiple.css'

// webdev projects
import '../../styles/webdev/webdev.css'
import '../../styles/webdev/projects.css'
import '../../styles/webdev/github.css'

// weblinks
import '../../styles/weblinks/weblinks.css'
import '../../styles/footer/quicklink.css'
import '../../styles/footer/footer.css'
import '../../styles/footer/arrowup.css'
import '../../styles/footer/copyright.css'

// message 
import '../../styles/message/message.css'
import '../../styles/message/socials.css'

// individual projects
import '../../styles/indivudual/overview.css'
import '../../styles/indivudual/parallax.css'
import '../../styles/indivudual/sketch.css'
import '../../styles/indivudual/screens.css'
import '../../styles/indivudual/links.css'
import '../../styles/indivudual/nextprev.css'

// about
import '../../styles/about/parallax.css'
import '../../styles/about/facts.css'
import '../../styles/about/travels.css'

// knowmore
import '../../styles/knowmore/technology.css'


import {AppDataContext} from '../context'
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
