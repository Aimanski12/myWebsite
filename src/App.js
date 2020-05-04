import React, {useEffect} from 'react';
import anime from 'animejs'
import './App.css';



function App() {

  useEffect(() => {
    const strokes = document.querySelectorAll('.stroke')
    const font = document.querySelectorAll('.font')
    const shadow = document.querySelectorAll('.shadow')
    const toprect = document.querySelector('.top')
    const bottom = document.querySelector('.bottom')

    // Create a timeline with default parameters
    var tl = anime.timeline({
      easing: 'easeOutExpo',
      duration: 200
    });

    // Add children
    tl
      .add({
        targets: [strokes],
        loop: true,
        direction: 'alternate',
        strokeWidth: 2,
        strokeDashoffset: [anime.setDashoffset, 0],
        easing: 'easeInOutSine',
        duration: 800,
        delay: (el, i) => {
          return i * 100
        }
      })
      .add({
        targets: font,
        loop: true,
        direction: 'alternate',
        opacity: 1,
        duration: 1000,
        easing: 'easeInOutSine',
      })


    setTimeout(() => {
      anime({
        targets: shadow,
        opacity: 1,
        strokeWidth: 1,
        strokeDashoffset: [anime.setDashoffset, 0],
        easing: 'easeInOutSine',
        duration: 450,
        delay: (el, i) => {
          return i * 70
        }
      })
    }, 2300)

    setTimeout(() => {
      anime({
        targets: toprect,
        translateY: -180,
        easing: 'easeInOutSine',
        duration: 3000,
      })
    }, 5900)

    setTimeout(() => {
      anime({
        targets: bottom,
        translateY: 180,
        easing: 'easeInOutSine',
        duration: 3000,
      })
    }, 5900)
  })

  return (
    <div className="container">
       <svg width="812" height="593" viewBox="0 0 812 593" fill="none" xmlns="http://www.w3.org/2000/svg">

      <path className='font'
        d="M77.8859 333.639H102.353L80.0859 255.505H52.5526L54.1526 260.905L33.8193 333.639H53.4193L55.9526 321.172H74.8859L77.8859 333.639ZM64.5526 278.439L71.6193 307.572H58.6859L64.5526 278.439ZM99.1823 333.639H121.916V255.505H99.1823V333.639ZM141.947 333.639L144.014 287.705L144.414 270.772L156.68 325.839H174.08L184.28 270.772L185.08 287.705L188.48 333.639H209.214L203.48 255.505H175.614L170.414 281.772L167.88 294.972L165.214 281.705L159.347 255.505H128.08L121.88 333.639H141.947ZM247.386 333.639H271.853L249.586 255.505H222.053L223.653 260.905L203.319 333.639H222.919L225.453 321.172H244.386L247.386 333.639ZM234.053 278.439L241.119 307.572H228.186L234.053 278.439ZM289.682 333.639V309.039L285.749 283.439L295.549 302.772L311.416 333.639H331.749V255.505H310.482V276.439L313.749 306.105L302.016 280.839L289.749 255.505H265.216L268.482 261.772V333.639H289.682ZM393.839 333.639H418.306L396.039 255.505H368.506L370.106 260.905L349.772 333.639H369.372L371.906 321.172H390.839L393.839 333.639ZM380.506 278.439L387.572 307.572H374.639L380.506 278.439ZM441.269 322.705H437.002V267.039H442.002C445.113 267.039 447.513 268.95 449.202 272.772C450.891 276.594 451.735 282.016 451.735 289.039V295.772C451.735 305.372 450.824 312.261 449.002 316.439C447.224 320.616 444.647 322.705 441.269 322.705ZM443.335 334.105C448.224 334.105 452.58 333.261 456.402 331.572C460.224 329.883 463.291 327.683 465.602 324.972C467.913 322.261 469.824 319.039 471.335 315.305C472.847 311.527 473.869 307.772 474.402 304.039C474.98 300.305 475.269 296.372 475.269 292.239C475.269 280.061 472.802 270.794 467.869 264.439C462.98 258.083 454.869 254.905 443.535 254.905C441.535 254.905 438.78 254.994 435.269 255.172C431.758 255.35 428.513 255.461 425.535 255.505H414.935V333.639H425.535C429.091 333.639 432.535 333.705 435.869 333.839C439.247 334.016 441.735 334.105 443.335 334.105ZM475.537 333.639H517.47V315.772H497.604V255.505H475.537V333.639ZM555.917 333.639H580.384L558.117 255.505H530.584L532.184 260.905L511.851 333.639H531.451L533.984 321.172H552.917L555.917 333.639ZM542.584 278.439L549.651 307.572H536.717L542.584 278.439ZM609.28 333.639L616.147 302.239L624.347 333.639H647.08L664.28 255.505H644.014L640.08 282.439L636.414 308.572L630.547 282.439L625.747 255.505H603.947L609.08 275.305L607.347 282.439L600.614 308.572L595.347 282.439L591.814 255.505H569.614L588.214 333.639H609.28ZM698.019 333.639H722.485L700.219 255.505H672.685L674.285 260.905L653.952 333.639H673.552L676.085 321.172H695.019L698.019 333.639ZM684.685 278.439L691.752 307.572H678.819L684.685 278.439ZM740.315 333.639V309.039L736.382 283.439L746.182 302.772L762.048 333.639H782.382V255.505H761.115V276.439L764.382 306.105L752.648 280.839L740.382 255.505H715.848L719.115 261.772V333.639H740.315Z"
        fill="#377370" />

      <path className='stroke' d="M54 261.139L34 333.639H53.5L56 321.139H75L78 333.639H102.5L80 255.639H52.5L54 261.139Z"
        stroke="#377370" />
      <path className='stroke' d="M99 255.639V333.639H122V255.639H99Z" stroke="#377370" />
      <path className='stroke'
        d="M128 255.639L122 333.639H142L144.5 270.639L156.5 325.639H174L184.5 270.139L188.5 333.639H209L203.5 255.639H175.5L168 295.139L159.281 255.639H128Z"
        stroke="#377370" />
      <path className='stroke'
        d="M223.854 261.139L204 333.639H223.358L225.839 321.139H244.701L247.679 333.639H272L249.664 255.639H222.365L223.854 261.139Z"
        stroke="#377370" />
      <path className='stroke'
        d="M268.5 261.639V333.639H289.5V309.139L285.5 283.139L311.5 333.639H332V255.639H310.5V276.639L314 306.639L289.5 255.639H265.5L268.5 261.639Z"
        stroke="#377370" />
      <path className='stroke'
        d="M369.854 261.139L350 333.639H369.358L371.839 321.139H390.701L393.679 333.639H418L395.664 255.639H368.365L369.854 261.139Z"
        stroke="#377370" />
      <path className='stroke'
        d="M415 255.639V333.639C420.2 333.639 432.167 333.972 437.5 334.139C479 337.639 477.5 294.639 472.5 273.639C468.5 256.839 448.833 254.305 439.5 255.139L426.5 255.639H415Z"
        stroke="#377370" />
      <path className='stroke' d="M475.5 255.639V333.639H517.5V315.639H497.5V255.639H475.5Z" stroke="#377370" />
      <path className='stroke'
        d="M531.854 261.139L512 333.639H531.358L533.839 321.139H552.701L555.679 333.639H580L557.664 255.639H530.365L531.854 261.139Z"
        stroke="#377370" />
      <path className='stroke'
        d="M570 255.639L588.5 333.639H609L616 302.139L624.5 333.639H647L664 255.639H644L636.5 308.639L630.5 282.639L625.5 255.639H603.5L609 275.139L600.5 308.639L595 282.139L592 255.639H570Z"
        stroke="#377370" />
      <path className='stroke'
        d="M673.854 261.139L654 333.639H673.358L675.839 321.139H694.701L697.679 333.639H722L699.664 255.639H672.365L673.854 261.139Z"
        stroke="#377370" />
      <path className='stroke'
        d="M719 261.639V333.639H740V309.139L736 283.139L762 333.639H782.5V255.639H761V276.639L764.5 306.639L740 255.639H716L719 261.639Z"
        stroke="#377370" />


      <path className='shadow' d="M62 279.5L56 309.5" stroke="#C2C2C2" />
      <path className='shadow' d="M53.5 321.5L51.5 331" stroke="#C2C2C2" />
      <path className='shadow' d="M56 258H78L97 324" stroke="#C2C2C2" />
      <path className='shadow' d="M56 309.5H70" stroke="#C2C2C2" />
      <path className='shadow' d="M101.5 258.5H119.5V330.5" stroke="#C2C2C2" />
      <path className='shadow' d="M142 272.5L139 330.5" stroke="#C2C2C2" />
      <path className='shadow' d="M130.5 258.5H157.5L166.5 297.5" stroke="#C2C2C2" />
      <path className='shadow' d="M182 272.5L172.5 323.5" stroke="#C2C2C2" />
      <path className='shadow' d="M177.5 258.5H200.5L206 319.5" stroke="#C2C2C2" />
      <path className='shadow' d="M231.5 280.5L225.5 309.5" stroke="#C2C2C2" />
      <path className='shadow' d="M223 321.5L221 331.5" stroke="#C2C2C2" />
      <path className='shadow' d="M225.5 258.5H248L266.5 324" stroke="#C2C2C2" />
      <path className='shadow' d="M225.5 309.5H239.5" stroke="#C2C2C2" />
      <path className='shadow' d="M283.5 283.5L287 308V331" stroke="#C2C2C2" />
      <path className='shadow' d="M269.5 258.5H288.5L314 310.5" stroke="#C2C2C2" />
      <path className='shadow' d="M313.5 259H329.5V330.5" stroke="#C2C2C2" />
      <path className='shadow' d="M377.5 281L371.5 310" stroke="#C2C2C2" />
      <path className='shadow' d="M369 322L367 332" stroke="#C2C2C2" />
      <path className='shadow' d="M371.5 259H394L412.5 324.5" stroke="#C2C2C2" />
      <path className='shadow' d="M371.5 310H385.5" stroke="#C2C2C2" />
      <path className='shadow' d="M435 268.5V323.5" stroke="#C2C2C2" />
      <path className='shadow' d="M417 258.5H431C438.667 256.833 455 253.5 466.5 265.5C478 277.5 473 321.5 460 327.5" stroke="#C2C2C2" />
      <path className='shadow' d="M478 258.5H494.5V318.5" stroke="#C2C2C2" />
      <path className='shadow' d="M494.5 318.5H515" stroke="#C2C2C2" />
      <path className='shadow' d="M540.5 280L534.5 309" stroke="#C2C2C2" />
      <path className='shadow' d="M532 321L530 331" stroke="#C2C2C2" />
      <path className='shadow' d="M534.5 258H557L575.5 323.5" stroke="#C2C2C2" />
      <path className='shadow' d="M534.5 309H548.5" stroke="#C2C2C2" />
      <path className='shadow' d="M572 258H590L594 284.5L599 310.5" stroke="#C2C2C2" />
      <path className='shadow' d="M614 303L608 331" stroke="#C2C2C2" />
      <path className='shadow' d="M606.5 258H623.5L628 283.5L636 312" stroke="#C2C2C2" />
      <path className='shadow' d="M645.5 258H662L645.5 331" stroke="#C2C2C2" />
      <path className='shadow' d="M682.5 280L676.5 309" stroke="#C2C2C2" />
      <path className='shadow' d="M674 321L672 331" stroke="#C2C2C2" />
      <path className='shadow' d="M676.5 258H699L717.5 323.5" stroke="#C2C2C2" />
      <path className='shadow' d="M676.5 309H690.5" stroke="#C2C2C2" />
      <path className='shadow' d="M734 283L737.5 307.5V330.5" stroke="#C2C2C2" />
      <path className='shadow' d="M720 258H739L764.5 310" stroke="#C2C2C2" />
      <path className='shadow' d="M764 258.5H780V330" stroke="#C2C2C2" />



      <path className='top' d="M0 455L812 337V593H0V455Z" fill="url(#paint0_linear)" />
      <path className='bottom' d="M812 138L0 256L0 0L812 0L812 138Z" fill="url(#paint1_linear)" />


      <defs>
        <linearGradient id="paint0_linear" x1="425" y1="398" x2="454" y2="593" gradientUnits="userSpaceOnUse">
          <stop stopColor="#3E3A3A" stopOpacity="0" />
          <stop offset="0.165106" stopColor="#3E3A3A" />
          <stop offset="1" stopColor="#3E3A3A" />
        </linearGradient>
        <linearGradient id="paint1_linear" x1="387" y1="195" x2="358" y2="7.29194e-06" gradientUnits="userSpaceOnUse">
          <stop stopColor="#3E3A3A" stopOpacity="0" />
          <stop offset="0.165106" stopColor="#3E3A3A" />
          <stop offset="1" stopColor="#3E3A3A" />
        </linearGradient>
      </defs>
    </svg>
      
    </div>
  );
}


export default App;
