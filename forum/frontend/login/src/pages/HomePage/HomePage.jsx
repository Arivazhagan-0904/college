import React from 'react';
import SideBar from "./SideBar.jsx"
import TopBar from "./TopBar.jsx"
import DashBoard from "./DashBoard.jsx"
import ChatBar from "./ChatBar.jsx"
import MainContent from './MainContent.jsx';
import "./HomePage.css"

const HomePage = () => {
  return (
    <div className="home-container">
      <SideBar/>
      <div className="main-container">
        <TopBar/>
        <MainContent/>
        
        
      </div>
      <DashBoard/>
    </div>
  )
}

export default HomePage