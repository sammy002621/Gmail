import React from 'react'
import './header.css'
import { Avatar, Menu } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';
import {IconButton} from '@mui/material';
import { ArrowDropDown, Search } from '@mui/icons-material';
import AppsIcon from '@mui/icons-material/Apps';
import NotificationsIcon from '@mui/icons-material/Notifications';
function Header() {
  return (
    <div className='header'>
   
      <div className="header_left">
<IconButton><MenuIcon/></IconButton>
<img src="../download.png" alt="This image is currently unavailable" />
      </div>
      
      <div className="header_middle">
<Search/>
<input type="text" placeholder='Search gmail' />
<ArrowDropDown/>
      </div>
      <div className="header_right">
<IconButton><AppsIcon/></IconButton>
<IconButton><NotificationsIcon/></IconButton>
<Avatar/>

      </div>
      
          </div>
  )
}

export default Header
