import React, {useEffect} from 'react'
import BrandLogo from '../../components/Svgs/BrandLogo/BrandLogo'
import {introAnim} from '../../utils/pageanimations/toplayover/toplayover'
import {checkforsession} from '../../utils/sessiondata/sessionStorage'

function Intro(props) {

  useEffect(()=>{
    async function check (){
      let hasSession = await checkforsession()
      introAnim(hasSession, props.withAnim)
    } check()
    // check if the browser has websession 
    // in the session storage
  })

  return (
    <div className='content-center intro-animation'>
      <div className="content-center intro-logo-wrapper">
        <BrandLogo colorMode={'#1B87D6'}/>
        <span>We are loading . . .</span>
      </div>
    </div>
  )
}

export default Intro
