import React from 'react';
import Cursor from './Cursor'
import Preloader from './Preloader'
import MenuButton from './MenuButton'
import Logo from './Logo'
import MenuList from './Menulist'
import ModalImage from './Modal/Image'
import ModalMessage from './Modal/Message'
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
