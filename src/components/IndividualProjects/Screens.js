import React, {Fragment, useContext} from 'react'
import {StateContext} from '../../utils/context/stateContext'
import Link from 'next/link'
import Arrow from '../Buttons/Buttons'

function Screens(props) {
  const {setTransitionState} = useContext(StateContext)

  // when the button link is clicked
  // we will update the transition state
  const click = () => {
    setTransitionState('bottom')
  }


  let screens = props.screens.map((screen, i)=> {
    return (
      <Fragment key={i}>
          {
            screen.desc ? 
            <article className='header-wrapper project-about-wrapper'>
              { screen.title ? 
              <h4 className="p-wrapper head4">
                <span className="show-container p-container show"
                  style={{color: '#2C6664'}}>
                  <div className="reveal p-reveal">{screen.title}</div>
                  <div className="runner p-runner"></div>
                </span>
              </h4> : null }
            <p className="sub-reveal-container p-desc desc show">
              <span className="sub-reveal p-desc-content"
                style={{color: '#2C6664', fontWeight: 400}}>{screen.desc}</span>
            </p> 
          </article>
            : null
          }
        <div className='sub-reveal-container project-img show'>
          <img className='sub-reveal' src={`${screen.img}`} alt={screen.alt}/>  
        </div>
      </Fragment>
    )
  })

  return (
    <div className="projects-wrapper screens-wrapper">
      <h2 className="p-wrapper head2">
        <span className="show-container p-container show"
          style={{color: '#2C6664'}}>
          <div className="reveal p-reveal"
            style={{marginBottom: '25px'}}>Screens</div>
          <div className="runner p-runner"></div>
        </span>
      </h2>

      {screens}      

      <div className="launch-link">
        <div className='show-container show'>
          <Link href='/projects'>
            <a className='reveal desc' style={{color: '#2C6664'}}>
              <div 
                className='button-wrpr'
                onClick={click}>
                <span className=''>{'View other projects'}</span>
                <span className='block-arrow'>
                  <Arrow type='arrow' colors={'#2C6664'}/>
                </span>
              </div>
            </a>
          </Link>
          <div className="runner"></div>
        </div>
      </div>
    </div>
  )
}

export default Screens
