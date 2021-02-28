import icons from '../raw/links/footerlinks.json'
import footerData from '../data/footer'
import mdata from '../raw/links/metadata.json'
import {DataHelper} from './domhelpers'

export default {
  index: 'home',
  metadata: mdata.home,
  header: {
    type: 'dark',
    title: [
      "Web Developer &", "Creative Designer"
    ],
    caption: "Hi! I'm Aiman Adlawan. A passionate front-end developer based in Bensenville, Illinois.",
    socials: {
      icons,
      front: "#FFC01D",
      back: "#003B4D"
    }
  },
  artWork: DataHelper.getArtWork(),
  featured: {
    title: "Featured Web Projects",
    caption: "Here are some the projects I have done recently.",
    projects: DataHelper.getProjBanner(3)
  },
  seeMore: {
    title: "Wanna see more?",
    caption: "Let me show you a little bit further.",
    buttonLink: {
      text: "View All Projects →",
      link: "/projects/webdev",
      type: "internal"
    }
  },
  quickLinks: DataHelper.getQuickLinks('home'),
  footer: {
    isComplete: true,
    ...footerData
  },
  menuItems: DataHelper.getMenu()
}