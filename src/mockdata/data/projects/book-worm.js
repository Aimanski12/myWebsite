import bwimage from '../../raw/imagestock/book-worm.json'
import mdata from '../../raw/links/metadata.json'

export default {
  index: "book-worm",
  metadata: mdata.bookworm,
  title: "Book-Worm",
  hero: bwimage.hero,
  caption: "a website for book lovers.",
  banner: {
    title: "Book-Worm",
    description: "NextJS application built for searching books from various categories and genres. Allows users to view book by author and book title.",
    image: bwimage.banner,
    features: [
      {
        text: "Full Web Development",
        svg: "code"
      },
      {
        text: "Custom Web Design",
        svg: "desktop",
      },
      {
        text: "Logo Design",
        svg: "pentel"
      }
    ],
    buttonLink: {
      text: "View Details →",
      link: "/projects/webdev/book-worm",
      type: "internal"

    }
  },
  overview: {
    title: "Project Overview",
    text: [
      "Reading is one of the things I do to nourish my curiousity and finding the right book to read somehow can be challenging. As I search for books relavant to my interest, I always browse to some of the famous online bookstores. So having this experience made me realize to build a website that can show various books from different categories and genres.",
      "So, I took this challenge and build a book website. I called it book-worm, a name not really significant to any creature or movie character but just a name I thought would be perfect for this project."
    ]
  },
  platforms: [
    {
      name: "Platform",
      desc: "Web/Mobile"
    },
    {
      name: "Category",
      desc: "Education"
    },
    {
      name: "Designer & Developer",
      desc: "Aiman Adlawan"
    }
  ],
  technologies: [
    "HTML5", "CSS3", "Javascript", "NextJS", "Rest API",  "Webpack", "Adobe Photoshop", "Adobe Illustrator", "Figma" 
  ],
  parallax: {
    image: bwimage.parallax,
    background: "#98ffd5"
  },
  api: {
    title: "API's Used",
    before: "",
    after: " provides an awesome documentation. It has interesting end points to play around with. It also has thousands of books in its database and has a detailed information for each book which is good for this project. So I decided to use it.",
    name: "Google Books API",
    link: "https://developers.google.com/books"
  },
  sketch: {
    title: "Sketch & Wireframes",
    images: bwimage.sketch,
    details: [ 
      "User flow: the entire application is made up of 7 main pages. I logically outlined them together to enhance user experience and simplify the whole design.",
      "Information architecture: the concept of the design is to make it look like a book shelf. Every main page displays books that are categorized according its book classification.",
      "Iconography: I sketched some custom icons to embellish the design. I added them on the navigation bars to add highlight on the design."
    ]
  },
  designs: {
    title: "Designs & Layouts",
    images: bwimage.designs,
    details: [
      "Books have a lot of categories and genres. I used a custom navigation bar for users to easily select what type of book they want to see.", 
      "I also used dark-green and yellow combination as a color palette theme for the website.", 
      "I made a grid or list type options for the users to easily see and read book details."
    ]
  },
  accomplishments: {
    title: "Project Accomplishments",
    details: [
      "Responsive Web Design",
      "DOM Manipulation",
      "State Management",
      "Using Rest API",
      "Complete UX/UI Design"
    ]
  },
  screens: {
    title: "Sample Screens",
    images: bwimage.screens
  },
  links: {
    title: "Project Links",
    caption: "The links below will direct you to launch the app or view project's source codes and design.",
    qrcode: {
      image: '/book_worm/book_worm_qrcode.webp',
      alt: 'book worm qrcode',
      link: "https://book-worm.vercel.app",
    },
    buttonLink: [
      {
        text: "Source Code →",
        link: "https://github.com/Aimanski12/book-worm",
        type: "external"
      },
      {
        text: "View on Behance →",
        link: "https://www.behance.net/gallery/109806633/Book-Worm-Wensite",
        type: "external"
      }
    ]
  },
  nextPrev: {
    title: "Book-Worm",
    btnlink: {
      text: "View Project →",
      link: "/projects/webdev/book-worm",
      type: "internal"
    },
    image: bwimage.banner
  }
}