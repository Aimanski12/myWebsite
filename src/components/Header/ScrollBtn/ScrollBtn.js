import React from 'react'
import Button from '../../Buttons/Buttons'

function ScrollBtn(props) {
  return (
    <aside className='right-align scroll-btn-container'>
      <div className="scroll-cover show">
        <Button type={props.data.type}
          colors={props.data.colors}/>
      </div>
    </aside>
  )
}

export default ScrollBtn
