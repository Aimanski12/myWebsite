import mbimage from '../../raw/imagestock/movie-box.json'
import mdata from '../../raw/links/metadata.json'

export default {
  index: "movie-box",
  metadata: mdata.moviebox,
  title: "Movie-Box",
  hero: mbimage.hero,
  caption: "a movie library website.",
  banner: {
    title: "Movie-Box",
    description: "A NextJS application built for browsing movies, tv-shows, and actors bio and also for viewing movie trailers and movie stats.",
    image: mbimage.banner,
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
      link: "/projects/webdev/movie-box",
      type: "internal"
    }
  },
  overview: {
    title: "Project Overview",
    text: [
      "Movie-Box is a project that allows users to browse movies, tv-shows, and actor's bio. The movies in this website are from different languages so it contains a lot of data.",
      "The application also features movie casts, detailed stats and ratings, downloadable standard size posters and watching movie trailers."
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
    "NextJS", "Javascript", "Rest API", "HTML5", "CSS3", "Webpack", "Adobe Photoshop", "Figma", "Vercel", "Firebase"
  ],
  parallax: {
    image: mbimage.parallax,
    background: "#c5feff"
  },
  api: {
    title: "API's Used",
    before: "In this project, I used",
    after: "as the data source. It has tons of information and well written documentation. It also archived international movies which were produced long time ago and in different languages. ",
    name: "TMDB (The Movie Database)",
    link: "https://developers.themoviedb.org/3/getting-started/introduction"
  },
  sketch: {
    title: "Sketch & Wireframes",
    images: mbimage.sketch,
    details: [ 
      "The entire application is made up of 6 main pages. Each page has its own set of movie data for users to consume. ",
      "When a user visits the website, element sliders are used on the headers to featured lastest movies. This serves as a guide as to where the users can browse across the browser.",
      "I choose Upcoming and Top-Rated movies as a starter information for users to consume. This will also help the user where to navigate further on the website."
    ]
  },
  designs: {
    title: "Designs & Layouts",
    images: mbimage.designs,
    details: [
    "The pattern is made up of a tile format in rows and column. This makes every movie details visible. ",
    "Element sliders on the header are used to highlight a significant movie and its details. ",
    "Dark blue color is used as a theme the entire pages. This gives a cinematic color effect on the entire website. "
    ]
  },
  accomplishments: {
    title: "Project Accomplishments",
    details: [ 
      "Complete UX/UI Design",
      "State Management",
      "Rest API",
      "Responsive Design"
    ]
  },
  screens: {
    title: "Sample Screens",
    images: mbimage.screens
  },
  links: {
    title: "Project Links",
    caption: "The links below will direct you to launch the app or view project's source codes and design.",
    qrcode: {
      image: '/movie_box/movie_box_qrcode.webp',
      alt: 'movie box qrcode',
      link: "https://movie-box-site.vercel.app",
    },
    buttonLink: [
      {
        text: "Source Code →",
        link: "https://github.com/Aimanski12/movie-box",
        type: "external"
      },
      {
        text: "View on Behance →",
        link: "https://www.behance.net/gallery/104066973/Movie-Box",
        type: "external"
      }
    ]
  },
  nextPrev: {
    title: "Movie-Box",
    btnlink: {
      text: "View Project →",
      link: "/projects/webdev/movie-box",
      type: "internal"
    },
    image: mbimage.banner
  }
}
