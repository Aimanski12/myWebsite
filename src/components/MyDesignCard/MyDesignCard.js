import React from 'react'
import {findBackground} from '../../helpers/common/common'

function MyDesignCard(props) {

  return (
    <div className={`card-cards content-center ${props.num}`}>
      <div className="cards content-center">
        <article>
          <figure>
            <img src={findBackground(props.img)} alt="" />
          </figure>
          <h4>{props.ttl}</h4>
          <p>{props.prg}</p>
        </article>
      </div>
      <div className="card-overlay content-center">
        <a href="/"><button>View Case Study</button></a>
      </div>
    </div>
  )
}

export default MyDesignCard
