import React, { useState } from 'react';
import './App.css';
import Sidebar from './components/Sidebar';
import Banner from './components/Banner';
import Tabs from './components/Tabs';
import SearchRegister from './components/SearchRegister';
import Posts from './components/Posts';
import RightSidebar from './components/RightSidebar';
import MyPosts from './components/MyPosts';
import PostForm from './components/PostForm';
import Settings from './components/Settings';
import Profile from './components/Profile';

function App() {
  const [posts, setPosts] = useState([
    {
      id: 1,
      title: '공지사항',
      content: '여기에 공지사항 내용이 들어갑니다.',
      date: '2024.05.25',
    },
  ]);

  const [showMyPosts, setShowMyPosts] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [showProfile, setShowProfile] = useState(false);
  const [showPostForm, setShowPostForm] = useState(false);

  const handleShowMyPosts = () => {
    setShowMyPosts(true);
    setShowSettings(false);
    setShowProfile(false);
  };

  const handleShowSettings = () => {
    setShowSettings(true);
    setShowMyPosts(false);
    setShowProfile(false);
  };

  const handleShowProfile = () => {
    setShowProfile(true);
    setShowSettings(false);
    setShowMyPosts(false);
  };

  const handleShowPostForm = () => {
    setShowPostForm(true);
  };

  const handleClosePostForm = () => {
    setShowPostForm(false);
  };

  const addPost = (newPost) => {
    setPosts([...posts, newPost]);
    setShowPostForm(false);
  };

  return (
    <div className="container">
      <Sidebar handleShowMyPosts={handleShowMyPosts} handleShowSettings={handleShowSettings} handleShowProfile={handleShowProfile} />
      <main className="main-content">
        {showProfile ? (
          <Profile />
        ) : showSettings ? (
          <Settings />
        ) : showMyPosts ? (
          <MyPosts posts={posts} addPost={addPost} handleShowPostForm={handleShowPostForm} />
        ) : (
          <>
            <Banner />
            <Tabs />
            <SearchRegister />
            <Posts posts={posts} />
          </>
        )}
      </main>
      <RightSidebar />
      {showPostForm && <PostForm onClose={handleClosePostForm} addPost={addPost} />}
    </div>
  );
}

export default App;
