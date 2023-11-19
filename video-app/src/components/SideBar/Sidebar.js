import React from 'react';
import './Sidebar.css';
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import SmartDisplayIcon from '@mui/icons-material/SmartDisplay';
import MovieCreationIcon from '@mui/icons-material/MovieCreation';
import TheaterComedyIcon from '@mui/icons-material/TheaterComedy';
import WatchLaterIcon from '@mui/icons-material/WatchLater';


const SidebarData = [
    {
        title: "Search",
        icon: <SearchIcon />,
        link: "/Search"

    },
    {
        title: "Home",
        icon: <HomeIcon />,
        link: "/home"

    },
    {
        title: "TV Shows",
        icon: < SmartDisplayIcon />,
        link: "/SmartDisplay"

    },
    {
        title: "Movies",
        icon: < MovieCreationIcon  />,
        link: "/MovieCreation"

    },
    {
        title: "Genres",
        icon: <TheaterComedyIcon />,
        link: "/TheaterComedy"

    },
    {
        title: "Watch Later",
        icon: <WatchLaterIcon />,
        link: "/WatchLater"

    },
];


const Sidebar = (props) => {

    return (
        <div className="Sidebar">
            <ul className="SidebarList">
            {SidebarData.map((val, key)=> {
            return(
              <li
            key={key}
            className="row"
            id={window.location.pathname == val.link? "active": ""}
             onClick={
                ()=> {window.location.pathname = val.link}}>
                {" "}
                <div id="icon">{val.icon}</div>{" "}
              <div id="title">
                {val.title}
              </div>
              </li>  
            )
        })}
        
         </ul> 
        </div>
    );
};


export default Sidebar;
