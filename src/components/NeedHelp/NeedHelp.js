import React, {useContext} from 'react'
import {PageData} from '../../utils/context/pageContext'
import Titleblock from './TitleBlock/TitleBlock'
import Button from '../Buttons/Buttons'

function NeedHelp () {
  const {needHelp} = useContext(PageData)

  return (
    <section className='needhelp-container'>
      <div className='needhelp-background'
        style={{background: `url('${needHelp.background}') repeat center top`}}>

      <article className='needhelp-text-block text-span'>
        <div className="needhelp-title-block">

          <Titleblock data={needHelp}/>

          <p className="sub-reveal-container desc show" >
              <span className="sub-reveal btn">
                <Button 
                  text={needHelp.messagetext} 
                  type={needHelp.type}
                  withSvg={needHelp.withSvg}
                  btnType={needHelp.btnType}
                  link={needHelp.link}
                  colors={needHelp.color}/>
              </span>
            </p>

        </div>
      </article>

      </div>
    </section>
  )
}

export default NeedHelp

