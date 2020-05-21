import React, {Fragment} from 'react'

function IntroBox(props) {
  return (
    <Fragment>
      <path 
        className='intro-box-top' 
        d="M0 0H1032V477.392L0 694V0Z" 
        fill="url(#paint0_linear)"
        ref={props.top}/>
      <path 
        className='intro-box-bottom' 
        d="M1032 1485L0 1485V1007.61L1032 791V1485Z" 
        fill="url(#paint1_linear)"
        bottom={props.bottom}/>
      <defs>
        <linearGradient id="paint0_linear" x1="439" y1="-32.7762" x2="565.431" y2="576.223" gradientUnits="userSpaceOnUse">
          <stop stopColor="#3E3A3A"/>
          <stop offset="0.197917" stopColor="#3E3A3A" stopOpacity="0.975154"/>
          <stop offset="0.404536" stopColor="#3E3A3A" stopOpacity="0.933107"/>
          <stop offset="0.579126" stopColor="#3E3A3A" stopOpacity="0.8"/>
          <stop offset="0.724237" stopColor="#3E3A3A" stopOpacity="0.6"/>
          <stop offset="0.825695" stopColor="#3E3A3A" stopOpacity="0.4"/>
          <stop offset="0.911076" stopColor="#3E3A3A" stopOpacity="0.2"/>
          <stop offset="1" stopColor="#3E3A3A" stopOpacity="0"/>
        </linearGradient>
        <linearGradient id="paint1_linear" x1="593" y1="1517.78" x2="466.569" y2="908.777" gradientUnits="userSpaceOnUse">
          <stop stopColor="#3E3A3A"/>
          <stop offset="0.197917" stopColor="#3E3A3A" stopOpacity="0.975154"/>
          <stop offset="0.404536" stopColor="#3E3A3A" stopOpacity="0.933107"/>
          <stop offset="0.579126" stopColor="#3E3A3A" stopOpacity="0.8"/>
          <stop offset="0.724237" stopColor="#3E3A3A" stopOpacity="0.6"/>
          <stop offset="0.825695" stopColor="#3E3A3A" stopOpacity="0.4"/>
          <stop offset="0.911076" stopColor="#3E3A3A" stopOpacity="0.2"/>
          <stop offset="1" stopColor="#3E3A3A" stopOpacity="0"/>
        </linearGradient>
      </defs>
    </Fragment>
  )
}


export default IntroBox