import React from 'react'
import './Menu.css'
import {mouseEnter, mouseOut} from '../../../utils/common/menuListEvents'

export default function Menu() {

  const menus = ['home', 'about', 'projects', 'contact']

  const activeMenu = 'about'

  const menuList = () => {
    return menus.map((menu, i )=>{
      return <li className='menu-list' key={i}>
              <div className='menu-list-container'>
                <div className={`content-center list-front ${menu===activeMenu ? 'active' : null}`}>
                  <span className='menu-list-text'
                    onMouseEnter={(e)=>mouseEnter(e)}
                    onMouseOut={(e)=>mouseOut(e)} >{menu}</span>
                </div>
                <div className={`content-center list-back ${menu===activeMenu ? 'active' : null}`}>
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
        {/* <li className='menu-list'>
          <div className='menu-list-container'>
            <div className="content-center list-front active">
              <a href="/"><span className='menu-list-text'>home</span></a>
            </div>
            <div className="content-center list-back active">
              <span className='menu-list-backer'>home</span>
            </div>
          </div>
        </li>

        <li className='menu-list'>
          <div className='menu-list-container'>
            <div className="content-center list-front">
              <a href="/">
                <span 
                  onMouseEnter={(e)=>mouseEnter(e)}
                  onMouseOut={(e)=>mouseOut(e)}
                  className='menu-list-text'>about</span></a>
            </div>
            <div className="content-center list-back">
              <span className='menu-list-backer'>about</span>
            </div>
          </div>
        </li>

        <li className='menu-list'>
          <div className='menu-list-container'>
            <div className="content-center list-front">
              <a href="/"><span className='menu-list-text'>projects</span></a>
            </div>
            <div className="content-center list-back">
              <span className='menu-list-backer'>projects</span>
            </div>
          </div>
        </li>

        <li className='menu-list'>
          <div className='menu-list-container'>
            <div className="content-center list-front">
              <a href="/"><span className='menu-list-text'>contact</span></a>
            </div>
            <div className="content-center list-back">
              <span className='menu-list-backer'>contact</span>
            </div>
          </div>
        </li> */}

      </ul>
    </nav>
  )
}
