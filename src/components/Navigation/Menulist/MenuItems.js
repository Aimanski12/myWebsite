import React, {useContext} from 'react';
import {AppData} from '../../../context/appData'

export default function MenuItems() {
  const {AppState} = useContext(AppData)

  const menu = AppState.pageData
  console.log(menu)

  return (
    <ul className="menu-items-wrapper content-center font-1">
      <li className="menu-item content-center">
        <span className='active'>Home</span></li>
      <li className="menu-item content-center">
        <a href="/">Artwork</a></li>
      <li className="menu-item content-center">
        <a href="/">Webdev</a></li>
      <li className="menu-item content-center">
        <a href="/">About</a></li>
      <li className="menu-item content-center">
        <a href="/">Contact</a></li>
    </ul>
  );
}
