import icons from '../raw/links/footerlinks.json'
import github from '../raw/links/github.json'

import footerdata from '../data/footer'
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
  projects: Helpers.getprojbanner(5),
  uxui: {
    title: "UI/UI Designs",
    caption: "You may also view my UI/UI designs I posted on Behance.",
    buttonlink: {
      text: "Go to Behance →",
      link: "https://www.behance.net/aimanadlawan"
    }
  },
  gitproj: github,
  artworklink: {
    title: "Creative Artwork",
    caption: "You can also see my artwork on the link below.",
    buttonlink: {
      text: "View Artwork →",
      link: "/projects/artwork"
    }
  },
  quicklinks: Helpers.getquicklinks('webdev'),
  footer: {
    iscomplete: true,
    ...footerdata
  }
}