import React from 'react'
import '../styles/Header.css'
import SearchSharpIcon from '@mui/icons-material/SearchSharp';
import NotificationsNoneSharpIcon from '@mui/icons-material/NotificationsNoneSharp';
import {TbBrandMessenger} from "react-icons/tb"
import Avatar from 'react-avatar';
import BarCharts from './BarCharts';


function MainBody() {
  return (
    <div className='main'>
      <div className='header'>
       <div className='search'>
         <div className='searchinput'>
          <input placeholder=' Search here...' className='' type="text"  ></input>&nbsp;&nbsp;
          <div className='searchicon'><SearchSharpIcon /></div>
         </div>
       </div>
       <div className='noti'>
         <NotificationsNoneSharpIcon id="icon" />
         <TbBrandMessenger id='messenger' />
         <Avatar className='avatar' facebook-id="invalidfacebookusername" src="http://www.gravatar.com/avatar/a16a38cdfe8b2cbd38e8a56ab93238d3" size="50"  round={true} />
       </div>
    
      </div>
      <div className='content'>
        <div className='subContent'>
        <div className="operation operation--transfer">
        <span style={{fontSize:"20px"}}>Total Income</span><br/>
        <span style={{fontSize:"30px"}}>$ 567,000</span><br/>
        <span>Saved 25%</span>
      </div>
      <div className="operation operation--expense">
      <span style={{fontSize:"20px"}}>Total Expenses</span><br/>
        <span style={{fontSize:"30px"}}>$ 79,000</span><br/>
        <span>Saved 25%</span>
      </div>
      <div className="operation operation--cash">
      <span style={{fontSize:"20px"}}>Cash on Hand</span><br/>
        <span style={{fontSize:"30px"}}>$ 92,000</span><br/>
        <span>Saved 25%</span>
      </div>
      <div className="operation operation--margin">
      <span style={{fontSize:"20px"}}>Net Profit Margin</span><br/>
        <span style={{fontSize:"30px"}}>$ 1,79,000</span><br/>
        <span>Saved 25%</span>
      </div>

        </div>
     <div className='graphs'>
         <div className="firstGraph"><BarCharts /></div>
         <div className='subgraph'>2 graphsss</div>
         <div className='subgraph'>3 graphssss</div> 
     </div>

      </div>
    </div>
  )
}

export default MainBody