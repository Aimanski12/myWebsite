import React, {useContext} from 'react';
import {AppData} from '../../context'
import SingleArt from './Single'
import MultipleArt from './Multiple'

export default function Artwork({i, type}) {
  const {AppState} = useContext(AppData)

  const content = () => {
    const data = AppState.pageData.data.artWork
    if(data != undefined) {
      return type === 'single' ? 
        <SingleArt art={data[i]} /> : <MultipleArt art={data} />
    }
  }

  return (
    <>{content()}</>
  );
}
