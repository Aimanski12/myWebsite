import React from 'react';
import LetsWork from './components/LetsWork'
import HitMe from './components/HitMe'
import BackToTop from './components/BackToTop'
import CopyRight from '../../GlobalComponents/Copyright'

export default function Footer({data}) {

  return (
    <footer>
      { data.isComplete ? (
        <div className='footer-wrapper'>
          <div className="header-wrapper content-center">
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
