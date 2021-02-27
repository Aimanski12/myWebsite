import React, {useContext} from 'react';
import {AppData} from '../../../../context'
import Link from 'next/link'
import Svg from '../../../Svgs'
import Fade from 'react-reveal/Fade'

export default function QuickLinks({data}) {
  const {SetAppState} = useContext(AppData)

  const links = data.map((l, i) => {
    return (
      <li key={i} className='font-1 s4a'>
        <Fade bottom>
          <div>
            <Link href={l.link} scroll={false}>
              <a onClick={()=>{
                SetAppState.setToTransition()
              }}>{l.name}</a>
            </Link>
          </div>
        </Fade>
      </li>
    )
  })

  return (
    <section className='quicklinks'>
      <Fade bottom>
        <div className="header-wrapper">
            <Svg svg='chain' /><span className='font-1 s9a'>Quick Links</span>
        </div>
      </Fade>
      <ul className='header-wrapper'>
        {links}
      </ul>
    </section>
  );
}