import React from 'react';
import './MainContent.css';
import Banner from './Banner';
import Tabs from './Tabs';
import SearchRegister from './SearchRegister';
import Posts from './Posts';
import Ad from './Ad';

function MainContent() {
  return (
    <div className="main-content">
      <Banner />
      <Tabs />
      <SearchRegister />
      <Posts />
      <Ad />
    </div>
  );
}

export default MainContent;
