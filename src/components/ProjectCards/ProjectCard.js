import React from 'react'
import {img, im} from '../../helpers/common/common'

function ProjectCard(props) {

  return (
    <li className='card-proj content-center'>
        <div className="crd-prj-container">
          <div className="crd-prj-card">

            <div className="card-front">

              <div className="crd-layover content-center" >
                <span>View Details</span>
              </div>

              <div className="crd-content content-center">
                <div className='crd-num content-center'>
                  <span className='content-center'>{props.pNum}</span>
                </div>
                <div className="crd-svg content-center">
                  <img src={img(props.img)} alt={`${im[props.img]} icon`} />
                </div>
                <div className="crd-title content-center">
                  <p>{props.ttl}</p>
                </div>
              </div>

            </div>

            <div className="card-back content-center">

              <article className='content-center'>
                <div className="text-container content-center">
                  <p>{props.prg}</p>
                </div>
                <a href={props.url}><button>Open</button></a>
              </article>
              
            </div>
          </div>
        </div>
      </li>
  )
}

export default ProjectCard

