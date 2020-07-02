import anime from 'animejs'
import {logoElements} from './elementSorter'

export function animateLogo(){
  const el = logoElements()
  var tl = anime.timeline({
    easing: 'easeOutExpo',
    duration: 200,
    loop: true
  });
  
  tl.add({
    targets: [el.t, el.b],
    opacity: 1,
    strokeDashoffset: [anime.setDashoffset, 0],
    duration: 1000,
  })
  // .add({
  //   targets: el.s,
  //   strokeWidth: 8,
  //   stroke: '#B6B6B6',
  //   strokeDashoffset: [anime.setDashoffset, 0],
  //   duration: 800,
  // })
  .add({
    duration: 800
  })
  .add({
    targets: [el.r, el.l],
    strokeDashoffset: [anime.setDashoffset, 0],
    duration: 1000,
  })
  .add({
    duration: 800
  })
  .add({
    targets: [el.t, el.b],
    opacity: 0,
    strokeDashoffset: [anime.setDashoffset, 0],
    direction: 'reverse',
    duration: 1000,
  })
  .add({
    duration: 800
  })
  .add({
    targets: [el.r, el.l],
    opacity: 0,
    strokeDashoffset: [anime.setDashoffset, 0],
    direction: 'reverse',
    duration: 1000,
  })
  .add({
    duration: 800
  })
}