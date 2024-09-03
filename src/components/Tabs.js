import React from 'react';
import './Tabs.css';

function Tabs() {
  return (
    <section className="tabs">
      <button className="tab active">전체</button>
      <button className="tab">공지사항</button>
      <button className="tab">일상</button>
      <button className="tab">취미</button>
      <button className="tab">기타</button>
    </section>
  );
}

export default Tabs;
