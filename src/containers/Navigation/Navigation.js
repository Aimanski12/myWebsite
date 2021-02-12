import React from 'react';
import Cursor from '../../components/Navigation/Cursor'
import Preloader from '../../components/Navigation/Preloader'
import MenuButton from '../../components/Navigation/MenuButton'
import Logo from '../../components/Navigation/Logo'
import MenuList from '../../components/Navigation/Menulist'
import Modal from '../../components/Navigation/Modal/carousel'

export default function Headers() {

  return (
    <>
      {/* <Cursor /> */}
      <Preloader/>
      <Logo />
      <MenuButton />
      <MenuList />
      <Modal/>
    </>
  );
}
