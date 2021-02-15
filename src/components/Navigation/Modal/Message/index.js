import React, {useContext} from "react";
import {AppData} from '../../../../context'

import { motion, AnimatePresence } from "framer-motion";
import {Anim} from '../../../../utils/animations'

import Envelop from './component/Envelop'
import CloseBtn from '../Image/component/CloseButton'

export default function MessageModal () {
  const {AppState} = useContext(AppData)

  return (
    <AnimatePresence>
      {AppState.message.isOpen && (
      <motion.div 
        variants={Anim.MessageModalAnim.openMessage}
        initial='initial'
        animate='animate'
        exit='exit'
        className="message-modal-container">
        <div className="message-modal-background content-center">

          <Envelop />

          <div className="modal-message-content content-center">
            <motion.span 
              variants={Anim.MessageModalAnim.staggerMessage}
              className='font-2 s2b thank-you'>Thank you!</motion.span>
            <motion.h3 
              variants={Anim.MessageModalAnim.staggerMessage}
              className='font-1 s3a'>
                {AppState.message.sender}
              </motion.h3>
            <motion.p 
              variants={Anim.MessageModalAnim.staggerMessage}
              className='font-2 s4b'>Your message has been sent.</motion.p>
            <motion.p 
              variants={Anim.MessageModalAnim.staggerMessage}
              className='font-2 s4b'>I'll get back to you soon.&nbsp;
              <span className='wave'> &#128521;</span>
            </motion.p>
          </div>

          <CloseBtn btn='message'/>
        </div>
      </motion.div> )}
    </AnimatePresence>
  )
};
