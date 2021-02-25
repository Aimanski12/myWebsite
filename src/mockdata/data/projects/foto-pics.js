import fpimage from '../../raw/imagestock/foto-pics.json'

export default {
  index: "foto-pics",
  title: "Foto-Pics",
  hero: fpimage.hero,
  caption: "a photo and video stock website.",
  banner: {
    title: "Foto-Pics",
    description: "A photo and video stock website for searching high quality stock images and videos with the ability to save selected files.",
    image: fpimage.banner,
    features: [
      {
        text: "Full Web Development",
        svg: "code"
      },
      {
        text: "Logo Design",
        svg: "pentel"
      }
    ],
    buttonLink: {
      text: "View Details →",
      link: "/projects/webdev/foto-pics",
      type: "internal"
    }
  },
  overview: {
    title: "Project Overview",
    text: [
      "Finding stock images for a web design mock-ups can be a cumbersome task. You have to jump into website to website to search for the right media file you are looking for. So, this project is the solution.",
      "Foto-Pics is a Next JS web application that allows users to easily search stock images and videos and download for free. It features various collections of photos for users to explore. It also promotes photos and videos of the day including the photographers."
    ]
  },
  platforms: [
    {
      name: "Platform",
      desc: "Web/Mobile"
    },
    {
      name: "Category",
      desc: "Photography"
    },
    {
      name: "Designer & Developer",
      desc: "Aiman Adlawan"
    }
  ],
  technologies: [
    "NextJS", "Javascript", "Rest API", "HTML5", "CSS3", "Webpack", "Adobe Photoshop", "Adobe Illustrator", "Figma"
  ],
  parallax: {
    image: fpimage.parallax,
    background: "#53b2e4"
  },
  api: {
    title: "API's Used",
    before: "There are hundreds of stock images apis available over the internet. The",
    after: "is the best api for this project. It is so easy to use and has an awesome documentation. It has thousands of photos in their database and supports multiple media size downloads.",
    name: "Pexels API",
    link: "https://www.pexels.com/api/"
  },
  sketch: {
    title: "Sketch & Wireframes",
    images: fpimage.sketch,
    details: [ 
      "The entire application is divided into 4 main pages which are photos, videos, discover and main page. Each page presents a library of media files to help  the user select his preferred image.",
      "When a user selects a image or a video file, the application will direct the user to a page where a detailed information is given and an option button to download the image.",
      "Related images are also shown to the user as an alternative incase the user does not like the image he select."
    ]
  },
  designs: {
    title: "Designs & Layouts",
    images: fpimage.designs,
    details: [
      "Instead of putting a single navigation bar at the top, I opted to place it in the middle to make it visible to the users when they open the page.",
      "I also added horizontal sliders on the discover page to make the website more interactive.",
      "An input bar is also placed stratigecally to let the user know that they have an option to search images ad videos by keywords."
    ]
  },
  accomplishments: {
    title: "Project Accomplishments",
    details: [
      "Media File Download",
      "Responsive Design",
      "State Management",
      "Using Rest API",
      "Complete UX/UI Design"
    ]
  },
  screens: {
    title: "Sample Screens",
    images: fpimage.screens
  },
  links: {
    title: "Project Links",
    caption: "If you want to see this project's source code, UX/UI design, or want to browse the actual website, click on any of the link below.",
    buttonLink: [
      {
        text: "Launch App →",
        link: "https://foto-pics.vercel.app",
        type: "external"
      },
      {
        text: "Source Code →",
        link: "https://github.com/Aimanski12/foto-pics",
        type: "external"
      },
      {
        text: "View on Behance →",
        link: "https://www.behance.net/gallery/106587429/Foto-Pics",  
        type: "external"
      }
    ]
  },
  nextPrev: {
    title: "Foto-Pics",
    btnlink: {
      text: "View Project →",
      link: "/projects/webdev/foto-pics",
      type: "internal"
    },
    image: fpimage.banner
  }
}
