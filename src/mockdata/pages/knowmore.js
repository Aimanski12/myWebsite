import icons from '../raw/links/footerlinks.json'
import tools from '../raw/links/tools.json'
import footerData from '../data/footer'
import {Helpers} from './helpers'

export default {
  index: 'knowmore',
  header: {
    title: ["Get To Know More"],
    caption: "Dig a little deeper and see what I done.",
    socials: {
      icons,
      front: "#FFC01D",
      back: "#003B4D"
    }
  },
  technology: {
    title: "Technologies",
    caption: "These are the tools I use for web development and design.",
    tools
  },

  seeProj: {
    title: "See My Projects",
    caption: "Take a look at the projects I have built.",
    links: [
      {
        svg: "pen",
        title: "Artwork",
        buttonLink: {
          text: "Go to Artwork →",
          link: "/projects/artwork",
          type: "internal"
        }
      },
      {
        svg: "browser",
        title: "Webdev",
        buttonLink: {
          text: "Go to Webdev →",
          link: "/projects/artwork",
          type: "internal"
        }
      },
    ]
  },
  hireMeLink: {
    title: "Hire Me",
    caption: "If you are interested in hiring me, or just want to reach out and say hi, send me a message and we can talk.",
    buttonLink: {
      text: "Message Me →",
      link: "/contacts",
      type: "internal"
    }
  },
  quickLinks: Helpers.getQuickLinks('knowmore'),
  footer: {
    isComplete: true,
    ...footerData
  },
  menuItems: Helpers.getMenu()
}