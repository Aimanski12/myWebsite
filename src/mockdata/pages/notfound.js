import icons from '../raw/links/footerlinks.json'
import mdata from '../raw/links/metadata.json'
import {DataHelper} from './domhelpers'

export default {
  index: 'notfound',
  metadata: mdata.notFound,
  title: "404 Error",
  background: '/images/typing.gif',
  caption: "Sorry man! The page you are looking for is not on our file.",
  buttonLink: {
    text: "Back to Home",
    link: "/",
    type: "internal"
  },
  socials: {
    icons,
    front: "#FFC01D",
    back: "#005E7C"
  },
  menuItems: DataHelper.getMenu()
}               