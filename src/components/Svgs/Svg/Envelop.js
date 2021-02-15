import React from 'react';

export default function componentName() {
  return (
    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="500px" height="500px" viewBox="0 0 500 500" enableBackground="new 0 0 500 500" xmlSpace="preserve">

      <defs>
	      <path id="SVGID_1_" d="M250,47c-50.399,0-96.502,18.374-131.993,48.779c0.005,60.496,0.009,122.503-0.005,127.138h0.102 l131.912,81.646l132.016-82.065V95.811C346.535,65.387,300.417,47,250,47z"/>
        <clipPath id="SVGID_2_">
		      <use href="#SVGID_1_"  overflow="visible"/>
	      </clipPath>
        <clipPath id="circlePath">
          <circle fill="#9AEDBE" cx="250" cy="250" r="203"/>
        </clipPath>
      </defs>

    <g id="circlesGrp" >	
      <circle fill="#0F8BB1" cx="250" cy="250" r="221"/>
      <circle fill="#9AEDBE" cx="250" cy="250" r="211"/>
    </g>

    <g clipPath="url(#circlePath)">
      <g id="envelopGrp">
        <g id="envelopBtm" stroke="#494949" strokeWidth="4" strokeLinejoin="round" strokeMiterlimit="10">
          <path fill="#FCD779"  d="M381.99,224.49v115.306
            c0,10.151-8.229,18.367-18.38,18.367H136.364c-10.151,0-18.38-8.216-18.38-18.367V224.49"/>
          <path id="envelopBack" fill="#FCD779"  d="M382.016,224.444
            c0-7.296-3.825-12.917-9.979-16.264h0.001l-121.829-66.357L128.09,208.357c-5.979,3.051-10.082,9.028-10.104,16.56h-0.002
            l0.002-0.027c0,0.019-0.002,0.027-0.002,0.027h0.104L250,306.564l132.016-82.065V224.444z"/>
        </g>

        <g clipPath="url(#SVGID_2_)">
          <g id="letterGrp">
          <rect x="176.333" y="230.631" fill="#fff" stroke="#494949" strokeWidth="4" strokeMiterlimit="10" width="147.333" height="151.865"/>
            <g id="letterLineGrp" fill="none" stroke="#494949" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10">
              <line x1="196.335" y1="250.633" x2="249.993" y2="250.633"/>
              <line x1="196.335" y1="270.635" x2="303.665" y2="270.635"/>
              <line x1="196.335" y1="290.637" x2="303.665" y2="290.637"/>
              <line x1="196.335" y1="310.639" x2="303.665" y2="310.639"/>
              <line x1="196.335" y1="330.641" x2="303.665" y2="330.641"/>
              <line x1="196.335" y1="350.643" x2="303.665" y2="350.643"/>
            </g>
          </g>
        </g>
		
    		<path id="closeAnimOne" fill="#FCD779" stroke="#494949" strokeWidth="4" strokeMiterlimit="10" d="M382.016,224.444 c0-7.296-3.825-12.917-9.979-16.264l-121.828-66.357L128.09,208.357c-5.979,3.051-10.082,9.028-10.104,16.56h-0.002"/>
		
        <path id="envelopCloseTop" fill="#FCD779" stroke="#494949" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" d="M382.016,224.499v-0.055c0-7.296-3.825-12.917-9.979-16.264l-243.946,0.177c-5.979,3.051-10.082,9.028-10.104,16.56h-0.002 l0.002-0.027c0,0.019-0.002,0.027-0.002,0.027h0.104"/>

      </g>
    </g>
 
    <path id="tick" fill="none" stroke="#004E66" strokeWidth="36" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10"
    d="M145.664,267.349l61.431,61.431c10.935,10.935,28.663,10.935,39.598,0l131.064-131.064"/>
  
    </svg>

  );
}
