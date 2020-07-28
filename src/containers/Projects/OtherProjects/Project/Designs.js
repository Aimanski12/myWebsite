import React, {Fragment} from 'react'
import Icon from '../../../../components/Svgs/Logos/Logos'

function Designs(props) {

  let designs = props.designs.map((design, i) =>{
    return (
    <li className='project-list' key={i}>
      <h4 className="p-wrapper head4">
        <div className="proj-list-number">
          <span className="show-container p-container p-list-number show"
            style={{color: ''}}>
            <div className="reveal p-reveal">
              <Icon type={design.type}/>
            </div>
            <div className="runner p-runner"></div>
          </span> 
        </div>
        <a href={design.link}
          rel='noopener noreferrer'
          target='_blank'>
          <div className={`sub-reveal-container proj-list-name show ${design.name}`}>
            <span className="sub-reveal p-desc-content p-list-name"
              style={{fontWeight: 600}}>
              {design.name}</span>
          </div>
        </a>
      </h4>
    </li> )
  })


  return (
    <Fragment>
      <ul className='design-list-wrapper'>
        {designs}
      </ul>
    </Fragment>
  )
}

export default Designs


