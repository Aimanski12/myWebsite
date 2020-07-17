import React, {Fragment} from 'react'
import Icon from '../../../../components/Svgs/Logos/Logos'

function Designs(props) {
  console.log(props.designs)

  let designs = props.designs.map((design, i) =>{
    return (
    <li className='project-list' key={i}>
      <h4 className="p-wrapper head3">
        <a href={design.link}>
          <div className="proj-list-number">
            <span className="show-container p-container p-list-number show"
              style={{color: ''}}>
              <div className="reveal p-reveal">
                <Icon type={design.type}/>
              </div>
              <div className="runner p-runner"></div>
            </span> 
          </div>
          <div className="sub-reveal-container proj-list-name show">
            <span className="sub-reveal p-desc-content p-list-name"
              style={{color: design.color, fontWeight: 600}}>
              {design.name}</span>
          </div>
        </a>
      </h4>
    </li> )
  })


  return (
    <Fragment>
      {designs}
    </Fragment>
  )
}

export default Designs
