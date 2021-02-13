import React, {useContext} from "react";
import {AppData} from '../../../../context'

import { motion, AnimatePresence } from "framer-motion";
import {Anim} from '../../../../utils/animations'


export default function MessageModal () {
  const {AppState} = useContext(AppData)

  return (
    <div className="message-modal-container">
      <div className="message-modal-background content-center">
          sdfdfg
      </div>
    </div>
  )
};
