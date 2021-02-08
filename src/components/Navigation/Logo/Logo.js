import React, {useContext} from 'react';
import Link from 'next/link'
import Svg from '../../Svgs'
import {AppData} from '../../../context/appData'
import {Anim} from '../../../utils/animations'

export default function Logo() {
  const {SetAppState} = useContext(AppData)

  return (
    <div className="navigation-logo">
      <div className="navigation-logo-container">
        <Link href='/'>
          <a onClick={()=>{
            if(window.location.pathname != '/') {
              // set body over flow to hidden for the transition
              Anim.Helpers.hidshowbody('hidden')
              // set transitioning state
              SetAppState.setMenuTransitions({
                isTransitioning: true,
                delay: 800
              }) 
            }
          }}>
            <Svg svg='logo'/>
          </a>
        </Link>
      </div>
    </div>
  );
}
