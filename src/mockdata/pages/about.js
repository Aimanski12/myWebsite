import images from '../raw/imagestock/about.json'
import footerData from '../data/footer'
import {DataHelper} from './domhelpers'

export default {
  index: 'about',
  header: {
    type: 'about',
    name: 'Aiman E. Adlawan',
    intro: "I am a freelance web developer and creative designer based in Bensenville Illinois. I have a strong passion for technology and design. I specialize in front-end development, UX/UI design, photo enhancements, and graphic design. I love to make simple things that make a big difference.",
    greeting: "HELLO, MY NAME’S",
    profile: images.profile
  },
  parallax1: images.parallax[0],
  facts: {
    title: "Some fun facts about myself",
    caption: "I grew up in Toledo City, Cebu, Philippines. I speak english, tagalog, and bisaya. I like brewed coffee. I exercise regularly. I collect vintage currencies. I trade stocks. I like balot and mexican tacos. I do road biking. I was bumped by a jeepney when I was 9 years old and still alive.",
    image: images.facts_about_me
  },
  parallax2: images.parallax[1],
  howIBecame: {
    title: "How I became a web developer",
    caption: "I worked in the hospitality industry for 7 about years. I racked my position up from an agent to magerial position until at one point I decided to take a shift of my career path. It all started with curiousity. I was so entralled about the development of technolgy everyday and decided to take some extra mile on learning and understanding how they work. I enrolled Web Development Course in University of London through coursera and the rest was history."
  },
  parallax3: images.parallax[2],
  travels: {
    title: "Some Travel Memories",
    images: images.travels
  },
  whatICanDo: {
    title: "What I can do?",
    caption: "Dig a little deeper and see what I have done and what I can do.",
    buttonlink: {
      text: "View resume →",
      link: "/resume",
      type: "internal"
    }
  },
  quickLinks: DataHelper.getQuickLinks('about'),
  footer: {
    iscomplete: true,
    ...footerData
  },
  menuItems: DataHelper.getMenu()
}