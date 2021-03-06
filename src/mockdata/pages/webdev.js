import icons from '../raw/links/footerlinks.json'
import github from '../raw/links/github.json'
import mdata from '../raw/links/metadata.json'
import footerData from '../data/footer'
import {DataHelper} from './domhelpers'

export default {
  index: 'webdev',
  metadata: mdata.webdev,
  header: {
    type: 'dark',
    title: ["Webdev Projects"],
    caption: "Here are some of the websites I have designed and developed.",
    socials: {
      icons,
      front: "#FFC01D",
      back: "#003B4D"
    }
  },
  projects: DataHelper.getProjBanner(5),
  uxui: {
    title: "UI/UI Designs",
    caption: "You may also view my UI/UI designs I posted on Behance.",
    buttonLink: {
      text: "Go to Behance →",
      link: "https://www.behance.net/aimanadlawan",
      type: "external"
    }
  },
  gitProj: {
    title: 'Github Projects',
    caption: {
      caption1: 'The lists below are  some projects I have recently accomplished. You can also find all of them on my',
      url: {
        title: 'Github repository',
        link: 'https://github.com/Aimanski12'
      },
      caption2: 'page.'
    },
    proj: github
  },
  artWorkLink: {
    title: "Creative Artwork",
    caption: "You can also see my artwork on the link below.",
    buttonLink: {
      text: "View Artwork →",
      link: "/projects/artwork",
      type: "internal"
    }
  },
  quickLinks: DataHelper.getQuickLinks('webdev'),
  footer: {
    isComplete: true,
    ...footerData
  },
  menuItems: DataHelper.getMenu()
}