import React, {useContext} from 'react';
import {AppData} from '../../../context'
import Link from 'next/link'
import Svg from '../../Svgs'

export default function QuickLinks({data}) {
  const {SetAppState} = useContext(AppData)

  const links = data.map((l, i) => {
    return (
      <li key={i} className='font-1 s4a'>
        <div>
          <Link href={l.link} scroll={false}>
            <a onClick={()=>{
              SetAppState.setToTransition()
            }}>{l.name}</a>
          </Link>
        </div>
      </li>
    )
  })

  return (
    <section className='quicklinks'>
      <div className="header-wrapper">
        <Svg svg='chain' /><span className='font-1 s9a'>Quick Links</span>
      </div>
      <ul className='header-wrapper'>
        {links}
      </ul>
    </section>
  );
}