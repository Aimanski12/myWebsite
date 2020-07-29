import React from 'react'

function Menu(props) {
  let menus = ['home', 'about', 'projects', 'contacts']

  const menuList = () => {
    return menus.map((menu, i )=>{
      
      return <li className='menu-list' key={i}>
              <div className='menu-list-container'>
                <div className={`content-center list-front
                  ${menu === props.activeRoute ? 'active' : ''}`}>
                  {/* <span className='menu-list-text'
                    onMouseEnter={(e)=>mouseEnter(e)}
                    onMouseOut={(e)=>mouseOut(e)}
                    onClick={()=>menuClicked(`${menu}`)} >{menu}</span> */}
                <a href={menu === 'home' ? '/' : `/${menu}`}>
                  <span className='menu-list-text'
                    onMouseEnter={(e)=>hover(e, 'hoverIn')}
                    onMouseOut={(e)=>hover(e, 'hoverOut')}>{menu}</span>
                </a>
                </div>
                <div className={`content-center list-back 
                  ${menu === props.activeRoute ? 'active' : ''}`}>
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

export default Menu;
