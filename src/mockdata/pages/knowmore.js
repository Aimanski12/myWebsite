import icons from '../raw/links/footerlinks.json'
import tools from '../raw/links/tools.json'
import footerdata from '../data/footer'
import {Helpers} from './helpers'

export default {
  page: 'knowmore',
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

  seeproj: {
    title: "View Projects",
    caption: "Take a look at the projects I have built.",
    links: [
      {
        svg: "pen",
        title: "Artwork",
        buttonlink: {
          text: "Go to Artwork →",
          link: "/projects/artwork"
        }
      },
      {
        svg: "browser",
        title: "Webdev",
        buttonlink: {
          text: "Go to Webdev →",
          link: "/projects/artwork"
        }
      },
    ]
  },
  hiremelink: {
    title: "Hire Me",
    caption: "If you are interested in hiring me, or just want to reach out and say hi, send me a message and we can talk.",
    buttonlink: {
      text: "Message Me →",
      link: "/contacts"
    }
  },
  quicklinks: Helpers.getquicklinks('knowmore'),
  footer: {
    iscomplete: true,
    ...footerdata
  }
}