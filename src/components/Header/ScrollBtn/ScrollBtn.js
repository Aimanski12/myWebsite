import React from 'react'
import {scrollDown} from '../../../utils/pageanimations/scrollanimation/scrollDown'
import Button from '../../Buttons/Buttons'

function ScrollBtn(props) {
  return (
    <aside className='right-align scroll-btn-container'>
      <div 
        onClick={scrollDown}
        className="scroll-cover show">
        <Button type={props.data.type}
          colors={props.data.colors}/>
      </div>
    </aside>
  )
}

export default ScrollBtn
