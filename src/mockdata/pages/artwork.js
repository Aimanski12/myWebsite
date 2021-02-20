import icons from '../raw/links/footerlinks.json'
import art from '../raw/imagestock/artwork.json'
import footerData from '../data/footer'
import {DataHelper} from './domhelpers'

export default {
  index: 'artwork',
  header: {
    type: 'dark',
    title: ["Creative Artwork"],
    caption: "Welcome to my art page. Below are some the projects I have done recenly.",
    socials: {
      icons,
      front: "#FFC01D",
      back: "#003B4D"
    }
  },
  artWork: art,
  seeMore: {
    title: "Webdev Projects?",
    caption: "You can also view my webdev projects.",
    buttonLink: {
      text: "Webdev Projects →",
      link: "/projects/webdev",
      type: "internal"
    }
  },
  quickLinks: DataHelper.getQuickLinks('artwork'),
  footer: {
    isComplete: true,
    ...footerData
  },
  menuItems: DataHelper.getMenu()
}               