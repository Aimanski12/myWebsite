import nbimage from '../../raw/imagestock/news-box.json'
import mdata from '../../raw/links/metadata.json'

export default {
  index: "news-box",
  metadata: mdata.newsbox,
  title: "News-Box",
  hero: nbimage.hero,
  caption: "a website for free and fresh news.",
  banner: {
    title: "News-Box",
    description: "A website that delivers fresh and free news content from all over the world. It also allows users to search and read archived news and articles. ",
    image: nbimage.banner,
    features: [
      {
        text: "Full Web Development",
        svg: "code"
      },
      {
        text: "Complete UX/UI Design",
        svg: "pentel"
      },
      {
        text: "Custom Web Design",
        svg: "desktop",
      }
    ],
    buttonLink: {
      text: "View Details →",
      link: "/projects/webdev/news-box",
      type: "internal"
    }
  },
  overview: {
    title: "Project Overview",
    text: [
      "This web application is built to provide news content for users. It delivers news from various topics like politcs, business and economy, sports, health and lifestyle and many more.",
      "The application also allows users to search and read archived news and articles from the past events of any news category."
    ]
  },
  platforms: [
    {
      name: "Platform",
      desc: "Web/Mobile"
    },
    {
      name: "Category",
      desc: "News Media"
    },
    {
      name: "Designer & Developer",
      desc: "Aiman Adlawan"
    }
  ],
  technologies: [
    "NextJS", "Javascript", "Rest API", "HTML5", "CSS3", "Webpack", "Adobe Photoshop", "Figma"
  ],
  parallax: {
    image: nbimage.parallax,
    background: "#fff5cc"
  },
  api: {
    title: "API's Used",
    before: "There are a lot of news api out there that provides good content. One the best api I have found was",
    after: "api which generously gives out data all developers with no subscriptions needed. It has a great and well written documentation that anybody can read and use for projects.",
    name: "The Guardian Open Platform",
    link: "https://open-platform.theguardian.com/documentation/"
  },
  sketch: {
    title: "Sketch & Wireframes",
    images: nbimage.sketch,
    details: [ 
      "The flow of information starts from the lastest and most relevant news content. While the other significant news will be shown on the subsequent pages.",
      "When a user enters a page, a related news topics will also be shown on the page making it easy for the user eyes to go over the page.",
      "News topics are separated according to its significance for easy search and lesser cognitive load for users."
    ]
  },
  designs: {
    title: "Designs & Layouts",
    images: nbimage.designs,
    details: [
    "News contents are arranged in a tile format. It makes the content easily readable for the users whenever they visit the website.",
    "A drop down menu bar is added for a quick glance of all available news contents.",
    "A search field is added on top of each page for users to type keywords and search revelant news."
    ]
  },
  accomplishments: {
    title: "Project Accomplishments",
    details: [
      "State Management",
      "Using Rest API",
      "Complete UX/UI Design",
      "Responsive Design"
    ]
  },
  screens: {
    title: "Sample Screens",
    images: nbimage.screens
  },
  links: {
    title: "Project Links",
    caption: "If you want to see this project's source code, UX/UI design, or want to browse the actual website, click on any of the link below.",
    buttonLink: [
      {
        text: "Launch App →",
        link: "https://news-box.vercel.app",
        type: "external"
      },
      {
        text: "Source Code →",
        link: "https://github.com/Aimanski12/news-room",
        type: "external"
      },
      {
        text: "View on Behance →",
        link: "https://www.behance.net/gallery/107484257/News-Box",
        type: "external"
      }
    ]
  },
  nextPrev: {
    title: "News-Box",
    btnlink: {
      text: "View Project →",
      link: "/projects/webdev/news-box",
      type: "internal"
    },
    image: nbimage.banner
  }
}
