import React, {useContext} from 'react';
import {AppData} from '../../../../context'
import Link from 'next/link'

export default function LetWork({data}) {
  const {SetAppState} = useContext(AppData)

  return (
    <article className="lets-work font-1">
      <h3 className='s3a'>{data.title}</h3>
      <p className='s8a'>{data.caption}</p>
      <Link href={data.buttonLink.link} scroll={false}>
        <a className='s7a'
          onClick={()=>SetAppState.setToTransition()}>
            {data.buttonLink.text}</a>
      </Link>
    </article>
  );
}
