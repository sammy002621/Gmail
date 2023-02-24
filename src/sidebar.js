import { Button } from '@mui/material'
import React from 'react'
import './sidebar.css'
import AddIcon from '@mui/icons-material/Add';
import { Search } from '@mui/icons-material';
import Sidebaroptions from './sidebaroptions';
import InboxIcon from '@mui/icons-material/Inbox';
import StarRateIcon from '@mui/icons-material/StarRate';
import SnoozeIcon from '@mui/icons-material/Snooze';
import SendIcon from '@mui/icons-material/Send';
import DraftsIcon from '@mui/icons-material/Drafts';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {IconButton} from '@mui/material';
function  Sidebar() {
  return (
    <div className='sidebar'>
<Button startIcon={<AddIcon/>} className="sidebar_compose">Compose</Button>
<Sidebaroptions Icon={InboxIcon}  selected={true}title="Inbox" number={54}/>
<Sidebaroptions Icon={StarRateIcon} selected={false} title="Starred" number={54}/>
<Sidebaroptions Icon={SnoozeIcon} selected={false} title="Snooze" number={54}/>
<Sidebaroptions Icon={SendIcon} selected={false} title="Draft" number={54}/>
<Sidebaroptions Icon={ExpandMoreIcon} selected={false} title="More" number={54}/>
<div className="sidebar_footer">
    <h2 className='footer_header'>Labels</h2>
    <div className="sidebar_footericons">
<IconButton><AddIcon/></IconButton>

    </div>
</div>
    </div>
  )
}

export default Sidebar
