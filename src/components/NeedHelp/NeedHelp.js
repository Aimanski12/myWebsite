import React, {Component} from 'react'
import {PageData} from '../../utils/context/pageContext'
import Titleblock from './TitleBlock/TitleBlock'
import Button from '../Buttons/Buttons'
// import {imageUrl} from '../../utils/common/common'
// import './NeedHelp.css'

class NeedHelp extends Component {
  static contextType = PageData

  render(){
    let data = this.context.needHelp

    return (
      <section className='needhelp-container'>
        <div className='needhelp-background'
          style={{background: `url('${data.background}') repeat center top`}}>

        <article className='needhelp-text-block text-span'>
          <div className="needhelp-title-block">
            <Titleblock data={data}/>

            <p className="sub-reveal-container desc show" >
                <span className="sub-reveal">
                  <Button 
                    text={data.messagetext} 
                    type={data.type}
                    withSvg={data.withSvg}
                    btnType={data.btnType}
                    link={data.link}
                    colors={data.color}/>
                </span>
              </p>

          </div>
        </article>

        </div>
      </section>
    )
  }
}

export default NeedHelp

