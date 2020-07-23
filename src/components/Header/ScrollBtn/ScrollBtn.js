import React from 'react'
import Button from '../../Buttons/Buttons'
import {scrollDown} from '../../../utils/pageAnimation/scrollDown'

function ScrollBtn(props) {
  return (
    <aside className='right-align scroll-btn-container'>
      <div className="scroll-cover show"
        onClick={scrollDown}>
        <Button type={props.data.type}
          colors={props.data.colors}/>
      </div>
    </aside>
  )
}

export default ScrollBtn
