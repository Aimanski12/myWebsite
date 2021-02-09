import icons from '../raw/links/footerlinks.json'
import github from '../raw/links/github.json'
import footerData from '../data/footer'
import {Helpers} from './helpers'

export default {
  index: 'webdev',
  header: {
    title: ["Webdev Projects"],
    caption: "Here are some of the websites I have designed and developed.",
    socials: {
      icons,
      front: "#FFC01D",
      back: "#003B4D"
    }
  },
  projects: Helpers.getProjBanner(5),
  uxui: {
    title: "UI/UI Designs",
    caption: "You may also view my UI/UI designs I posted on Behance.",
    buttonLink: {
      text: "Go to Behance →",
      link: "https://www.behance.net/aimanadlawan"
    }
  },
  gitProj: github,
  artWorkLink: {
    title: "Creative Artwork",
    caption: "You can also see my artwork on the link below.",
    buttonLink: {
      text: "View Artwork →",
      link: "/projects/artwork"
    }
  },
  quickLinks: Helpers.getQuickLinks('webdev'),
  footer: {
    isComplete: true,
    ...footerData
  }
}