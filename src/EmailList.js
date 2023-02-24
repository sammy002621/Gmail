
import React from 'react'
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import './emailList.css'
import RefreshIcon from '@mui/icons-material/Refresh';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { IconButton } from '@mui/material';
function EmailList() {

  return (
    <div className='emailList'>
      <div className="emailList_settings">
        <div className="emailList_settingsLeft">
<IconButton><CheckBoxOutlineBlankIcon/></IconButton>
<IconButton><ArrowDropDownIcon/></IconButton>
<IconButton><RefreshIcon/></IconButton>
<IconButton><MoreVertIcon/></IconButton>



        </div>
      </div>
    </div>
  )
}

export default EmailList
