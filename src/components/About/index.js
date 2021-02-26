import React from 'react';
import Parallax from './components/Parallax'
import Facts from './components/Facts'
import Travels from './components/Travels'

export default function About({data}) {

  return (
    <>
      <Parallax data={data.parallax1}/>
      <Facts data={data.facts} />
      <Parallax data={data.parallax2} dir=''/>
      <Facts data={data.howIBecame} dir='rev' />
      <Parallax data={data.parallax3}/>
      <Travels data={data.travels} />
    </>
  );
}
