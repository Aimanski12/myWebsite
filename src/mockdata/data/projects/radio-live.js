import rlimage from '../../raw/imagestock/radio-live.json'

export default {
  index: "radio-live",
  title: "Radio-Live",
  hero: rlimage.hero,
  caption: "a global fm radio website.",
  banner: {
    title: "Radio-Live",
    description: "An NextJS application built for listening to fm radio stations from all over the world. Allows users search station by country and by music genre.",
    image: rlimage.banner,
    features: [
      {
        text: "Complete UX/UI Design",
        svg: "pentel"
      },
      {
        text: "Full Web Development",
        svg: "code"
      }
    ],
    buttonLink: {
      text: "View Details",
      link: "/projects/webdev/radio-live"
    }
  },
  overview: {
    title: "Project Overview",
    text: [
      "The goal of this project is allow create a web application that can show all listed fm radio stations from all over the world and allow users to listen live on its music directly from the browser.",
      "One challenge I encountered upon building this application was that not all radio stations are using the same audio format in their live plugins which was a bit challenging. In the end, the project went well."
    ]
  },
  platforms: [
    {
      name: "Platform",
      desc: "Web/Mobile"
    },
    {
      name: "Category",
      desc: "Entertainment"
    },
    {
      name: "Designer & Developer",
      desc: "Aiman Adlawan"
    }
  ],
  technologies: [
    "NextJS", "Javascript", "RestAPI", "HTML", "CSS3", "Webpack", "Adobe Photoshop", "Figma"
  ],
  parallax: {
    image: rlimage.parallax,
    background: "#4de0db"
  },
  api: {
    title: "API's Used",
    before: "I had a lot of trouble finding the right API for this project. But after a lot of research, I found",
    after: "which was exactly for this project. It has a well written documentation and it contains great archive of data. The only thing is that it is maintained by small group but in general, it's just what I need. ",
    name: "Community Radio Station API",
    link: "https://fr1.api.radio-browser.info"
  },
  sketch: {
    title: "Sketch & Wireframes",
    images: rlimage.sketch,
    details: [ 
      "On the main screen, the user is provided with a significant amount of radio station options. This will brief the user that the page presents various radio stations with less cognitive load.",
      "A left and bottom sections are utilized as a guide for the user on which type of radio station he wants to listen to. ",
      "When the user searches for a radio by country, a side bar navigation with country lists is available to direct the user."
    ]
  },
  designs: {
    title: "Designs & Layouts",
    images: rlimage.designs,
    details: [
      "The goal of the design is to make it look a single page with all the options in it. This can help the user navigate easily with just one look.",
      "I added custom icons for the genres and categories to make it look modern and appealing.",
      "Country flags are also added to the design for familiarity and the number of stations available for each country."
    ]
  },
  accomplishments: {
    title: "Project Accomplishments",
    details: [
      "Handling Audio Files",
      "Responsive Design",
      "Using Rest API",
      "Complete UX/UI Design"
    ]
  },
  screens: {
    title: "Sample Screens",
    images: rlimage.screens
  },
  links: {
    title: "Project Links",
    caption: "If you want to see this project's source code, UX/UI design, or want to browse the actual website, click on any of the link below.",
    buttonLink: [
      {
        text: "Launch App →",
        link: "https://radio-live.vercel.app"
      },
      {
        text: "Source Code →",
        link: "https://github.com/Aimanski12/radio-live"
      },
      {
        text: "View on Behance →",
        link: "https://www.behance.net/gallery/105665555/Radio-Live"
      }
    ]
  },
  nextPrev: {
    title: "Radio-Live",
    link: "/projects/radio-live",
    text: "View Project →",
    image: rlimage.banner
  }
}
