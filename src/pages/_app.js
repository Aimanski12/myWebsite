import App from'next/app'
import {AnimatePresence} from 'framer-motion'
import {StateProvider} from '../utils/context/stateContext'

// global css
import '../../styles/global/styleOne.css'
import '../../styles/global/styleTwo.css'

// intro css
import '../../styles/intro/intro.css'

// css for the toplayover
import '../../styles/toplayover/toplayover.css'

// css for navbar
import '../../styles/navbar/navbar.css'
import '../../styles/navbar/navbarlogo.css'
import '../../styles/navbar/navbarmenu.css'

// css for menu, menu runner and menu list
import '../../styles/menu/menucontainer.css'
import '../../styles/menu/menuwrapper.css'
import '../../styles/menu/menurunner.css'
import '../../styles/menu/menu.css'

// css for the footer and copyright item
import '../../styles/footer/copyright.css'
import '../../styles/footer/socialIcons.css'
import '../../styles/footer/footermenu.css'
import '../../styles/footer/footer.css'

// css for header
import '../../styles/header/header.css'
import '../../styles/header/hero.css'
import '../../styles/header/headertextblock.css'
import '../../styles/header/subparagraph.css'
import '../../styles/header/credentials.css'

// privacy 
import '../../styles/privacy/privacy.css'

// not found
import '../../styles/notfound/notfound.css'

// section blocks
import '../../styles/sectionblocks/sectionblocks.css'

// short project view
import '../../styles/shortprojectview/shortprojectview.css'

// needhelp 
import '../../styles/needhelp/needhelp.css'

// css for about page and sections 
import '../../styles/about/skills.css'
import '../../styles/about/myreads.css'

// css for message form
import '../../styles/contacts/message.css'

// css for project header
import '../../styles/projects/projectheader.css'
import '../../styles/projects/otherprojects.css'

// css for individual project
import '../../styles/individualproject/header.css'
import '../../styles/individualproject/projectbody.css'
import '../../styles/individualproject/about.css'
import '../../styles/individualproject/categories.css'
import '../../styles/individualproject/launchlinks.css'
import '../../styles/individualproject/screens.css'
import '../../styles/individualproject/tools.css'

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







