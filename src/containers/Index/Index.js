import React from 'react'
import Homepage from '../../components/HomePage/HomePage'
import NameText from '../../components/IntroAnimations/NameText/NameText'
import FaceAnimation from '../../components/IntroAnimations/Face/Face'

const Index = (props) => {
  return (
    <>
      <div className="introPage">
        {/* overlay */}
        <div className="overlay">
          <div className="overlay-container zero-width"></div>
        </div>
        
        <div className="introAnimations">
          {/* intro name text */}
          <div className="intro-write-name">
            <div className="introSvgContainer">
              <NameText 
                textAnim={'intro'}
                themeColor={props.themeColor[0]}/>
            </div>
          </div>
          
          {/* face anim */}
          <FaceAnimation
            closeIntro={(x, y)=>props.animOvlay(x, y, 'closeIntro')}
            themeColor={props.themeColor} />

        </div>

      </div> 

      {/* homepage content */}
      <Homepage
        themeColor={props.themeColor[0]}
        openMenu={(x, y)=>props.animOvlay(x, y, 'openMenu')}/>
    </>
  )
}

export default Index
