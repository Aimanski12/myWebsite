import React, {useEffect} from 'react';
import {Anim} from '../../../utils/animations'
import LetsWork from './components/LetsWork'
import HitMe from './components/HitMe'
import BackToTop from './components/BackToTop'
import CopyRight from '../../GlobalComponents/Copyright'

export default function Footer({data}) {

  useEffect(() => {
    // backtotop scroll
    Anim.Helpers.scrollAnimation()
  })

  return (
    <footer>
      { data.isComplete ? (
        <div className='footer-wrapper'>
          <div className="header-wrapper">
            <LetsWork data={data.getInTouch} />
            <HitMe data={data.hitMe} />
          </div>
          <BackToTop data={data.back2Top} />
        </div>
      ): null }

      <div className="footer-copyright content-center font-1 s9a">
        <CopyRight />
      </div>
    </footer>
  );
}
