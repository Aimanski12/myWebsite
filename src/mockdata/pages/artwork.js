import icons from '../raw/links/footerlinks.json'
import art from '../raw/imagestock/artwork.json'
import footerData from '../data/footer'
import {Helpers} from './helpers'

export default {
  index: 'artwork',
  header: {
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
      text: "View webdev projects →",
      link: "/projects/webdev"
    }
  },
  quickLinks: Helpers.getQuickLinks('artwork'),
  footer: {
    isComplete: true,
    ...footerData
  }
}               