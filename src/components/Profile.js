import React from 'react';
import './Profile.css';

function Profile() {
  return (
    <div className="profile">
      <h2>정보수정</h2>
      <form className="profile-form">
        <div className="form-group">
          <label>아이디 :</label>
          <input type="text" value="아이디" readOnly />
        </div>
        <div className="form-group">
          <label>비밀번호 :</label>
          <input type="password" placeholder="비밀번호" />
        </div>
        <div className="form-group">
          <label>비밀번호 확인 :</label>
          <input type="password" placeholder="비밀번호 확인" />
        </div>
        <div className="form-group">
          <label>전화번호 :</label>
          <input type="text" placeholder="전화번호" />
        </div>
        <div className="form-group">
          <label>생년월일 :</label>
          <input type="text" placeholder="생년월일" />
        </div>
        <div className="form-group">
          <label>이메일 :</label>
          <input type="email" placeholder="이메일" />
        </div>
        <div className="form-buttons">
          <button type="button" className="cancel-button">취소</button>
          <button type="submit" className="save-button">저장</button>
        </div>
      </form>
    </div>
  );
}

export default Profile;
