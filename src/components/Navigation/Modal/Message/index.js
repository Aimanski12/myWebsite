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
        animate='animate'
        className="message-modal-container"
        exit='exit'
        initial='initial'
        variants={Anim.MessageModalAnim.openMessage} >
        
        <div className="message-modal-background content-center">
          <Envelop />
          <div className="modal-message-content content-center">
            <motion.span 
              className='font-2 s2b thank-you'
              variants={Anim.MessageModalAnim.staggerMessage}>Thank you!</motion.span>
            <motion.h3 
              className='font-1 s3a'
              variants={Anim.MessageModalAnim.staggerMessage}>
                {AppState.message.sender}
              </motion.h3>
            <motion.p 
              className='font-2 s4b'
              variants={Anim.MessageModalAnim.staggerMessage}>Your message has been sent.</motion.p>
            <motion.p 
              className='font-2 s4b'
              variants={Anim.MessageModalAnim.staggerMessage}>I'll get back to you soon.&nbsp;
              <span className='wave'> &#128521;</span>
            </motion.p>
          </div>

          <CloseBtn btn='message'/>
        </div>
      </motion.div> )}
    </AnimatePresence>
  )
};
