import React, {useContext} from "react";
import { motion, AnimatePresence } from "framer-motion";

import {AppData} from '../../../../context'
import {Anim} from '../../../../utils/animations'

import SingleModal from './singlemodal'
import MultipleModal from './multiplemodal'

export default function ImageModal () {
  const {AppState} = useContext(AppData)

  return (
    <AnimatePresence>
       {AppState.modal.isOpen && (
        <motion.div 
          animate='animate'
          className="modal-container"
          exit='exit'
          initial='initial'
          variants={Anim.ImageModalAnim.openModal}>
          <div className="modal-background content-center">
            {AppState.modal.isSingle ? 
              <SingleModal /> : <MultipleModal /> }
          </div>
        </motion.div> )}
    </AnimatePresence>
  );
};
