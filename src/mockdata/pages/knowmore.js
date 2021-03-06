import icons from '../raw/links/footerlinks.json'
import tools from '../raw/links/tools.json'
import education from '../raw/links/education.json'
import mdata from '../raw/links/metadata.json'
import footerData from '../data/footer'
import {DataHelper} from './domhelpers'

export default {
  index: 'knowmore',
  metadata: mdata.knowmore,
  header: {
    type: 'dark',
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
  education: {
    title: 'Education',
    caption: {
      quote: '"An investment in knowledge always pays the best interest."',
      author: '- Benjamin Franklin -'
    },
    courses: education,
  },
  seeProj: {
    title: "See My Projects",
    caption: "Take a look at the projects I have built.",
    links: [
      {
        image: {
          link: '/images/pen.webp',
          alt: 'pen icon'
        },
        title: "Artwork",
        buttonLink: {
          text: "Go to Artwork →",
          link: "/projects/artwork",
          type: "internal"
        }
      },
      {
        image: {
          link: '/images/browser.webp',
          alt: 'browser icon'
        },
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
      link: "/contact",
      type: "internal"
    }
  },
  quickLinks: DataHelper.getQuickLinks('knowmore'),
  footer: {
    isComplete: true,
    ...footerData
  },
  menuItems: DataHelper.getMenu()
}