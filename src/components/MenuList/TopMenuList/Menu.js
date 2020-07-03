import React from 'react'
import './Menu.css'
import {mouseEnter, mouseOut} from '../../../utils/common/menuListEvents'

export default function Menu(props) {

  const menuList = () => {
    return props.menuList.map((menu, i )=>{
      return <li className='menu-list' key={i}>
              <div className='menu-list-container'>
                <div className={`content-center list-front ${menu===props.activeRoute ? 'active' : null}`}>
                  <span className='menu-list-text'
                    onMouseEnter={(e)=>mouseEnter(e)}
                    onMouseOut={(e)=>mouseOut(e)} >{menu}</span>
                </div>
                <div className={`content-center list-back ${menu===props.activeRoute ? 'active' : null}`}>
                  <span className='menu-list-backer'>{menu}</span>
                </div>
              </div>
            </li>
    })
  }

  return (
    <nav>
      <ul>
        {menuList()}
      </ul>
    </nav>
  )
}
