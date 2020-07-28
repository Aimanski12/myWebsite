import React, {Fragment} from 'react'

function Books(props) {
  let books = props.books.map((book, i)=>{
    return (
      <div className="book-wrapper" key={i}>
        <span className="show-container show">
          <a href={`https://${book.link}`} 
            className='reveal book-link'
            rel='noopener noreferrer'
            target='_blank'>
            <div className="">
              <img className='book-icon' 
                src={`/images/${book.img}.png`} 
                alt={`${book.alt} icon`}/>
                <span className='book-name'>{book.name}</span>
            </div>
            <div className="runner"></div>
          </a>
        </span> 
      </div> )
    })

  return (
    <Fragment>
      {books}
    </Fragment>
  )
}

export default Books
