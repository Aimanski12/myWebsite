import React, {Fragment, useContext} from 'react'
import {PageData} from '../../utils/context/pageContext'
import {InputData} from '../../utils/context/inputContext'

function FormHeader() {
  const {message} = useContext(PageData)
  const {alert} = useContext(InputData)

  return (
    <Fragment>
      <h2 className='head2'
        style={{color: '#2C6664', lineHeight: '50px'}}>
        <span className='show-container'>
          <div className=''>
            <span>{message.title}</span>
          </div>
          <div className='runner'></div>
        </span>
      </h2>
      <p className="sub-reveal-container desc">
        <span className=""
        style={{color: '#2C6664', fontWeight: 500, marginTop: '0px'}}> 
          {message.shortDesc}</span>
      </p>
      <p className="sub-reveal-container desc" style={{marginTop: '30px'}}>
        <span className={`p-desc-content required ${alert.color}`}>
          {alert.message}</span>
      </p>
    </Fragment>
  )
}

export default FormHeader
