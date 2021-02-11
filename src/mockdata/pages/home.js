import icons from '../raw/links/footerlinks.json'
import footerData from '../data/footer'
import {Helpers} from './helpers'

export default {
  index: 'home',
  header: {
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
  artWork1: Helpers.getArtWork(0),
  featured: {
    title: "Featured Web Projects",
    caption: "Here are some the projects I have done recently.",
    projects: Helpers.getProjBanner(3)
  },
  seeMore: {
    title: "Wanna see more?",
    caption: "Let me show you a little bit further.",
    buttonLink: {
      text: "View all projects →",
      link: "/projects/webdev"
    }
  },
  artWork2: Helpers.getArtWork(1),
  quickLinks: Helpers.getQuickLinks('home'),
  footer: {
    isComplete: true,
    ...footerData
  },
  menuItems: Helpers.getMenu()
}