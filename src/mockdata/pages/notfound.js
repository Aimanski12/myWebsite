import icons from '../raw/links/footerlinks.json'
import {Helpers} from './helpers'

export default {
  index: 'notfound',
  title: "404 Error",
  background: '/images/typing.gif',
  caption: "Sorry man! The page you are looking for is not in on file.",
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
  menuItems: Helpers.getMenu()
}               