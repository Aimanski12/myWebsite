import React, {useContext} from 'react';
import {AppData} from '../../../context'
import {Anim} from '../../../utils/animations'
import Link from 'next/link'

export default function ButtonLink({data}) {
  const {SetAppState} = useContext(AppData)

  // if link is internal when we will set anchor tag
  // that has a click event to trigger animation
  const button = data.type === 'internal' ? 
  ( <Link href={data.link} scroll={false}>
      <a className='button-link font-1 s7a'
        onClick={()=>SetAppState.setToTransition()}>
        <span>{data.text}</span>
      </a>
    </Link> ) :
  ( <a target='_blank'
      rel="noreferrer noopener"
      className='button-link font-1 s7a'>
      <span>{data.text}</span>
    </a> )

  return (
    <>{button}</>
  );
}
