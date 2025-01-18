import React from 'react';
import "./SideBar.css";

const SideBar = () => {
  return (
    <div className="sidebar">
      <h2>FORUM</h2>
      <ul>
        <li>Home</li>
        <li>Dashboard</li>
        <li>Events</li>
        <li>News</li>
        <li>chat</li>
        <li>Settings</li>
        <li>log-out</li>
      </ul>
    </div>
  );
};

export default SideBar;