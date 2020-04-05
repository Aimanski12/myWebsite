import React, {useEffect} from 'react'
import BigText from '../../../components/Svg/NameSvg/bigText'
import SmallText from '../../../components/Svg/NameSvg/smallText'
import anime from 'animejs'
import './Intro.css'

function Intro(){

    useEffect(() => {
      const svgPath = document.querySelectorAll('.path');
      const bigPath = document.querySelectorAll('.bigText');
      const smallPath = document.querySelectorAll('.smallText');
      const intro = document.querySelector('.intro-write-name')
      anime({
        targets: svgPath,
        loop: false,
        direction: 'alternate',
        strokeDashoffset: [anime.setDashoffset, 0],
        easing: 'easeInOutSine',
        duration: 100,
        delay: (el, i) => {
          return i * 50
        }
      })
      
      setTimeout(function(){
        intro.classList.add('intro-write-name-close')
      }, 3900)

      function run() {  
        for (let x = 0; x < bigPath.length; x++) {
					bigPath[x].setAttribute('stroke', '#133736')
        }
        for (let x = 0; x < smallPath.length; x++) {
					smallPath[x].setAttribute('stroke', '#47cbc7')
        }
      }
      run()
    })

  return (
    <div className="intro-write-name">
			<div className="introSvgContainer">
				<svg width="890" height="587" viewBox="0 0 890 587" fill="none" xmlns="http://www.w3.org/2000/svg">
				<BigText />
				<SmallText />
			</svg>
		</div>
  </div>
  )
}

export default Intro
