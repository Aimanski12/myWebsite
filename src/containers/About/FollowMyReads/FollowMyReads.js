import React from 'react'
import {connect} from 'react-redux'
import {imageUrl} from '../../../utils/common/common'
import './FollowMyReads.css'

function FollowMyReads(props) {

  let data = props.pageData

  // section title
  let title = data ? (
        <div className="reveal "
          style={{color: '#41474A'}}>
          {data.followMyReads.title}</div>
        ) : null

  // top description
  let topDesc = data ? (
      <span className="sub-reveal"
        style={{color: '#6B6F71', fontWeight: 500}}>
          {data.followMyReads.topDesc}</span>
      ) : null

    // this is the books section
  let books = data ? data.followMyReads.books.map((book, i)=>{
      return (
        <div className="book-wrapper" key={i}>
          <span className="show-container show">
            <a href={`https://${book.link}`} 
              className='reveal book-link'
              rel='noopener noreferrer'
              target='_blank'>
              <div className="">
                  <img className='book-icon' 
                    src={imageUrl(book.img, 'png')} 
                    alt={book.alt}/>
                    <span className='book-name'>{book.name}</span>
              </div>
              <div className="runner"></div>
            </a>
          </span>
        </div> )
      }) : null

  // this is the bottom text description
  let bottomDesc = data ? (
    <span className="sub-reveal"
      style={{color: '#6B6F71', fontWeight: 500}}>
        {data.followMyReads.bottomDesc} 
        <a href={`https://${data.followMyReads.goodreadsLink}`} 
          rel='noopener noreferrer'
          target='_blank'
          className='links'> here</a>.</span>
    ) : null

  return (
    <section className="section-container myreads">
      <div className="section-background"
        style={{background: 
      `url('${imageUrl('light-dotted-background-whole', 'png')}') repeat center top`}} >

        <div className="section-wrapper">

          <article className='section-article-wrapper'>
            <h2 className="head3">
              <span className="show-container show">
                {title}
                <div className="runner"></div>
              </span>
            </h2>
            <p className="sub-reveal-container desc show">{topDesc}</p>
            <figure  className='section-article-wrapper book-icons'>
              <div className='content-center books-container'>
                {books}
              </div>
            </figure>

            <p className="sub-reveal-container desc show">{bottomDesc}</p>
          </article>

        </div>
      </div>
    </section>
  )
}

const mapStateToProps = (state) => {
  return {
    pageData: state.state.pageData
  }
}

export default connect(mapStateToProps)(FollowMyReads)
