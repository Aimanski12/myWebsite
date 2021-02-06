import React, {useEffect, useContext} from 'react';
import Preloader from '../../components/Preloader/Preloader'
import {Helpers} from '../../utils/common'
import {AppData} from '../../context/appData'

export default function Headers() {
  const {AppState, SetAppState} = useContext(AppData)

  useEffect(()=> {
    !AppState.sessionData.isChecked ? (
      (async function(){
        const isVisited = await Helpers.SessionStorage.checkSessionStorage()
        if(!isVisited) {
          SetAppState.setSessionState({ isChecked: true })
        } else {
          SetAppState.setSessionState({ isChecked: true, isVisited: true })
        }
      })()
    ) : null
  })
  console.log(AppState.sessionData)

  return (
    <>
      <Preloader/>
    </>
  );
}
