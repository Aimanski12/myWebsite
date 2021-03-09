import React from 'react';

import Cursor from './Cursor'
import Logo from './Logo'
import MenuButton from './MenuButton'
import MenuList from './Menulist'
import ModalImage from './Modal/Image'
import ModalMessage from './Modal/Message'
import Preloader from './Preloader'
import Sliders from './Sliders'

export default function Navigation({data}) {

  return (
    <header>
      {/* <Cursor /> */}
      <Preloader/>
      <Logo />
      <MenuButton />
      <MenuList data={data}/>
      <ModalImage/>
      <ModalMessage />
      <Sliders />
    </header>
  );
}
