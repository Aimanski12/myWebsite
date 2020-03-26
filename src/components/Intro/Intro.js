import React, {useEffect} from 'react'
import anime from 'animejs'
import './Intro.css'

function Intro(){

    useEffect(() => {
      console.log(window.innerWidth)
      const svgPath = document.querySelectorAll('.path');
      const bigPath = document.querySelectorAll('.big');
      const smallPath = document.querySelectorAll('.small');
      const intro = document.querySelector('.intro')
      anime({
        targets: svgPath,
        loop: false,
        direction: 'alternate',
        strokeDashoffset: [anime.setDashoffset, 0],
        easing: 'easeInOutSine',
        duration: 150,
        delay: (el, i) => {
          return i * 110
        }
      })

      
      function run() {
        for (let x = 0; x < bigPath.length; x++) {
          bigPath[x].setAttribute('stroke', '#005d5a')
        }
        for (let x = 0; x < smallPath.length; x++) {
          smallPath[x].setAttribute('stroke', '#47cbc7')
        }
      }
      run()
    })

  return (
    <div className="intro">
      <h3>
        <svg width="890" height="587" viewBox="0 0 890 587" fill="none" xmlns="http://www.w3.org/2000/svg">
	      <path className='path big' d="M143 31L65 563" stroke="#252222" strokeWidth="35" />
	      <path className='path big' d="M80.5 184.5C69.5 161.5 60 124 94 97.9999C140.725 62.2686 253 73.9999 180 513" stroke="#252222"
		      strokeWidth="35" />
	      <path className='path big' d="M41 331L704 325" stroke="#252222" strokeWidth="25" />
	      <path className='path big' d="M263 187.5L246.5 309" stroke="#252222"    strokeWidth="35" />
	      <path className='path big' d="M307.5 188L291 309.5" stroke="#252222"  strokeWidth="35" />
	      <path className='path big' d="M297.5 266C300.833 246 328.774 208.889 347 208C367.5 207 362 274 356 309.5" stroke="#252222" strokeWidth="35" />
	      <path className='path big'
		      d="M361 266.011C364.333 246.011 392.274 208.9 410.5 208.011C431 207.011 425.5 274.011 419.5 309.511" stroke="#252222" strokeWidth="35" />
	      <path className='path big' d="M470.5 228C473.833 208 489.5 189 507 195.808C528.257 204.077 524 271.308 518 306.808" stroke="#252222" strokeWidth="35" />
	      <path className='path big' d="M518 262.041C516.762 255.925 506.402 243.97 489.5 245.071C468.373 246.447 458.389 266.627 462.104 281.762C465.819 296.897 496.033 304.694 516 281.762" stroke="#252222" strokeWidth="27" />
	      <path className='path big' d="M577.5 187L561 308.5" stroke="#252222"  strokeWidth="35" />
	      <path className='path big' d="M565 280.453C568.333 260.453 600.682 207.564 618.5 211.5C645 217.355 623.5 330.5 617.5 366" stroke="#252222" strokeWidth="35" />
	      <path className='path big' d="M292 72L258 104L224 136" stroke="#252222" strokeWidth="45" />
	      <path className='path big' d="M326.017 350.55L300.899 511.861" stroke="#252222" strokeWidth="35" />
	      <path className='path big' d="M309.5 429.5C307.795 421.007 293.542 393.989 271 400C241 408 230.5 434.79 230.5 460.5C230.5 471.955 241.157 494.226 257.5 497C269.691 499.069 288 488 303 470.5" stroke="#252222" strokeWidth="28" />
	      <path className='path big' d="M369.986 351L344.868 512.311" stroke="#252222" strokeWidth="35" />
	      <path className='path big' d="M405 427.602C408.333 407.602 424 388.602 441.5 395.41C462.757 403.679 458.5 470.91 452.5 506.41" stroke="#252222" strokeWidth="35" />
	      <path className='path big'
		    d="M451.658 462.041C450.42 455.925 440.06 443.97 423.158 445.071C402.031 446.447 392.047 466.627 395.762 481.762C399.477 496.897 429.691 504.694 449.658 481.762" stroke="#252222" strokeWidth="28" />
	      <path className='path big' d="M493.5 388L533 499.5" stroke="#252222" strokeWidth="35" />
	      <path className='path big' d="M543 386L582.5 497.5" stroke="#252222" strokeWidth="35" />
	      <path className='path big' d="M613 386L577 498" stroke="#252222" strokeWidth="35" />
	      <path className='path big' d="M555.5 436L526.5 491.5" stroke="#252222" strokeWidth="35" />
	      <path className='path big' d="M648 422.602C651.333 402.602 667 383.602 684.5 390.41C705.757 398.679 701.5 465.91 695.5 501.41" stroke="#252222" strokeWidth="35" />
	      <path className='path big'
		    d="M696.658 458.041C695.42 451.925 685.06 439.97 668.158 441.071C647.031 442.447 637.047 462.627 640.762 477.762C644.477 492.897 674.691 500.694 694.658 477.762" stroke="#252222" strokeWidth="28" />
	      <path className='path big' d="M758.5 382L742 503.5" stroke="#252222" strokeWidth="35" />
	      <path className='path big' d="M746 475.162C749.333 455.162 781.682 402.272 799.5 406.208C826 412.063 804.5 525.208 798.5 560.708" stroke="#252222" strokeWidth="35" />
	      <path className='path big' d="M104 537L869 523" stroke="#252222" strokeWidth="25" />


        {/* small strokes start here */}
	      <path className='path small' d="M136.5 103L105 315.5" stroke="#B6B6B6" strokeWidth="4" />
	      <path className='path small' d="M101.5 347.5L70 549" stroke="#B6B6B6" strokeWidth="4" />
	      <path className='path small' d="M75 146.5C75.6667 154.5 78 172.2 82 179" stroke="#B6B6B6" strokeWidth="4" />
	      <path className='path small' d="M118.5 83.5C162.667 72.3334 239.8 125.8 195 429" stroke="#B6B6B6" strokeWidth="4" />
	      <path className='path small' d="M50 334L597.999 324.95" stroke="#B6B6B6" strokeWidth="4" />
	      <path className='path small' d="M648 325H697" stroke="#B6B6B6" strokeWidth="4" />
	      <path className='path small' d="M268 200.5L254 300" stroke="#B6B6B6" strokeWidth="4" />
	      <path className='path small' d="M315.5 192.5L314.5 203.5" stroke="#B6B6B6" strokeWidth="4" />
	      <path className='path small' d="M305 272.5L301 302" stroke="#B6B6B6" strokeWidth="4" />
	      <path className='path small' d="M307 264C309.139 254.667 317 237.5 328 227" stroke="#B6B6B6" strokeWidth="4" />
	      <path className='path small' d="M343 202.885C354 195.552 373.6 205.685 364 304.885" stroke="#B6B6B6" strokeWidth="4" />
	      <path className='path small' d="M409 203C420 195.667 439.6 205.8 430 305" stroke="#B6B6B6" strokeWidth="4" />
	      <path className='path small' d="M490 205.5C487.5 209.167 482.5 217.9 482.5 223.5" stroke="#B6B6B6" strokeWidth="4" />
	      <path className='path small' d="M501 194C514.833 190.333 539.6 206.8 528 302" stroke="#B6B6B6" strokeWidth="4" />
	      <path className='path small' d="M465 273C464.333 282.5 470.6 298.9 501 288.5" stroke="#B6B6B6" strokeWidth="4" />
	      <path className='path small' d="M486 242C489.333 240.833 498.2 240.3 507 247.5" stroke="#B6B6B6" strokeWidth="4" />
	      <path className='path small' d="M581.5 196.5L567 298" stroke="#B6B6B6" strokeWidth="4" />
	      <path className='path small' d="M606 205.5C612.667 201.667 627.3 201.6 632.5 232C637.7 262.4 630 330.333 625.5 360.5" stroke="#B6B6B6" strokeWidth="4" />
	      <path className='path small' d="M291.5 83L236.5 133.5" stroke="#B6B6B6" strokeWidth="4" />
	      <path className='path small' d="M282.5 80L266.5 95.5" stroke="#B6B6B6" strokeWidth="4" />
	      <path className='path small' d="M329.5 360L307.5 500" stroke="#B6B6B6" strokeWidth="4" />
	      <path className='path small' d="M281 394.5C286.833 395.667 299.9 401 305.5 413" stroke="#B6B6B6" strokeWidth="4" />
	      <path className='path small' d="M234 453.5C232.167 465 234.2 489.5 257 495.5C259.333 496 265.9 495.8 273.5 491" stroke="#B6B6B6" strokeWidth="4" />
	      <path className='path small' d="M373.5 360.5L351 501.5" stroke="#B6B6B6" strokeWidth="4" />
	      <path className='path small' d="M420.5 410C419 412.167 415.8 418 415 424" stroke="#B6B6B6" strokeWidth="4" />
	      <path className='path small' d="M431.5 389.5C446.167 383.667 472.5 397 460.5 497" stroke="#B6B6B6" strokeWidth="4" />
	      <path className='path small' d="M423.5 448.5C427.833 448.333 437.4 449.4 441 455" stroke="#B6B6B6" strokeWidth="4" />
	      <path className='path small' d="M401.5 475C401 482.167 405.7 495.4 428.5 491" stroke="#B6B6B6" strokeWidth="4" />
	      <path className='path small' d="M502 393L537 493" stroke="#B6B6B6" strokeWidth="4" />
	      <path className='path small' d="M552.5 455.5L546.5 473" stroke="#B6B6B6" strokeWidth="4" />
	      <path className='path small' d="M548.5 394.5L574 466.5" stroke="#B6B6B6" strokeWidth="4" />
	      <path className='path small' d="M617.5 393.5L586.5 488" stroke="#B6B6B6" strokeWidth="4" />
	      <path className='path small' d="M663 406.5C661.167 408.333 657.6 413.4 658 419" stroke="#B6B6B6" strokeWidth="4" />
	      <path className='path small' d="M679.5 386C691.667 381.5 714 395.5 706 487.5" stroke="#B6B6B6" strokeWidth="4" />
	      <path className='path small' d="M668 442C671.667 441.5 681 442.3 689 449.5" stroke="#B6B6B6" strokeWidth="4" />
	      <path className='path small' d="M644.5 475C644.667 480.833 650.6 491.6 673 488" stroke="#B6B6B6" strokeWidth="4" />
	      <path className='path small' d="M762.5 388L749 491.5" stroke="#B6B6B6" strokeWidth="4" />
	      <path className='path small' d="M796.5 404C809 394.167 828.2 410.5 805 554.5" stroke="#B6B6B6" strokeWidth="4" />
	      <path className='path small' d="M126 536.5L778 523.5" stroke="#B6B6B6" strokeWidth="4" />
	      <path className='path small' d="M828 523.5L840.75 522.75L862 521.75" stroke="#B6B6B6" strokeWidth="4" />
      </svg>
	  </h3>
  </div>
  )
}

export default Intro
