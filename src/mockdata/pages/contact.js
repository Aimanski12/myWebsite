import icons from '../raw/links/footerlinks.json'
import footerData from '../data/footer'
import {DataHelper} from './domhelpers'

export default {
  index: 'contact',
  header: {
    type: 'dark',
    title: ["Get In Touch"],
    caption: "Reach out to me for inquiries or just do a fancy way of saying 'Hi!'",
    socials: {
      icons,
      front: "#FFC01D",
      back: "#003B4D"
    }
  },
  socialLinks: {
    title: "Social Links",
    caption: "You may also contact me through any of these social media sites.",
    icons:{
      icons,
      front: "#FFC01D",
      back: "#004E66"
    }
  },
  quickLinks: DataHelper.getQuickLinks('contact'),
  footer: {
    isComplete: false,
    ...footerData
  },
  menuItems: DataHelper.getMenu()
}