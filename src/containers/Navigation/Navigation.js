import React from 'react';
import Cursor from '../../components/Navigation/Cursor'
import Preloader from '../../components/Navigation/Preloader'
import MenuButton from '../../components/Navigation/MenuButton'
import Logo from '../../components/Navigation/Logo'
import MenuList from '../../components/Navigation/Menulist'
import ModalImage from '../../components/Navigation/Modal/Image'
import ModalMessage from '../../components/Navigation/Modal/Message'

export default function Headers() {

  return (
    <>
      {/* <Cursor /> */}
      <Preloader/>
      <Logo />
      <MenuButton />
      <MenuList />
      <ModalImage/>
      <ModalMessage />
    </>
  );
}
