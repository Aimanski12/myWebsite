import icons from '../raw/links/footerlinks.json'
import art from '../raw/imagestock/artwork.json'
import footerdata from '../data/footer'
import {Helpers} from './helpers'

export default {
  page: 'artwork',
  header: {
    title: ["Creative Artwork"],
    caption: "Welcome to my art page. Below are some the projects I have done recenly.",
    socials: {
      icons,
      front: "#FFC01D",
      back: "#003B4D"
    }
  },
  artwork: art,
  seemore: {
    title: "Webdev Projects?",
    caption: "You can also view my webdev projects.",
    buttonlink: {
      text: "View webdev projects →",
      link: "/projects/webdev"
    }
  },
  quicklinks: Helpers.getquicklinks('artwork'),
  footer: {
    iscomplete: true,
    ...footerdata
  }
}               