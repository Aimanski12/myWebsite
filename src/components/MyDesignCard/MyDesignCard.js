import React from 'react'
import {img, im} from '../../utils/common/common'

function MyDesignCard(props) {

  return (
    <article className={`design-container ${props.index === 1 || props.index === 3 ? 'design-left' : null}`}>
      <figure>
        <img src={img(props.img)} alt={`${im[props.img]} mockup`} />
      </figure>
      <div className='content-center design-contents'>
        <div className="design-description">
          <div className="design-text">
            <h2>{props.ttl}</h2>
            <p>{props.prg} </p>
          </div>
          <a href={props.link}
            rel='noopener noreferrer'
            target='_black'><button>View on Behance</button></a>
        </div>
      </div>
    </article>
  )
}

export default MyDesignCard
