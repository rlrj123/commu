import React from 'react';
import './Sidebar.css';
import LoginSection from './LoginSection';
import PopularPosts from './PopularPosts';

function Sidebar({ handleShowMyPosts, handleShowSettings, handleShowProfile }) {
  return (
    <aside className="sidebar left-sidebar">
      <div className="logo" onClick={() => window.location.reload()}></div>
      <LoginSection handleShowMyPosts={handleShowMyPosts} handleShowSettings={handleShowSettings} handleShowProfile={handleShowProfile} />
      <PopularPosts />
    </aside>
  );
}

export default Sidebar;
