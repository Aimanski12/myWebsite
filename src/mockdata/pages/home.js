import icons from '../raw/links/footerlinks.json'
import footerdata from '../data/footer'
import {Helpers} from './helpers'

export default {
  page: 'home',
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
  artwork1: Helpers.getartwork(0),
  featured: {
    title: "Featured Web Projects",
    caption: "Here are some the projects I have done recently.",
    projects: Helpers.getprojbanner(3)
  },
  seemore: {
    title: "Wanna see more?",
    caption: "Let me show you a little bit further.",
    buttonlink: {
      text: "View all projects →",
      link: "/projects/webdev"
    }
  },
  artwork2: Helpers.getartwork(1),
  quicklinks: Helpers.getquicklinks('home'),
  footer: {
    iscomplete: true,
    ...footerdata
  }
}