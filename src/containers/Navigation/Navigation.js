import React from 'react';
import Cursor from '../../components/Navigation/Cursor/Cursor'
import Preloader from '../../components/Navigation/Preloader/Preloader'
import MenuButton from '../../components/Navigation/MenuButton/MenuButton'
import Logo from '../../components/Navigation/Logo/Logo'
import MenuList from '../../components/Navigation/Menulist'

export default function Headers() {

  return (
    <>
      {/* <Cursor /> */}
      <Preloader/>
      <Logo />
      <MenuButton />
      <MenuList />
    </>
  );
}
