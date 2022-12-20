import { Close, Menu, PersonOutlineOutlined, ShoppingCartOutlined } from '@mui/icons-material';
import SearchIcon from '@mui/icons-material/Search'
import React, { useState } from 'react'
import './Navbar.css';
import {MenuItems }from './MenuItems';

const Navbar = () => {
  const [sidebar, setSidebar] = useState(false);
  const [menubar, setMenubar] = useState(false);


  const showSidebar = () => setSidebar(!sidebar);
  const showMenubar = () => setMenubar(!menubar);

  return (
    <>
    <div className="main-nav">

    <div className='logo'>LOGO</div>

    <div className={menubar ? 'menu-list active' : 'menu-list'}>
    
      <ul >
      <Close id='close-icon-mobile' onClick={showMenubar}/>
        {MenuItems.map((item, index) =>{
          return(
        <li key={index}>
          <a href={item.url} className={item.className}>
            {item.title}
            </a>
        </li>
          )
        } )}
      </ul>

    </div>
    <div className='icons'>
      <div className='search-icon' onClick={showSidebar}>
      <SearchIcon />
      </div>
      <div className='login-icon'>
      <PersonOutlineOutlined/>
      </div>
      <div className='cart-icon'>
      <ShoppingCartOutlined/>
      </div>
      <div className='bars-icon' onClick={showMenubar}>
      <Menu/>
      </div>
    </div>
    
    </div>
    
     
    <div className={sidebar ? 'search-div active' : 'search-div'}>
      
      <div className='search-area'>
      <input type="text" placeholder='search here' className='search-box' />
      <SearchIcon id='search-inside-icon'/>
      </div>
      <Close id='close-icon' onClick={showSidebar}/>
    </div>
    </>
  )
}

export default Navbar