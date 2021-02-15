import React, {useEffect} from 'react';
import gsap from 'gsap'
import Svg from '../../../../Svgs'

export default function Envelop() {

  useEffect(() => {
    gsap.set('.envelop-svg-wrapper', { autoAlpha: 0})
    gsap.set('#tick', {autoAlpha:0}),
    gsap.set('#letterGrp', {y: -500});
    gsap.set('#closeAnimOne', {autoAlpha:0})
    gsap.set('#envelopGrp', {transformOrigin:'50% 50%'});
    gsap.set('#tick', {autoAlpha:0, transformOrigin: '50% 50%', scale:0});
    gsap.set('#envelopCloseTop', {autoAlpha:0, transformOrigin: '50% 100%'});
    
    let mainTl = gsap.timeline();
    
    mainTl.to('.envelop-svg-wrapper', .3, {
      autoAlpha:1
    })
    .to('#letterGrp', 1, {
      y: 0, 
      ease: 'Back.easeOut'
    })
    .to('#letterGrp', .5, {
      autoAlpha: .5
    }, '-=.3')
    .to('#envelopBack', .3, {
      autoAlpha:0
    }, '-=.1')
    .fromTo('#closeAnimOne', .3, {
      transformOrigin:'0% 100%' , 
      autoAlpha:0, 
      scaleY:1}, {
        autoAlpha:1, scaleY:-1
      }, '-=.3')
    .fromTo('#envelopCloseTop', .2, {
      autoAlpha:0, 
      scaleY:0}, {
        autoAlpha:1, 
        scaleY:1
    },'-=.15')
    .to('#envelopGrp', 1.1 ,{
      y:+600, 
      ease: 'Back.easeIn'
    })
    .to('#tick', .5, {
      autoAlpha:1, 
      scale:1, 
      ease: 'Bounce.easeOut'
    }, '+=.4')
  })
  
  return (
    <div className="envelop-svg-wrapper">
      <Svg svg='envelop' />
    </div>
  );
}
