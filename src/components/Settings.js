import React, { useState } from 'react';
import './Settings.css';

function Settings() {
  const [settings, setSettings] = useState({
    commentAlert: false,
    messageAlert: true,
    popularPostAlert: true,
    snsAlert: false,
    emailAlert: true,
  });

  const toggleSetting = (settingKey) => {
    setSettings((prevSettings) => ({
      ...prevSettings,
      [settingKey]: !prevSettings[settingKey],
    }));
  };

  return (
    <div className="settings">
      <h2>알림설정</h2>
      <ul>
        <li>
          <span>게시글 댓글 알림</span>
          <button
            className={`toggle-button ${settings.commentAlert ? 'on' : 'off'}`}
            onClick={() => toggleSetting('commentAlert')}
          >
            {settings.commentAlert ? 'ON' : 'OFF'}
          </button>
        </li>
        <li>
          <span>1대1 메시지 알림</span>
          <button
            className={`toggle-button ${settings.messageAlert ? 'on' : 'off'}`}
            onClick={() => toggleSetting('messageAlert')}
          >
            {settings.messageAlert ? 'ON' : 'OFF'}
          </button>
        </li>
        <li>
          <span>인기글 달성 알림</span>
          <button
            className={`toggle-button ${settings.popularPostAlert ? 'on' : 'off'}`}
            onClick={() => toggleSetting('popularPostAlert')}
          >
            {settings.popularPostAlert ? 'ON' : 'OFF'}
          </button>
        </li>
        <li>
          <span>SNS 알림</span>
          <button
            className={`toggle-button ${settings.snsAlert ? 'on' : 'off'}`}
            onClick={() => toggleSetting('snsAlert')}
          >
            {settings.snsAlert ? 'ON' : 'OFF'}
          </button>
        </li>
        <li>
          <span>이메일 알림</span>
          <button
            className={`toggle-button ${settings.emailAlert ? 'on' : 'off'}`}
            onClick={() => toggleSetting('emailAlert')}
          >
            {settings.emailAlert ? 'ON' : 'OFF'}
          </button>
        </li>
      </ul>
    </div>
  );
}

export default Settings;
