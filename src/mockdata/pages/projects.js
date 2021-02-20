import bookworm from '../data/projects/book-worm'
import fotopics from '../data/projects/foto-pics'
import moviebox from '../data/projects/movie-box'
import newsbox from '../data/projects/news-box'
import radiolive from '../data/projects/radio-live'
import footerdata from '../data/footer'
import {DataHelper} from './domhelpers'

// this function returns the data for every project page 
export const projects = (page) => {
  const data =  (page === 'book-worm' ? bookworm : 
    page === 'foto-pics' ? fotopics : 
    page === 'movie-box' ? moviebox :
    page === 'news-box' ? newsbox :
    page === 'radio-live' ? radiolive : null)
  return {
    ...data,
    nextPrev: DataHelper.getNextPrev(page),
    quickLinks: DataHelper.getQuickLinks(page),
    footer: {
      isComplete: true,
      ...footerdata
    },
    menuItems: DataHelper.getMenu()
  }
}