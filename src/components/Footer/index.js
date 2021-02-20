import React, {useContext} from 'react';
import {AppData} from '../../context'
import QuickLinks from './QuickLinks'
import Footer from './Footer'

export default function PageFooter() {
  const {AppState} = useContext(AppData)
  const data = AppState.pageData.data

  return (
    <>
      { data.quickLinks != undefined ? 
        <QuickLinks data={data.quickLinks} /> : null }
      <footer>
        { data.footer != undefined ? 
          <Footer data={data.footer} /> : null }
      </footer>
    </>
  );
}
