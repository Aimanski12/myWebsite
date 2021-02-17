import artworks from '../raw/imagestock/artwork.json'
import fotopics from '../data/projects/foto-pics'
import moviebox from '../data/projects/movie-box'
import newsbox from '../data/projects/news-box'
import radiolive from '../data/projects/radio-live'
import bookworm from '../data/projects/book-worm'
import pages from '../raw/links/pagelinks.json'
import socials from '../raw/links/footerlinks.json'

export const Helpers = (function(){
  // make array of projects
  const projects = [bookworm, moviebox, radiolive, newsbox, fotopics]

  // this function returns a specific artwork data
  // based on a day of the week. 
  const _getArtWork = () => {
    // get the day of the week
    const day = new Date().getDay()
    // set of images per day
    const img = [[0,3],[1,4],[2,5],[3,6],[4,0],[5,1],[6,2]]
    return [artworks[img[day][0]], artworks[img[day][1]]]
  }

  // this function return an array of data
  // containing the banner details for every projects
  const _getProjBanner = (n) => {
    // return the number of array of banners
    // based from the number provided in n
    return projects.filter((p, i) => {
      if(i < n) {
        return p.banner
      }
    })
  }

  // this function return a array of menu which 
  // excludes the current page.
  const _getQuickLinks = (page) => {
    // filter the pages menu and return 
    // the one not the same
    return pages.filter(p => {
      if(page !== p.name.toLocaleLowerCase()) {
        return p
      }
    })
  }

  // get next prev data on the project banner
  const _getNextPrev = (page) => {
    let prev, next;
    // loop on the array and see
    for (let x = 0; x < projects.length; x++){
      // if the name matches on the list and then return 
      // the previous and next banner project
      if(page === projects[x].index) {
        if(x-1 < 0) {
          prev = null
        } else {
          prev = projects[x-1].banner
        }
        if(x+1 > 4) {
          next = null
        } else {
          next = projects[x+1].banner
        }
      }
    }
    return {prev, next}
  }

  // this function will find if the given query parameter
  // is a valid query based from the project names
  const _findName = (name) => {
    // filter the names
    const val = projects.filter(p => {
      return p.index === name
    })
    // check if the value is valid
    if(Object.keys(val).length === 0){
      return false
    } else {
      return name
    }
  }

  const _getMenu = () => {
    return {
      menu: pages,
      socialIcons: {
        socials,
        front: '#FFC01D',
        back: '#001116'
      }
    }
  }

  return {
    getArtWork(n){
      return _getArtWork(n)
    },
    getProjBanner(n){
      return _getProjBanner(n)
    },
    getQuickLinks (page){
      return _getQuickLinks(page)
    },
    getNextPrev(page) {
      return _getNextPrev(page)
    },
    findName(name) {
      return _findName(name)
    },
    getMenu() {
      return _getMenu()
    }
    
  }

})()