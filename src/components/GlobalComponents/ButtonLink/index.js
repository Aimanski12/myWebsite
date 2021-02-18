import React, {useContext} from 'react';
import {AppData} from '../../../context'
import {Anim} from '../../../utils/animations'
import Link from 'next/link'

export default function ButtonLink({data}) {
  const {SetAppState} = useContext(AppData)

  const click = () => {
    Anim.Helpers.hidshowbody('hidden')
    SetAppState.setMenuAndButtonState({
      isOpen: false,
      isTransitioning: true,
      delay: 800
    })
  }

  // if link is internal when we will set anchor tag
  // that has a click event to trigger animation
  const button = data.type === 'internal' ? 
  ( <Link href={data.link}>
      <a className='button-link font-1 s7a'
        onClick={click}>
        <span>{data.text}</span>
      </a>
    </Link> ) :
  ( <a target='_blank'
      rel="noreferrer noopener"
      className='button-link font-1 s7a'
      onClick={click}>
      <span>{data.text}</span>
    </a> )

  return (
    <>{button}</>
  );
}
