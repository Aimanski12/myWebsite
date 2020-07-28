import React, {Component} from 'react'
import {PageData} from '../../../utils/context/pageContext'
import Title from './Components/Title'
import TopDesc from './Components/TopDesc'
import Books from './Components/Books'
import BottomDesc from './Components/BottomDesc'

class FollowMyReads extends Component{
  static contextType = PageData

  render () {

    let data = this.context.followMyReads

    return (
      <section className="section-container myreads">
        <div className="section-background"
          style={{background: `url('${data.background}') repeat center top`}}>

          <div className="section-wrapper">

            <article className='section-article-wrapper'>
              <h2 className="head3">
                <span className="show-container show">
                  <Title title={data.title}/>
                  <div className="runner"></div>
                </span>
              </h2>
              <p className="sub-reveal-container desc show">
                <TopDesc desc={data.topDesc}/>
              </p>
              <figure  className='section-article-wrapper book-icons'>
                <div className='content-center books-container'>
                  <Books books={data.books}/>
                </div>
              </figure>

              <p className="sub-reveal-container desc show">
                <BottomDesc 
                  link={data.goodreadsLink}
                  desc={data.bottomDesc}/>
              </p>
            </article>

          </div>
        </div>
      </section>
    )
  }
}

export default FollowMyReads