import React from 'react'
import {bklink} from '../../../utils/about/booksdata'
import {img} from '../../../utils/common/common'
import SectionHeader from '../../../components/SectionHeader/SectionHeader'

function MyReads() {
  const bk = () =>{
    let book = bklink.map((b, i) => {
      return(
          <figure className='content-center' key={i}>
            <a href={b.link}
              rel='noopener noreferrer'
              target='_blank'>
              <img src={img(b.img)} alt={`${b.title} book`}/>
            </a></figure> )
      })
    return book
  }
  return (
    <section 
        style={{background: '#f4f4f4'}}
        className="section-message content-center reads">
        <div className="section-mcontainer content-center">
          <SectionHeader 
            color={'green'}
            title={'Follow My Reads'}
            quote={'Reading is essential to those who seek to rise above the ordinary.'}
            author={'Jim Rohn'} />
            <article className='content-align content-center '>
              <p className='section-mtext'
                style={{color: '#7E7070'}}>{`Reading is one of the things I do to satisfy my curiosity. It helps me understand the world around me better than any social media feeds. Here are some of the reads I recommend to those who share the same curiosity with me.`}</p>
 
              <div className="content-align books-container">
                {bk()}
              </div>
                <p className='section-mtext follow-reads' 
                  style={{color: '#7E7070'}}>I have 132 reads. You can follow all of them 
                  <a 
                    rel='noopener noreferrer'
                    target='_blank'
                    href="https://www.goodreads.com/review/list/84826805"> here</a>.</p>


            </article>
        </div>
      </section>
  )
}

export default MyReads
