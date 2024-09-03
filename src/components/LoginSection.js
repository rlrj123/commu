import React from 'react';
import './LoginSection.css';

function LoginSection({ handleShowMyPosts, handleShowSettings, handleShowProfile }) {
  return (
    <div className="login-section">
      <input type="text" placeholder="ID" className="input-box" />
      <input type="password" placeholder="PASSWORD" className="input-box" />
      <div className="logpw-box">
        <button className="login-button">로그인</button>
        <button className="login-button">회원가입</button>
      </div>
      <div className="login-links">
        <button className="link-button" onClick={handleShowMyPosts}>- 내 글</button>
        <button className="link-button" onClick={handleShowProfile}>- 프로필</button>
        <button className="link-button" onClick={handleShowSettings}>- 설정</button>
      </div>
    </div>
  );
}

export default LoginSection;
