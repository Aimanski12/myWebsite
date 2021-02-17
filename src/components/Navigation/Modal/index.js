// import React, {useContext} from "react";
// import {AppData} from '../../../context'
// import { motion, AnimatePresence } from "framer-motion";
// import {Anim} from '../../../utils/animations'
// import SingleModal from './singlemodal'
// import MultipleModal from './Image/component/multiplemodal'

// export default function Modal () {
//   const {AppState} = useContext(AppData)

//   return (
//     <AnimatePresence>
//        {AppState.modal.isOpen && (
//         <motion.div 
//           variants={Anim.ModalAnimation.openModal}
//           initial='initial'
//           animate='animate'
//           exit='exit'
//           className="modal-container">
//           <div className="modal-background content-center">
//             {AppState.modal.isSingle ? 
//               <SingleModal /> : <MultipleModal /> }
//           </div>
//         </motion.div> )}
//     </AnimatePresence>
//   );
// };
