import React from 'react'
import Arrow from '../../Buttons/Buttons'
import Link from 'next/link'

function Description(props) {
  return (
    <div className="section-block-right">
      <div className="right-align right-block">
        <div className='show-container show'>
          <p className='reveal desc'
            style={{color: props.textcolor}}>
            <span className=''>{props.desc}</span>
            {props.withArrow ? 
              <Link href='/projects'>
                <a>
                  <span className='block-arrow'
                    // onClick={()=>{
                      //   pageTransition()
                      //   setTimeout(() => {
                        //     props.setRedirect(true, `/projects`)
                        //   }, 1000)
                        // }}
                        >
                    <Arrow type='arrow' colors={props.colors}/>
                  </span>
                </a> 
              </Link> : null }
          </p>
          <div className="runner"></div>
        </div>
      </div>
    </div>
  )
}

export default Description
