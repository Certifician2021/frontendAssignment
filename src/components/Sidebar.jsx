import React from 'react'
import '../styles/Sidebar.css'
import logo from '../images/logo.jpg'
import HomeIcon from '@mui/icons-material/Home';
import PagesIcon from '@mui/icons-material/Pages';
import {IoIosArrowDown} from "react-icons/io";
import AppsIcon from '@mui/icons-material/Apps';
import WidgetsIcon from '@mui/icons-material/Widgets';
import DynamicFormIcon from '@mui/icons-material/DynamicForm';
import BarChartIcon from '@mui/icons-material/BarChart';
import GridViewSharpIcon from '@mui/icons-material/GridViewSharp';


const sidebarData = [
  {
    label:"Dashboard",
    icon:<HomeIcon />,
    path:"/dashboard"
  },
  {
    label:"Pages",
    icon:<PagesIcon />,
    path:"/pages"
  },
  {
    label:"Applications",
    icon:<AppsIcon />,
    path:"/dashboard"
  },
  {
    label:"UI Components",
    icon:<GridViewSharpIcon />,
    path:"/dashboard"
  },
  {
    label:"Widgets",
    icon:<WidgetsIcon />,
    path:"/dashboard"
  },
  {
    label:"Forms",
    icon:<DynamicFormIcon />,
    path:"/dashboard"
  },
  {
    label:"Charts",
    icon:<BarChartIcon />,
    path:"/dashboard"
  },
]

function Sidebar() {
  return (
    <div className='sidebar'>
      <div>
        <img alt='logo' style={{height:"120px", borderRadius:"10px", width:"200px", marginTop:"25px",marginLeft:"20px"}} src={logo} />
      </div>
      <ul className='list'>
      {sidebarData.map((item, i)=>{
      return( 
        <li key={i} className="row" onClick={()=>{window.location.pathname = item.path}}>
          <div id="icon">{item.icon}</div><div id="label">{item.label}</div><IoIosArrowDown /></li>
        )
      })}
      </ul>
    </div>
  )
}

export default Sidebar