import React, {useContext} from 'react';
import {AppData} from '../../../../context'
import {motion} from 'framer-motion'
import {Anim} from '../../../../utils/animations'
import Link from 'next/link'

export default function Button({btn}) {
  const {SetAppState} = useContext(AppData)
  return (
    <Link href='/' scroll={false}>
      <motion.a 
        variants={buttonVariants}
        whileHover="hover"
        whileTap={{ scale: 0.9 }}
        className='font-1 s7a'
        onClick={()=>{
          Anim.Helpers.hidshowbody('hidden')
          SetAppState.setMenuTransitions({ isTransitioning: true, delay: 800 })
        }}>{btn.text}</motion.a>
    </Link>
  );
}

const buttonVariants = {
  hover: {
    scale: 1.05,
    textShadow: "0px 0px 6px rgb(151,230,255)",
    boxShadow: "0px 0px 6px rgb(151,230,255)",
    transition: {
      duration: 0.2,
      repeat: Infinity
    }
  }
}