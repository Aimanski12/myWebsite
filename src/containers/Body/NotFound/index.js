import React, {useContext} from 'react'
import {AppData} from '../../../context'
import Icons from './components/Icons'
import Button from './components/Button'

export default function NotFound() {
  const {AppState} = useContext(AppData)
  const data = AppState.pageData.data
  return (
    <> 
    { AppState.pageData.isSet ? 
      <div className="notfound-wrapper"
        style={{background: `url(${data.background}) no-repeat center center`, backgroundSize: 'cover'}}>
        <div className="notfound-backer content-center">
          <h2 className='font-1 s1a'>{data.title}</h2>
          <span className='font-2 s4b'>{data.caption}</span>
          <Button btn={data.buttonLink}/>
          <Icons data={data.socials}/>
        </div>
      </div> : null
    }
    </>
  )
}
