import icons from '../raw/links/footerlinks.json'
import footerData from '../data/footer'
import mdata from '../raw/links/metadata.json'
import {DataHelper} from './domhelpers'

export default {
  index: 'contact',
  metadata: mdata.contact,
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
  labels: [
    { 
      el: 'input',
      type: "text",
      label: 'Full name*',
      name: "name",
      placeHolder: 'Enter your name',
    },
    {
      el: 'input',
      type: "email",
      label: 'Email address*',
      name: "email",
      placeHolder: 'Enter your email',
    },
    {
      el: 'input',
      type: "text",
      label: 'Subject',
      name: "subject",
      placeHolder: "Enter message subject",
    },
    {
      el: 'textarea',
      type: "textarea",
      label: 'How can I help?*',
      name: "mes",
      placeHolder: "Enter your message.",
    }
  ],
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